import { useState, type FormEvent, type ReactNode } from "react";

export function Inquiry() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const L = ({ label, children }: { label: string; children: ReactNode }) => (
    <label className="block text-sm"><span className="mb-1.5 block text-muted-foreground">{label}</span>{children}</label>
  );
  return (
    <section id="inquire" className="mx-auto max-w-3xl px-6 py-24">
      <p className="eyebrow text-center text-muted-foreground">Inquire</p>
      <h2 className="mt-3 text-center text-4xl md:text-5xl">Request a Proposal</h2>
      {sent ? (
        <div className="mt-10 border border-border bg-card p-10 text-center">
          <p className="font-display text-3xl">Cheers, we've got it.</p>
          <p className="mt-3 text-muted-foreground">Thank you for your inquiry. We'll be in touch shortly with your proposal.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 grid gap-5 md:grid-cols-2">
          <L label="Name"><input required maxLength={100} className="field" /></L>
          <L label="Email"><input required type="email" maxLength={255} className="field" /></L>
          <L label="Phone"><input required type="tel" maxLength={30} className="field" /></L>
          <L label="Event type">
            <select required className="field" defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Wedding</option><option>Private event</option><option>Corporate event</option><option>Other</option>
            </select>
          </L>
          <L label="Event date"><input required type="date" className="field" /></L>
          <L label="Venue / city"><input maxLength={150} className="field" /></L>
          <L label="Guest count"><input type="number" min={1} className="field" /></L>
          <L label="Start – end time"><input placeholder="e.g. 5pm – 10pm" maxLength={50} className="field" /></L>
          <L label="Bar budget"><input placeholder="e.g. $2,000" maxLength={50} className="field" /></L>
          <L label="How did you hear about us?">
            <select className="field" defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Google</option><option>Instagram</option><option>Referral</option><option>Venue / planner</option><option>Other</option>
            </select>
          </L>
          <div className="md:col-span-2"><L label="Special requests"><textarea rows={4} maxLength={1000} className="field" /></L></div>
          <button className="bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90 md:col-span-2">
            Request a Proposal
          </button>
        </form>
      )}
    </section>
  );
}
