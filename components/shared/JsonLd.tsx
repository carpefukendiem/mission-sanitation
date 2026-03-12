import { SITE } from "@/lib/constants"

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description:
      "Clean, reliable portable restroom rentals in the Santa Ynez Valley. Serving Solvang, Santa Ynez, Buellton, and Los Olivos for events, construction, and more.",
    url: SITE.domain,
    telephone: "+18056888999",
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "484 4th Place",
      addressLocality: "Solvang",
      addressRegion: "CA",
      postalCode: "93463",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.5958,
      longitude: -120.1376,
    },
    areaServed: [
      { "@type": "City", name: "Solvang" },
      { "@type": "City", name: "Santa Ynez" },
      { "@type": "City", name: "Buellton" },
      { "@type": "City", name: "Los Olivos" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    image: `${SITE.domain}/og-image.jpg`,
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: "+18056888999",
      address: {
        "@type": "PostalAddress",
        streetAddress: "484 4th Place",
        addressLocality: "Solvang",
        addressRegion: "CA",
        postalCode: "93463",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Santa Ynez Valley, CA",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
