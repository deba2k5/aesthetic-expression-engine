import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import redFlower from "@/assets/maya-red-flower.webp";
import { PageHero } from "@/components/site/PageHero";
import { brand, pageTitle } from "@/lib/site";
import { cn } from "@/lib/utils";
import { events, type EventCategory } from "@/lib/program";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: pageTitle("Events") },
      {
        name: "description",
        content: "Performances, installations, workshops, and talks at IEMPACT 2027.",
      },
      { property: "og:title", content: pageTitle("Events") },
    ],
  }),
  component: EventsPage,
});

const filters: ("All" | EventCategory)[] = [
  "All",
  "Performance",
  "Installation",
  "Workshop",
  "Talk",
];

function EventsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <PageHero
        index="02 / THE PROGRAM"
        eyebrow={`${brand} — Events`}
        title="What"
        accent="Happens"
        art={{
          src: redFlower,
          alt: "A red flower dissolving into pigment dust",
          position: "35% 45%",
          width: "56%",
        }}
      >
        <p className="max-w-md border-l-2 border-primary pl-5 text-base font-medium leading-snug md:text-lg">
          Six works across three days. Some you sit with, some you walk through, some you make
          yourself.
        </p>
      </PageHero>

      <section className="bg-background px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto mb-12 flex max-w-7xl flex-col gap-6 border-b border-foreground/15 pb-5 md:flex-row md:items-end md:justify-between">
          <div role="group" aria-label="Filter events" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors",
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-foreground/20 hover:border-primary hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="font-display text-xl font-bold">
            {String(visible.length).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 md:grid-cols-2">
          {visible.map((event, i) => (
            <article key={event.slug} className="program-panel reveal group">
              <div>
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-2xl font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}/
                  </span>
                  <span className="rounded-full border border-foreground/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/60">
                    {event.category}
                  </span>
                </div>
                <h2 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
                  {event.title}
                </h2>
                <p className="mt-6 max-w-sm leading-relaxed text-foreground/60">{event.summary}</p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-foreground/10 pt-5">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">
                      When
                    </dt>
                    <dd className="mt-2 font-display text-lg font-bold uppercase">{event.when}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">
                      Where
                    </dt>
                    <dd className="mt-2 font-display text-lg font-bold uppercase">{event.venue}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-12 overflow-hidden rounded-2xl">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl justify-end">
          <Link to="/schedule" className="poster-cta group">
            See the full schedule
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
