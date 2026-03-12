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
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      if (key === "serviceType") {
        data[key] = data[key] ? `${data[key]}, ${value}` : String(value)
      } else {
        data[key] = String(value)
      }
    })
    data.source = source
    data._t = mountTime ? String(mountTime) : ""

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
        <Input name="company" placeholder="Event Planner, Contractor, Winery, School, etc." className="h-12" />
      </div>

      {showServiceType && (
        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 block">Service Type * <span className="text-xs font-normal text-slate-500">(select all that apply)</span></label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { value: "portable-restroom-rental", label: "Portable Restroom Rental" },
              { value: "event-restroom-rental", label: "Event Portable Restrooms" },
              { value: "construction-restroom-rental", label: "Construction Portable Toilets" },
              { value: "ada-restroom-rental", label: "ADA Portable Restrooms" },
              { value: "restrooms-with-sinks", label: "Restrooms with Sinks" },
              { value: "handwashing-stations", label: "Handwashing Stations" },
              { value: "service-request", label: "Existing Customer Service" },
              { value: "other", label: "Other" },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 px-3 py-2.5 border border-input rounded-md bg-white hover:bg-slate-50 cursor-pointer text-sm transition-colors has-[:checked]:border-[#247DA9] has-[:checked]:bg-[#247DA9]/5">
                <input type="checkbox" name="serviceType" value={opt.value} className="accent-[#247DA9] w-4 h-4 shrink-0" />
                <span className="text-slate-700">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {showRentalType && (
        <div>
          <label htmlFor="rentalType" className="text-sm font-medium text-slate-700 mb-1 block">Rental Type</label>
          <select id="rentalType" name="rentalType" className={selectClasses} defaultValue="">
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
          <label htmlFor="serviceArea" className="text-sm font-medium text-slate-700 mb-1 block">Service Area *</label>
          <select id="serviceArea" name="serviceArea" className={selectClasses} required defaultValue="">
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
        <label htmlFor="rentalDuration" className="text-sm font-medium text-slate-700 mb-1 block">Rental Duration</label>
        <select id="rentalDuration" name="rentalDuration" className={selectClasses} defaultValue="">
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

      <p className="text-xs text-slate-500 text-center">
        No spam, ever. Your information is only used to provide your quote or service response.
      </p>
    </form>
  )
}
