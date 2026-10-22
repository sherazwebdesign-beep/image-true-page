import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

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
          <p className="font-display text-3xl">Thank you for trying the inquiry form.</p>
          <p className="mt-3 text-muted-foreground">This is a demo. Your details have not been sent or saved.</p>
          <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>Back to form</Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 grid gap-5 md:grid-cols-2">
          <L label="First Name"><input required maxLength={100} className="field" /></L>
          <L label="Last Name"><input required maxLength={100} className="field" /></L>
          <L label="Email"><input required type="email" maxLength={255} className="field" /></L>
          <L label="Phone"><input required type="tel" maxLength={30} className="field" /></L>
          <L label="What Are You Planning?">
            <select required className="field" defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Wedding</option><option>Private event</option><option>Corporate event</option><option>Other</option>
            </select>
          </L>
          <L label="Event date"><input required type="date" className="field" /></L>
          <L label="Location of Event"><input required maxLength={150} className="field" /></L>
          <L label="Est. Number of Guests"><input required type="number" min={1} className="field" /></L>
          <L label="Start Time"><input type="time" className="field" /></L>
          <L label="End Time"><input type="time" className="field" /></L>
          <Button className="h-12 rounded-none md:col-span-2">
            Request a Proposal
          </Button>
        </form>
      )}
    </section>
  );
}
