import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Droplets,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Utensils,
  Users,
  Truck,
  HelpCircle,
  PartyPopper,
  HardHat,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Portable Restrooms with Sinks in Santa Ynez Valley",
  description:
    "Rent portable restrooms with built-in handwashing sinks in Solvang, Santa Ynez, Buellton & Los Olivos. Self-contained units with running water for events and job sites. Call (805) 688-8999.",
}

const FEATURES = [
  {
    icon: Droplets,
    title: "Built-In Handwashing Sink",
    description:
      "Each unit includes an integrated sink with running water, soap dispenser, and paper towels so guests and workers can wash their hands without leaving the unit.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Hygiene",
    description:
      "On-site handwashing dramatically reduces the spread of germs. Built-in sinks provide a superior hygiene experience compared to hand sanitizer alone.",
  },
  {
    icon: Sparkles,
    title: "Thoroughly Cleaned",
    description:
      "Every unit is deep-cleaned and sanitized before delivery. The sink, basin, and all surfaces are inspected to ensure a fresh, spotless experience.",
  },
  {
    icon: HeartPulse,
    title: "Health Code Compliance",
    description:
      "Many events involving food service require handwashing facilities. Our restrooms with sinks help you meet local health department requirements.",
  },
  {
    icon: Truck,
    title: "Self-Contained Water System",
    description:
      "Built-in freshwater tank and wastewater collection mean no external water hookup is needed. Place these units anywhere on your site.",
  },
  {
    icon: Users,
    title: "Ideal Guest Experience",
    description:
      "Guests appreciate the convenience of washing their hands right inside the restroom. It is a significant comfort upgrade over standard portable restrooms.",
  },
]

const WHO_ITS_FOR = [
  {
    icon: Utensils,
    title: "Food Festivals & Catered Events",
    description:
      "Health regulations often require handwashing near food service areas. Restrooms with built-in sinks keep your event compliant and your guests healthy.",
  },
  {
    icon: PartyPopper,
    title: "Outdoor Parties & Celebrations",
    description:
      "Give your guests the comfort of proper handwashing at birthday parties, family reunions, corporate picnics, and community gatherings.",
  },
  {
    icon: HardHat,
    title: "Construction & Job Sites",
    description:
      "Provide workers with convenient handwashing to meet OSHA hygiene standards without needing separate handwashing stations.",
  },
  {
    icon: Building2,
    title: "Winery & Vineyard Events",
    description:
      "Wine tastings, harvest festivals, and vineyard tours in the Santa Ynez Valley benefit from the upgraded hygiene of restrooms with sinks.",
  },
]

const STEPS = [
  {
    step: "1",
    title: "Share Your Needs",
    description:
      "Contact us with your event details, expected guest or worker count, and site location. We will recommend the right number of units with sinks.",
  },
  {
    step: "2",
    title: "Receive Your Quote",
    description:
      "We provide transparent pricing with no hidden fees. Your quote includes delivery, setup, servicing, and pickup.",
  },
  {
    step: "3",
    title: "We Deliver & Maintain",
    description:
      "Our team delivers and places each unit. For multi-day rentals, we service units regularly to keep freshwater stocked and waste removed.",
  },
]

const FAQS = [
  {
    question: "How does the built-in sink work without a water hookup?",
    answer:
      "Our portable restrooms with sinks include a self-contained freshwater tank and a separate gray water tank. The foot-pump or hand-pump mechanism delivers clean water to the sink. No external plumbing connection is needed, so units can be placed virtually anywhere.",
  },
  {
    question: "Are these units different from standard portable restrooms?",
    answer:
      "Yes. In addition to all the features of a standard portable restroom, these units include an integrated handwashing sink with running water, soap dispenser, and paper towels built into the unit. They are slightly larger to accommodate the sink and water tanks.",
  },
  {
    question: "Do I need restrooms with sinks for a food event?",
    answer:
      "Many Santa Barbara County health regulations require handwashing stations near food preparation and service areas. Portable restrooms with built-in sinks can help satisfy this requirement. Check with your local health department for specific rules applicable to your event.",
  },
  {
    question: "How many units with sinks should I rent?",
    answer:
      "This depends on your event size and duration. As a general guideline, one unit per 50 guests for a four-hour event is a good starting point. Contact us with your details and we will provide a tailored recommendation.",
  },
  {
    question: "Can I mix standard units with sink-equipped units?",
    answer:
      "Absolutely. Many customers rent a combination of standard portable restrooms and units with sinks to balance cost and convenience. We can help you find the right mix based on your event or site needs.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We deliver portable restrooms with sinks throughout the Santa Ynez Valley, including Solvang, Santa Ynez, Los Olivos, Buellton, and surrounding areas in Santa Barbara County.",
  },
]

export default function PortableRestroomsWithSinksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/event-setup.jpg" alt="Event with tent setup" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Droplets className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">Portable Restrooms with Sinks</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Portable Restrooms with{" "}
              <span className="text-[#3a9fd4]">Built-In Handwashing Sinks</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Upgrade your event or job site hygiene with self-contained portable restrooms that include integrated handwashing sinks. Running water, soap, and paper towels all in one convenient unit, delivered throughout the Santa Ynez Valley.
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
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {SITE.phone}
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Running Water Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> No External Hookup Needed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Health Code Friendly
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
              The Benefits of Restrooms with Built-In Sinks
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Combining a restroom and handwashing sink in one unit means better hygiene, simpler logistics, and a more comfortable experience for everyone.
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
              Who Benefits from Restrooms with Sinks?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Any event or worksite where hygiene matters benefits from having handwashing built into the restroom. Here are the most common use cases.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {WHO_ITS_FOR.map((item) => (
              <Card
                key={item.title}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
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
              How to Rent Portable Restrooms with Sinks
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From first contact to final pickup, we handle everything. Here is how it works.
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
              Restrooms with Sinks: Common Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about renting portable restrooms with built-in handwashing sinks.
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
                Upgrade to Restrooms with Handwashing
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Give your guests and workers the convenience and hygiene of built-in handwashing. Get a free quote on portable restrooms with sinks, delivered anywhere in the Santa Ynez Valley.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Free, no-obligation quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">All-inclusive pricing (delivery, service, pickup)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Same-day delivery available</span>
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
                    className="bg-transparent border-white/40 text-white hover:bg-white/10 h-14 px-10 text-lg w-full sm:w-auto cursor-pointer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call {SITE.phone}
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Get Your Quote
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Tell us about your event or project and we&apos;ll send a custom quote within hours.
              </p>
              <LeadForm source="restrooms-with-sinks-page" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
