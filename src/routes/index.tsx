import { Link, createFileRoute } from "@tanstack/react-router";

import akashVani from "@/assets/maya-akash-vani.jpg";
import creation from "@/assets/maya-creation.webp";
import kaliPunj from "@/assets/maya-kali-punj.jpg";
import poster from "@/assets/maya-poster.webp";
import redFlower from "@/assets/maya-red-flower.webp";
import redTower from "@/assets/maya-red-tower.webp";
import { Countdown } from "@/components/site/Countdown";
import { HeroArt } from "@/components/site/PageHero";
import { SectionHead } from "@/components/site/SectionHead";
import { CountUp, MarqueeStrip, SplitText, TiltCard } from "@/components/site/motion";
import { events, schedule, type EventCategory } from "@/lib/program";
import { brand, pageTitle, site } from "@/lib/site";

const description = `${brand} presents ${site.theme}: a contemporary gathering of sound, movement, image, and the space between them.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle() },
      { name: "description", content: description },
      { property: "og:title", content: pageTitle() },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const lineup = ["AKASH VANI", "KALI PUNJ", "NIGHT RAGA", "THE RED ROOM"];

const venues = new Set(schedule.flatMap((d) => d.slots.map((s) => s.venue)));
const formats = new Set(events.map((e) => e.category));
const stats = [
  { value: events.length, label: "Events" },
  { value: schedule.length, label: "Days" },
  { value: venues.size, label: "Spaces" },
  { value: formats.size, label: "Formats" },
];

const formatCopy: Record<EventCategory, { title: string; body: string; image: string }> = {
  Performance: {
    title: "Live performance",
    body: "Sound and movement built for the room, played once and never the same way twice.",
    image: akashVani,
  },
  Installation: {
    title: "Installations",
    body: "Walk-in works that turn corridors and courtyards into something to step inside.",
    image: redTower,
  },
  Workshop: {
    title: "Workshops",
    body: "Hands-on sessions where you make the work yourself, from calligraphy to circuits.",
    image: kaliPunj,
  },
  Talk: {
    title: "Talks",
    body: "Artists of the edition in conversation, close enough to ask the next question.",
    image: redFlower,
  },
};

const faqs = [
  {
    q: `When is ${brand}?`,
    a: "Official dates are announced here and on our socials first. Join the list and you will hear the moment they are out.",
  },
  {
    q: `What is ${site.theme}?`,
    a: `${site.theme} (${site.themeBengali}) is the theme of ${brand}: a program of sound, movement, and image about illusion, memory, and the charged space between them.`,
  },
  {
    q: "Where does it happen?",
    a: `In ${site.city}. Venue details are published alongside the dates, with directions for every space on the schedule.`,
  },
  {
    q: "How do I register?",
    a: "Use Register interest on this page. We email you as soon as registrations open, before they go public.",
  },
  {
    q: "Are workshop places limited?",
    a: "Some are. Workshops like Ink & Static are hands-on and capped, so registering interest early helps.",
  },
  {
    q: "Who do I contact with questions?",
    a: `Write to ${site.email}. For partnerships, use the Partner with us button above.`,
  },
];

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header id="top" className="poster-hero home-hero">
        <HeroArt
          src={poster}
          alt="MAYA poster: red Bengali lettering over hands framing staring red eyes"
          position="50% 55%"
          width="58%"
          side={{
            src: creation,
            alt: "Two hands reaching toward each other among clouds on deep red",
            position: "50% 72%",
          }}
        />

        <span className="poster-index">
          {brand} / {site.theme}
        </span>
        <div className="relative z-20 w-full max-w-[92rem]">
          <p className="animate-reveal mb-6 inline-flex items-center gap-3 rounded-full border border-foreground/20 bg-background/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] backdrop-blur-md">
            <span className="text-primary">{brand}</span>
            <span className="h-3 w-px bg-foreground/30" />
            presents {site.theme}
          </p>
          <h1 className="font-display text-[2.5rem] font-extrabold uppercase leading-[0.82] sm:text-7xl lg:text-8xl">
            <SplitText text="Shaping" className="block" />
            <SplitText text="Silence" delay={320} className="ml-[0.3em] block text-primary" />
          </h1>

          <div className="animate-reveal-delayed mt-10 grid items-end gap-8 lg:grid-cols-12">
            <p className="border-l-2 border-primary pl-5 text-base font-medium leading-snug md:text-lg lg:col-span-4">
              A gathering of South Asian sound, movement, image, and the charged space between them.
            </p>
            <div className="lg:col-span-4">
              <Countdown to={site.startsAt} />
            </div>
            <div className="flex lg:col-span-4 lg:justify-end">
              <a className="poster-cta group" href="#access">
                Register interest
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        aria-label={`${brand} in numbers`}
        className="border-b border-foreground/10 bg-background"
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-cell reveal ${i % 2 ? "border-l" : ""} ${i === 2 ? "md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""}`}
            >
              <dd className="font-display text-5xl font-extrabold leading-none text-foreground md:text-7xl">
                <CountUp value={s.value} />
                <span className="text-primary">.</span>
              </dd>
              <dt className="mt-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/50">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative border-b border-foreground/10 bg-background px-6 py-28 md:px-12 md:py-40">
        <div className="pointer-events-none absolute -right-20 top-4 hidden font-display text-[18rem] font-extrabold leading-none text-primary/10 lg:block">
          ম
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="flex items-center gap-6 text-foreground/30">
            <span className="h-px flex-1 bg-foreground" />
            <span className="shrink-0 text-[10px] uppercase tracking-[0.5em]">The intent</span>
            <span className="h-px flex-1 bg-foreground" />
          </div>
          <h2 className="reveal mx-auto mt-20 max-w-4xl text-center font-display text-4xl font-bold leading-[1.05] md:text-7xl">
            Art that <span className="text-primary">bruises</span> the predictable.
          </h2>
          <div className="reveal mt-20 grid gap-10 text-base font-medium leading-relaxed text-foreground/70 md:grid-cols-2 md:text-lg">
            <p>
              {site.theme} lives between the calligraphic stroke and the digital glitch, between
              memory and the immediate.
            </p>
            <p>
              Each performance turns the room into an instrument. Come to listen, move, and witness
              what cannot be repeated.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Featured program"
        className="overflow-hidden bg-secondary py-8 text-secondary-foreground md:py-12"
      >
        <div className="marquee-track flex w-max whitespace-nowrap border-y border-secondary-foreground/20 py-3">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center">
              {lineup.map((name) => (
                <span
                  key={`${copy}-${name}`}
                  className="font-display text-6xl font-extrabold uppercase leading-none md:text-[9rem]"
                >
                  {name}
                  <span className="mx-7 text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-6 py-24 md:px-12 md:py-36">
        <SectionHead
          index="01"
          label={`Why ${site.name}`}
          title={
            <>
              Four ways into <span className="text-primary">{site.theme}.</span>
            </>
          }
        />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {(Object.keys(formatCopy) as EventCategory[]).map((cat, i) => {
            const count = events.filter((e) => e.category === cat).length;
            const copy = formatCopy[cat];
            return (
              <TiltCard key={cat} className="reveal min-w-0">
                <Link to="/events" className="feature-card group">
                  <img src={copy.image} alt="" loading="lazy" className="feature-card-img" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                      <span className="rounded-full border border-foreground/20 bg-background/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] backdrop-blur">
                        {count} {count === 1 ? "event" : "events"}
                      </span>
                    </div>
                    <h3 className="feature-title mt-auto font-display font-extrabold uppercase leading-none">
                      {copy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{copy.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                      Explore
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <MarqueeStrip
        reverse
        items={[brand, site.theme, site.themeBengali, site.city, "Sound", "Image", "Movement"]}
      />

      <section className="bg-background px-6 py-24 md:px-12 md:py-36">
        <SectionHead
          index="02"
          label="Selected program"
          action={
            <Link
              to="/events"
              className="group flex items-center gap-3 font-display text-lg font-bold hover:text-primary"
            >
              All events
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          }
        />
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 md:grid-cols-2 md:gap-px">
          {events.slice(0, 2).map((event, i) => (
            <article
              key={event.slug}
              className={`program-panel reveal group ${i ? "border-t border-foreground/10 md:border-t-0" : ""}`}
            >
              <div>
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-2xl font-bold text-primary">0{i + 1}/</span>
                  <span className="rounded-full border border-foreground/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/60">
                    {event.when}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
                  {event.title}
                </h3>
                <p className="mt-6 max-w-sm leading-relaxed text-foreground/60">{event.summary}</p>
              </div>
              <div className="mt-14 overflow-hidden rounded-2xl">
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
      </section>

      <section className="border-t border-foreground/10 bg-background px-6 py-24 md:px-12 md:py-32">
        <SectionHead
          index="03"
          label="Partners"
          title={
            <>
              Build the <span className="text-primary">illusion</span> with us.
            </>
          }
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12">
          <ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8"
            aria-label="Partner announcements"
          >
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i} className="partner-slot reveal">
                <span className="font-display text-xs font-bold text-primary">0{i + 1}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/40">
                  Announcing soon
                </span>
              </li>
            ))}
          </ul>
          <div className="reveal lg:col-span-4">
            <p className="text-lg leading-relaxed text-foreground/70">
              Partner with {brand} and put your name inside a program people step into, not scroll
              past.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(`${brand} partnership`)}`}
              className="poster-cta group mt-8"
            >
              Partner with us
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-background px-6 py-24 md:px-12 md:py-32">
        <SectionHead
          index="04"
          label="FAQ"
          title={
            <>
              Before you <span className="text-primary">step in.</span>
            </>
          }
        />
        <div className="mx-auto grid max-w-7xl items-start gap-3 lg:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="faq reveal group">
              <summary>
                <span className="font-display text-lg font-bold uppercase leading-tight md:text-xl">
                  {f.q}
                </span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p className="mt-4 max-w-xl leading-relaxed text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="access" className="access relative overflow-hidden text-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-12">
          <div className="reveal relative z-10 px-6 py-24 md:col-span-7 md:px-12 md:py-36">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/70">
              Stay close
            </p>
            <h2 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.88] md:text-8xl">
              Enter the
              <br />
              <span className="text-background">next circle.</span>
            </h2>
            <p className="mt-10 max-w-md text-lg leading-relaxed text-foreground/80">
              Be first to receive the {brand} dates, venue, artist program, and access release.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(`${brand} access`)}`}
              className="poster-cta group mt-10"
            >
              Join the list
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
          <div className="access-art md:col-span-5">
            <img
              src={creation}
              alt="Two hands reaching toward each other among clouds on deep red"
              loading="lazy"
              width={720}
              height={1383}
              className="h-full w-full object-cover object-[50%_48%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
