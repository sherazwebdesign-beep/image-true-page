import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, meta } from "@/components/site";
import articles from "@/data/posts.json";

const posts = [
  ["Top 10 Popular Wedding Cocktails and What Makes Each One Unique", "Choosing the right cocktails for a wedding can elevate the celebration, making it memorable and enjoyable for guests.", "Mar 14", "3 min read"],
  ["Choosing the Perfect Mobile Bar Rental", "Planning an event in Southern California? Having a bar that fits your vibe is a game-changer.", "Nov 25, 2025", "4 min read"],
  ["Why Your Wedding Needs a Mobile Bar", "A guide for couples planning their dream LA wedding: the bar is one of the most memorable experiences your guests will have.", "", ""],
];

export const Route = createFileRoute("/blog")({
  head: () => meta("Blog | The Prost Co. Mobile Bartending", "Wedding cocktail ideas, mobile bar tips and event planning advice from The Prost Co. in Los Angeles."),
  component: () => (
    <PageShell eyebrow="Journal" title="Blog" intro="Cocktail ideas and event advice from behind the bar.">
      <div className="mx-auto max-w-3xl divide-y divide-border px-6 py-16">
        {posts.map(([t, e, d, r], index) => (
          <article key={t} className="py-8">
            <p className="eyebrow text-muted-foreground">Maximilian Wicke{d && ` · ${d}`}{r && ` · ${r}`}</p>
            <h2 className="mt-3 text-3xl">{t}</h2>
            <p className="mt-3 text-muted-foreground">{e}</p>
            <Link to="/post/$slug" params={{ slug: articles[index]?.slug ?? "" }} className="mt-4 inline-block border-b border-gold pb-1 text-sm">Read article →</Link>
          </article>
        ))}
      </div>
    </PageShell>
  ),
});
