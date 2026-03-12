import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Accessibility,
  ShieldCheck,
  Ruler,
  DoorOpen,
  HandMetal,
  Truck,
  HelpCircle,
  Building2,
  Users,
  Heart,
  HardHat,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "ADA Portable Restrooms in Santa Ynez Valley",
  description:
    "ADA-compliant wheelchair-accessible portable restroom rentals in Solvang, Santa Ynez, Buellton & Los Olivos. Fully accessible units for events, construction & private gatherings. Call (805) 688-8999.",
}

const FEATURES = [
  {
    icon: Accessibility,
    title: "Full ADA Compliance",
    description:
      "Our accessible units meet Americans with Disabilities Act requirements including interior dimensions, grab bars, ramp access, and door width specifications.",
  },
  {
    icon: Ruler,
    title: "Spacious Interior",
    description:
      "Extra-wide interior provides ample room for wheelchair maneuvering, mobility aids, and caregiver assistance when needed.",
  },
  {
    icon: DoorOpen,
    title: "Wide Entry with Ramp",
    description:
      "Ground-level entry with integrated ramp and wide door opening allows smooth, barrier-free access for all users.",
  },
  {
    icon: HandMetal,
    title: "Interior Grab Bars",
    description:
      "Strategically placed grab bars on both sides provide stability and support for users with mobility challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Non-Slip Flooring",
    description:
      "Textured, non-slip flooring throughout the unit ensures safe footing for wheelchair users and ambulatory guests alike.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery & Setup",
    description:
      "We ensure each ADA unit is placed on level ground with proper ramp positioning for optimal accessibility at your site.",
  },
]

const WHO_ITS_FOR = [
  {
    icon: Building2,
    title: "Public Events & Festivals",
    description:
      "ADA-accessible restrooms are required for public events. We ensure your festival, fair, or community gathering meets accessibility standards.",
  },
  {
    icon: HardHat,
    title: "Construction Job Sites",
    description:
      "OSHA and ADA requirements apply to construction sites. Provide accessible facilities for all workers on your project.",
  },
  {
    icon: Heart,
    title: "Private Events",
    description:
      "Ensure every guest feels welcome. ADA units are essential for inclusive gatherings at vineyard estates and outdoor venues.",
  },
  {
    icon: Users,
    title: "Schools & Community Events",
    description:
      "School functions, sports events, and community gatherings require accessible restroom options for students, parents, and attendees.",
  },
]

const STEPS = [
  {
    step: "1",
    title: "Request a Quote",
    description:
      "Tell us about your event or project, including location, duration, and how many ADA units you need.",
  },
  {
    step: "2",
    title: "We Plan Placement",
    description:
      "Our team assesses your site to determine the best placement for accessible units, ensuring level ground and clear access paths.",
  },
  {
    step: "3",
    title: "Delivery & Setup",
    description:
      "We deliver, position, and set up each ADA unit with proper ramp orientation. Regular servicing keeps units clean and fully stocked.",
  },
]

const FAQS = [
  {
    question: "What makes a portable restroom ADA-compliant?",
    answer:
      "An ADA-compliant portable restroom features a wider door opening (minimum 32 inches clear width), spacious interior for wheelchair turning radius, interior grab bars, non-slip flooring, lower toilet seat height, and ground-level access via a ramp. Our units meet all these requirements.",
  },
  {
    question: "Am I required to provide ADA restrooms at my event?",
    answer:
      "Yes. Under the Americans with Disabilities Act, public events and places of public accommodation must provide accessible restroom facilities. Even for private events, providing ADA units ensures all guests are comfortable and welcome. We recommend at least one ADA unit per event.",
  },
  {
    question: "How many ADA units do I need?",
    answer:
      "At minimum, one ADA-accessible unit should be available at any event. For larger events with multiple restroom stations, the general guideline is that at least 5% of units (or a minimum of one) should be ADA-compliant. We can help you determine the right number based on your event size.",
  },
  {
    question: "Can ADA units be placed on uneven ground?",
    answer:
      "We assess your site before delivery to find level ground suitable for ADA unit placement. If the terrain requires it, we can make adjustments to ensure the ramp and entry remain accessible and safe. Our experience with Santa Ynez Valley terrain helps us handle a wide range of sites.",
  },
  {
    question: "Do ADA portable restrooms include handwashing?",
    answer:
      "Our ADA units include hand sanitizer dispensers. For full handwashing capability, we recommend pairing ADA restrooms with our standalone handwashing stations or renting our portable restrooms with built-in sinks.",
  },
  {
    question: "What areas do you deliver ADA restrooms to?",
    answer:
      "We deliver ADA-accessible portable restrooms throughout the Santa Ynez Valley including Solvang, Santa Ynez, Los Olivos, Buellton, and surrounding Santa Barbara County areas. Our Solvang location means fast delivery and reliable service.",
  },
]

export default function AdaPortableRestroomsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/california-hills.jpg" alt="Green California hills" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Accessibility className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-100">ADA Portable Restrooms</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              ADA-Compliant{" "}
              <span className="text-[#3a9fd4]">Portable Restrooms</span>{" "}
              for the Santa Ynez Valley
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Ensure accessibility for every guest, worker, and attendee. Mission Sanitation provides wheelchair-accessible, ADA-compliant portable restrooms with spacious interiors, grab bars, and ramp entry throughout Solvang and the Santa Ynez Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-a-quote">
                <Button
                  size="lg"
                  className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                >
                  Get an ADA Restroom Quote
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
                <CheckCircle className="w-4 h-4 text-green-400" /> Wheelchair Accessible
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> ADA Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Ramp Entry Included
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
              Accessible Restroom Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our ADA portable restrooms are built to provide comfortable, dignified access for users of all abilities. Every unit includes the features required for full compliance.
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
              Who Needs ADA Portable Restrooms?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Accessibility is a requirement for most public events and workplaces, and a best practice for any gathering. Here are the most common use cases.
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
              How ADA Restroom Rental Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting accessible restrooms for your event or site is straightforward with Mission Sanitation.
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
              ADA Portable Restroom Questions
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about wheelchair-accessible portable restroom rentals.
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
                Need ADA-Accessible Restrooms?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Make your event or job site accessible for everyone. Get a free quote on ADA portable restroom rentals delivered throughout the Santa Ynez Valley.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Full ADA compliance guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Professional site assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Fast delivery across the valley</span>
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
                Get Your ADA Restroom Quote
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Tell us about your project and we&apos;ll provide a custom quote within hours.
              </p>
              <LeadForm source="ada-restroom-page" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
