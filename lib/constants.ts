export const SITE = {
  name: "Mission Sanitation",
  tagline: "Portable Restroom Headquarters of the Santa Ynez Valley",
  phone: "(805) 688-8999",
  phoneHref: "tel:+18056888999",
  email: "info@missionsanitation.net",
  address: "1180B Mission Drive, Solvang, CA 93463",
  city: "Solvang",
  state: "CA",
  zip: "93463",
  domain: "https://missionsanitation.net",
  googleMapsUrl: "https://maps.google.com/?q=1180B+Mission+Drive+Solvang+CA+93463",
} as const

export const SERVICES = [
  {
    title: "Portable Restroom Rentals",
    href: "/services/portable-restroom-rentals",
    description: "Clean, reliable portable restrooms for any occasion in the Santa Ynez Valley.",
    icon: "Building2" as const,
  },
  {
    title: "Event Portable Restrooms",
    href: "/services/event-portable-restroom-rentals",
    description: "Premium restroom solutions for festivals, parties, and outdoor gatherings.",
    icon: "PartyPopper" as const,
  },
  {
    title: "Construction Portable Toilets",
    href: "/services/construction-portable-toilets",
    description: "Durable job site restrooms with regular servicing for construction crews.",
    icon: "HardHat" as const,
  },
  {
    title: "ADA Portable Restrooms",
    href: "/services/ada-portable-restrooms",
    description: "Wheelchair-accessible units compliant with ADA requirements.",
    icon: "Accessibility" as const,
  },
  {
    title: "Restrooms with Sinks",
    href: "/services/portable-restrooms-with-sinks",
    description: "Self-contained units with built-in handwashing stations for added hygiene.",
    icon: "Droplets" as const,
  },
  {
    title: "Handwashing Stations",
    href: "/services/handwashing-stations",
    description: "Standalone handwash units for events, job sites, and food service areas.",
    icon: "HandMetal" as const,
  },
  {
    title: "Cleaning & Service Process",
    href: "/services/cleaning-service-process",
    description: "Our thorough sanitization and maintenance process keeps every unit spotless.",
    icon: "Sparkles" as const,
  },
] as const

export const SERVICE_AREAS = [
  {
    name: "Santa Ynez Valley",
    href: "/service-areas/santa-ynez-valley",
    description: "Serving the entire Santa Ynez Valley with reliable portable sanitation.",
  },
  {
    name: "Solvang",
    href: "/service-areas/solvang",
    description: "Portable restroom rentals in Solvang — our home base.",
  },
  {
    name: "Santa Ynez",
    href: "/service-areas/santa-ynez",
    description: "Clean portable restrooms delivered throughout Santa Ynez.",
  },
  {
    name: "Buellton",
    href: "/service-areas/buellton",
    description: "Fast delivery and regular servicing for Buellton events and job sites.",
  },
  {
    name: "Los Olivos",
    href: "/service-areas/los-olivos",
    description: "Premium portable sanitation for Los Olivos wineries and events.",
  },
] as const

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({ label: s.title, href: s.href })),
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: SERVICE_AREAS.map((a) => ({ label: a.name, href: a.href })),
  },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const
