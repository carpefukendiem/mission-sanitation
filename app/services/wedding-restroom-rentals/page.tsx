import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Heart,
  Sparkles,
  Users,
  Clock,
  MapPin,
  Star,
  CalendarHeart,
  Wine,
  ShieldCheck,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Wedding Restroom Rentals in Santa Ynez Valley",
  description:
    "Premium portable restroom rentals for weddings in Solvang, Santa Ynez, Los Olivos & Buellton. Clean, elegant units perfect for vineyard and estate weddings. Call (805) 688-8999.",
}

const FEATURES = [
  {
    icon: Sparkles,
    title: "Immaculately Clean Units",
    description:
      "Every restroom is deep-cleaned, sanitized, and inspected before delivery. Your guests will find fresh, spotless facilities that match the quality of your celebration.",
  },
  {
    icon: Heart,
    title: "Wedding-Ready Presentation",
    description:
      "Our premium units are designed with aesthetics in mind. Clean lines, pleasant interiors, and well-maintained finishes ensure they complement your venue.",
  },
  {
    icon: Users,
    title: "Capacity Planning Expertise",
    description:
      "We help you determine exactly how many units you need based on guest count, event duration, and venue layout so no one waits in line.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery & Pickup",
    description:
      "We coordinate delivery and pickup around your wedding timeline, arriving well before your venue setup and departing after the last dance.",
  },
  {
    icon: MapPin,
    title: "Local Venue Knowledge",
    description:
      "From vineyard estates to ranch properties, we know the Santa Ynez Valley venues and their specific access requirements.",
  },
  {
    icon: ShieldCheck,
    title: "ADA Options Available",
    description:
      "Ensure every guest is accommodated with wheelchair-accessible units that meet ADA compliance standards.",
  },
]

const WHO_ITS_FOR = [
  "Vineyard and winery weddings in Santa Ynez Valley",
  "Ranch and estate ceremonies in Los Olivos",
  "Outdoor garden weddings in Solvang",
  "Rehearsal dinners and engagement parties",
  "Destination weddings in Santa Barbara County wine country",
  "Large receptions at private residences",
]

const STEPS = [
  {
    step: "1",
    title: "Tell Us About Your Wedding",
    description:
      "Share your date, venue, guest count, and any special requirements. We respond within hours.",
  },
  {
    step: "2",
    title: "Get Your Custom Quote",
    description:
      "We recommend the right number and type of units for your event and provide transparent, all-inclusive pricing.",
  },
  {
    step: "3",
    title: "We Handle the Rest",
    description:
      "We deliver, set up, and service the units on your schedule. After the celebration, we handle pickup so you can enjoy the afterglow.",
  },
]

const FAQS = [
  {
    question: "How many portable restrooms do I need for my wedding?",
    answer:
      "A general guideline is one unit per 50 guests for a four-hour event. For longer celebrations or events with food and beverages, we recommend one unit per 35 guests. We also suggest at least one ADA-accessible unit. Contact us with your guest count and we will provide a personalized recommendation.",
  },
  {
    question: "When do you deliver and pick up the units?",
    answer:
      "We typically deliver the day before your wedding to ensure everything is in place and inspected before guests arrive. Pickup is scheduled for the day after your event, giving you plenty of buffer time. Custom timing can be arranged.",
  },
  {
    question: "Can the restrooms be placed at vineyard or ranch venues?",
    answer:
      "Absolutely. We have extensive experience delivering to vineyard estates, ranches, and rural properties throughout the Santa Ynez Valley. We know the access roads and terrain considerations for most local venues.",
  },
  {
    question: "Do you offer handwashing stations for weddings?",
    answer:
      "Yes. We strongly recommend pairing portable restrooms with standalone handwashing stations. They provide hot and cold running water, soap, and paper towels for a comfortable guest experience.",
  },
  {
    question: "What areas do you serve for wedding rentals?",
    answer:
      "We serve the entire Santa Ynez Valley including Solvang, Santa Ynez, Los Olivos, Buellton, and surrounding areas in Santa Barbara County. Our home base in Solvang means fast, reliable service throughout the region.",
  },
  {
    question: "How much do wedding restroom rentals cost?",
    answer:
      "Pricing varies based on the number of units, type (standard, deluxe, or ADA), rental duration, and delivery location. Contact us for a free, no-obligation quote tailored to your wedding details.",
  },
]

export default function WeddingRestroomRentalsPage() {
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
              <Heart className="w-4 h-4 text-pink-300" />
              <span className="text-sm text-blue-100">Wedding Restroom Rentals</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Elegant Portable Restrooms for Your{" "}
              <span className="text-[#3a9fd4]">Santa Ynez Valley Wedding</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Your wedding day deserves every detail handled with care, including guest comfort. Mission Sanitation provides premium, spotlessly clean portable restrooms for vineyard weddings, estate celebrations, and outdoor receptions throughout the Santa Ynez Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-a-quote">
                <Button
                  size="lg"
                  className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                >
                  Request Wedding Quote
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
                <CheckCircle className="w-4 h-4 text-green-400" /> Premium Clean Units
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> On-Time Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" /> Vineyard Venue Experts
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
              Why Couples Choose Mission Sanitation for Their Wedding Day
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We understand that every detail matters on your special day. Our wedding restroom service is designed for couples who refuse to compromise on guest experience.
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#247DA9]/10 rounded-full px-4 py-1.5 mb-4">
                <Wine className="w-4 h-4 text-[#247DA9]" />
                <span className="text-sm font-medium text-[#247DA9]">Perfect For</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ideal for Wine Country Weddings and Outdoor Celebrations
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                The Santa Ynez Valley is one of California&apos;s premier wedding destinations. Many of the most beautiful venues, from vineyard estates to hilltop ranches, require portable restroom solutions. We specialize in providing those solutions with the quality your celebration deserves.
              </p>
              <ul className="space-y-3">
                {WHO_ITS_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#247DA9] mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#247DA9]/5 to-[#247DA9]/10 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#247DA9] rounded-xl flex items-center justify-center">
                  <CalendarHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    Planning a Wedding?
                  </h3>
                  <p className="text-sm text-slate-600">
                    Let us handle the restroom logistics.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-slate-900">Trusted by Local Planners</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Wedding coordinators throughout the valley recommend us for our reliability and attention to detail.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-[#247DA9]" />
                    <span className="font-medium text-slate-900">Local to Solvang</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Based in the heart of the Santa Ynez Valley, we know every venue and access road in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Wedding Restroom Rental Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We make it effortless so you can focus on celebrating. Three simple steps to restroom peace of mind.
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
              Wedding Restroom Rental Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions couples ask about portable restrooms for their wedding day.
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
                Ready to Reserve Restrooms for Your Wedding?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Popular dates fill up fast in wine country. Secure your wedding restroom rental today and check one more detail off your planning list.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Free, no-obligation quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Response within hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                  <span className="text-blue-100">Flexible delivery scheduling</span>
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
                Get Your Wedding Quote
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Tell us about your wedding and we&apos;ll send a custom quote within hours.
              </p>
              <LeadForm
                source="wedding-restroom-rentals-page"
                buttonText="Request Wedding Quote"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
