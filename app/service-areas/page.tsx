import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ArrowRight, CheckCircle, Truck, Shield, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE, SERVICE_AREAS } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Service Areas — Portable Restroom Delivery in Santa Ynez Valley",
  description:
    "Mission Sanitation delivers portable restrooms to Solvang, Santa Ynez, Buellton, Los Olivos, and the entire Santa Ynez Valley. Fast delivery, clean units. Call (805) 688-8999.",
}

const BENEFITS = [
  {
    icon: Truck,
    title: "Valley-Wide Delivery",
    desc: "From our Solvang base, we reach every corner of the Santa Ynez Valley quickly and reliably.",
  },
  {
    icon: Sparkles,
    title: "Consistently Clean",
    desc: "Every unit is sanitized and inspected before delivery, no matter where in the valley you are.",
  },
  {
    icon: Shield,
    title: "Locally Owned",
    desc: "We live and work in the Santa Ynez Valley. We know the roads, the venues, and the community.",
  },
  {
    icon: Clock,
    title: "Same-Day Available",
    desc: "Need a portable restroom today? Our proximity to every town in the valley means fast turnaround.",
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/wine-country.jpg" alt="Santa Ynez Valley landscape" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">Santa Ynez Valley, CA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portable Restroom Delivery Across the{" "}
              <span className="text-[#3a9fd4]">Santa Ynez Valley</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Mission Sanitation is based in Solvang and serves every community in the
              Santa Ynez Valley. Whether you need restrooms for a vineyard event, a
              construction site, or a community gathering, we deliver clean, reliable units
              right to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Same-Day Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> All Towns Covered
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Locally Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Communities We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on your area to learn more about our portable restroom services
              near you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link key={area.href} href={area.href} className="group">
                <Card className="h-full border-0 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#247DA9] transition-colors">
                      <MapPin className="w-6 h-6 text-[#247DA9] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-1 group-hover:text-[#247DA9] transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        {area.description}
                      </p>
                      <span className="text-sm font-medium text-[#247DA9] flex items-center gap-1">
                        View area details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose a Local Provider?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Being headquartered in the Santa Ynez Valley means faster response
              times, lower delivery costs, and a team that understands your needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((item) => (
              <Card
                key={item.title}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Request a Quote for Your Area
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Tell us where you need portable restrooms delivered and we will
                provide a fast, no-obligation quote. We serve all communities in the
                Santa Ynez Valley and surrounding areas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Free delivery and pickup throughout the valley
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Same-day service available for urgent requests
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Flexible rental terms from one day to ongoing service
                  </p>
                </div>
              </div>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-[#247DA9] font-semibold text-lg hover:underline"
              >
                <Phone className="w-5 h-5" />
                Call us: {SITE.phone}
              </a>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Get Your Free Quote
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                We respond within hours during business days.
              </p>
              <LeadForm source="service-areas-index" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving the Entire Santa Ynez Valley
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            From Solvang to Santa Ynez, Buellton to Los Olivos — Mission
            Sanitation delivers clean, reliable portable restrooms to every event
            and job site in the valley.
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
