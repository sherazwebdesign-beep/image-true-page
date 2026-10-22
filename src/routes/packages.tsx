import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, meta } from "@/components/site";

const tiers = [
  { name: "The Essential Bar", price: "$1,250", for: "Smaller gatherings", desc: "A polished, professional bar service for intimate celebrations." },
  { name: "The Signature Experience", price: "$1,950", for: "Weddings & upscale events", desc: "Custom cocktail menus, staffing, presentation and pre-event coordination.", featured: true },
  { name: "The Prost Reserve", price: "$2,750", for: "High-end weddings, estates & corporate", desc: "Enhanced presentation, personalized menus and coordination." },
];

const current = [
  { name: "Single Pour", sub: "Bartender only", items: ["One certified + insured bartender (per 65 guests)", "4 hours of service", "Equipment", "Set up and break down", "30 miles round trip ($1.5 per additional mile)"], note: "Does not include: satellite bar, consultation, shopping list, bar sign/menu, garnishes" },
  { name: "Hops and Grapes", sub: "Bartender + bar setup", items: ["One certified + insured bartender (per 65 guests)", "4 hours of service", "Service of beer, wine, seltzer, soft drinks", "Consultation and shopping list", "Portable satellite bar", "Equipment", "Bar menu and sign", "Set up and break down", "30 miles round trip ($1.5 per additional mile)"], note: "Does not include: hard liquor service" },
  { name: "Neat and Simple", sub: "Bar setup + 2 signature cocktails", items: ["One certified + insured bartender (per 65 guests)", "4 hours of service", "2 signature cocktails", "Standard garnishes", "Service of beer, wine, seltzer, soft drinks", "Consultation and shopping list", "Portable satellite bar", "Equipment", "Bar menu and sign", "Set up and break down", "30 miles round trip ($1.5 per additional mile)"], note: "Dry hire: you provide the alcohol." },
  { name: "On the Rocks", sub: "Bar setup + up to 4 signature cocktails", items: ["One certified + insured bartender (per 65 guests)", "4 hours of service", "Up to 4 signature cocktails", "Specialty garnishes", "Infused hydration station", "Service of beer, wine, seltzer, soft drinks", "Consultation and shopping list", "Portable satellite bar", "Equipment", "Bar menu and sign", "Set up and break down", "30 miles round trip ($1.5 per additional mile)"], note: "Dry hire: you provide the alcohol." },
  { name: "Open Bar", sub: "Individually tailored", items: ["Beer and wine", "Classic cocktails", "Essential highball selections"], note: "Contact us for individual pricing." },
];

export const Route = createFileRoute("/packages")({
  head: () => meta("Packages | The Prost Co. Mobile Bartending", "Dry-hire mobile bartending packages for weddings, private and corporate events in Los Angeles and Ventura County."),
  component: () => (
    <PageShell eyebrow="Dry Hire Company" title="Packages" intro="You provide the alcohol, we provide the rest.">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        {tiers.map((p) => (
          <div key={p.name} className={`flex flex-col border p-8 ${p.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
            <p className={`eyebrow ${p.featured ? "text-gold" : "text-muted-foreground"}`}>{p.for}</p>
            <h2 className="mt-4 text-3xl">{p.name}</h2>
            <p className="mt-4 font-display text-4xl">From {p.price}*</p>
            <p className="mt-4 flex-1 opacity-80">{p.desc}</p>
            <Link to="/book" className={`mt-8 border px-5 py-3 text-center text-sm ${p.featured ? "border-gold bg-gold text-accent-foreground" : "border-primary"}`}>Request a Proposal</Link>
          </div>
        ))}
      </div>
      <p className="-mt-10 px-6 text-center text-sm text-muted-foreground">*Placeholder starting prices pending final review.</p>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-4xl">What's included today</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {current.map((c) => (
            <div key={c.name} className="border border-border bg-card p-8">
              <p className="eyebrow text-muted-foreground">{c.sub}</p>
              <h3 className="mt-3 text-3xl">{c.name}</h3>
              <ul className="mt-5 space-y-2 text-sm">
                {c.items.map((i) => <li key={i} className="flex gap-3"><span className="text-gold">—</span>{i}</li>)}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  ),
});
