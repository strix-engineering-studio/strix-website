import { PageShell } from "@/components/shared/page-shell"
import { ContactForm } from "@/components/contact/contact-form"

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="A premium contact experience for serious product conversations."
      description="Share the stage, scope, and timeline. The form is wired for lead capture, and the backend route is ready for persistence." 
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4 rounded-[30px] border border-white/10 bg-white/5 p-5">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">What happens next</p>
          <div className="space-y-3 text-sm leading-7 text-white/68">
            <p>1. I review the brief and product context.</p>
            <p>2. We align on architecture, scope, and delivery window.</p>
            <p>3. If the fit is right, we move into a focused discovery phase.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-sm text-white/62">
            Preferred for founders, product teams, and businesses shipping something important.
          </div>
        </div>
        <ContactForm />
      </div>
    </PageShell>
  )
}
