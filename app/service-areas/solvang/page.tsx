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
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Solvang Portable Restroom Rentals",
  description:
    "Portable restroom rentals in Solvang, CA — our home base. Weddings, events, construction sites & festivals. Clean units, fast delivery. Call Mission Sanitation at (805) 688-8999.",
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
    icon: Home,
    title: "Our Home Base",
    desc: "Mission Sanitation is headquartered right here in Solvang at 484 4th Place. You are renting from your neighbors.",
  },
  {
    icon: Truck,
    title: "Fastest Delivery in Town",
    desc: "Being based in Solvang means the shortest delivery times possible — often within hours of your request.",
  },
  {
    icon: Shield,
    title: "Trusted by Local Businesses",
    desc: "Solvang hotels, wineries, restaurants, and event venues rely on us for consistent, professional service.",
  },
  {
    icon: Clock,
    title: "Emergency Same-Day Service",
    desc: "Last-minute event? Unexpected need on a job site? We can have units delivered to Solvang locations within hours.",
  },
]

export default function SolvangPage() {
  const otherAreas = SERVICE_AREAS.filter(
    (a) => a.href !== "/service-areas/solvang"
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/solvang-town.jpg" alt="Solvang California" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">Solvang, CA — Our Home Base</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portable Restroom Rentals in{" "}
              <span className="text-[#3a9fd4]">Solvang, CA</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Mission Sanitation is proud to call Solvang home. As the Danish
              Capital of America draws visitors to its charming streets, festivals,
              and wine tasting rooms, we keep events and job sites clean with
              reliable portable restroom service right here in town.
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
                <CheckCircle className="w-4 h-4 text-green-400" /> Solvang Based
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Same-Day Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> ADA Compliant
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
              Services Available in Solvang
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From Danish Days to vineyard weddings, construction projects to
              community gatherings — we have the right portable sanitation solution
              for every Solvang event and job site.
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
              Why Choose Mission Sanitation in Solvang
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              When you rent from us, you are supporting a local Solvang business
              that takes pride in keeping our community clean and comfortable.
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
              Portable Restrooms for Solvang Events and Projects
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 mb-4">
                Solvang welcomes hundreds of thousands of visitors every year to
                experience its Danish heritage, boutique shops, wine tasting rooms,
                and celebrated restaurants. With major events like Solvang Danish
                Days, Julefest, and the Solvang Century cycling event drawing large
                crowds, reliable portable sanitation is essential for event
                organizers and city planners.
              </p>
              <p className="text-slate-600 mb-4">
                We also serve Solvang&apos;s growing construction and renovation
                market. As new homes, commercial buildings, and hospitality projects
                go up around town, our construction portable toilets keep crews
                comfortable and job sites compliant. We provide regular servicing so
                you never have to worry about maintenance.
              </p>
              <p className="text-slate-600 mb-4">
                Popular Solvang venues and locations we frequently serve include the
                Solvang Festival Theater, Hotel Corque, The Landsby, Solvang Park,
                Old Mission Santa Ines, and private estates and vineyards along
                Alamo Pintado Road. Whether your event is downtown or on a private
                ranch outside town, we deliver directly to your location.
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
                Get a Free Quote for Solvang
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Need portable restrooms delivered in Solvang? As your local
                provider, we offer the fastest response times and most competitive
                rates in town.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Free delivery and pickup within Solvang
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Same-day service available from our local depot
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                  <p className="text-slate-700">
                    Handwashing stations and ADA units always in stock
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
              <LeadForm source="solvang-page" />
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
              In addition to Solvang, we deliver portable restrooms throughout the
              Santa Ynez Valley.
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
            Your Solvang Portable Restroom Provider
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            From Danish Days to vineyard weddings, Mission Sanitation has been
            Solvang&apos;s trusted portable restroom provider. Get your free quote
            today.
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
