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

const MIN_MESSAGE_LEN = 8
const MAX_MESSAGE_LEN = 2000
const MAX_NAME_LEN = 120
const MAX_COMPANY_LEN = 120
const MAX_FIELD_LEN = 250

const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const IP_RATE_LIMIT = 12
const EMAIL_RATE_LIMIT = 6
const PHONE_RATE_LIMIT = 6

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || ""
const PIPELINE_NAME = process.env.GHL_PIPELINE_NAME || "Website Forms"
const STAGE_NAME = process.env.GHL_STAGE_NAME || "New Form Lead"

const SMS_DESTINATION_FALLBACK = "+18058864786"

const SPAM_MESSAGE_PATTERNS: RegExp[] = [
  /viagra|cialis|levitra/i,
  /crypto|bitcoin|investment|roi|free\s+money/i,
  /mortgage|loan|work\s*from\s*home|wfh/i,
  /click\s*here|get\s+your\s+free|winner|prize/i,
  /remotetact|intellagency|flowchat/i,
  // Marketing/outreach bot patterns
  /electrician|plumb(er|ing)|hvac|roofing|landscap/i,
  /we\s+(can|will|help|offer|provide)\s+(you|your)/i,
  /book\s*a\s*(call|meeting|demo|consultation)/i,
  /grow\s+your\s+(business|revenue|leads)/i,
  /virtual\s+assist|cold\s+(call|email|outreach)/i,
  /marketing\s+(agency|service|campaign|strategy)/i,
  /web\s*design|social\s*media\s*manage/i,
  /I\s+(noticed|saw|found)\s+(your|the)\s+(website|site|business)/i,
  /schedule\s+a\s+(free|quick|brief)\s+(call|chat|consultation)/i,
  /interested\s+in\s+(our|my)\s+service/i,
]

// Spam tags — leads tagged with unrelated services are outreach bots
const SPAM_TAG_KEYWORDS = [
  "electrician", "plumber", "plumbing", "hvac", "roofing", "landscaping",
  "solar", "painting", "cleaning service", "pest control", "locksmith",
  "moving company", "garage door", "carpet cleaning", "pressure washing",
]

function cleanText(input: string, maxLen: number): string {
  return String(input || "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen)
}

function isValidEmail(rawEmail: string): boolean {
  const email = rawEmail.trim().toLowerCase()
  if (!email) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizePhone(rawPhone: string): string {
  // Keep + for E.164, remove other characters.
  const cleaned = String(rawPhone || "").replace(/[^\d+]/g, "")
  return cleaned
}

function isValidPhone(rawPhone: string): boolean {
  const phone = normalizePhone(rawPhone)
  const digits = phone.replace(/\D/g, "")
  // US local/intl variations; keep it conservative.
  return digits.length >= 10 && digits.length <= 15
}

function getClientIp(req: NextApiRequest): string {
  const xff = req.headers["x-forwarded-for"]
  if (typeof xff === "string" && xff.trim()) return xff.split(",")[0]!.trim()
  if (Array.isArray(xff) && xff[0]) return String(xff[0])
  return req.socket?.remoteAddress || "unknown"
}

function isSuspiciousMessage(rawMessage: string): boolean {
  const msg = String(rawMessage || "").trim()
  // Some forms don't include a message field. In that case, allow empty content.
  if (!msg) return false
  if (msg.length < MIN_MESSAGE_LEN) return true
  if (msg.length > MAX_MESSAGE_LEN) return true

  const linkCount = (msg.match(/https?:\/\//gi) || []).length + (msg.match(/www\./gi) || []).length
  if (linkCount > 0) return true

  if (SPAM_MESSAGE_PATTERNS.some((p) => p.test(msg))) return true

  // Excessive repeated characters is typical of form spam.
  if (/(.)\1{9,}/.test(msg)) return true

  return false
}

type RateState = { timestamps: number[] }

function getRateMaps() {
  const g = globalThis as unknown as { __contactRate?: Record<string, Map<string, RateState>> }
  if (!g.__contactRate) {
    g.__contactRate = {
      ip: new Map(),
      email: new Map(),
      phone: new Map(),
    }
  }
  return g.__contactRate
}

function isRateLimited(map: Map<string, RateState>, key: string, limit: number): boolean {
  if (!key) return false
  const now = Date.now()
  const state = map.get(key) || { timestamps: [] }
  state.timestamps = state.timestamps.filter((t) => now - t <= RATE_WINDOW_MS)
  state.timestamps.push(now)
  map.set(key, state)
  return state.timestamps.length > limit
}

function buildSmsBody(note: string): string {
  // Twilio has a practical limit; keep it compact and single-purpose.
  const compact = note.replace(/\s+\n/g, "\n").replace(/\n+/g, "\n").slice(0, 1300)
  return compact
}

function chunkText(text: string, maxLen: number): string[] {
  const chunks: string[] = []
  let start = 0
  while (start < text.length) {
    chunks.push(text.slice(start, start + maxLen))
    start += maxLen
  }
  return chunks
}

async function sendSms(body: string): Promise<{ sent: boolean; reason?: string }> {
  const toNumber = process.env.FORWARD_SMS_TO || SMS_DESTINATION_FALLBACK
  const accountSid = process.env.TWILIO_ACCOUNT_SID || ""
  const authToken = process.env.TWILIO_AUTH_TOKEN || ""
  const fromNumber = process.env.TWILIO_FROM_NUMBER || ""

  if (!accountSid || !authToken || !fromNumber) {
    return { sent: false, reason: "Missing Twilio env vars (TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN/TWILIO_FROM_NUMBER)" }
  }

  const chunks = chunkText(body, 1300)
  const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64")

  for (let i = 0; i < chunks.length; i++) {
    const partBody = chunks.length > 1 ? `[Part ${i + 1}/${chunks.length}]\n${chunks[i]}` : chunks[i]!
    const params = new URLSearchParams({
      From: fromNumber,
      To: toNumber,
      Body: partBody,
    })

    const resp = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    if (!resp.ok) {
      const text = await resp.text().catch(() => "")
      throw new Error(`Twilio SMS failed: ${resp.status} ${text.slice(0, 300)}`)
    }
  }

  return { sent: true }
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true // skip if not configured
  if (!token) return false
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token, remoteip: ip }),
    })
    const data = (await res.json()) as { success: boolean }
    return data.success === true
  } catch {
    return true // fail open if Cloudflare is unreachable
  }
}

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
    _turnstile = "",
  } = (req.body || {}) as Record<string, string>

  // Reject non-JSON payloads early (common bot behavior).
  const contentType = String(req.headers["content-type"] || "")
  if (!contentType.includes("application/json")) {
    return res.status(200).json({ success: true })
  }

  const clientIp = getClientIp(req)
  const cleanedName = cleanText(name, MAX_NAME_LEN)
  const cleanedEmailRaw = cleanText(email, MAX_FIELD_LEN).toLowerCase()
  const cleanedPhoneRaw = cleanText(phone, MAX_FIELD_LEN)
  const cleanedCompany = cleanText(company, MAX_COMPANY_LEN)
  const cleanedMessage = cleanText(message, MAX_MESSAGE_LEN)

  const cleanedSource = cleanText(source, 80) || "website"
  const cleanedServiceType = cleanText(serviceType, MAX_FIELD_LEN)
  const cleanedRentalType = cleanText(rentalType, MAX_FIELD_LEN)
  const cleanedServiceArea = cleanText(serviceArea, MAX_FIELD_LEN)
  const cleanedEventDate = cleanText(eventDate, MAX_FIELD_LEN)
  const cleanedDeliveryAddress = cleanText(deliveryAddress, MAX_FIELD_LEN)
  const cleanedRentalDuration = cleanText(rentalDuration, MAX_FIELD_LEN)
  const cleanedQuantityNeeded = cleanText(quantityNeeded, MAX_FIELD_LEN)
  const cleanedHandwashNeeded = cleanText(handwashNeeded, MAX_FIELD_LEN)
  const cleanedAdaNeeded = cleanText(adaNeeded, MAX_FIELD_LEN)
  const cleanedExistingCustomer = cleanText(existingCustomer, MAX_FIELD_LEN)

  const cleanedHp = cleanText(_hp, 50)
  const cleanedMountTime = cleanText(_t, 30)

  const finalEmail = isValidEmail(cleanedEmailRaw) ? cleanedEmailRaw : ""
  const finalPhone = isValidPhone(cleanedPhoneRaw) ? normalizePhone(cleanedPhoneRaw) : ""

  // Rate limit by IP + submitted identity so spam can't hammer the endpoint.
  const rateMaps = getRateMaps()
  const rateBlocked =
    isRateLimited(rateMaps.ip, clientIp, IP_RATE_LIMIT) ||
    isRateLimited(rateMaps.email, finalEmail, EMAIL_RATE_LIMIT) ||
    isRateLimited(rateMaps.phone, finalPhone, PHONE_RATE_LIMIT)

  if (rateBlocked) {
    console.log(`[contact] Rate limited — ip=${clientIp}`)
    return res.status(200).json({ success: true })
  }

  // Turnstile CAPTCHA verification (if configured).
  const turnstileOk = await verifyTurnstile(_turnstile, clientIp)
  if (!turnstileOk) {
    console.log(`[contact] Turnstile failed — ip=${clientIp}`)
    return res.status(200).json({ success: true })
  }

  // Honeypot + heuristic bot checks.
  if (isBot(cleanedHp, finalEmail, cleanedCompany, cleanedMountTime)) {
    console.log(
      `[contact] Bot blocked — email=${finalEmail} hp=${!!cleanedHp} elapsed=${
        cleanedMountTime ? Date.now() - parseInt(cleanedMountTime, 10) : "n/a"
      }ms`
    )
    return res.status(200).json({ success: true })
  }

  // Additional message-based spam detection.
  if (isSuspiciousMessage(cleanedMessage)) {
    console.log(`[contact] Suspicious message blocked — ip=${clientIp}`)
    return res.status(200).json({ success: true })
  }

  // Block leads whose service type contains unrelated industry keywords (outreach bots).
  const allText = `${cleanedServiceType} ${cleanedMessage} ${cleanedCompany}`.toLowerCase()
  if (SPAM_TAG_KEYWORDS.some((kw) => allText.includes(kw))) {
    console.log(`[contact] Outreach bot blocked (industry keyword) — ip=${clientIp}`)
    return res.status(200).json({ success: true })
  }

  if (!finalEmail && !finalPhone) {
    return res.status(200).json({ success: true })
  }

  const nameParts = cleanedName.split(" ").filter(Boolean)
  const firstName = nameParts[0] || "Website"
  const lastName = nameParts.slice(1).join(" ") || ""

  const note = [
    "Mission Sanitation Website Lead",
    `Pipeline: ${PIPELINE_NAME} → ${STAGE_NAME}`,
    `Source: ${cleanedSource || "—"}`,
    "",
    `Name: ${cleanedName || "—"}`,
    `Email: ${finalEmail || "—"}`,
    `Phone: ${finalPhone || "—"}`,
    `Company / Organization: ${cleanedCompany || "—"}`,
    `Service Type: ${cleanedServiceType || "—"}`,
    `Rental Type: ${cleanedRentalType || "—"}`,
    `Service Area: ${cleanedServiceArea || "—"}`,
    `Event Date: ${cleanedEventDate || "—"}`,
    `Delivery Address: ${cleanedDeliveryAddress || "—"}`,
    `Rental Duration: ${cleanedRentalDuration || "—"}`,
    `Quantity Needed: ${cleanedQuantityNeeded || "—"}`,
    `Handwashing Stations Needed: ${cleanedHandwashNeeded || "—"}`,
    `ADA Unit Needed: ${cleanedAdaNeeded || "—"}`,
    `Existing Customer: ${cleanedExistingCustomer || "—"}`,
    cleanedMessage ? `Message: ${cleanedMessage}` : "",
  ]
    .filter((line) => line !== undefined)
    .join("\n")

  // SMS forward (spam-filtered). Fails silently if Twilio isn't configured.
  try {
    await sendSms(buildSmsBody(note))
  } catch (err) {
    console.warn("[contact] SMS send failed:", String(err))
  }

  try {
    const contactRes = await ghl("POST", "/contacts/", {
      locationId: LOCATION_ID,
      firstName,
      lastName,
      email: finalEmail,
      phone: finalPhone,
      companyName: cleanedCompany,
      source: cleanedSource,
      tags: buildLeadTags({
        source: cleanedSource,
        serviceType: cleanedServiceType,
        serviceArea: cleanedServiceArea,
        rentalType: cleanedRentalType,
      }),
      customFields: [
        { key: "service_type", field_value: cleanedServiceType },
        { key: "rental_type", field_value: cleanedRentalType },
        { key: "service_area", field_value: cleanedServiceArea },
        { key: "event_date", field_value: cleanedEventDate },
        { key: "delivery_address", field_value: cleanedDeliveryAddress },
        { key: "rental_duration", field_value: cleanedRentalDuration },
        { key: "quantity_needed", field_value: cleanedQuantityNeeded },
        { key: "handwash_needed", field_value: cleanedHandwashNeeded },
        { key: "ada_needed", field_value: cleanedAdaNeeded },
        { key: "existing_customer", field_value: cleanedExistingCustomer },
        { key: "message", field_value: cleanedMessage },
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
          name: buildOpportunityName({
            name: cleanedName,
            company: cleanedCompany,
            serviceType: cleanedServiceType,
            serviceArea: cleanedServiceArea,
          }),
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
