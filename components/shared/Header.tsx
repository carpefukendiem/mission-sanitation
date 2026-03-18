"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE, NAV_LINKS } from "@/lib/constants"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const logoSrc = "/images/Mission%20Sanitation%20logo.webp"

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1a5f82] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span className="hidden sm:inline">Serving the Santa Ynez Valley &mdash; Solvang, Santa Ynez, Buellton &amp; Los Olivos</span>
          <span className="sm:hidden text-xs">Serving the Santa Ynez Valley</span>
          <a href={SITE.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-blue-200 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-[#247DA9] rounded-lg overflow-hidden">
              <Image
                src={logoSrc}
                alt="Mission Sanitation"
                fill
                sizes="(max-width: 1024px) 40px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg lg:text-xl text-slate-900 leading-tight">Mission Sanitation</div>
              <div className="text-xs text-slate-500 leading-tight">Portable Restroom Rentals</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const hasChildren = "children" in link
              return (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#247DA9] transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {hasChildren && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {hasChildren && "children" in link && openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-[260px] z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#247DA9] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={SITE.phoneHref} className="text-sm font-semibold text-[#247DA9] hover:text-[#1a5f82] transition-colors flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Link href="/request-a-quote">
              <Button className="bg-[#247DA9] hover:bg-[#1a5f82] text-white cursor-pointer">
                Request a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 max-h-[80vh] overflow-y-auto">
            <nav className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const hasChildren = "children" in link
                return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-[#247DA9] hover:bg-slate-50 rounded-md transition-colors"
                    onClick={() => !hasChildren && setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {hasChildren && "children" in link && (
                    <div className="ml-4 border-l-2 border-slate-100 pl-3 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-[#247DA9] hover:bg-slate-50 rounded-md transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )})}
            </nav>
            <div className="px-4 pb-4 space-y-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 rounded-lg text-[#247DA9] font-semibold"
              >
                <Phone className="w-5 h-5" />
                {SITE.phone}
              </a>
              <Link href="/request-a-quote" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#247DA9] hover:bg-[#1a5f82] text-white h-12 text-base cursor-pointer">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
