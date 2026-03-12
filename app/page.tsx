import Link from "next/link"
import { Phone, ArrowRight, CheckCircle, Star, Truck, Shield, Clock, Building2, PartyPopper, Heart, HardHat, Accessibility, Droplets, HandMetal, Sparkles, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/constants"
import { LeadForm } from "@/components/shared/LeadForm"

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, PartyPopper, HardHat, Heart, Accessibility, Droplets, HandMetal, Sparkles,
}

const WHY_US = [
  {
    icon: Sparkles,
    title: "Spotlessly Clean",
    desc: "Every unit is thoroughly sanitized and inspected before each delivery. Our cleaning process exceeds industry standards.",
  },
  {
    icon: Truck,
    title: "Fast, Reliable Delivery",
    desc: "We deliver and pick up on schedule, every time. Same-day delivery available for urgent needs.",
  },
  {
    icon: Shield,
    title: "Locally Owned & Trusted",
    desc: "Based right here in Solvang, we know the Santa Ynez Valley inside and out. Your neighbors trust us.",
  },
  {
    icon: Clock,
    title: "Flexible Rental Terms",
    desc: "From single-day events to long-term construction projects, we offer rental terms that fit your timeline.",
  },
]

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Solvang Wedding",
    text: "Mission Sanitation made our vineyard wedding perfect. The units were incredibly clean and the delivery was right on time. Our guests were impressed!",
    rating: 5,
  },
  {
    name: "Mike T.",
    location: "Santa Ynez Construction",
    text: "We use Mission Sanitation for all our job sites in the valley. Reliable, clean, and they actually show up when they say they will. Great service.",
    rating: 5,
  },
  {
    name: "Lisa K.",
    location: "Buellton Event",
    text: "Needed restrooms for a school fundraiser. They were professional, affordable, and the handwashing stations were a great addition. Highly recommend!",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a5f82] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-blue-100">Serving the Santa Ynez Valley</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Clean, Reliable{" "}
                <span className="text-[#3a9fd4]">Portable Restrooms</span>{" "}
                for Every Occasion
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                From vineyard weddings to construction sites, Mission Sanitation delivers spotless portable restrooms throughout Solvang, Santa Ynez, Buellton, and Los Olivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-a-quote">
                  <Button size="lg" className="bg-[#247DA9] hover:bg-[#1a5f82] text-white h-14 px-8 text-lg w-full sm:w-auto cursor-pointer">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href={SITE.phoneHref}>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg w-full sm:w-auto cursor-pointer">
                    <Phone className="w-5 h-5 mr-2" />
                    {SITE.phone}
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Same-Day Delivery</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> ADA Compliant Units</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Locally Owned</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Get Your Free Quote</h2>
              <p className="text-sm text-slate-500 mb-6">Tell us about your project and we&apos;ll get back to you within hours.</p>
              <LeadForm
                source="homepage"
                showMessage={false}
                showRentalType={false}
                showEventDate={false}
                showQuantity={false}
                buttonText="Get My Free Quote"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Santa Ynez Valley Trusts Mission Sanitation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We&apos;re not just another portable restroom company. We&apos;re your neighbors, committed to keeping the Santa Ynez Valley clean and comfortable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <Card key={item.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#247DA9]" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Portable Restroom Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whatever your sanitation needs, we have the right solution. From standard units to ADA-compliant restrooms and handwashing stations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Building2
              return (
                <Link key={service.href} href={service.href} className="group">
                  <Card className="h-full border-0 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#247DA9]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#247DA9] transition-colors">
                        <Icon className="w-6 h-6 text-[#247DA9] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-[#247DA9] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                      <span className="text-sm font-medium text-[#247DA9] flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-600">Trusted by families, businesses, and event planners across the Santa Ynez Valley</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <Card key={review.name} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-slate-900">{review.name}</div>
                    <div className="text-sm text-slate-500">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews">
              <Button variant="outline" className="cursor-pointer">
                Read More Reviews <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Serving the Entire Santa Ynez Valley
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Based in Solvang, we provide fast delivery and reliable service throughout the valley.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link key={area.href} href={area.href} className="group">
                <Card className="border-0 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#247DA9]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#247DA9] transition-colors">
                      <MapPin className="w-5 h-5 text-[#247DA9] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-[#247DA9] transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-sm text-slate-600">{area.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a weekend wedding, a month-long construction project, or a community festival &mdash; we&apos;ve got you covered. Get your free quote in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote">
              <Button size="lg" className="bg-white text-[#247DA9] hover:bg-blue-50 h-14 px-10 text-lg font-semibold w-full sm:w-auto cursor-pointer">
                Request a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href={SITE.phoneHref}>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
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
