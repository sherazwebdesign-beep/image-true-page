import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Welcome" },
  { to: "/packages", label: "Packages" },
  { to: "/add-ons", label: "Add-Ons" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20 text-primary-foreground" : "border-b border-border bg-background"}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="font-display text-xl tracking-wide">The Prost Co.</Link>
        <nav className="hidden gap-7 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/book" className={`border px-4 py-2 text-sm ${overlay ? "border-primary-foreground/60" : "border-primary"}`}>
          Request a Proposal
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary py-12 text-center text-sm text-primary-foreground/70">
      <p className="font-display text-2xl text-primary-foreground">PROST!</p>
      <nav className="mt-4 flex flex-wrap justify-center gap-5">
        {nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        <Link to="/book">Book Now</Link>
      </nav>
      <p className="mt-4">© {new Date().getFullYear()} The Prost Co. · Mobile Bartending · Los Angeles & Ventura County</p>
    </footer>
  );
}

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow text-muted-foreground">{eyebrow}</p>
          <h1 className="mt-3 text-5xl md:text-6xl">{title}</h1>
          {intro && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        </div>
      </section>
      {children}
      <SiteFooter />
    </div>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
