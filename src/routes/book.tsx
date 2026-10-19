import { createFileRoute } from "@tanstack/react-router";
import { PageShell, meta } from "@/components/site";
import { Inquiry } from "@/components/inquiry-form";

export const Route = createFileRoute("/book")({
  head: () => meta("Book Now | The Prost Co. Mobile Bartending", "Request a proposal for your wedding, private or corporate event bartending in Los Angeles and Ventura County."),
  component: () => (
    <PageShell eyebrow="Book Now" title="Let's plan your bar" intro="Share a few details and we'll follow up with a tailored proposal.">
      <Inquiry />
    </PageShell>
  ),
});
