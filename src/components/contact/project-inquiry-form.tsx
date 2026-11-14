"use client";

import { useState } from "react";
import { CheckCircle2, FileUp, Mail, Phone, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Proof of Concept (POC)",
  "Minimum Viable Product (MVP)",
  "Full Product Engineering",
  "Web Application Development",
  "Mobile Application Development",
  "AI Product Engineering",
  "Backend & Cloud Systems",
  "Product Modernization",
  "Other",
];

const currentStages = [
  "Idea / Conceptual",
  "Validated Hypothesis / Wireframes",
  "Existing Prototype",
  "Production Product Needing Scale",
  "Legacy System Needing Modernization",
];

const designReadinessOptions = [
  "Architecture & PRD docs ready",
  "Figma / Wireframes ready",
  "Existing live product",
  "No design yet (Need discovery)",
];

const platformOptions = [
  "Web Application",
  "Mobile (iOS & Android)",
  "Backend APIs",
  "Admin & Ops Portal",
  "AI Workflow / Pipeline",
  "Cloud Infrastructure",
];

const featureOptions = [
  "Authentication & RBAC",
  "Payment Gateway (Razorpay/Stripe)",
  "Real-time Updates / WebSockets",
  "Push Notifications (FCM)",
  "AI / LLM Orchestration",
  "File Uploads & Media Processing",
  "Third-Party API Integrations",
  "Automated Background Workflows",
];

const budgetOptions = [
  "Under $5,000 / ₹2L",
  "$5,000 – $15,000 / ₹2L – ₹5L",
  "$15,000 – $30,000 / ₹5L – ₹10L",
  "$30,000+ / ₹10L+",
  "Flexible / To Be Scoped",
];

const timelineOptions = [
  "Immediate / ASAP (1-2 weeks)",
  "Within 1 Month",
  "1 to 3 Months",
  "Flexible / Long-Term",
];

type AttachmentSummary = { name: string; type: string; size: number };

export function ProjectInquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const selectedPlatforms = formData.getAll("platformsRequired").map(String);
    const attachments = Array.from(formData.getAll("attachments"))
      .filter((item): item is File => item instanceof File && item.size > 0)
      .map<AttachmentSummary>((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
      }));

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      emailAddress: String(formData.get("emailAddress") || ""),
      whatsappNumber: String(formData.get("whatsappNumber") || ""),
      companyName: String(formData.get("companyName") || ""),
      country: String(formData.get("country") || ""),
      preferredCommunication: String(formData.get("preferredCommunication") || ""),
      websiteProductLink: String(formData.get("websiteProductLink") || ""),
      projectOverview: String(formData.get("projectOverview") || ""),
      projectType: String(formData.get("projectType") || ""),
      currentStage: String(formData.get("currentStage") || ""),
      designReadiness: String(formData.get("designReadiness") || ""),
      referenceLinks: String(formData.get("referenceLinks") || ""),
      platformsRequired: selectedPlatforms,
      featuresRequired: formData.getAll("featuresRequired").map(String),
      importantRequirements: String(
        formData.get("importantRequirements") || "",
      ),
      estimatedBudget: String(formData.get("estimatedBudget") || ""),
      expectedTimeline: String(formData.get("expectedTimeline") || ""),
      decisionMaker: String(formData.get("decisionMaker") || "Yes"),
      attachments,
      anythingElse: String(formData.get("anythingElse") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus(response.ok ? "success" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10"
    >
      {/* 01. Contact Details */}
      <FormSection
        step="01"
        title="Contact & Team"
        description="Who should our engineering leads respond to?"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField
            label="Full Name *"
            name="fullName"
            placeholder="e.g. Alex Morgan"
            required
          />
          <TextField
            label="Email Address *"
            name="emailAddress"
            placeholder="alex@company.com"
            type="email"
            required
            icon={<Mail className="size-4 text-muted-foreground" />}
          />
          <TextField
            label="WhatsApp or Phone Number (if preferred)"
            name="whatsappNumber"
            placeholder="+91 98765 43210 / +1 555-0123"
            type="tel"
            icon={<Phone className="size-4 text-muted-foreground" />}
          />
          <TextField
            label="Company or Team Name"
            name="companyName"
            placeholder="e.g. Acme Health or Stealth AI"
          />
          <TextField
            label="Country"
            name="country"
            placeholder="Your country"
            autoComplete="country-name"
          />
          <label className="block space-y-2 text-xs font-medium text-foreground">
            <span>Preferred contact method</span>
            <select
              name="preferredCommunication"
              defaultValue="Email"
              className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            >
              <option>Email</option>
              <option>Phone</option>
              <option>WhatsApp</option>
            </select>
          </label>
          <div className="sm:col-span-2">
            <TextField
              label="Existing Website or Product Link (if applicable)"
              name="websiteProductLink"
              placeholder="https://..."
            />
          </div>
        </div>
      </FormSection>

      {/* 02. Project Intent */}
      <FormSection
        step="02"
        title="Project Overview & Intent"
        description="What are you building and what business problem does it solve?"
      >
        <div className="space-y-5">
          <TextareaField
            label="Project Description *"
            name="projectOverview"
            required
            rows={4}
            placeholder="Describe your system, product, workflow, or idea. What problem does it solve, and who are the core users?"
          />

          <RadioField
            label="Project Classification *"
            name="projectType"
            options={projectTypes}
            required
          />

          <RadioField
            label="Current Development Stage"
            name="currentStage"
            options={currentStages}
          />

          <RadioField
            label="Design & Documentation Readiness"
            name="designReadiness"
            options={designReadinessOptions}
          />

          <TextField
            label="Reference Links or Competitors (optional)"
            name="referenceLinks"
            placeholder="Links to design references, competitors, or video walkthroughs"
          />
        </div>
      </FormSection>

      {/* 03. Technical Requirements */}
      <FormSection
        step="03"
        title="Scope & Technical Stack"
        description="Select the platforms and capabilities needed."
      >
        <div className="space-y-5">
          <CheckboxField
            label="Platforms Required (Select all that apply) *"
            name="platformsRequired"
            options={platformOptions}
            required
          />

          <CheckboxField
            label="Required Capabilities & Features"
            name="featuresRequired"
            options={featureOptions}
          />

          <TextareaField
            label="Key Technical Requirements or Constraints"
            name="importantRequirements"
            rows={2}
            placeholder="e.g. Must run on HIPAA compliant cloud, sub-50ms latency, specific payment gateway, or mobile offline mode."
          />
        </div>
      </FormSection>

      {/* 04. Timeline & Budget */}
      <FormSection
        step="04"
        title="Timeline & Budget"
        description="Helps us scope the team and delivery milestones accurately."
      >
        <div className="space-y-5">
          <RadioField
            label="Estimated Budget Range"
            name="estimatedBudget"
            options={budgetOptions}
          />

          <RadioField
            label="Target Launch Timeline"
            name="expectedTimeline"
            options={timelineOptions}
          />

          <TextareaField
            label="Anything else we should know?"
            name="anythingElse"
            rows={2}
            placeholder="Upcoming investor pitches, regulatory deadlines, or team handover preferences."
          />
        </div>
      </FormSection>

      {/* Form Submission Controls */}
      <div className="border-t border-border pt-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground text-center sm:text-left">
            Your project details are used to respond to this inquiry.
          </p>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
          >
            {status === "sending" ? (
              <span>Submitting inquiry...</span>
            ) : (
              <>
                <span>Submit project inquiry</span>
                <Send className="size-3.5" />
              </>
            )}
          </button>
        </div>

        {status === "success" && (
          <div className="mt-4 flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-4 shrink-0" />
            <span>
              Thank you! Your inquiry has been received. We’ll review the details and follow up using your preferred contact method.
            </span>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-4 text-xs font-medium text-destructive">
            We couldn’t submit your inquiry. Please try again, or email your project details to <a className="underline" href="mailto:team@strix.website">team@strix.website</a>.
          </div>
        )}
      </div>
    </form>
  );
}

function FormSection({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border/80 pb-8 last:border-b-0 last:pb-0">
      <div className="mb-5 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
            [{step}]
          </span>
          <h3 className="editorial-serif text-xl font-normal text-foreground sm:text-2xl">
            {title}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

function TextField({
  label,
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <label className="block space-y-2 text-xs font-medium text-foreground">
      <span>{label}</span>
      <div className="flex items-center gap-2.5 rounded-md border border-border bg-background px-3.5 py-2.5 transition-colors focus-within:border-primary">
        {icon}
        <input
          {...props}
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
        />
      </div>
    </label>
  );
}

function TextareaField({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="block space-y-2 text-xs font-medium text-foreground">
      <span>{label}</span>
      <textarea
        {...props}
        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </label>
  );
}

function RadioField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset className="space-y-2.5">
      <legend className="text-xs font-medium text-foreground">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="cursor-pointer rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-muted-foreground transition-all hover:border-border/80 hover:text-foreground has-checked:border-primary has-checked:bg-primary/10 has-checked:text-primary font-medium"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              className="sr-only"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset className="space-y-2.5">
      <legend className="text-xs font-medium text-foreground">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="cursor-pointer rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-muted-foreground transition-all hover:border-border/80 hover:text-foreground has-checked:border-primary has-checked:bg-primary/10 has-checked:text-primary font-medium"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              className="sr-only"
              aria-required={required || undefined}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
