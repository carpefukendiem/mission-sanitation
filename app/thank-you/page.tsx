import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Phone, ArrowRight, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
}

const NEXT_STEPS = [
  {
    icon: Mail,
    step: "1",
    title: "We Review Your Request",
    description:
      "Our team will look over the details you submitted and put together a custom quote or response tailored to your needs.",
  },
  {
    icon: Clock,
    step: "2",
    title: "We Get Back to You",
    description:
      "Expect to hear from us within a few hours during business hours. We will reach out by phone or email with your quote and any follow-up questions.",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "We Schedule Your Delivery",
    description:
      "Once you approve the quote, we will confirm the delivery date, placement details, and servicing schedule. You are all set.",
  },
]

export default function ThankYouPage() {
  return (
    <>
      {/* Confirmation hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a5f82] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Got It! We&apos;ll Be In Touch Shortly
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Thank you for reaching out to Mission Sanitation. Your request has been received and our team is on it.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {NEXT_STEPS.map((item) => (
              <Card key={item.step} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <div className="text-sm font-bold text-[#247DA9] mb-1">Step {item.step}</div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phone CTA + back to home */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Need an Answer Right Away?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            If your request is time-sensitive, give us a call. We are happy to help over the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE.phoneHref}>
              <Button size="lg" className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
                <Phone className="w-5 h-5 mr-2" />
                Call {SITE.phone}
              </Button>
            </a>
            <Link href="/">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
                Back to Homepage
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
