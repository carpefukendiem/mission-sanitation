import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Truck,
  Shield,
  Sparkles,
  Clock,
  ThumbsUp,
  Users,
  ChevronDown,
  Building2,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Portable Restroom Rentals in Solvang & Santa Ynez Valley",
  description:
    "Rent clean, reliable portable restrooms in Solvang, Santa Ynez, Buellton & Los Olivos. Standard, deluxe, and ADA units with delivery, servicing & pickup. Call (805) 688-8999.",
}

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Spotlessly Clean Units",
    desc: "Every portable restroom is pressure-washed, sanitized, and inspected before delivery. We never send a unit that is not up to our standards.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery & Pickup",
    desc: "We deliver on the date and time you specify, and pick up promptly when your rental period ends. Reliability is built into everything we do.",
  },
  {
    icon: Clock,
    title: "Flexible Rental Terms",
    desc: "Whether you need a restroom for one day or twelve months, we offer daily, weekly, and monthly rental options to match your timeline.",
  },
  {
    icon: Shield,
    title: "Fully Stocked & Serviced",
    desc: "Every unit arrives with a full supply of toilet paper, hand sanitizer, and deodorizer. Regular servicing keeps everything fresh for the duration of your rental.",
  },
  {
    icon: Users,
    title: "Expert Guidance on Quantity",
    desc: "Not sure how many units you need? Our team will help you calculate the right number based on your guest count, event duration, and local requirements.",
  },
  {
    icon: ThumbsUp,
    title: "Locally Owned & Operated",
    desc: "Mission Sanitation is headquartered right here in Solvang. We know the Santa Ynez Valley and take pride in serving our community.",
  },
]

const STEPS = [
  {
    num: "1",
    title: "Request a Quote",
    desc: "Tell us about your project, event dates, location, and estimated guest count. You can fill out our online form or call us directly.",
  },
  {
    num: "2",
    title: "Get a Custom Plan",
    desc: "We will recommend the right type and number of units for your needs and provide a transparent, no-surprise quote.",
  },
  {
    num: "3",
    title: "We Deliver & Set Up",
    desc: "Our crew delivers your portable restrooms to your location and positions them where you need them, on the date you choose.",
  },
  {
    num: "4",
    title: "We Service & Pick Up",
    desc: "For multi-day rentals, we handle scheduled cleanings. When your rental ends, we pick everything up so you do not have to worry about a thing.",
  },
]

const FAQS = [
  {
    q: "How much does it cost to rent a portable restroom in Solvang?",
    a: "Pricing depends on the type of unit, rental duration, and delivery location. Standard portable restrooms start at competitive daily rates. Contact us for a free, no-obligation quote tailored to your specific needs.",
  },
  {
    q: "How many portable restrooms do I need for my event?",
    a: "A common guideline is one portable restroom for every 50 to 75 guests for a four-hour event. For longer events, all-day festivals, or events serving alcohol, you may need more. We will help you determine the right number when you request a quote.",
  },
  {
    q: "Do you deliver portable restrooms on weekends?",
    a: "Yes. We offer delivery and pickup seven days a week throughout the Santa Ynez Valley, including weekends and holidays. We can also accommodate early-morning or late-afternoon delivery windows.",
  },
  {
    q: "What is included with a portable restroom rental?",
    a: "Every rental includes delivery, setup, and pickup. Units arrive fully stocked with toilet paper, hand sanitizer, and deodorizer. For multi-day rentals, regular servicing (pumping, restocking, and cleaning) is available on a schedule that fits your needs.",
  },
  {
    q: "Do you offer ADA-compliant portable restrooms?",
    a: "Absolutely. We carry wheelchair-accessible, ADA-compliant units that meet Americans with Disabilities Act requirements. These larger units feature wider doors, interior handrails, and a spacious floor plan. Learn more on our ADA Portable Restrooms page.",
  },
  {
    q: "How far in advance should I book my portable restroom rental?",
    a: "We recommend booking at least one to two weeks in advance, especially during peak wedding and event season (April through October). However, we do offer same-day delivery for urgent needs when units are available.",
  },
]

export default function PortableRestroomRentalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/ranch-landscape.jpg" alt="California ranch landscape in Santa Ynez Valley" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-blue-100">
                  Solvang &amp; Santa Ynez Valley, CA
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Portable Restroom{" "}
                <span className="text-[#3a9fd4]">Rentals</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                Clean, dependable portable restrooms delivered anywhere in the
                Santa Ynez Valley. Perfect for events, job sites, outdoor
                gatherings, and anywhere permanent facilities are not available.
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
                  <CheckCircle className="w-4 h-4 text-green-400" /> Same-Day
                  Delivery Available
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> ADA Units
                  In Stock
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Locally
                  Owned
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Get Your Free Quote
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Tell us what you need and we will respond within hours.
              </p>
              <LeadForm
                source="service-portable-restroom-rentals"
                showMessage={false}
                showRentalType={false}
                buttonText="Get My Free Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Reliable Portable Restrooms for Any Occasion
            </h2>
            <p className="text-lg text-slate-600">
              Mission Sanitation is the Santa Ynez Valley&apos;s go-to provider
              for portable restroom rentals. Whether you are hosting an outdoor
              wedding at a vineyard in Los Olivos, managing a construction
              project in Buellton, or organizing a community festival in
              Solvang, our portable restrooms give your guests and crew the
              clean, comfortable facilities they deserve.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-slate-600 space-y-4">
            <p>
              We offer a range of unit types to fit every need and budget.
              Standard portable restrooms are our most popular option and are
              ideal for general-purpose use at outdoor events, parks, farms, and
              residential projects. For guests who expect a higher level of
              comfort, our deluxe units feature added interior lighting and a
              more spacious design. Every unit in our fleet is regularly
              maintained, thoroughly cleaned between rentals, and stocked with
              toilet paper, hand sanitizer, and deodorizer.
            </p>
            <p>
              Need something more specialized? We also carry{" "}
              <Link
                href="/services/ada-portable-restrooms"
                className="text-[#247DA9] underline hover:no-underline"
              >
                ADA-compliant portable restrooms
              </Link>{" "}
              for wheelchair accessibility,{" "}
              <Link
                href="/services/portable-restrooms-with-sinks"
                className="text-[#247DA9] underline hover:no-underline"
              >
                units with built-in sinks
              </Link>{" "}
              for enhanced hygiene, and standalone{" "}
              <Link
                href="/services/handwashing-stations"
                className="text-[#247DA9] underline hover:no-underline"
              >
                handwashing stations
              </Link>{" "}
              that pair perfectly with any restroom setup. Whatever your
              requirements, we will match you with the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Rent From Mission Sanitation?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We are more than a restroom rental company &mdash; we are your
              partner in making sure every detail of your event or project goes
              smoothly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <Card
                key={b.title}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-600">{b.desc}</p>
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
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Renting a portable restroom from Mission Sanitation is simple. We
              handle the heavy lifting so you can focus on what matters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 bg-[#247DA9] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/request-a-quote">
              <Button
                size="lg"
                className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-12 px-8 cursor-pointer"
              >
                Start with a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Portable Restroom Delivery Throughout the Santa Ynez Valley
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Based in Solvang, we provide fast, reliable delivery to every
              community in the valley and beyond.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { name: "Solvang", href: "/service-areas/solvang" },
              { name: "Santa Ynez", href: "/service-areas/santa-ynez" },
              { name: "Buellton", href: "/service-areas/buellton" },
              { name: "Los Olivos", href: "/service-areas/los-olivos" },
              {
                name: "Santa Ynez Valley",
                href: "/service-areas/santa-ynez-valley",
              },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <MapPin className="w-5 h-5 text-[#247DA9] shrink-0" />
                <span className="font-medium text-slate-900 group-hover:text-[#247DA9] transition-colors">
                  {area.name}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Related Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complement your portable restroom rental with these additional
              services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Event Portable Restrooms",
                href: "/services/event-portable-restroom-rentals",
                desc: "Premium restroom solutions designed specifically for festivals, parties, and outdoor events.",
                icon: Building2,
              },
              {
                title: "Construction Portable Toilets",
                href: "/services/construction-portable-toilets",
                desc: "Durable units with regular servicing built for job sites and construction crews.",
                icon: Building2,
              },
              {
                title: "Handwashing Stations",
                href: "/services/handwashing-stations",
                desc: "Standalone handwash units to pair with any restroom rental for improved hygiene.",
                icon: Building2,
              },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group">
                <Card className="h-full border-0 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-[#247DA9] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">{s.desc}</p>
                    <span className="text-sm font-medium text-[#247DA9] flex items-center gap-1">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Have questions about renting portable restrooms? Here are answers
              to the ones we hear most often.
            </p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl shadow-sm border border-slate-100"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-semibold text-slate-900 [&::-webkit-details-marker]:hidden list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 -mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a Free Portable Restroom Quote Today
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your event, project, or occasion and we will provide a
            fast, transparent quote with no hidden fees. Same-day delivery is
            available for urgent needs.
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
