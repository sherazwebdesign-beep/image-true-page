import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Prost Co. | Mobile Bartending in Los Angeles & Ventura County" },
      {
        name: "description",
        content:
          "Mobile bartending for weddings, private and corporate events in Los Angeles and Ventura County. Custom cocktail menus, professional bartenders. Request a proposal.",
      },
      { property: "og:title", content: "The Prost Co. | LA Mobile Bartending" },
      {
        property: "og:description",
        content: "Where imagination meets the glass. Wedding, private and corporate event bartending in LA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const packages = [
  {
    name: "The Essential Bar",
    price: "$1,250",
    for: "Smaller gatherings",
    desc: "A polished, professional bar service for intimate celebrations.",
  },
  {
    name: "The Signature Experience",
    price: "$1,950",
    for: "Weddings & upscale events",
    desc: "Custom cocktail menus, staffing, presentation and pre-event coordination.",
    featured: true,
  },
  {
    name: "The Prost Reserve",
    price: "$2,750",
    for: "High-end weddings, estates & corporate",
    desc: "Enhanced presentation, personalized menus and full coordination.",
  },
];

const steps = [
  ["Request a proposal", "Share your date, venue and guest count using the short form below."],
  ["Plan your menu", "We personalize your cocktails and bar setup around your vision."],
  ["Confirm & coordinate", "We lock in the details and coordinate ahead of the day."],
  ["Celebrate", "Our team arrives, sets up and serves. You enjoy your guests. Prost!"],
];

const faqs = [
  ["Do you provide the alcohol?", "No. We are a dry-hire service: you supply the alcohol, and we bring the bartending expertise, menu design and presentation."],
  ["Where do you serve?", "We primarily serve the Los Angeles and Ventura County areas, but are available to travel to your next event."],
  ["What events do you work?", "Weddings, corporate events and private gatherings: give us the occasion, and we'll be there to celebrate with you."],
  ["Can you create custom cocktails?", "Yes. We personalize each event and craft every glass just as you've imagined."],
  ["When do I need a custom quote?", "Large guest counts, multiple bars, extended hours or travel outside our core area are quoted individually."],
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-primary-foreground">
          <a href="#" className="font-display text-xl tracking-wide">The Prost Co.</a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#packages">Packages</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#inquire" className="border border-primary-foreground/60 px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary">
            Request a Proposal
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-end">
        <img src={hero} alt="Bartender pouring a cocktail at an LA wedding" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 text-primary-foreground">
          <p className="eyebrow text-gold">Mobile Bartending · Los Angeles & Ventura County</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Where imagination <em>meets the glass</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">
            Elevated bar service for weddings, corporate events and private gatherings.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#inquire" className="bg-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90">Request a Proposal</a>
            <a href="#packages" className="border border-primary-foreground/60 px-7 py-3.5 text-sm">View Packages</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[auto_1fr] md:items-center">
        <img src={logo} alt="The Prost Co. logo" width={162} height={146} className="mx-auto w-36" loading="lazy" />
        <div>
          <p className="eyebrow text-muted-foreground">Welcome</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Give us the occasion, and we'll be there to celebrate with you.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We are a mobile bartending service dedicated to elevating your event in every way possible. With over 10 years of
            hospitality experience, we know how to elevate your guests' experience. We personalize each event we take on and
            ensure every glass is crafted just as you've imagined.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            ["10+ years", "of hospitality experience behind every pour."],
            ["Personalized", "custom cocktail menus designed around you."],
            ["LA & Ventura", "based locally, available to travel."],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-display text-3xl">{t}</p>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow text-center text-muted-foreground">Packages</p>
        <h2 className="mt-3 text-center text-4xl md:text-5xl">Three ways to raise a glass</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className={`flex flex-col border p-8 ${p.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
              <p className={`eyebrow ${p.featured ? "text-gold" : "text-muted-foreground"}`}>{p.for}</p>
              <h3 className="mt-4 text-3xl">{p.name}</h3>
              <p className="mt-4 font-display text-4xl">From {p.price}*</p>
              <p className="mt-4 flex-1 leading-relaxed opacity-80">{p.desc}</p>
              <a href="#inquire" className={`mt-8 border px-5 py-3 text-center text-sm ${p.featured ? "border-gold bg-gold text-accent-foreground" : "border-primary"}`}>
                Request a Proposal
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          *Starting prices are placeholders pending final review. All packages are dry hire: clients supply the alcohol. Hours,
          staffing, add-ons and travel are confirmed in your proposal.
        </p>
      </section>

      <section id="process" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow text-gold">How booking works</p>
          <h2 className="mt-3 text-4xl md:text-5xl">From inquiry to last call</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <span className="font-display text-5xl text-gold">0{i + 1}</span>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-2 opacity-75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="eyebrow text-muted-foreground">Kind words</p>
        <blockquote className="mt-6 font-display text-3xl italic leading-snug md:text-4xl">
          "Max was an incredible bartender for my girlfriend's 30th birthday! He was professional, punctual, and crafted two
          custom drinks just for our party. Talented and easy to work with, highly recommended!"
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">Gabriel H., Los Angeles, CA</p>
      </section>

      <section id="faq" className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-4xl md:text-5xl">Questions</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none justify-between font-display text-xl">
                  {q}<span className="text-gold group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Inquiry />

      <footer className="bg-primary py-12 text-center text-sm text-primary-foreground/70">
        <p className="font-display text-2xl text-primary-foreground">PROST!</p>
        <p className="mt-3">© {new Date().getFullYear()} The Prost Co. · Mobile Bartending · Los Angeles & Ventura County</p>
        <p className="mt-2"><a href="#">Terms and Conditions</a> · <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
}

function Inquiry() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const L = ({ label, children }: { label: string; children: React.ReactNode }) => (
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
