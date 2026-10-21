import { Check, CreditCard, MessageSquareText, Printer, Sparkles } from "lucide-react";
import { Container, Eyebrow, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { formatLKR, startTotalLKR } from "@/components/PricingTable";
import {
  cardOptions,
  comingSoon,
  exampleStudents,
  hardware,
  smsOptions,
  type PriceLine,
} from "@/lib/content";

function PriceList({ title, icon: Icon, lines }: { title: string; icon: typeof Printer; lines: PriceLine[] }) {
  return (
    <div className="h-full rounded-3xl border border-border bg-card p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-violet/10 text-violet">
          <Icon className="size-5" />
        </span>
        <h3 className="text-display text-lg">{title}</h3>
      </div>
      <ul className="mt-6 divide-y divide-border">
        {lines.map((line) => (
          <li key={line.name} className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
            <div>
              <p className="flex flex-wrap items-center gap-2 text-sm font-medium">
                {line.name}
                {line.optional && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Optional
                  </span>
                )}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{line.note}</p>
            </div>
            <p className="shrink-0 text-right">
              <span className="text-xs text-muted-foreground">LKR </span>
              <span className="text-display text-lg">{formatLKR(line.priceLKR)}</span>
              <span className="block text-xs text-muted-foreground">{line.unit}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PricingDetails() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Hardware & cards"
        title="Everything else, priced upfront"
        description="Buy as many printers and punch devices as you have desks and entrances. Cards are printed by ClassPass and paid for when you order them, even during the trial."
        className="mb-12"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <PriceList title="Hardware" icon={Printer} lines={hardware} />
        </Reveal>
        <Reveal delay={0.07}>
          <PriceList title="Student cards" icon={CreditCard} lines={cardOptions} />
        </Reveal>
      </div>

      <Reveal>
        <div className="section-ink mt-5 rounded-3xl border border-ink-line p-8">
          <p className="text-sm text-paper/70">
            Example: {exampleStudents} students, the system and one receipt printer
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {cardOptions.map((card) => (
              <div key={card.name}>
                <p className="text-xs text-paper/70">{card.name}</p>
                <p className="mt-1">
                  <span className="text-xs text-signal">LKR </span>
                  <span className="text-display text-2xl">
                    {formatLKR(startTotalLKR + card.priceLKR * exampleStudents)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <SectionHeading
        eyebrow="SMS alerts"
        title="Parent alerts, paid upfront"
        description="Choose how SMS is paid for. An English SMS uses one credit and a Sinhala SMS uses two."
        className="mb-12 mt-24"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {smsOptions.map((option, i) => (
          <Reveal key={option.name} delay={i * 0.07}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-violet/10 text-violet">
                  <MessageSquareText className="size-5" />
                </span>
                <h3 className="text-display text-lg">{option.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{option.blurb}</p>
              <p className="mt-6">
                <span className="text-sm text-muted-foreground">LKR </span>
                <span className="text-display text-4xl">{formatLKR(option.priceLKR)}</span>
                <span className="ml-1.5 text-xs text-muted-foreground">{option.unit}</span>
              </p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-violet" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Eyebrow className="mt-20">On the way</Eyebrow>
      <div className="mt-5 grid gap-5">
        {comingSoon.map((item) => (
          <Reveal key={item.title}>
            <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-border p-8 sm:flex-row sm:items-center">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-signal/15 text-signal">
                <Sparkles className="size-5" />
              </span>
              <div>
                <p className="flex flex-wrap items-center gap-2">
                  <span className="text-display text-lg">{item.title}</span>
                  <span className="rounded-full bg-signal px-2.5 py-0.5 text-xs font-semibold text-signal-foreground">
                    Coming soon
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
