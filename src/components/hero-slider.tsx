import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";
import eventBar from "@/assets/event-bar.jpg";
import cocktails from "@/assets/welcome-cocktails.jpg";

const slides = [
  { image: hero, alt: "Bartender crafting a cocktail", label: "Crafted for your occasion" },
  { image: eventBar, alt: "Mobile cocktail bar at a garden wedding", label: "Celebrate beautifully" },
  { image: cocktails, alt: "Signature cocktails at an outdoor celebration", label: "A personal touch in every pour" },
];

export function HeroSlider() {
  const [ref, api] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update(); api.on("select", update);
    return () => { api.off("select", update); };
  }, [api]);
  useEffect(() => {
    if (!api || paused || reducedMotion) return;
    const timer = window.setInterval(() => api.scrollNext(), 6500);
    return () => window.clearInterval(timer);
  }, [api, paused, reducedMotion]);
  return (
    <section aria-label="The Prost Co. celebrations" aria-roledescription="carousel" className="relative text-footer-foreground" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)}>
      <div ref={ref} className="overflow-hidden"><div className="flex">
        {slides.map((slide, i) => <div key={slide.image} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`} aria-hidden={selected !== i} className="relative h-[min(850px,88svh)] min-h-[620px] min-w-0 shrink-0 basis-full sm:min-h-[580px]">
          <img src={slide.image} alt={slide.alt} width={1600} height={1008} loading={i === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" /><div className="hero-overlay absolute inset-0" />
        </div>)}
      </div></div>
      <div className="pointer-events-none absolute inset-0 flex items-end"><div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-32 sm:pb-32">
        <p className="eyebrow text-gold">Mobile Bartending · Los Angeles & Ventura County</p>
        <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">The Prost Co.</h1>
        <p className="mt-4 font-display text-3xl italic md:text-4xl">Where imagination meets the glass.</p>
        <p className="mt-5 max-w-xl text-base text-footer-foreground/90 md:text-lg">Elevated bar service for weddings, corporate events and private gatherings.</p>
        <div className="pointer-events-auto mt-7 flex flex-wrap gap-3"><Button asChild className="h-12 rounded-none bg-gold px-6 text-accent-foreground hover:bg-gold/90"><Link to="/get-in-touch">Request a Proposal <ArrowRight /></Link></Button><Button asChild variant="outline" className="h-12 rounded-none border-footer-foreground/60 bg-transparent px-6 text-footer-foreground hover:bg-footer-foreground/10 hover:text-footer-foreground"><Link to="/packages">View Packages</Link></Button></div>
      </div></div>
      <div className="absolute inset-x-0 bottom-7 mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">{slides.map((slide,i) => <Button key={slide.image} variant="ghost" size="icon" aria-label={`Go to slide ${i+1}`} aria-current={selected === i ? "true" : undefined} onClick={() => api?.scrollTo(i)} className="h-9 w-9 hover:bg-footer-foreground/10 hover:text-footer-foreground"><span className={`h-1 w-7 ${selected === i ? "bg-gold" : "bg-footer-foreground/40"}`} /></Button>)}<span className="ml-2 hidden text-xs text-footer-foreground/80 sm:block">{slides[selected]?.label}</span></div>
        <div className="flex gap-2"><Button variant="ghost" size="icon" aria-label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused(!paused)} className="hover:bg-footer-foreground/10 hover:text-footer-foreground">{paused ? <Play /> : <Pause />}</Button><Button variant="outline" size="icon" aria-label="Previous slide" onClick={() => api?.scrollPrev()} className="rounded-none border-footer-foreground/40 bg-transparent hover:bg-footer-foreground/10 hover:text-footer-foreground"><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Next slide" onClick={() => api?.scrollNext()} className="rounded-none border-footer-foreground/40 bg-transparent hover:bg-footer-foreground/10 hover:text-footer-foreground"><ArrowRight /></Button></div>
      </div>
    </section>
  );
}