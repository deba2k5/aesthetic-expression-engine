import { createFileRoute } from "@tanstack/react-router";

import akashVani from "@/assets/maya-akash-vani.jpg";
import heroScreenprint from "@/assets/maya-hero-screenprint.jpg";
import kaliPunj from "@/assets/maya-kali-punj.jpg";
import logoAsset from "@/assets/maya-bengali-logo.png.asset.json";
import redDust from "@/assets/maya-red-dust.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAYA — Shaping Silence" },
      {
        name: "description",
        content:
          "MAYA is a contemporary cultural gathering shaped by sound, movement, image, and the space between them.",
      },
      { property: "og:title", content: "MAYA — Shaping Silence" },
      {
        property: "og:description",
        content:
          "A contemporary cultural gathering shaped by sound, movement, image, and the space between them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MayaHome,
});

const lineup = ["AKASH VANI", "KALI PUNJ", "NIGHT RAGA", "THE RED ROOM"];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="MAYA"
      width={1024}
      height={1024}
      className={className}
    />
  );
}

function MayaHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="poster-nav" aria-label="Primary navigation">
        <a href="#top" aria-label="MAYA home" className="pointer-events-auto">
          <BrandMark className="h-16 w-16 border border-foreground/20 object-cover md:h-20 md:w-20" />
        </a>
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Kolkata / Edition 01</span>
          <span className="h-0.5 w-14 bg-primary" />
        </div>
      </nav>

      <header id="top" className="poster-hero">
        <img
          src={heroScreenprint}
          alt="Red and black screenprint architecture"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="poster-tear animate-clip">
          <img
            src={redDust}
            alt="Crimson pigment and fabric texture"
            width={960}
            height={1088}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/15" />
        </div>

        <span className="poster-index">01 / A LIVE CULTURAL ASSEMBLY</span>
        <div className="relative z-20 w-full max-w-[92rem]">
          <h1 className="animate-reveal font-display text-[clamp(4.25rem,14vw,12rem)] font-extrabold uppercase leading-[0.78]">
            <span className="block">Shaping</span>
            <span className="ml-[0.3em] block text-primary">Silence</span>
          </h1>

          <div className="animate-reveal-delayed mt-10 grid items-end gap-8 md:grid-cols-12">
            <p className="border-l-2 border-primary pl-5 text-base font-medium leading-snug md:col-span-4 md:text-lg">
              A gathering of South Asian sound, movement, image, and the charged space between them.
            </p>
            <div className="md:col-span-3">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">Next edition</p>
              <p className="font-display text-2xl font-bold uppercase">Dates announced soon</p>
            </div>
            <div className="flex md:col-span-5 md:justify-end">
              <a className="poster-cta group" href="#access">
                Register interest
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative border-b border-foreground/10 bg-background px-6 py-28 md:px-12 md:py-40">
        <div className="pointer-events-none absolute -right-20 top-4 hidden font-display text-[18rem] font-extrabold leading-none text-primary/10 lg:block">ম</div>
        <div className="relative mx-auto max-w-5xl">
          <div className="flex items-center gap-6 text-foreground/30">
            <span className="h-px flex-1 bg-foreground" />
            <span className="shrink-0 text-[10px] uppercase tracking-[0.5em]">The intent</span>
            <span className="h-px flex-1 bg-foreground" />
          </div>
          <h2 className="mx-auto mt-20 max-w-4xl text-center font-display text-4xl font-bold leading-[1.05] md:text-7xl">
            Art that <span className="text-primary">bruises</span> the predictable.
          </h2>
          <div className="mt-20 grid gap-10 text-base font-medium leading-relaxed text-foreground/70 md:grid-cols-2 md:text-lg">
            <p>MAYA lives between the calligraphic stroke and the digital glitch, between memory and the immediate.</p>
            <p>Each performance turns the room into an instrument. Come to listen, move, and witness what cannot be repeated.</p>
          </div>
        </div>
      </section>

      <section aria-label="Featured program" className="overflow-hidden bg-secondary py-8 text-secondary-foreground md:py-12">
        <div className="marquee-track flex w-max whitespace-nowrap border-y border-secondary-foreground/20 py-3">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center">
              {lineup.map((name) => (
                <span key={`${copy}-${name}`} className="font-display text-6xl font-extrabold uppercase leading-none md:text-[9rem]">
                  {name}<span className="mx-7 text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between border-b border-foreground/15 pb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">Selected program</p>
          <p className="font-display text-xl font-bold">02 / 04</p>
        </div>
        <div className="mx-auto grid max-w-7xl bg-foreground/10 md:grid-cols-2 md:gap-px">
          <article className="program-panel group">
            <div>
              <span className="font-display text-2xl font-bold text-primary">01/</span>
              <h3 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">Akash<br />Vani</h3>
              <p className="mt-6 max-w-sm leading-relaxed text-foreground/60">An immersive listening work tracing the frequencies carried by water, voice, and memory.</p>
            </div>
            <div className="mt-14 overflow-hidden">
              <img src={akashVani} alt="Musician in red silhouette" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
            </div>
          </article>
          <article className="program-panel group border-t border-foreground/10 md:border-l md:border-t-0">
            <div>
              <span className="font-display text-2xl font-bold text-primary">02/</span>
              <h3 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">Kali<br />Punj</h3>
              <p className="mt-6 max-w-sm leading-relaxed text-foreground/60">Physical theatre and projected ink meet in a study of force, form, and transformation.</p>
            </div>
            <div className="mt-14 overflow-hidden">
              <img src={kaliPunj} alt="Crimson ink in motion" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
            </div>
          </article>
        </div>
      </section>

      <section id="access" className="bg-accent px-6 py-24 text-accent-foreground md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">Stay close</p>
            <h2 className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.88] md:text-8xl">Enter the<br />next circle.</h2>
          </div>
          <div className="md:col-span-5 md:pt-12">
            <p className="max-w-md text-lg leading-relaxed text-accent-foreground/70">Be first to receive the next date, venue, artist program, and access release.</p>
            <a href="mailto:hello@maya.events?subject=MAYA%20access" className="mt-10 flex w-full items-center justify-between border-2 border-primary px-6 py-5 font-display text-lg font-bold uppercase transition-colors hover:bg-primary hover:text-primary-foreground">
              Join the list <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-8 border-t border-foreground/10 bg-background px-6 py-12 text-foreground/45 md:flex-row md:items-end md:justify-between md:px-12">
        <div className="flex items-center gap-5">
          <BrandMark className="h-14 w-14 object-cover grayscale" />
          <p className="font-display text-xl font-bold text-foreground">MAYA</p>
        </div>
        <p className="text-[10px] uppercase tracking-[0.25em]">Sound / Image / Movement / Kolkata</p>
        <p className="text-[10px] uppercase tracking-[0.25em]">© 2026 MAYA</p>
      </footer>
    </main>
  );
}