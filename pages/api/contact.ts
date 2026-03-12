import type { NextApiRequest, NextApiResponse } from "next"

const GHL_BASE = "https://services.leadconnectorhq.com"
const LOCATION_ID = process.env.GHL_LOCATION_ID || ""
const PIPELINE_ID = process.env.GHL_PIPELINE_ID || ""
const STAGE_ID = process.env.GHL_PIPELINE_STAGE_ID || ""
const WORKFLOW_ID = process.env.GHL_WORKFLOW_ID || ""
const OWNER_USER_ID = process.env.GHL_OWNER_USER_ID || ""

const SPAM_EMAIL_PATTERNS = [
  /remotetact/i,
  /intellagency/i,
  /flowchat/i,
  /a\.yo\.de\.k\.ep/i,
  /vettedvas/i,
]

const SPAM_COMPANY_PATTERNS = [
  /^[A-Za-z0-9]{18,}$/,
  /flowchat/i,
  /intellagency/i,
  /vettedvas/i,
  /virtual.*assist/i,
  /seo/i,
  /lead generation/i,
]

const MIN_FILL_MS = 4000

function isBot(hp: string, email: string, company: string, mountTime: string): boolean {
  if (hp) return true
  if (SPAM_EMAIL_PATTERNS.some((p) => p.test(email))) return true
  if (company && SPAM_COMPANY_PATTERNS.some((p) => p.test(company))) return true
  if (mountTime) {
    const elapsed = Date.now() - parseInt(mountTime, 10)
    if (!isNaN(elapsed) && elapsed < MIN_FILL_MS) return true
  }
  return false
}

async function ghl(method: "GET" | "POST" | "DELETE", path: string, body?: object) {
  const apiKey = process.env.GHL_API_KEY || ""
  const res = await fetch(`${GHL_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const text = await res.text()
  let data: unknown
  try {
    data = JSON.parse(text)
  } catch {
    data = { raw: text }
  }
  if (!res.ok) {
    throw new Error(`GHL ${res.status} ${path}: ${text.slice(0, 300)}`)
  }
  return data as Record<string, unknown>
}

function buildLeadTags({
  source,
  serviceType,
  serviceArea,
  rentalType,
}: {
  source: string
  serviceType: string
  serviceArea: string
  rentalType: string
}) {
  return [
    "Website Lead",
    source ? `Source: ${source}` : "",
    serviceType ? `Service: ${serviceType}` : "",
    serviceArea ? `Area: ${serviceArea}` : "",
    rentalType ? `Rental Type: ${rentalType}` : "",
  ].filter(Boolean)
}

function buildOpportunityName({
  name,
  company,
  serviceType,
  serviceArea,
}: {
  name: string
  company: string
  serviceType: string
  serviceArea: string
}) {
  const leadName = company || name || "Website Lead"
  const service = serviceType || "Quote Request"
  const area = serviceArea || "Mission Sanitation"
  return `${leadName} — ${service} — ${area}`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", process.env.NEXT_PUBLIC_SITE_URL || "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") return res.status(200).end()
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })

  const {
    name = "",
    email = "",
    phone = "",
    company = "",
    source = "website",
    message = "",
    serviceType = "",
    rentalType = "",
    serviceArea = "",
    eventDate = "",
    deliveryAddress = "",
    rentalDuration = "",
    quantityNeeded = "",
    handwashNeeded = "",
    adaNeeded = "",
    existingCustomer = "",
    _hp = "",
    _t = "",
  } = (req.body || {}) as Record<string, string>

  if (isBot(_hp, email, company, _t)) {
    console.log(
      `[contact] Bot blocked — email=${email} hp=${!!_hp} elapsed=${_t ? Date.now() - parseInt(_t, 10) : "n/a"}ms`
    )
    return res.status(200).json({ success: true })
  }

  if (!email && !phone) {
    return res.status(400).json({ error: "Email or phone required" })
  }

  const [firstName, ...rest] = name.trim().split(" ")
  const lastName = rest.join(" ") || ""

  try {
    const contactRes = await ghl("POST", "/contacts/", {
      locationId: LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      companyName: company,
      source,
      tags: buildLeadTags({ source, serviceType, serviceArea, rentalType }),
      customFields: [
        { key: "service_type", field_value: serviceType },
        { key: "rental_type", field_value: rentalType },
        { key: "service_area", field_value: serviceArea },
        { key: "event_date", field_value: eventDate },
        { key: "delivery_address", field_value: deliveryAddress },
        { key: "rental_duration", field_value: rentalDuration },
        { key: "quantity_needed", field_value: quantityNeeded },
        { key: "handwash_needed", field_value: handwashNeeded },
        { key: "ada_needed", field_value: adaNeeded },
        { key: "existing_customer", field_value: existingCustomer },
        { key: "message", field_value: message },
      ].filter((f) => f.field_value),
    })

    const contactObj = (contactRes.contact ?? contactRes) as Record<string, unknown>
    const contactId = contactObj.id as string | undefined

    if (!contactId) {
      console.error("[contact] No contactId:", JSON.stringify(contactRes).slice(0, 300))
      return res.status(200).json({ success: true, degraded: true })
    }

    console.log(`[contact] Created ${contactId} for ${email || phone}`)

    if (PIPELINE_ID && STAGE_ID) {
      try {
        const oppRes = await ghl("POST", "/opportunities/", {
          locationId: LOCATION_ID,
          pipelineId: PIPELINE_ID,
          pipelineStageId: STAGE_ID,
          contactId,
          name: buildOpportunityName({ name, company, serviceType, serviceArea }),
          status: "open",
          assignedTo: OWNER_USER_ID,
          monetaryValue: 0,
        })
        const oppId = (oppRes.opportunity as Record<string, unknown>)?.id ?? oppRes.id
        console.log(`[contact] Opportunity ${oppId}`)
      } catch (err) {
        console.error("[contact] Opportunity error:", String(err))
      }
    }

    if (WORKFLOW_ID) {
      try {
        await ghl("POST", `/contacts/${contactId}/workflow/${WORKFLOW_ID}`, {
          eventStartTime: new Date().toISOString(),
        })
        console.log("[contact] Workflow enrolled")
      } catch (err) {
        console.error("[contact] Workflow error:", String(err))
      }
    }

    try {
      const note = [
        "Mission Sanitation Website Lead",
        `Name: ${name || "—"}`,
        `Email: ${email || "—"}`,
        `Phone: ${phone || "—"}`,
        `Company / Organization: ${company || "—"}`,
        `Source: ${source || "—"}`,
        `Service Type: ${serviceType || "—"}`,
        `Rental Type: ${rentalType || "—"}`,
        `Service Area: ${serviceArea || "—"}`,
        `Event Date: ${eventDate || "—"}`,
        `Delivery Address: ${deliveryAddress || "—"}`,
        `Rental Duration: ${rentalDuration || "—"}`,
        `Quantity Needed: ${quantityNeeded || "—"}`,
        `Handwashing Stations Needed: ${handwashNeeded || "—"}`,
        `ADA Unit Needed: ${adaNeeded || "—"}`,
        `Existing Customer: ${existingCustomer || "—"}`,
        message ? `Message: ${message}` : "",
      ]
        .filter(Boolean)
        .join("\n")

      await ghl("POST", `/contacts/${contactId}/notes/`, {
        body: note,
        userId: OWNER_USER_ID,
      })
    } catch (err) {
      console.warn("[contact] Note error:", String(err))
    }

    return res.status(200).json({ success: true, contactId })
  } catch (err) {
    console.error("[contact] Fatal:", String(err))
    return res.status(200).json({ success: true, degraded: true })
  }
}
