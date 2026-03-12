import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  HandMetal,
  Sparkles,
  ShieldCheck,
  Droplets,
  Utensils,
  Users,
  Truck,
  HelpCircle,
  HardHat,
  PartyPopper,
  GraduationCap,
  Building2,
  ThermometerSun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Handwashing Stations for Rent in Santa Ynez Valley",
  description:
    "Portable handwashing station rentals in Solvang, Santa Ynez, Buellton & Los Olivos. Standalone hand wash units with hot & cold water for events, food service & construction. Call (805) 688-8999.",
}

const FEATURES = [
  {
    icon: Droplets,
    title: "Running Water Supply",
    description:
      "Each station includes a self-contained freshwater tank that provides real running water for proper handwashing, no external plumbing required.",
  },
  {
    icon: ThermometerSun,
    title: "Soap & Paper Towels Included",
    description:
      "Every handwashing station comes fully stocked with soap dispensers and paper towel holders so users have everything they need.",
  },
  {
    icon: ShieldCheck,
    title: "Health Code Compliant",
    description:
      "Our handwashing stations meet Santa Barbara County health department requirements for events with food preparation and service.",
  },
  {
    icon: Users,
    title: "Multi-User Design",
    description:
      "Stations accommodate multiple users at once with dual-basin designs, reducing wait times at busy events and job sites.",
  },
  {
    icon: Sparkles,
    title: "Cleaned & Sanitized",
    description:
      "Each station is thoroughly cleaned and sanitized before every rental. We restock supplies during multi-day events.",
  },
  {
    icon: Truck,
    title: "Easy Placement Anywhere",
    description:
      "Freestanding units that can be placed near food areas, restroom clusters, tent entrances, or anywhere handwashing is needed on your site.",
  },
]

const WHO_ITS_FOR = [
  {
    icon: Utensils,
    title: "Food Service & Catering Events",
    description:
      "Health codes require handwashing stations near food preparation and service areas. Our stations ensure your event passes health inspections.",
  },
  {
    icon: HardHat,
    title: "Construction Job Sites",
    description:
      "OSHA standards require handwashing facilities on construction sites. Standalone stations are a practical, cost-effective solution.",
  },
  {
    icon: PartyPopper,
    title: "Festivals & Outdoor Events",
    description:
      "Community fairs, music festivals, wine tastings, and outdoor celebrations all benefit from convenient handwashing access for attendees.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Sports Events",
    description:
      "Field days, sports tournaments, and school carnivals need handwashing stations to keep students and families healthy.",
  },
  {
    icon: Building2,
    title: "Wineries & Tasting Rooms",
    description:
      "Outdoor tasting events at Santa Ynez Valley wineries benefit from portable handwashing stations positioned near service areas.",
  },
  {
    icon: Users,
    title: "Weddings & Private Parties",
    description:
      "Pair handwashing stations with portable restrooms at your wedding or private celebration for a complete, comfortable guest experience.",
  },
]

const STEPS = [
  {
    step: "1",
    title: "Tell Us What You Need",
    description:
      "Share your event type, expected attendance, dates, and location. We will recommend the right number of handwashing stations.",
  },
  {
    step: "2",
    title: "Get a Custom Quote",
    description:
      "Receive transparent pricing that includes delivery, setup, stocking, and pickup. No hidden charges.",
  },
  {
    step: "3",
    title: "We Handle Everything",
    description:
      "Our team delivers and places the stations where you need them. For multi-day rentals, we restock supplies and service units on a regular schedule.",
  },
]

const FAQS = [
  {
    question: "Do I need a separate handwashing station if I rent restrooms with sinks?",
    answer:
      "It depends on your event. If you are renting portable restrooms with built-in sinks, those may satisfy your handwashing needs. However, health codes for food service often require dedicated handwashing stations separate from restroom facilities. Standalone stations are also convenient near food lines, tent entrances, and high-traffic areas.",
  },
  {
    question: "How many handwashing stations do I need?",
    answer:
      "For most events, one handwashing station per 50-75 guests is a good guideline. Events with food service may need more based on health department requirements. For construction sites, OSHA guidelines require handwashing facilities within a reasonable distance of work areas. Contact us and we will help you determine the right number.",
  },
  {
    question: "Do the stations require a water hookup?",
    answer:
      "No. Our handwashing stations are fully self-contained with built-in freshwater tanks and gray water collection. They can be placed anywhere on your event site or job site without any external plumbing connection.",
  },
  {
    question: "Are handwashing stations required for food events?",
    answer:
      "In most cases, yes. Santa Barbara County health regulations typically require handwashing stations near food preparation and service areas at outdoor events. Contact your local health department for specific requirements, or ask us and we can share our knowledge from years of servicing local events.",
  },
  {
    question: "How often do you service the stations during a multi-day rental?",
    answer:
      "We service handwashing stations on a regular schedule based on your rental duration and expected usage. This includes refilling freshwater tanks, restocking soap and paper towels, emptying gray water, and cleaning the stations. We work with you to determine the right service frequency.",
  },
  {
    question: "What areas do you deliver handwashing stations to?",
    answer:
      "We deliver standalone handwashing stations throughout the Santa Ynez Valley including Solvang, Santa Ynez, Los Olivos, Buellton, and surrounding areas in Santa Barbara County. Based in Solvang, we offer fast delivery and reliable service across the region.",
  },
]

export default function HandwashingStationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a5f82] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <HandMetal className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">Handwashing Stations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portable{" "}
              <span className="text-[#3a9fd4]">Handwashing Stations</span>{" "}
              for Events and Job Sites
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Keep hands clean and your event compliant with standalone handwashing stations from Mission Sanitation. Self-contained units with running water, soap, and paper towels delivered throughout the Santa Ynez Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-a-quote">
                <Button
                  size="lg"
                  className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                >
                  Get a Quote
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
                <CheckCircle className="w-4 h-4 text-green-400" /> Self-Contained Units
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Health Code Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Soap & Towels Included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Standalone Handwashing Stations?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dedicated handwashing stations provide proper hygiene wherever you need it, from food service areas to high-traffic event zones and job sites.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who Needs Handwashing Stations?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Handwashing stations are essential for any event or site where health, hygiene, and compliance matter. Here are the most common applications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_ITS_FOR.map((item) => (
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
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Handwashing Station Rental Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Renting handwashing stations from Mission Sanitation is simple. We handle all the logistics so you can focus on your event.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-[#247DA9] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#247DA9]/10 rounded-full px-4 py-1.5 mb-4">
              <HelpCircle className="w-4 h-4 text-[#247DA9]" />
              <span className="text-sm font-medium text-[#247DA9]">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Handwashing Station Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about renting portable handwashing stations for events and job sites.
            </p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <Card key={faq.question} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA + LeadForm */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Handwashing Stations for Your Site?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Whether you are hosting a food festival, managing a construction site, or planning an outdoor celebration, our standalone handwashing stations keep everyone healthy and compliant.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Free, no-obligation quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Delivery, setup, and restocking included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Serving all of Santa Ynez Valley</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Get Your Handwashing Station Quote
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Tell us about your event or project and we&apos;ll provide a custom quote within hours.
              </p>
              <LeadForm source="handwashing-stations-page" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
