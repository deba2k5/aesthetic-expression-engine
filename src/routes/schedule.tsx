import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import redTower from "@/assets/maya-red-tower.webp";
import { PageHero } from "@/components/site/PageHero";
import { brand, pageTitle } from "@/lib/site";
import { cn } from "@/lib/utils";
import { schedule } from "@/lib/program";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: pageTitle("Schedule") },
      {
        name: "description",
        content: "Three days of sound, movement, and image. The IEMPACT 2027 timetable.",
      },
      { property: "og:title", content: pageTitle("Schedule") },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const [active, setActive] = useState(0);
  const day = schedule[active] ?? schedule[0]!;

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <PageHero
        index="03 / THE TIMETABLE"
        eyebrow={`${brand} — Schedule`}
        title="Three"
        accent="Days"
        art={{
          src: redTower,
          alt: "A tiered stone tower rising into a red sky",
          position: "50% 70%",
          width: "50%",
        }}
      >
        <p className="max-w-md border-l-2 border-primary pl-5 text-base font-medium leading-snug md:text-lg">
          Calendar dates announced soon. The shape of each day is set — times may shift by a breath.
        </p>
      </PageHero>

      <section className="bg-background px-6 py-20 md:px-12 md:py-32">
        <div
          role="tablist"
          aria-label="Festival days"
          className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 lg:grid-cols-3"
        >
          {schedule.map((d, i) => (
            <button
              key={d.day}
              role="tab"
              type="button"
              id={`day-tab-${i}`}
              aria-selected={active === i}
              aria-controls="day-panel"
              onClick={() => setActive(i)}
              className={cn(
                "group flex flex-col items-start gap-3 p-6 text-left transition-colors",
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-primary/10",
              )}
            >
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.35em]",
                  active === i ? "text-primary-foreground/70" : "text-primary",
                )}
              >
                {d.day}
              </span>
              <span className="font-display text-2xl font-extrabold uppercase leading-none lg:text-[clamp(1.25rem,2.1vw,1.875rem)]">
                {d.name}
              </span>
            </button>
          ))}
        </div>

        <ol
          id="day-panel"
          role="tabpanel"
          aria-labelledby={`day-tab-${active}`}
          className="mx-auto mt-16 max-w-7xl"
        >
          {day.slots.map((slot) => (
            <li key={`${day.day}-${slot.time}`} className="schedule-row reveal group">
              <time className="font-display text-4xl font-extrabold leading-none text-primary md:text-5xl">
                {slot.time}
              </time>
              <div>
                <h2 className="font-display text-2xl font-extrabold uppercase leading-tight md:text-4xl">
                  {slot.title}
                </h2>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                  {slot.venue}
                </p>
              </div>
              <span className="justify-self-start rounded-full border border-foreground/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/60 transition-colors group-hover:border-primary group-hover:text-primary md:justify-self-end">
                {slot.category}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-label="Days"
        className="overflow-hidden bg-secondary py-8 text-secondary-foreground md:py-12"
      >
        <div className="marquee-track flex w-max whitespace-nowrap border-y border-secondary-foreground/20 py-3">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center">
              {schedule.map((d) => (
                <span
                  key={`${copy}-${d.day}`}
                  className="font-display text-6xl font-extrabold uppercase leading-none md:text-[9rem]"
                >
                  {d.name}
                  <span className="mx-7 text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
