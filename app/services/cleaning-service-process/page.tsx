import type { Metadata } from "next"
import { Search, Droplets, Waves, ShieldCheck, Package, ClipboardCheck, ArrowRight, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Cleaning & Service Process",
  description:
    "Learn about Mission Sanitation's thorough cleaning and service process. Every portable restroom is inspected, pumped, pressure-washed, sanitized, and restocked before delivery.",
}

const STEPS = [
  {
    icon: Search,
    title: "1. Thorough Inspection",
    description:
      "Every service visit begins with a full inspection of the unit. We check for any damage, cleanliness issues, or supply shortages. Nothing gets overlooked.",
  },
  {
    icon: Droplets,
    title: "2. Complete Pumping",
    description:
      "The waste tank is fully pumped and emptied using professional-grade vacuum equipment. All waste is transported to licensed treatment facilities in full compliance with environmental regulations.",
  },
  {
    icon: Waves,
    title: "3. Pressure Washing",
    description:
      "The interior and exterior of the unit are pressure-washed to remove any buildup, stains, or residue. This step ensures a fresh, like-new appearance for every rental.",
  },
  {
    icon: ShieldCheck,
    title: "4. Sanitizing & Disinfecting",
    description:
      "All surfaces are treated with commercial-grade, EPA-approved sanitizing agents. Seats, walls, door handles, and floors are disinfected to eliminate bacteria and odors.",
  },
  {
    icon: Package,
    title: "5. Restocking Supplies",
    description:
      "Each unit is fully restocked with toilet paper, hand sanitizer, and deodorizer. For units with sinks, we refill soap dispensers, paper towel holders, and fresh water tanks.",
  },
  {
    icon: ClipboardCheck,
    title: "6. Final Quality Check",
    description:
      "Before the unit leaves our yard or before we leave a service stop, we perform a final walkthrough. We verify cleanliness, supply levels, functionality, and overall presentation. If it does not meet our standard, it does not go out.",
  },
]

const CLEANLINESS_REASONS = [
  "Protects the health and safety of your guests, workers, and attendees",
  "Prevents unpleasant odors that can disrupt events or work environments",
  "Extends the life of each unit, reducing waste and replacement costs",
  "Reflects positively on your event, business, or job site",
  "Meets and exceeds local health and sanitation regulations",
]

export default function CleaningServiceProcessPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a5f82] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Cleaning &amp; Service Process
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We take cleanliness seriously. Here is exactly what happens every time we service a portable restroom.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our 6-Step Cleaning Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every unit goes through the same rigorous process, whether it is being delivered for the first time or serviced on a regular schedule.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <Card key={step.title} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why cleanliness matters */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Cleanliness Matters
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            A portable restroom is often one of the most-used facilities at any event or job site. Keeping them clean is not optional — it is essential. Here is why we go the extra mile:
          </p>
          <ul className="space-y-4 mb-8">
            {CLEANLINESS_REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                <span className="text-slate-700">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600">
            At Mission Sanitation, we believe that a clean restroom is a sign of respect — respect for the people using it and for the community we serve.
          </p>
        </div>
      </section>

      {/* Regular service schedule */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Regular Service Schedules
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            For long-term rentals, we provide regularly scheduled servicing to keep your units in top condition throughout the entire rental period.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Standard Service</h3>
                <p className="text-sm text-slate-600">
                  Once-per-week servicing is included with every long-term rental. Each visit includes full pumping, cleaning, sanitizing, and restocking. This schedule works well for most construction sites and low-to-moderate traffic locations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">Enhanced Service</h3>
                <p className="text-sm text-slate-600">
                  For high-traffic job sites, multi-day events, or situations requiring extra attention, we offer twice-weekly or daily servicing. Contact us to discuss a schedule that matches your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA with form */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Experience the Cleanest Restrooms in the Valley
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Ready to see the difference a truly clean portable restroom makes? Request a quote and let us show you what proper sanitation looks like.
              </p>
              <div className="bg-gradient-to-br from-[#247DA9] to-[#1a5f82] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Need Units Fast?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Call us directly for same-day or next-day delivery. We will get you set up quickly.
                </p>
                <a href={SITE.phoneHref}>
                  <Button size="lg" className="bg-white text-[#247DA9] hover:bg-blue-50 h-12 px-6 font-semibold cursor-pointer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call {SITE.phone}
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Get a Free Quote</h3>
              <p className="text-sm text-slate-500 mb-6">
                Tell us about your project and we&apos;ll get back to you with a custom quote.
              </p>
              <LeadForm
                source="cleaning-service-process-page"
                buttonText="Request a Quote"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
