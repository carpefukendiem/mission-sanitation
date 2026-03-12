import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mission Sanitation for portable restroom rentals in the Santa Ynez Valley. Call (805) 688-8999 or send us a message.",
}

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    label: "Address",
    value: SITE.address,
    href: SITE.googleMapsUrl,
    description: "Our home base in Solvang",
  },
]

const BUSINESS_HOURS = [
  { day: "Monday", hours: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "7:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "7:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "7:00 AM - 5:00 PM" },
  { day: "Friday", hours: "7:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        <div className="absolute inset-0">
          <Image src="/images/solvang-town.jpg" alt="Solvang California" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Have a question or need help planning your portable restroom rental? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column — contact details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 mb-8">
                Whether you need a quick answer or want to discuss a larger project, our team is ready to help. Reach out by phone, email, or fill out the form and we&apos;ll get back to you promptly.
              </p>

              {/* Contact cards */}
              <div className="space-y-4 mb-10">
                {CONTACT_INFO.map((item) => (
                  <a key={item.label} href={item.href} target={item.label === "Address" ? "_blank" : undefined} rel={item.label === "Address" ? "noopener noreferrer" : undefined}>
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow mb-4">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#247DA9]/10 rounded-lg flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-[#247DA9]" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{item.label}</div>
                          <div className="text-[#247DA9] font-medium">{item.value}</div>
                          <div className="text-sm text-slate-500">{item.description}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Business hours */}
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#247DA9]" />
                  <h3 className="font-semibold text-slate-900 text-lg">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {BUSINESS_HOURS.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-slate-700 font-medium">{item.day}</span>
                      <span className={item.hours === "Closed" ? "text-red-500 font-medium" : "text-slate-600"}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  Emergency service requests may be accommodated outside regular hours.
                </p>
              </div>
            </div>

            {/* Right column — form */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <LeadForm
                source="contact-page"
                showMessage={true}
                showEventDate={false}
                showQuantity={false}
                buttonText="Send Message"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
