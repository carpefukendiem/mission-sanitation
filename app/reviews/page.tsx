import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what customers are saying about Mission Sanitation. 5-star portable restroom rental service trusted by event planners, contractors, and event organizers in the Santa Ynez Valley.",
}

const REVIEWS = [
  {
    name: "Sarah M.",
    role: "Event Coordinator",
    location: "Solvang",
    text: "I recommend Mission Sanitation to every client I work with. The units they provided for a vineyard event last month were immaculate — guests actually complimented the restrooms. That never happens. Delivery was right on time, and the team was incredibly easy to coordinate with.",
    rating: 5,
  },
  {
    name: "Mike T.",
    role: "General Contractor",
    location: "Santa Ynez",
    text: "We have used Mission Sanitation on three different job sites this year and they have been flawless every time. The units are always clean when they arrive, servicing is on schedule, and their pricing is straightforward. No surprises. That is all you can ask for.",
    rating: 5,
  },
  {
    name: "Lisa K.",
    role: "Event Coordinator",
    location: "Buellton",
    text: "We organized a community fundraiser with over 400 attendees and Mission Sanitation handled everything. They helped us figure out how many units we needed, delivered early, and even added extra handwashing stations. The whole process was stress-free.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Winery Owner",
    location: "Los Olivos",
    text: "Running a winery means hosting events almost every weekend during harvest season. We needed a sanitation partner who could keep up and maintain a standard that matches our property. Mission Sanitation delivers every time — literally and figuratively.",
    rating: 5,
  },
  {
    name: "Jennifer P.",
    role: "School Administrator",
    location: "Solvang",
    text: "We rented portable restrooms for our school's outdoor graduation ceremony. The units were spotless, the ADA unit was perfect for accessibility, and they picked everything up the next morning as promised. Very professional from start to finish.",
    rating: 5,
  },
  {
    name: "Carlos G.",
    role: "Construction Foreman",
    location: "Buellton",
    text: "I have dealt with a lot of portable restroom companies over the years, and Mission Sanitation is at the top. They actually service the units on the schedule they promise. My crew notices the difference and I do not have to chase anyone down. Highly recommend.",
    rating: 5,
  },
  {
    name: "Amanda W.",
    role: "Event Planner",
    location: "Santa Ynez",
    text: "For a ranch event with 200 guests, we needed units that would blend in and stay clean all evening. Mission Sanitation nailed it. They even came by mid-event for a quick check without us asking. That kind of attention to detail sets them apart.",
    rating: 5,
  },
  {
    name: "Tom & Linda H.",
    role: "Homeowners",
    location: "Los Olivos",
    text: "We were doing a major home renovation and needed a portable restroom for our contractors for about two months. Mission Sanitation made it easy — quick setup, weekly servicing, and a fair monthly rate. Would absolutely use them again.",
    rating: 5,
  },
  {
    name: "Rachel S.",
    role: "Festival Organizer",
    location: "Santa Ynez Valley",
    text: "Coordinating restrooms for a two-day outdoor festival is no small task. Mission Sanitation worked with us on placement, quantity, and servicing logistics. Everything went smoothly and we received zero complaints from attendees. That is the best review I can give.",
    rating: 5,
  },
  {
    name: "Brian D.",
    role: "Property Manager",
    location: "Solvang",
    text: "I manage several commercial properties and have used Mission Sanitation for tenant improvement projects. They are reliable, responsive, and their units are always in great condition. Communication is excellent — they keep me informed without me having to ask.",
    rating: 5,
  },
]

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        <div className="absolute inset-0">
          <Image src="/images/outdoor-event.jpg" alt="Santa Ynez Valley event" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-[#1a5f82]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from the event planners, contractors, event organizers, and families who trust Mission Sanitation.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <Card key={review.name} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-slate-100 pt-3">
                    <div className="font-semibold text-slate-900">{review.name}</div>
                    <div className="text-sm text-[#247DA9]">{review.role}</div>
                    <div className="text-sm text-slate-500">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#247DA9] to-[#1a5f82] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to See Why We&apos;re 5 Stars?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied customers across the Santa Ynez Valley. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote">
              <Button size="lg" className="bg-white text-[#247DA9] hover:bg-blue-50 h-14 px-10 text-lg font-semibold w-full sm:w-auto cursor-pointer">
                Request a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href={SITE.phoneHref}>
              <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 h-14 px-10 text-lg w-full sm:w-auto cursor-pointer">
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
