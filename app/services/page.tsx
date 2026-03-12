import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  Building2,
  PartyPopper,
  HardHat,
  Heart,
  Accessibility,
  Droplets,
  HandMetal,
  Sparkles,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE, SERVICES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Portable Restroom Services in Santa Ynez Valley",
  description:
    "Mission Sanitation offers portable restroom rentals, event restrooms, construction toilets, ADA units, and handwashing stations in Solvang, Santa Ynez, Buellton & Los Olivos.",
}

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  PartyPopper,
  HardHat,
  Heart,
  Accessibility,
  Droplets,
  HandMetal,
  Sparkles,
}

const HIGHLIGHTS = [
  "Same-day delivery available",
  "Locally owned & operated in Solvang",
  "Thorough sanitization before every delivery",
  "Flexible daily, weekly & monthly rentals",
  "ADA-compliant units in stock",
  "Free, no-obligation quotes",
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/vineyard-landscape.jpg" alt="Vineyard landscape in Santa Ynez Valley" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Portable Restroom{" "}
              <span className="text-[#3a9fd4]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              From weekend events to long-term construction projects, Mission
              Sanitation provides clean, reliable portable sanitation solutions
              throughout the Santa Ynez Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-quote">
                <Button
                  size="lg"
                  className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href={SITE.phoneHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {SITE.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Portable Sanitation for Every Need
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a service below to learn more about our offerings, or{" "}
              <Link
                href="/request-a-quote"
                className="text-[#247DA9] underline hover:no-underline"
              >
                request a free quote
              </Link>{" "}
              and we will help match you with the right solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Building2
              return (
                <Link key={service.href} href={service.href} className="group">
                  <Card className="h-full border-0 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#247DA9] transition-colors">
                        <Icon className="w-6 h-6 text-[#247DA9] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-[#247DA9] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 flex-1">
                        {service.description}
                      </p>
                      <span className="text-sm font-medium text-[#247DA9] flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Mission Sanitation */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Mission Sanitation?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Headquartered in Solvang, we are the Santa Ynez Valley&apos;s
                trusted source for portable restroom rentals. Every unit we
                deliver is thoroughly cleaned, sanitized, and inspected so your
                guests, workers, or attendees always have a comfortable
                experience.
              </p>
              <ul className="space-y-3 mb-8">
                {HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#247DA9] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-a-quote">
                  <Button
                    size="lg"
                    className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-12 px-6 cursor-pointer"
                  >
                    Request a Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href={SITE.phoneHref}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 cursor-pointer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call {SITE.phone}
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#247DA9] to-[#1a5f82] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Not Sure What You Need?
              </h3>
              <p className="text-blue-100 mb-6">
                Every project is different. Tell us the basics and our team will
                recommend the right number and type of units for your situation
                &mdash; at no cost or obligation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold">Tell Us About Your Project</div>
                    <div className="text-sm text-blue-100">
                      Event type, guest count, duration, and location
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold">Get a Custom Recommendation</div>
                    <div className="text-sm text-blue-100">
                      We will suggest the right units, quantities, and services
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold">We Handle the Rest</div>
                    <div className="text-sm text-blue-100">
                      Delivery, setup, servicing, and pickup &mdash; on schedule
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/request-a-quote" className="block mt-8">
                <Button
                  size="lg"
                  className="bg-white text-[#247DA9] hover:bg-blue-50 h-12 px-8 w-full cursor-pointer font-semibold"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Mission Sanitation today for a free, no-obligation quote.
            Same-day delivery is available for urgent needs throughout Solvang,
            Santa Ynez, Buellton, and Los Olivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote">
              <Button
                size="lg"
                className="bg-white text-[#247DA9] hover:bg-blue-50 h-14 px-10 text-lg font-semibold w-full sm:w-auto cursor-pointer"
              >
                Request a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href={SITE.phoneHref}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 h-14 px-10 text-lg w-full sm:w-auto cursor-pointer"
              >
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
