import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, CheckCircle, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a free, no-obligation quote for portable restroom rentals in the Santa Ynez Valley. Fast response from Mission Sanitation — Solvang's trusted sanitation provider.",
}

const EXPECT_ITEMS = [
  "A friendly team member will review your request",
  "We respond to most quotes within a few hours",
  "Custom pricing based on your event size, duration, and location",
  "No hidden fees — delivery, pickup, and servicing included",
  "Flexible scheduling for events, construction, and long-term rentals",
]

export default function RequestAQuotePage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        <div className="absolute inset-0">
          <Image src="/images/ranch-landscape.jpg" alt="Santa Ynez Valley" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Request a Free Quote
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a custom quote — usually within a few hours.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column — info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                What to Expect
              </h2>
              <p className="text-slate-600 mb-8">
                Getting a quote from Mission Sanitation is quick and easy. Fill out the form and our team will put together a custom proposal tailored to your needs. There is never any pressure or obligation.
              </p>

              <ul className="space-y-4 mb-10">
                {EXPECT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#247DA9]" />
                  <span className="font-semibold text-slate-900">Fast Turnaround</span>
                </div>
                <p className="text-sm text-slate-600">
                  Most quotes are returned the same business day. For urgent needs, give us a call and we can often accommodate same-day delivery.
                </p>
              </div>

              {/* Phone CTA */}
              <div className="bg-gradient-to-br from-[#247DA9] to-[#1a5f82] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">
                  Prefer to Talk to a Person?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Call us directly and we&apos;ll walk you through your options. We&apos;re happy to help.
                </p>
                <a href={SITE.phoneHref}>
                  <Button size="lg" className="bg-white text-[#247DA9] hover:bg-blue-50 h-12 px-6 font-semibold cursor-pointer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call {SITE.phone}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right column — form */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Tell Us About Your Project
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Fill out the details below and we&apos;ll get back to you with a custom quote.
              </p>
              <LeadForm
                source="request-a-quote-page"
                buttonText="Get My Quote"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
