import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site";
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
      <SiteHeader overlay />

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
            <Link to="/book" className="bg-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90">Request a Proposal</Link>
            <Link to="/packages" className="border border-primary-foreground/60 px-7 py-3.5 text-sm">View Packages</Link>
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
              <Link to="/book" className={`mt-8 border px-5 py-3 text-center text-sm ${p.featured ? "border-gold bg-gold text-accent-foreground" : "border-primary"}`}>
                Request a Proposal
              </Link>
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

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl">Let's plan your bar</h2>
        <p className="mt-4 text-muted-foreground">Tell us about your event and we'll send a tailored proposal.</p>
        <Link to="/book" className="mt-8 inline-block bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground">Request a Proposal</Link>
      </section>

      <SiteFooter />
    </div>
  );
}

