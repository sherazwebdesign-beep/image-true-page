import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, meta } from "@/components/site";

const addons = [
  ["Specialty Ice", "+$2 per person", "Whether it's large cubes or crushed, high-quality ice not only enhances the presentation of your drink but also helps control dilution for a better overall experience."],
  ["Hydration Station", "+$3 per person", "Featuring an array of fresh fruits and vegetables, our hydration station provides a refreshing option to keep your guests energized and engaged throughout the event."],
  ["Special Impressions", "+$3 per person", "Craving something unique? We offer specialty drinks served with a captivating smoke show or rich, flavor-packed sips straight from the barrel."],
  ["Special Garnish", "+$1–$3 per person", "From flowers and dried fruits to unique herbs, we'll find the perfect garnish to make your drinks stand out."],
  ["Additional Bartender", "+$75 per hour", "To maintain smooth and efficient service, we may require additional bartenders above 60 guests, determined based on the details of your event."],
];

export const Route = createFileRoute("/add-ons")({
  head: () => meta("Add-Ons | The Prost Co. Mobile Bartending", "Specialty ice, hydration stations, smoked cocktails, special garnishes and additional bartenders for your LA event."),
  component: () => (
    <PageShell eyebrow="Additional Services" title="Add-Ons" intro="There's always room for elevated style and a tailored touch.">
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-20 md:grid-cols-2">
        {addons.map(([t, p, d]) => (
          <div key={t} className="border border-border bg-card p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-3xl">{t}</h2>
              <span className="text-sm text-gold whitespace-nowrap">{p}</span>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <p className="pb-20 text-center text-muted-foreground">
        For any further individualizations, <Link to="/book" className="underline">request a proposal</Link>.
      </p>
    </PageShell>
  ),
});
