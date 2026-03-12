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
  GrapeIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Santa Ynez Valley Portable Restroom Rentals",
  description:
    "Portable restroom rentals throughout the Santa Ynez Valley — Solvang, Santa Ynez, Buellton & Los Olivos. Events, weddings, construction sites. Call Mission Sanitation at (805) 688-8999.",
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
    icon: Truck,
    title: "Valley-Wide Coverage",
    desc: "From Highway 154 to Highway 246, we deliver to every community, ranch, vineyard, and venue across the entire Santa Ynez Valley.",
  },
  {
    icon: Shield,
    title: "Locally Owned Since Day One",
    desc: "Headquartered in Solvang, we are your neighbors. We understand the unique needs of valley events and job sites.",
  },
  {
    icon: GrapeIcon,
    title: "Wine Country Expertise",
    desc: "We regularly serve the valley's top wineries, estates, and vineyards for tastings, harvest events, and private celebrations.",
  },
  {
    icon: Clock,
    title: "Rapid Response Times",
    desc: "Our central location means shorter delivery routes and the ability to offer same-day service when you need it most.",
  },
]

export default function SantaYnezValleyPage() {
  const otherAreas = SERVICE_AREAS.filter(
    (a) => a.href !== "/service-areas/santa-ynez-valley"
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/vineyard-landscape.jpg" alt="Santa Ynez Valley vineyards" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">Santa Ynez Valley, CA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portable Restroom Rentals in the{" "}
              <span className="text-[#3a9fd4]">Santa Ynez Valley</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Mission Sanitation provides clean, reliable portable restrooms to
              every corner of the Santa Ynez Valley. From vineyard weddings along
              Foxen Canyon Road to construction projects on Highway 246, we deliver
              and service restrooms throughout Solvang, Santa Ynez, Buellton, Los
              Olivos, and the surrounding areas.
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
                  className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {SITE.phone}
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> All Valley Towns
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Same-Day Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Solvang Based
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
              Services Available in the Santa Ynez Valley
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a complete range of portable sanitation solutions for every
              need in the valley — from single-unit rentals to large event setups.
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
              Why Choose Mission Sanitation in the Santa Ynez Valley
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              As the valley&apos;s locally owned portable sanitation provider, we
              bring a level of care and knowledge that national companies simply
              cannot match.
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
              Portable Restrooms for Every Santa Ynez Valley Occasion
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 mb-4">
                The Santa Ynez Valley is known for its rolling vineyards, historic
                ranches, and thriving wine country culture. With dozens of wineries,
                event venues, and active construction throughout the region, the need
                for clean, dependable portable sanitation is constant.
              </p>
              <p className="text-slate-600 mb-4">
                Mission Sanitation serves vineyard events along Foxen Canyon Road and
                Happy Canyon, ranch weddings on private estates, community
                celebrations like Solvang Danish Days, the Santa Ynez Valley Rotary
                events, construction crews working on residential and commercial
                projects, and agricultural operations during harvest season.
              </p>
              <p className="text-slate-600 mb-4">
                Whether you are hosting an intimate gathering at a Los Olivos tasting
                room, a large outdoor wedding near Cachuma, or managing a multi-month
                build in Buellton, we have the units, the service schedule, and the
                local knowledge to keep your site clean and comfortable.
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
                Get a Free Quote for the Santa Ynez Valley
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Tell us about your event, project, or job site and we will provide a
                no-obligation quote. We deliver to every town and rural location in
                the valley.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Free delivery and pickup throughout the entire valley
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Regular servicing schedules for long-term rentals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    ADA-compliant units available for all locations
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
              <LeadForm source="santa-ynez-valley-page" />
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
              Explore portable restroom services in specific communities throughout
              the Santa Ynez Valley.
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
            Ready to Rent Portable Restrooms in the Santa Ynez Valley?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            From weekend events to long-term construction projects, Mission
            Sanitation has the right portable restroom solution for your needs
            anywhere in the valley.
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
                className="border-white/40 text-white hover:bg-white/10 h-14 px-10 text-lg w-full sm:w-auto cursor-pointer"
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
