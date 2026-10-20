import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Instagram, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/prost-logo.png.asset.json";

const nav = [
  { to: "/", label: "Welcome" },
  { to: "/packages", label: "Packages" },
  { to: "/add-ons", label: "Add-Ons" },
  { to: "/about", label: "About" },
  { to: "/get-in-touch", label: "Book Now" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-20 text-footer-foreground" : "border-b border-footer-foreground/15 bg-footer text-footer-foreground"}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" aria-label="The Prost Co. home" className="block w-52 shrink-0 sm:w-64"><img src={logo.url} alt="The Prost Co. — Mobile Bartending, Los Angeles" width={1920} height={551} className="h-auto w-full" /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }} className="py-2 transition-colors hover:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="lg:hidden hover:bg-footer-foreground/10 hover:text-footer-foreground">{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="grid border-t border-footer-foreground/15 bg-footer px-6 py-4 lg:hidden">{nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-footer-foreground/10 py-3 text-footer-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }}>{n.label}</Link>)}</nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-footer-foreground/15 py-12 md:flex-row md:items-center">
          <div><p className="eyebrow text-gold">Here's to your next occasion</p><h2 className="mt-3 text-4xl md:text-5xl">Let's make it <em>one to remember.</em></h2></div>
          <Button asChild variant="outline" className="h-12 self-start rounded-none border-gold bg-transparent px-6 text-footer-foreground hover:bg-gold hover:text-accent-foreground md:self-auto"><Link to="/get-in-touch">Book Now <ArrowUpRight /></Link></Button>
        </div>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr] lg:gap-16">
          <div><Link to="/" aria-label="The Prost Co. home"><img src={logo.url} alt="The Prost Co. — Mobile Bartending, Los Angeles" width={1920} height={551} className="h-auto w-full max-w-80" loading="lazy" /></Link><p className="mt-6 max-w-xs text-sm leading-relaxed text-footer-muted">Personalized mobile bartending for weddings, corporate events and private celebrations.</p><a href="https://www.instagram.com/the_prost_co/?hl=en" target="_blank" rel="noreferrer" aria-label="The Prost Co. on Instagram" className="mt-5 inline-flex h-10 w-10 items-center justify-center border border-footer-foreground/25 transition-colors hover:text-gold"><Instagram size={18} /></a></div>
          <div><h3 className="eyebrow text-gold">Explore</h3><nav aria-label="Footer navigation" className="mt-5 flex flex-col items-start gap-3 text-sm text-footer-muted">{nav.map(n => <Link key={n.to} to={n.to} className="hover:text-footer-foreground">{n.label}</Link>)}</nav></div>
          <div><h3 className="eyebrow text-gold">Get in touch</h3><a href="mailto:max@theprostco.com" className="mt-5 flex items-center gap-3 text-sm hover:text-gold"><Mail size={16} />max@theprostco.com</a><p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-footer-muted"><MapPin size={17} className="mt-1 shrink-0" /><span>Los Angeles & Ventura County<br />Available to travel to your event.</span></p><p className="mt-6 font-display text-3xl italic text-gold">Prost!</p></div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-footer-foreground/15 py-6 text-xs text-footer-muted sm:flex-row"><p>© {new Date().getFullYear()} The Prost Co. All rights reserved.</p><div className="flex flex-wrap gap-6"><a href="https://www.termsfeed.com/live/9f304e15-81e7-4f73-9b02-216c8bfafbad" target="_blank" rel="noreferrer" className="hover:text-footer-foreground">Terms and Conditions</a><a href="https://www.freeprivacypolicy.com/live/f9e04600-c66b-436a-8ce7-d87b364667e9" target="_blank" rel="noreferrer" className="hover:text-footer-foreground">Privacy Policy</a></div></div>
      </div>
    </footer>
  );
}

export function DemoLink({ children, className, to = "/get-in-touch" }: { children: ReactNode; className?: string; to?: "/get-in-touch" | "/packages" | "/about" }) {
  return <Link to={to} className={className}>{children}</Link>;
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
