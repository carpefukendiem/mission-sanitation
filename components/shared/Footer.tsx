import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA banner */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image src="/images/vineyard-landscape.jpg" alt="Santa Ynez Valley" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#247DA9]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need Portable Restrooms? Get a Free Quote Today
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Fast delivery, spotless units, and reliable service throughout the Santa Ynez Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#247DA9] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.webp"
                alt="Mission Sanitation"
                width={200}
                height={55}
                className="h-11 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-400 mb-4">
              The Santa Ynez Valley&apos;s trusted portable restroom provider. Clean units, reliable service, and fast delivery for events, construction, and more.
            </p>
            <div className="space-y-2 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#247DA9]" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#247DA9]" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#247DA9] mt-0.5 shrink-0" />
                <span>{SITE.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="hover:text-white transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mt-6 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Hours & CTA */}
          <div>
            <h3 className="font-semibold text-white mb-4">Business Hours</h3>
            <div className="text-sm space-y-1 mb-6">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">7:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Emergency service available &mdash; call anytime
              </p>
            </div>
            <Link
              href="/request-a-quote"
              className="block w-full text-center px-6 py-3 bg-[#247DA9] text-white font-semibold rounded-lg hover:bg-[#1a5f82] transition-colors text-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Mission Sanitation. All rights reserved.</p>
          <p>
            Proudly serving Solvang, Santa Ynez, Buellton, Los Olivos &amp; the Santa Ynez Valley
          </p>
        </div>
      </div>
    </footer>
  )
}
