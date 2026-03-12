import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Truck,
  Clock,
  Users,
  CalendarCheck,
  Music,
  GlassWater,
  Tent,
  ChevronDown,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Event Portable Restroom Rentals in Solvang & Santa Ynez Valley",
  description:
    "Premium portable restroom rentals for festivals, parties, corporate events & outdoor gatherings in Solvang, Santa Ynez, Buellton & Los Olivos. Clean units, on-time delivery. Call (805) 688-8999.",
}

const EVENT_TYPES = [
  {
    icon: Music,
    title: "Festivals & Concerts",
    desc: "High-capacity restroom setups for large outdoor festivals, live music events, and fairs. We help you calculate the right number of units based on attendance and event length.",
  },
  {
    icon: Tent,
    title: "Outdoor Parties & Gatherings",
    desc: "Birthday celebrations, family reunions, graduation parties, and neighborhood block parties. Our units keep your guests comfortable wherever the party is.",
  },
  {
    icon: GlassWater,
    title: "Winery & Vineyard Events",
    desc: "The Santa Ynez Valley is wine country, and we are the local provider of choice for winery tastings, harvest celebrations, and barrel events throughout Los Olivos and beyond.",
  },
  {
    icon: Users,
    title: "Corporate & Community Events",
    desc: "Company picnics, charity runs, school fundraisers, and community fairs. We provide professional sanitation that reflects well on your organization.",
  },
  {
    icon: CalendarCheck,
    title: "Sporting Events & Tournaments",
    desc: "Youth soccer tournaments, equestrian shows, polo matches, and other outdoor sporting events across the valley. Reliable facilities that can handle the crowd.",
  },
  {
    icon: Sparkles,
    title: "Holiday & Seasonal Events",
    desc: "Fourth of July celebrations, Solvang Julefest, harvest festivals, and more. Seasonal demand is high so we recommend booking early for holiday events.",
  },
]

const STEPS = [
  {
    num: "1",
    title: "Share Your Event Details",
    desc: "Tell us the type of event, expected attendance, date, and venue location. We will handle the planning from there.",
  },
  {
    num: "2",
    title: "Receive Your Custom Quote",
    desc: "We will recommend the right number and type of units, including ADA restrooms and handwashing stations, and provide a clear quote with no hidden fees.",
  },
  {
    num: "3",
    title: "We Deliver Before Your Event",
    desc: "Our team arrives early to place each unit exactly where you want it. Units are freshly cleaned, fully stocked, and ready for your guests.",
  },
  {
    num: "4",
    title: "Post-Event Pickup",
    desc: "After your event wraps up, we return to collect every unit and leave the site clean. For multi-day events, we schedule mid-event servicing as well.",
  },
]

const FAQS = [
  {
    q: "How many portable restrooms do I need for an outdoor event?",
    a: "The general rule of thumb is one portable restroom per 50 to 75 guests for a four-hour event. If alcohol is being served, you may need 15 to 20 percent more units. For full-day festivals with hundreds of attendees, we will create a custom plan. Our team has experience sizing events throughout the Santa Ynez Valley and will make sure you have the right coverage.",
  },
  {
    q: "Can I add handwashing stations to my event rental?",
    a: "Absolutely. Standalone handwashing stations are one of our most popular add-ons for events. Many Santa Barbara County health permits also require handwash facilities near food-service areas. We can bundle handwashing stations with your restroom order for a package rate.",
  },
  {
    q: "How early should I book event restrooms?",
    a: "We recommend reserving your units at least two to four weeks in advance. During peak event season (April through October) and around popular dates like Fourth of July and Solvang Julefest, demand increases significantly. Booking early guarantees availability and gives us time to plan placement logistics.",
  },
  {
    q: "Do you provide restrooms for multi-day events and festivals?",
    a: "Yes. For events lasting more than one day, we schedule mid-event servicing visits to pump, clean, and restock every unit. Servicing frequency depends on attendance and usage, and we will work with you to create a schedule that keeps everything fresh for the duration of your event.",
  },
  {
    q: "Where should portable restrooms be placed at my event?",
    a: "We recommend placing units on flat, accessible ground near high-traffic areas but away from food-service zones. Our delivery team can advise on the best placement for your specific venue. We regularly deliver to vineyards, ranches, parks, and private estates throughout the Santa Ynez Valley, so we know what works.",
  },
  {
    q: "Do you offer ADA restrooms for events?",
    a: "Yes. We strongly recommend including at least one ADA-compliant portable restroom at every event to ensure accessibility for all guests. Our ADA units feature wider doors, interior grab bars, and a spacious interior that accommodates wheelchairs. Visit our ADA Portable Restrooms page for more details.",
  },
]

export default function EventPortableRestroomRentalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/outdoor-event.jpg" alt="Outdoor festival event" fill sizes="100vw" className="object-cover" priority />
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
                Event Portable{" "}
                <span className="text-[#3a9fd4]">Restroom Rentals</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                Keep your guests comfortable at every outdoor event. Mission
                Sanitation delivers clean, fully-stocked portable restrooms for
                festivals, parties, corporate events, and community gatherings
                across the Santa Ynez Valley.
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
                    className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg w-full sm:w-auto cursor-pointer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {SITE.phone}
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Weekend &amp;
                  Holiday Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> ADA Units
                  Available
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Handwash
                  Station Add-Ons
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Plan Your Event Restrooms
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Tell us about your event and we will recommend the perfect
                setup.
              </p>
              <LeadForm
                source="service-event-portable-restroom-rentals"
                showMessage={false}
                showRentalType={false}
                buttonText="Get My Event Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Event-Ready Portable Restrooms for the Santa Ynez Valley
            </h2>
            <p className="text-lg text-slate-600">
              Outdoor events in wine country deserve sanitation that matches the
              setting. Mission Sanitation provides premium portable restrooms
              that arrive clean, stay stocked, and leave your guests impressed
              rather than inconvenienced.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-slate-600 space-y-4">
            <p>
              Planning an outdoor event means thinking about the details that
              most guests take for granted &mdash; and restrooms are right at
              the top of that list. Insufficient or poorly maintained portable
              restrooms are the fastest way to turn a great event into an
              uncomfortable experience. At Mission Sanitation, we make sure that
              never happens.
            </p>
            <p>
              Our event restroom service covers everything from delivery and
              placement to mid-event servicing and post-event removal. We work
              with event planners, caterers, venue managers, and hosts throughout{" "}
              <Link
                href="/service-areas/solvang"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Solvang
              </Link>
              ,{" "}
              <Link
                href="/service-areas/santa-ynez"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Santa Ynez
              </Link>
              ,{" "}
              <Link
                href="/service-areas/buellton"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Buellton
              </Link>
              , and{" "}
              <Link
                href="/service-areas/los-olivos"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Los Olivos
              </Link>{" "}
              to ensure every gathering has the sanitation coverage it needs.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Events We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From intimate backyard parties to large-scale community festivals,
              we have the experience and inventory to keep your guests
              comfortable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((item) => (
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
                  <p className="text-sm text-slate-600">{item.desc}</p>
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
              How Event Restroom Rentals Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We take care of the logistics so you can focus on creating a
              memorable event.
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
                Plan Your Event Restrooms
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What&apos;s Included With Every Event Rental
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We believe a portable restroom rental should be a turnkey
                experience. Every event rental from Mission Sanitation includes
                everything you need for a smooth, worry-free setup.
              </p>
              <ul className="space-y-3">
                {[
                  "Delivery and strategic placement at your venue",
                  "Freshly sanitized units, inside and out",
                  "Full supply of toilet paper, hand sanitizer, and deodorizer",
                  "Mid-event servicing for multi-day events",
                  "Post-event pickup and site cleanup",
                  "ADA-compliant unit options",
                  "Optional handwashing station add-ons",
                  "Expert guidance on unit quantity and placement",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#247DA9] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#247DA9] to-[#1a5f82] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Planning a Large Event?
              </h3>
              <p className="text-blue-100 mb-6">
                For festivals, fairs, and events with more than 200 guests, we
                offer volume pricing and dedicated support. Our team will work
                with you to create a custom sanitation plan that covers
                restrooms, handwashing, and servicing schedules.
              </p>
              <ul className="space-y-2 text-blue-100 mb-8">
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 shrink-0" /> Staggered delivery for
                  large setups
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" /> On-site servicing
                  during multi-day events
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 shrink-0" /> Dedicated account
                  manager for your event
                </li>
              </ul>
              <a href={SITE.phoneHref}>
                <Button
                  size="lg"
                  className="bg-white text-[#247DA9] hover:bg-blue-50 h-12 px-8 w-full cursor-pointer font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Discuss Your Event
                </Button>
              </a>
            </div>
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
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Portable Restroom Rentals",
                href: "/services/portable-restroom-rentals",
                desc: "Our full range of standard, deluxe, and specialty portable restrooms for any occasion.",
              },
              {
                title: "ADA Portable Restrooms",
                href: "/services/ada-portable-restrooms",
                desc: "Wheelchair-accessible restroom units that meet ADA requirements for inclusive events.",
              },
              {
                title: "Handwashing Stations",
                href: "/services/handwashing-stations",
                desc: "Standalone handwash units that keep your event hygienic and health-code compliant.",
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
              Event Restroom Rental FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions about portable restrooms for events in
              the Santa Ynez Valley.
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
            Make Your Next Event a Success
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            From intimate gatherings to large-scale festivals, Mission
            Sanitation has the portable restroom solutions to keep your guests
            comfortable. Request your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote">
              <Button
                size="lg"
                className="bg-white text-[#247DA9] hover:bg-blue-50 h-14 px-10 text-lg font-semibold w-full sm:w-auto cursor-pointer"
              >
                Get Your Event Quote
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
      </section>
    </>
  )
}
