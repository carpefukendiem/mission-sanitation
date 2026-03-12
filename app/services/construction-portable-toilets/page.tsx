import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Truck,
  Clock,
  Shield,
  HardHat,
  Wrench,
  ClipboardCheck,
  ChevronDown,
  MapPin,
  CalendarClock,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

export const metadata: Metadata = {
  title: "Construction Portable Toilets in Solvang & Santa Ynez Valley",
  description:
    "Durable construction portable toilets with regular servicing for job sites in Solvang, Santa Ynez, Buellton & Los Olivos. OSHA-compliant, weekly service. Call (805) 688-8999.",
}

const BENEFITS = [
  {
    icon: Shield,
    title: "OSHA-Compliant Units",
    desc: "Our construction portable toilets meet OSHA sanitation requirements for job sites. We help you stay compliant so you can focus on the work at hand.",
  },
  {
    icon: RefreshCw,
    title: "Scheduled Weekly Service",
    desc: "Every construction rental includes regular servicing on a weekly schedule. We pump, clean, restock, and sanitize each unit so your crew always has a clean restroom.",
  },
  {
    icon: HardHat,
    title: "Built for Job Sites",
    desc: "Our construction units are rugged, stable, and built to withstand the demands of active work sites. They hold up to heavy use and outdoor conditions day after day.",
  },
  {
    icon: Truck,
    title: "Fast Delivery & Relocation",
    desc: "Need units delivered to a new phase of the project or moved across the site? We handle delivery, repositioning, and pickup with minimal disruption to your schedule.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Long-Term Rentals",
    desc: "Construction projects rarely follow a fixed schedule. Our month-to-month rental terms flex with your project timeline, and you can add or remove units as your crew size changes.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Monthly Billing",
    desc: "One simple monthly invoice that includes your rental, delivery, and all scheduled servicing. No hidden fees, no surprise charges at the end of the project.",
  },
]

const STEPS = [
  {
    num: "1",
    title: "Tell Us About Your Site",
    desc: "Share your project location, crew size, estimated duration, and any special requirements like ADA access or handwashing stations.",
  },
  {
    num: "2",
    title: "Get a Job-Site Quote",
    desc: "We will recommend the right number of units based on your crew size and OSHA guidelines, and provide a straightforward monthly quote.",
  },
  {
    num: "3",
    title: "Delivery & Placement",
    desc: "We deliver your units and place them on flat, accessible ground near your work area. We can coordinate placement with your site foreman.",
  },
  {
    num: "4",
    title: "Ongoing Service & Support",
    desc: "Weekly servicing keeps every unit clean and stocked. Need to add units, relocate them, or extend your rental? Just call and we will take care of it.",
  },
]

const PROJECT_TYPES = [
  "Residential home builds and remodels",
  "Commercial construction projects",
  "Road and infrastructure work",
  "Vineyard and agricultural construction",
  "Landscaping and grading projects",
  "Solar panel installations",
  "Government and municipal projects",
  "Demolition and site prep",
]

const FAQS = [
  {
    q: "How many portable toilets do I need for my construction site?",
    a: "OSHA requires a minimum of one toilet for every 20 workers on a job site. For sites with 20 or fewer workers, one unit is sufficient. For larger crews, we will calculate the right number based on OSHA standards and provide a recommendation when you request a quote.",
  },
  {
    q: "How often are construction portable toilets serviced?",
    a: "Standard construction rentals include weekly servicing. During each visit, our technician pumps the waste tank, cleans and sanitizes the interior, restocks toilet paper and hand sanitizer, and applies deodorizer. If your site has high usage, we can arrange twice-weekly or even daily service at an adjusted rate.",
  },
  {
    q: "Can I rent construction portable toilets month-to-month?",
    a: "Yes. All of our construction rentals are available on a flexible month-to-month basis. There is no long-term contract required. You can extend or end your rental at any time with reasonable notice, which makes it easy to match your rental to your project timeline.",
  },
  {
    q: "Do you offer ADA-compliant units for construction sites?",
    a: "Yes. If your project requires ADA-accessible sanitation, we carry wheelchair-accessible units that comply with Americans with Disabilities Act standards. These units are especially important for public works projects and any site that may have visitors or inspectors with accessibility needs.",
  },
  {
    q: "Can you deliver to remote job sites in the Santa Ynez Valley?",
    a: "Absolutely. We regularly deliver to rural and remote job sites throughout the valley, including vineyard projects, ranch construction, and hillside builds. Our delivery trucks can access most terrain, and we will work with you to plan placement even in challenging locations.",
  },
  {
    q: "What is the cost of a construction portable toilet rental?",
    a: "Pricing depends on the number of units, service frequency, and delivery location. We offer competitive monthly rates that include the unit rental, delivery, pickup, and all scheduled weekly servicing. Contact us for a free quote specific to your project.",
  },
]

export default function ConstructionPortableToiletsPage() {
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
                Construction{" "}
                <span className="text-[#3a9fd4]">Portable Toilets</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                Tough, reliable portable toilets built for active job sites.
                OSHA-compliant units with weekly servicing included, delivered
                anywhere in the Santa Ynez Valley.
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
                  <CheckCircle className="w-4 h-4 text-green-400" /> OSHA
                  Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Weekly
                  Service Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Flexible
                  Monthly Terms
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Get a Job-Site Quote
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Tell us about your construction project and we will get back to
                you quickly.
              </p>
              <LeadForm
                source="service-construction-portable-toilets"
                showMessage={false}
                showRentalType={false}
                showEventDate={false}
                buttonText="Get My Construction Quote"
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
              Job-Site Sanitation You Can Count On
            </h2>
            <p className="text-lg text-slate-600">
              When your crew is on the clock, the last thing you want to worry
              about is restroom facilities. Mission Sanitation provides durable,
              well-maintained construction portable toilets that keep your
              workers comfortable and your site OSHA-compliant.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-slate-600 space-y-4">
            <p>
              Construction sites throughout the Santa Ynez Valley rely on
              Mission Sanitation for dependable job-site restrooms. Our
              construction-grade units are designed to withstand the rigors of
              active work sites &mdash; from residential builds in{" "}
              <Link
                href="/service-areas/solvang"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Solvang
              </Link>{" "}
              and{" "}
              <Link
                href="/service-areas/santa-ynez"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Santa Ynez
              </Link>{" "}
              to commercial development in{" "}
              <Link
                href="/service-areas/buellton"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Buellton
              </Link>{" "}
              and vineyard infrastructure projects in{" "}
              <Link
                href="/service-areas/los-olivos"
                className="text-[#247DA9] underline hover:no-underline"
              >
                Los Olivos
              </Link>
              .
            </p>
            <p>
              Every construction rental includes scheduled weekly servicing at
              no extra charge. Our technicians pump, clean, sanitize, and
              restock each unit on a regular cycle so your crew always has access
              to clean facilities. We also offer{" "}
              <Link
                href="/services/ada-portable-restrooms"
                className="text-[#247DA9] underline hover:no-underline"
              >
                ADA-compliant units
              </Link>{" "}
              for sites that require wheelchair-accessible facilities, and{" "}
              <Link
                href="/services/handwashing-stations"
                className="text-[#247DA9] underline hover:no-underline"
              >
                handwashing stations
              </Link>{" "}
              that help your workers maintain hygiene standards throughout the
              workday.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Contractors Choose Mission Sanitation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We understand construction timelines, OSHA requirements, and the
              importance of reliable service. Here is what sets us apart.
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
              How Construction Restroom Rentals Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting job-site restrooms set up is straightforward. Here is the
              process from start to finish.
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
                Get Your Job-Site Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Project Types We Support
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Whether you are building a single family home or managing a
                multi-phase commercial development, our construction portable
                toilets are up to the job. We serve projects of all sizes across
                the Santa Ynez Valley and greater Santa Barbara County.
              </p>
              <ul className="space-y-3">
                {PROJECT_TYPES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#247DA9] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#247DA9] to-[#1a5f82] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Multi-Site Contractor?
              </h3>
              <p className="text-blue-100 mb-6">
                If you manage multiple job sites across the Santa Ynez Valley,
                we can set up a contractor account with simplified billing,
                priority scheduling, and the flexibility to move units between
                sites as your projects evolve.
              </p>
              <ul className="space-y-2 text-blue-100 mb-8">
                <li className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 shrink-0" /> Single invoice for
                  all job sites
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 shrink-0" /> Priority delivery and
                  relocation
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0" /> Volume pricing for
                  multiple units
                </li>
              </ul>
              <a href={SITE.phoneHref}>
                <Button
                  size="lg"
                  className="bg-white text-[#247DA9] hover:bg-blue-50 h-12 px-8 w-full cursor-pointer font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Set Up a Contractor Account
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
                desc: "Our full lineup of standard, deluxe, and specialty portable restrooms for any need.",
              },
              {
                title: "ADA Portable Restrooms",
                href: "/services/ada-portable-restrooms",
                desc: "Wheelchair-accessible units that meet ADA standards for job sites and public projects.",
              },
              {
                title: "Handwashing Stations",
                href: "/services/handwashing-stations",
                desc: "Standalone handwash stations to promote worker hygiene on construction sites.",
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
              Construction Portable Toilet FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about job-site restroom rentals in the Santa Ynez
              Valley.
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
            Keep Your Job Site Compliant and Comfortable
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get OSHA-compliant construction portable toilets delivered to your
            site with weekly servicing included. Request your free quote today
            and we will have your units on site fast.
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
