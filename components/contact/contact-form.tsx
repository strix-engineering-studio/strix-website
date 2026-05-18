"use client"

import { useState, type ReactNode } from "react"
import { CheckCircle2, Mail, Rocket } from "lucide-react"
import { budgetBands, contactCategories, timelineBands } from "@/lib/site"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [selectedCategory, setSelectedCategory] = useState(contactCategories[0])
  const [selectedBudget, setSelectedBudget] = useState(budgetBands[1])
  const [selectedTimeline, setSelectedTimeline] = useState(timelineBands[1])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const formData = new FormData(event.currentTarget)
    formData.set("category", selectedCategory)
    formData.set("budget", selectedBudget)
    formData.set("timeline", selectedTimeline)

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { "Content-Type": "application/json" },
    })

    setStatus(response.ok ? "success" : "error")
    if (response.ok) event.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input label="Name" name="name" placeholder="Your name" />
        <Input label="Email" name="email" placeholder="you@company.com" type="email" icon={<Mail className="size-4 text-white/40" />} />
      </div>
      <Input label="Company" name="company" placeholder="Company or startup" />

      <div className="grid gap-4 lg:grid-cols-2">
        <FieldGroup label="Inquiry category">
          <ChipGroup options={contactCategories} value={selectedCategory} onChange={setSelectedCategory} />
        </FieldGroup>
        <FieldGroup label="Budget">
          <ChipGroup options={budgetBands} value={selectedBudget} onChange={setSelectedBudget} />
        </FieldGroup>
      </div>

      <FieldGroup label="Timeline">
        <ChipGroup options={timelineBands} value={selectedTimeline} onChange={setSelectedTimeline} />
      </FieldGroup>

      <FieldGroup label="Project brief">
        <textarea
          name="brief"
          rows={6}
          placeholder="What are you building, what stage are you at, and what does success look like?"
          className="w-full rounded-3xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
        />
      </FieldGroup>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-300 disabled:opacity-60"
        disabled={status === "sending"}
      >
        <Rocket className="size-4" />
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>

      {status === "success" ? (
        <p className="flex items-center gap-2 text-sm text-emerald-200">
          <CheckCircle2 className="size-4" />
          Message sent. I’ll get back to you shortly.
        </p>
      ) : null}
      {status === "error" ? <p className="text-sm text-red-300">Something went wrong. Please try again or email directly.</p> : null}
    </form>
  )
}

function Input({ label, icon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; icon?: ReactNode }) {
  return (
    <label className="space-y-2 text-sm text-white/70">
      <span>{label}</span>
      <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/25 px-4 py-3">
        {icon}
        <input {...props} className="w-full bg-transparent text-white outline-none placeholder:text-white/35" />
      </div>
    </label>
  )
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-white/70">{label}</p>
      {children}
    </div>
  )
}

function ChipGroup({ options, value, onChange }: { options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition",
            value === option ? "border-emerald-300/25 bg-emerald-300/12 text-emerald-100" : "border-white/10 bg-white/5 text-white/65 hover:bg-white/8"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
