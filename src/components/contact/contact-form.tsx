"use client"

import { useState, type ReactNode } from "react"
import { CheckCircle2, Mail, Paperclip, Rocket } from "lucide-react"
import { budgetBands, timelineBands } from "@/lib/site"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [selectedBudget, setSelectedBudget] = useState(budgetBands[1])
  const [selectedTimeline, setSelectedTimeline] = useState(timelineBands[1])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const formData = new FormData(event.currentTarget)
    formData.set("budget", selectedBudget)
    formData.set("timeline", selectedTimeline)

    const attachmentInput = event.currentTarget.elements.namedItem("attachments") as HTMLInputElement | null
    const attachments = Array.from(attachmentInput?.files ?? []).map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
    }))

    if (attachments.length > 0) {
      formData.set("attachments", JSON.stringify(attachments))
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { "Content-Type": "application/json" },
    })

    setStatus(response.ok ? "success" : "error")
    if (response.ok) event.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input label="Name" name="name" placeholder="Your name" />
        <Input label="Email" name="email" placeholder="you@company.com" type="email" icon={<Mail className="size-4 text-foreground/40" />} required />
      </div>
      <Input label="Company" name="company" placeholder="Organization or team" />

      <FieldGroup label="Project summary">
        <textarea
          name="projectSummary"
          rows={5}
          placeholder="What are you building, what outcome matters, and what is the current constraint?"
          className="w-full rounded-[10px] border border-black/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none placeholder:text-foreground/35 dark:border-white/10"
        />
      </FieldGroup>

      <div className="grid gap-4 sm:grid-cols-2">
        <FieldGroup label="Budget">
          <ChipGroup options={budgetBands} value={selectedBudget} onChange={setSelectedBudget} />
        </FieldGroup>
        <FieldGroup label="Timeline">
          <ChipGroup options={timelineBands} value={selectedTimeline} onChange={setSelectedTimeline} />
        </FieldGroup>
      </div>

      <details className="rounded-[10px] border border-black/10 bg-background/70 p-4 dark:border-white/10">
        <summary className="cursor-pointer list-none text-sm font-medium text-foreground">Add technical notes</summary>
        <div className="mt-4 space-y-3">
          <FieldGroup label="Technical requirements">
            <textarea
              name="technicalRequirements"
              rows={4}
              placeholder="Optional constraints, platforms, integrations, or implementation notes."
              className="w-full rounded-[10px] border border-black/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none placeholder:text-foreground/35 dark:border-white/10"
            />
          </FieldGroup>
          <label className="flex items-center gap-3 rounded-[10px] border border-black/10 bg-background/80 px-4 py-3 text-sm text-foreground/70 dark:border-white/10">
            <Paperclip className="size-4 text-foreground/40" />
            <input type="file" name="attachments" multiple className="w-full text-sm text-foreground/70 file:mr-4 file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-xs file:font-medium file:text-foreground hover:file:bg-primary/15" />
          </label>
        </div>
      </details>

      <FieldGroup label="Short context">
        <textarea
          name="brief"
          rows={4}
          placeholder="Anything else that would help qualify the fit?"
          className="w-full rounded-[10px] border border-black/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none placeholder:text-foreground/35 dark:border-white/10"
        />
      </FieldGroup>

      <button type="submit" className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:-translate-y-0.5 disabled:opacity-60" disabled={status === "sending"}>
        <Rocket className="size-4" />
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "success" ? (
        <p className="flex items-center gap-2 text-sm text-foreground">
          <CheckCircle2 className="size-4" />
          Message sent. I’ll get back to you shortly.
        </p>
      ) : null}
      {status === "error" ? <p className="text-sm text-primary">Something went wrong. Please try again or email directly.</p> : null}
    </form>
  )
}

function Input({ label, icon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; icon?: ReactNode }) {
  return (
    <label className="space-y-2 text-sm text-foreground/70">
      <span>{label}</span>
      <div className="flex items-center gap-3 rounded-[10px] border border-black/10 bg-background/80 px-4 py-3 dark:border-white/10">
        {icon}
        <input {...props} className="w-full bg-transparent text-foreground outline-none placeholder:text-foreground/35" />
      </div>
    </label>
  )
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-foreground/70">{label}</p>
      {children}
    </div>
  )
}

function ChipGroup({ options, value, onChange }: { options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button key={option} type="button" onClick={() => onChange(option)} className={value === option ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition" : "rounded-full border border-black/10 bg-background/70 px-4 py-2 text-sm text-foreground/70 transition hover:border-primary/30 dark:border-white/10"}>
          {option}
        </button>
      ))}
    </div>
  )
}
