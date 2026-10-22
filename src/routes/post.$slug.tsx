import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import posts from "@/data/posts.json";
import { SiteHeader, SiteFooter, meta } from "@/components/site";
import cocktailPhoto from "@/assets/welcome-cocktails.jpg";

export const Route = createFileRoute("/post/$slug")({
  loader: ({ params }) => {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => meta(`${loaderData?.title ?? "Article unavailable"} | The Prost Co.`, loaderData?.excerpt ?? "The Prost Co. cocktail and event journal."),
  component: Post,
});

function Post() {
  const post = Route.useLoaderData();
  return <div className="bg-background text-foreground"><SiteHeader /><main className="mx-auto max-w-4xl px-6 py-16"><Link to="/blog" className="text-sm text-muted-foreground">← Back to Blog</Link><p className="eyebrow mt-10 text-muted-foreground">The Prost Co. Journal · Maximilian Wicke</p><h1 className="mt-4 text-4xl leading-tight md:text-5xl">{post.title}</h1><img src={cocktailPhoto} alt="Craft cocktails at a California celebration" width={960} height={1200} className="mt-10 aspect-[16/9] w-full object-cover" loading="lazy" /><article className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground [&_h2]:pt-6 [&_h2]:text-3xl [&_h2]:text-foreground [&_h3]:pt-4 [&_h3]:text-2xl [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:text-foreground"><ReactMarkdown>{post.body}</ReactMarkdown></article></main><SiteFooter /></div>;
}