import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers["x-setup-token"] !== "rankingsb-setup-2026") {
    return res.status(403).end()
  }

  const apiKey = process.env.GHL_API_KEY || ""
  const { path, method = "GET", body } = req.query

  if (!path) {
    return res.status(400).json({ error: "path query param required" })
  }

  // Support delete operation for contact cleanup
  if (req.query.delete) {
    const dr = await fetch(
      `https://services.leadconnectorhq.com/contacts/${req.query.delete}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "2021-07-28",
        },
      }
    )
    return res.status(200).json({ deleted: req.query.delete, status: dr.status })
  }

  try {
    const r = await fetch(`https://services.leadconnectorhq.com${path}`, {
      method: String(method),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      ...(body ? { body: String(body) } : {}),
    })
    const data = await r.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
}
