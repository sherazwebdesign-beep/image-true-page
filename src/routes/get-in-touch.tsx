import { createFileRoute } from "@tanstack/react-router";
import { PageShell, meta } from "@/components/site";
import { Inquiry } from "@/components/inquiry-form";

export const Route = createFileRoute("/get-in-touch")({
  head: () => meta("Book Now | The Prost Co. Event Inquiry", "Plan your wedding, corporate event or private celebration with The Prost Co. mobile bartending in Los Angeles and Ventura County."),
  component: () => <PageShell eyebrow="Book Now" title="Let's plan your bar" intro="Tell us about your occasion."><Inquiry /></PageShell>,
});