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
  Wine,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Los Olivos Portable Restroom Rentals",
  description:
    "Portable restroom rentals in Los Olivos, CA. Wineries, vineyard events, tasting room events & art galleries. Clean units, reliable service. Call Mission Sanitation at (805) 688-8999.",
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
    icon: Wine,
    title: "Wine Country Specialists",
    desc: "We regularly serve Los Olivos wineries and tasting rooms for harvest parties, release events, barrel tastings, and private celebrations.",
  },
  {
    icon: Truck,
    title: "Discreet Delivery",
    desc: "We understand the aesthetics of Los Olivos venues. Units are placed thoughtfully and delivered with minimal disruption to your guests.",
  },
  {
    icon: Shield,
    title: "Premium Event Units",
    desc: "For upscale winery events and gallery openings, we offer clean, well-appointed units that match the elegance of your venue.",
  },
  {
    icon: Clock,
    title: "Short Drive From Our Base",
    desc: "Los Olivos is a quick trip from our Solvang headquarters, so we can respond fast and service units frequently.",
  },
]

export default function LosOlivosPage() {
  const otherAreas = SERVICE_AREAS.filter(
    (a) => a.href !== "/service-areas/los-olivos"
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/wine-country.jpg" alt="Los Olivos wine country" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">Los Olivos, CA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portable Restroom Rentals in{" "}
              <span className="text-[#3a9fd4]">Los Olivos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Los Olivos is the heart of Santa Barbara County wine country, where
              world-class tasting rooms line Grand Avenue and vineyard estates dot
              the surrounding hills. Mission Sanitation provides premium portable
              restroom service for winery events, vineyard gatherings, art gallery
              openings, and private celebrations throughout Los Olivos.
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
                <CheckCircle className="w-4 h-4 text-green-400" /> Winery Events
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Vineyard Events
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Same-Day Service
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
              Services Available in Los Olivos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From intimate winery gatherings to large vineyard events and
              everything in between, we provide portable sanitation solutions
              tailored to the Los Olivos experience.
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
              Why Choose Mission Sanitation in Los Olivos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Los Olivos venues demand a higher standard. We deliver spotless,
              well-maintained units that complement your wine country event.
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
              Portable Restrooms for Los Olivos Wineries and Events
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 mb-4">
                Los Olivos is one of California&apos;s most celebrated wine
                destinations. Grand Avenue is lined with tasting rooms from
                acclaimed wineries, and the surrounding countryside is home to
                vineyards along Foxen Canyon Road, Ballard Canyon, and Happy Canyon
                that attract visitors from around the world.
              </p>
              <p className="text-slate-600 mb-4">
                Winery events are a cornerstone of the Los Olivos experience —
                harvest dinners, wine club pickup parties, barrel tasting weekends,
                and charity galas all need dependable portable sanitation. Many
                vineyard properties lack permanent outdoor restroom facilities,
                making our{" "}
                <Link
                  href="/services/event-portable-restroom-rentals"
                  className="text-[#247DA9] hover:underline font-medium"
                >
                  event portable restrooms
                </Link>{" "}
                an essential part of every outdoor gathering.
              </p>
              <p className="text-slate-600 mb-4">
                Los Olivos is also one of the most popular destinations for private
                events in the Santa Ynez Valley. Guests flock to vineyard estates
                and private ranches for celebrations, and our{" "}
                <Link
                  href="/services/event-portable-restroom-rentals"
                  className="text-[#247DA9] hover:underline font-medium"
                >
                  event portable restrooms
                </Link>{" "}
                provide the clean, comfortable facilities your guests expect. We
                work with event planners throughout the valley to ensure seamless
                delivery, setup, and removal.
              </p>
              <p className="text-slate-600 mb-4">
                Beyond wine country events, Los Olivos hosts art gallery openings,
                the Los Olivos Day in the Country celebration, the Los Olivos Jazz
                and Olive Festival, and seasonal markets that all benefit from
                professional portable sanitation. We also serve construction and
                renovation projects as the town continues to grow.
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
                Get a Free Quote for Los Olivos
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Planning a winery event, private party, or community celebration
                in Los Olivos? Tell us what you need and we will provide a fast,
                no-obligation quote.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Free delivery to wineries, vineyards, and estates
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Premium units for upscale wine country events
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Handwashing stations for food and beverage events
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
              <LeadForm source="los-olivos-page" />
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
              Beyond Los Olivos, we deliver portable restrooms to every community
              in the Santa Ynez Valley.
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
            Your Los Olivos Portable Restroom Provider
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            From vineyard gatherings to winery harvest events, Mission Sanitation
            provides clean, premium portable restrooms that meet the high
            standards of Los Olivos wine country.
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
