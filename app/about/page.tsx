import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Truck, Users, Leaf, ArrowRight, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mission Sanitation — under new ownership and committed to delivering the cleanest, most reliable portable restroom service in the Santa Ynez Valley.",
}

const VALUES = [
  {
    icon: Sparkles,
    title: "Cleanliness",
    description:
      "Every unit is thoroughly sanitized, pressure-washed, and inspected before delivery. We hold ourselves to the highest hygiene standards because your comfort and health depend on it.",
  },
  {
    icon: Truck,
    title: "Reliability",
    description:
      "When we say we will be there, we mean it. On-time delivery, consistent servicing schedules, and responsive communication are the foundation of our business.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We live and work in the Santa Ynez Valley. Supporting local events, businesses, and families is not just what we do — it is who we are.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We use environmentally responsible products and water-efficient cleaning practices. Taking care of this beautiful valley means operating with its future in mind.",
  },
]

const SERVICE_TOWNS = [
  "Solvang",
  "Santa Ynez",
  "Buellton",
  "Los Olivos",
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        <div className="absolute inset-0">
          <Image src="/images/vineyard-landscape.jpg" alt="Santa Ynez Valley" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mission Sanitation</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Under new ownership. Same trusted name. A higher standard of service.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
            <p>
              Mission Sanitation has been a fixture in the Santa Ynez Valley for years, providing portable restroom
              services to the events, construction projects, and communities that make this area so special.
            </p>
            <p>
              Under new ownership, we are committed to elevating every aspect of the business. That means cleaner
              units, faster response times, more transparent pricing, and a genuine dedication to customer
              satisfaction. We have invested in upgrading our fleet, refining our cleaning processes, and building a
              team that takes pride in delivering an outstanding experience.
            </p>
            <p>
              We believe that portable sanitation does not have to be an afterthought. Whether you are planning a
              vineyard wedding, managing a construction site, or organizing a community event, you deserve restrooms
              that are clean, well-maintained, and delivered on time. That is the standard we hold ourselves to
              every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do, from how we clean our units to how we treat our customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <Card key={value.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proudly Serving the Santa Ynez Valley
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Based right here in Solvang, we provide fast and reliable portable restroom delivery throughout
              the valley and surrounding communities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {SERVICE_TOWNS.map((town) => (
              <div
                key={town}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5"
              >
                <MapPin className="w-4 h-4 text-[#247DA9]" />
                <span className="font-medium text-slate-700">{town}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            We also serve other communities throughout Santa Barbara County. Contact us to confirm availability in your area.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            See why more Santa Ynez Valley residents and businesses are choosing Mission Sanitation for their portable restroom needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote">
              <Button size="lg" className="bg-white text-[#247DA9] hover:bg-blue-50 h-14 px-10 text-lg font-semibold w-full sm:w-auto cursor-pointer">
                Request a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href={SITE.phoneHref}>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
                <Phone className="w-5 h-5 mr-2" />
                Call {SITE.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
