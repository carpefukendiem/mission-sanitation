import type { MetadataRoute } from "next"

const BASE = "https://missionsanitation.net"

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    "portable-restroom-rentals",
    "event-portable-restroom-rentals",
    "construction-portable-toilets",
    "wedding-restroom-rentals",
    "ada-portable-restrooms",
    "portable-restrooms-with-sinks",
    "handwashing-stations",
    "cleaning-service-process",
  ]

  const areas = [
    "santa-ynez-valley",
    "solvang",
    "santa-ynez",
    "buellton",
    "los-olivos",
  ]

  const pages = [
    "",
    "services",
    "service-areas",
    "request-a-quote",
    "contact",
    "about",
    "reviews",
    "faq",
  ]

  return [
    ...pages.map((p) => ({
      url: `${BASE}/${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...areas.map((a) => ({
      url: `${BASE}/service-areas/${a}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ]
}
