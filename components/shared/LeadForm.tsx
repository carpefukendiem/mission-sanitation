"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"

interface LeadFormProps {
  source: string
  showMessage?: boolean
  showServiceType?: boolean
  showRentalType?: boolean
  showServiceArea?: boolean
  showEventDate?: boolean
  showQuantity?: boolean
  buttonText?: string
  className?: string
}

export function LeadForm({
  source,
  showMessage = true,
  showServiceType = true,
  showRentalType = true,
  showServiceArea = true,
  showEventDate = true,
  showQuantity = true,
  buttonText = "Request a Quote",
  className = "",
}: LeadFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [mountTime, setMountTime] = useState<number | null>(null)

  useEffect(() => {
    setMountTime(Date.now())
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    ;(data as Record<string, string>).source = source
    ;(data as Record<string, string>)._t = mountTime ? String(mountTime) : ""

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    } catch {
      // fail silently
    }
    router.push("/thank-you")
  }

  const selectClasses =
    "w-full h-12 px-3 border border-input rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <input
        name="_hp"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Your Name *</label>
        <Input name="name" placeholder="John Smith" className="h-12" required />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Email Address *</label>
        <Input type="email" name="email" placeholder="john@example.com" className="h-12" required />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Phone Number *</label>
        <Input type="tel" name="phone" placeholder="(805) 555-0123" className="h-12" required />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Company / Organization</label>
        <Input name="company" placeholder="Wedding Planner, Contractor, Winery, School, etc." className="h-12" />
      </div>

      {showServiceType && (
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Service Type *</label>
          <select name="serviceType" className={selectClasses} required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="portable-restroom-rental">Portable Restroom Rental</option>
            <option value="event-restroom-rental">Event Portable Restroom Rental</option>
            <option value="construction-restroom-rental">Construction Portable Toilets</option>
            <option value="wedding-restroom-rental">Wedding Restroom Rentals</option>
            <option value="ada-restroom-rental">ADA Portable Restrooms</option>
            <option value="restrooms-with-sinks">Portable Restrooms with Sinks</option>
            <option value="handwashing-stations">Handwashing Stations</option>
            <option value="service-request">Existing Customer Service Request</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      {showRentalType && (
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Rental Type</label>
          <select name="rentalType" className={selectClasses} defaultValue="">
            <option value="">Select rental type</option>
            <option value="standard-unit">Standard Unit</option>
            <option value="deluxe-unit">Deluxe Unit</option>
            <option value="ada-unit">ADA Unit</option>
            <option value="unit-with-sink">Unit With Sink</option>
            <option value="handwash-station">Handwash Station</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
        </div>
      )}

      {showServiceArea && (
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Service Area *</label>
          <select name="serviceArea" className={selectClasses} required defaultValue="">
            <option value="" disabled>Select your area</option>
            <option value="santa-ynez-valley">Santa Ynez Valley</option>
            <option value="solvang">Solvang</option>
            <option value="santa-ynez">Santa Ynez</option>
            <option value="buellton">Buellton</option>
            <option value="los-olivos">Los Olivos</option>
            <option value="other-santa-barbara-county">Other Santa Barbara County Area</option>
          </select>
        </div>
      )}

      {showEventDate && (
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Event / Delivery Date</label>
          <Input type="date" name="eventDate" className="h-12" />
        </div>
      )}

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Delivery Address</label>
        <Input name="deliveryAddress" placeholder="Street address or venue/job site location" className="h-12" />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Rental Duration</label>
        <select name="rentalDuration" className={selectClasses} defaultValue="">
          <option value="">Select duration</option>
          <option value="1-day">1 Day</option>
          <option value="weekend">Weekend</option>
          <option value="1-week">1 Week</option>
          <option value="2-weeks">2 Weeks</option>
          <option value="1-month-plus">1 Month+</option>
          <option value="ongoing">Ongoing / Recurring</option>
        </select>
      </div>

      {showQuantity && (
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Estimated Quantity Needed</label>
          <Input name="quantityNeeded" placeholder="Example: 2 units" className="h-12" />
        </div>
      )}

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Need Handwashing Stations?</label>
        <select name="handwashNeeded" className={selectClasses} defaultValue="">
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="not-sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Need an ADA Unit?</label>
        <select name="adaNeeded" className={selectClasses} defaultValue="">
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="not-sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 mb-1 block">Existing Customer?</label>
        <select name="existingCustomer" className={selectClasses} defaultValue="">
          <option value="">Select an option</option>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {showMessage && (
        <div>
          <label className="text-sm font-medium text-slate-700 mb-1 block">Project Details</label>
          <textarea
            name="message"
            placeholder="Tell us about your event, job site, guest count, location details, or anything else we should know..."
            className="w-full px-3 py-3 border border-input rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={4}
          />
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full h-12 text-lg mt-2 cursor-pointer">
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>

      <p className="text-xs text-slate-400 text-center">
        No spam, ever. Your information is only used to provide your quote or service response.
      </p>
    </form>
  )
}
