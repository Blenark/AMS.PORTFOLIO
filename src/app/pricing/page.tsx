import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { PricingTable } from "@/components/PricingTable";
import { PricingDetails } from "@/components/PricingDetails";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { faqs } from "@/lib/content";

const pricingFaqs = faqs.filter((f) => f.pricing);

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "ClassPass pricing in LKR: a free month, then LKR 20,000 once for the system. No monthly fees. Receipt printers, student cards and SMS priced upfront.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Priced per institute, not per headache"
        description="Try everything free for a month, with the printer and punch devices on loan. After that you pay once for the system. There are no monthly fees, and no yearly fee up to 1,500 active students."
      />

      <Section>
        <PricingTable />
      </Section>

      <Section tone="muted">
        <PricingDetails />
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Good to know"
            title="Pricing questions"
            align="center"
            className="mx-auto mb-12 items-center"
          />
          <FaqAccordion items={pricingFaqs} />
        </Container>
      </Section>

      <Section className="pt-0">
        <CtaSection title="Not sure which plan fits?" description="Tell us how many classes and students you run and we'll point you to the right one." />
      </Section>
    </>
  );
}
