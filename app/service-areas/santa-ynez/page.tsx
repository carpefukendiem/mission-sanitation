import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Building2,
  PartyPopper,
  HardHat,
  Heart,
  Accessibility,
  Droplets,
  HandMetal,
  Sparkles,
  Truck,
  Shield,
  Clock,
  Mountain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Santa Ynez Portable Restroom Rentals",
  description:
    "Portable restroom rentals in Santa Ynez, CA. Ranches, equestrian events, private parties & construction sites. Clean units, reliable delivery. Call Mission Sanitation at (805) 688-8999.",
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

const LOCAL_BENEFITS = [
  {
    icon: Mountain,
    title: "Ranch & Estate Coverage",
    desc: "We deliver to rural ranches, private estates, and equestrian properties throughout the Santa Ynez area, including remote locations.",
  },
  {
    icon: Truck,
    title: "Minutes From Our Base",
    desc: "Santa Ynez is just a few minutes from our Solvang headquarters, so we can have units to your site fast.",
  },
  {
    icon: Shield,
    title: "Local Knowledge",
    desc: "We know the back roads, the private drives, and the best access points for delivery to Santa Ynez properties.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Whether you need restrooms for a one-day polo match or a months-long ranch renovation, we offer terms that fit.",
  },
]

export default function SantaYnezPage() {
  const otherAreas = SERVICE_AREAS.filter(
    (a) => a.href !== "/service-areas/santa-ynez"
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/ranch-landscape.jpg" alt="Santa Ynez ranch landscape" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">Santa Ynez, CA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portable Restroom Rentals in{" "}
              <span className="text-[#3a9fd4]">Santa Ynez</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Santa Ynez is home to sprawling ranches, equestrian estates, and some
              of the valley&apos;s most beautiful event venues. Mission Sanitation
              delivers clean, well-maintained portable restrooms to every corner of
              this historic community — from the town center to the most remote
              ranch roads.
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
                <CheckCircle className="w-4 h-4 text-green-400" /> Ranch Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Same-Day Available
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> ADA Units
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Services Available in Santa Ynez
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you are hosting a ranch event, running an equestrian event,
              or managing a construction project, we have the portable sanitation
              solutions you need in Santa Ynez.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Building2
              return (
                <Link key={service.href} href={service.href} className="group">
                  <Card className="h-full border-0 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#247DA9] transition-colors">
                        <Icon className="w-6 h-6 text-[#247DA9] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-[#247DA9] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
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

      {/* Local Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Mission Sanitation in Santa Ynez
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Santa Ynez&apos;s rural character and large private properties require
              a provider who knows the area. We are that provider.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCAL_BENEFITS.map((item) => (
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

      {/* Local Context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Portable Restrooms for Santa Ynez Events and Properties
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 mb-4">
                Santa Ynez has a character all its own — a blend of old Western
                heritage and modern wine country living. The town is home to the
                Santa Ynez Valley Historical Society Museum, the Chumash Casino
                Resort, and some of the valley&apos;s most prestigious horse ranches
                and training facilities.
              </p>
              <p className="text-slate-600 mb-4">
                Equestrian events, polo matches, and rodeos are a staple of Santa
                Ynez life, and each one requires reliable portable sanitation for
                participants and spectators. We regularly serve the Santa Ynez
                Valley Equestrian Center and private ranch events along Refugio Road
                and Edison Street.
              </p>
              <p className="text-slate-600 mb-4">
                Ranch events and private parties are hugely popular in Santa Ynez,
                with hosts drawn to the area&apos;s oak-studded hillsides and golden
                light. Our{" "}
                <Link
                  href="/services/event-portable-restroom-rentals"
                  className="text-[#247DA9] hover:underline font-medium"
                >
                  event portable restrooms
                </Link>{" "}
                ensure your guests have clean, comfortable facilities that match
                the elegance of your venue. We also serve construction crews working
                on new homes and ranch improvements throughout the area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Get a Free Quote for Santa Ynez
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Tell us about your Santa Ynez event, ranch project, or construction
                site and we will deliver the right portable restroom solution.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Delivery to ranches, estates, and remote properties
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Upscale units available for private events and celebrations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Regular servicing for long-term ranch and construction rentals
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
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Request Your Quote
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                We respond within hours during business days.
              </p>
              <LeadForm source="santa-ynez-page" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Other Areas We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We also provide portable restroom service to neighboring communities
              throughout the Santa Ynez Valley.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherAreas.map((area) => (
              <Link key={area.href} href={area.href} className="group">
                <Card className="h-full border-0 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#247DA9]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#247DA9] transition-colors">
                      <MapPin className="w-5 h-5 text-[#247DA9] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-[#247DA9] transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-sm text-slate-600">{area.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Portable Restrooms in Santa Ynez?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            From ranch events to equestrian gatherings and construction sites,
            Mission Sanitation delivers clean, reliable portable restrooms
            throughout Santa Ynez.
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
