"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/constants"

const FAQS = [
  {
    question: "How much does it cost to rent a portable restroom?",
    answer:
      "Pricing depends on the type of unit, rental duration, delivery location, and servicing frequency. Standard portable restrooms for short-term events typically start around $150-$250 for a weekend rental. Long-term construction rentals are billed monthly at competitive rates. Contact us for a free, no-obligation quote tailored to your specific needs.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least one to two weeks ahead for events, especially during peak season (spring through fall). For construction sites and long-term rentals, a few days' notice is usually sufficient. We do our best to accommodate last-minute requests and can often arrange same-day delivery for urgent needs.",
  },
  {
    question: "What is included in the delivery?",
    answer:
      "Every rental includes delivery, placement, pickup, and the initial stocking of supplies (toilet paper, hand sanitizer). For rentals longer than a few days, we also include regularly scheduled servicing at no extra charge. There are no hidden fees — the price we quote is the price you pay.",
  },
  {
    question: "How often are the units cleaned and serviced?",
    answer:
      "For long-term rentals, our standard service schedule is once per week. This includes pumping the waste tank, cleaning and sanitizing all surfaces, and restocking supplies. For events or high-traffic situations, we can arrange more frequent servicing, including daily or mid-event service visits.",
  },
  {
    question: "Do you offer ADA-compliant portable restrooms?",
    answer:
      "Yes. We carry wheelchair-accessible portable restrooms that meet ADA requirements. These units feature wider doors, interior grab bars, a lower seat height, and enough interior space for wheelchair access. We recommend including at least one ADA unit for any public event to ensure accessibility for all guests.",
  },
  {
    question: "How many portable restrooms do I need for my event?",
    answer:
      "A general guideline is one unit per 50-75 guests for a four-hour event. For longer events, higher attendance, or events serving alcohol, you may need more. We are happy to help you determine the right number based on your guest count, event duration, and layout. Just give us a call or request a quote.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that plans change. Cancellations made at least 48 hours before the scheduled delivery are fully refundable. Cancellations within 48 hours may be subject to a delivery fee. For long-term rentals, we ask for at least one week's notice for cancellation or early pickup.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Solvang and serve the entire Santa Ynez Valley, including Santa Ynez, Buellton, Los Olivos, and the surrounding communities. We also serve other areas throughout Santa Barbara County. If you are unsure whether your location is in our service area, just ask — we are happy to work with you.",
  },
  {
    question: "What is the minimum and maximum rental duration?",
    answer:
      "Our minimum rental is one day. We offer flexible terms including single-day, weekend, weekly, and monthly rentals. For construction sites and ongoing projects, we provide long-term arrangements with regular servicing included. There is no maximum rental duration — some of our customers have had units on-site for over a year.",
  },
  {
    question: "Do you provide handwashing stations?",
    answer:
      "Yes. We offer standalone handwashing stations that can be placed alongside your portable restrooms or at food service areas. We also offer portable restroom units with built-in sinks. Both options include soap, paper towels, and fresh water as part of the rental.",
  },
  {
    question: "What happens if a unit gets damaged during my rental?",
    answer:
      "Normal wear and tear is expected and covered. If a unit is damaged beyond normal use, we will assess the situation and discuss any repair costs with you directly. We carry insurance and work with you to resolve any issues fairly and transparently.",
  },
  {
    question: "Can I choose where the units are placed on my property?",
    answer:
      "Absolutely. We work with you to determine the best placement for accessibility, convenience, and aesthetics. Our delivery team will place the units exactly where you want them. We just need a relatively flat surface and enough clearance for our delivery truck to access the site.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a5f82] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Everything you need to know about renting portable restrooms from Mission Sanitation.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We are happy to help. Reach out and our team will get you the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote">
              <Button size="lg" className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
                Contact Us
              </Button>
            </Link>
            <a href={SITE.phoneHref}>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
                <Phone className="w-5 h-5 mr-2" />
                {SITE.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
