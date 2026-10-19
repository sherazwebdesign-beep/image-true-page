import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Maximilian | The Prost Co.", "Meet Maximilian, the Vienna-born bartender behind The Prost Co., bringing 10+ years of hospitality to LA events."),
  component: () => (
    <PageShell eyebrow="About" title="Servus!">
      <article className="mx-auto max-w-2xl space-y-6 px-6 py-20 text-lg leading-relaxed text-muted-foreground">
        <p>I'm Maximilian, a hospitality and service enthusiast from Vienna, Austria! I believe in the power of human connection, which is the driving force behind The Prost Co.</p>
        <h2 className="pt-4 text-3xl text-foreground">Why "Prost"?</h2>
        <p>"Prost" means "Cheers!" in Austria, but it's so much more than just a word: it's expressed with compassion and enthusiasm, and is a genuine celebration of cherished moments. "Prost!" symbolizes the bridge between my love for bartending and my Austrian roots. With The Prost Co., we bring this Austrian mindset to the bar of your next event.</p>
        <p>I've worked in the hospitality industry for over 10 years, starting as a bartender in Vienna and gaining experience across Europe. I've placed in multiple international Cocktail Competitions, which truly helped me cultivate a creative approach to mixology. After meeting my beautiful wife, a Bay Area native, I relocated to sunny California, and I've spent the last 5 years working in Hospitality Management.</p>
        <blockquote className="border-l-2 border-gold pl-6 font-display text-3xl italic text-foreground">"If a guest leaves happier than when they arrived, I've done my job right."</blockquote>
        <p>I'd love to connect, learn more about you and your vision, and together, we'll create unforgettable memories for your next event.</p>
        <p className="font-display text-3xl text-foreground">Prost!</p>
        <Link to="/book" className="inline-block bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground">Request a Proposal</Link>
      </article>
    </PageShell>
  ),
});
