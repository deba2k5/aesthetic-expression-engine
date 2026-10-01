import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import akashVani from "@/assets/maya-akash-vani.jpg";
import creation from "@/assets/maya-creation.webp";
import heroScreenprint from "@/assets/maya-hero-screenprint.jpg";
import kaliPunj from "@/assets/maya-kali-punj.jpg";
import poster from "@/assets/maya-poster.webp";
import redDust from "@/assets/maya-red-dust.jpg";
import redFlower from "@/assets/maya-red-flower.webp";
import redTower from "@/assets/maya-red-tower.webp";
import { PageHero } from "@/components/site/PageHero";
import { brand, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: pageTitle("Gallery") },
      {
        name: "description",
        content:
          "Images from the making of MAYA at IEMPACT 2027: sound, ink, pigment, and the old city.",
      },
      { property: "og:title", content: pageTitle("Gallery") },
    ],
  }),
  component: GalleryPage,
});

// `span` places each frame on the 6-column desktop grid (5 rows, fully packed) to keep the
// broken-poster rhythm; portrait artwork gets the tall slots.
const frames = [
  {
    src: poster,
    alt: "MAYA poster: red Bengali lettering over staring red eyes",
    caption: "মায়া — the poster",
    span: "md:col-span-2 md:row-span-2",
    position: "50% 35%",
  },
  {
    src: heroScreenprint,
    alt: "Red and black screenprint architecture",
    caption: "The old city, reprinted",
    span: "md:col-span-4",
    position: "50% 50%",
  },
  {
    src: akashVani,
    alt: "Musician in red silhouette",
    caption: "Akash Vani — rehearsal",
    span: "md:col-span-2",
    position: "50% 40%",
  },
  {
    src: redDust,
    alt: "Crimson pigment and fabric texture",
    caption: "Red dust study",
    span: "md:col-span-2",
    position: "50% 50%",
  },
  {
    src: redFlower,
    alt: "A red flower dissolving into pigment dust",
    caption: "Bloom, dispersed",
    span: "md:col-span-2 md:row-span-2",
    position: "60% 45%",
  },
  {
    src: kaliPunj,
    alt: "Crimson ink in motion",
    caption: "Kali Punj — ink test",
    span: "md:col-span-4",
    position: "50% 50%",
  },
  {
    src: redTower,
    alt: "A tiered stone tower rising into a red sky",
    caption: "Tower, leaning",
    span: "md:col-span-2 md:row-span-2",
    position: "50% 65%",
  },
  {
    src: creation,
    alt: "Two hands reaching toward each other among clouds on deep red",
    caption: "The almost-touch",
    span: "md:col-span-2 md:row-span-2",
    position: "50% 48%",
  },
  {
    src: heroScreenprint,
    alt: "Red and black screenprint architecture",
    caption: "Poster wall",
    span: "md:col-span-2",
    position: "80% 50%",
  },
];

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + frames.length) % frames.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const current = open === null ? null : frames[open];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <PageHero
        index="04 / THE ARCHIVE"
        eyebrow={`${brand} — Gallery`}
        title="Seen"
        accent="Once"
        art={{
          src: akashVani,
          alt: "Musician in red silhouette",
          position: "60% 40%",
          width: "52%",
        }}
      >
        <p className="max-w-md border-l-2 border-primary pl-5 text-base font-medium leading-snug md:text-lg">
          Fragments from the studio and the street. Nothing here happens twice.
        </p>
      </PageHero>

      <section className="bg-background px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between border-b border-foreground/15 pb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
            Frames
          </p>
          <p className="font-display text-xl font-bold">{String(frames.length).padStart(2, "0")}</p>
        </div>

        <ul className="mx-auto grid max-w-7xl auto-rows-[16rem] gap-3 md:auto-rows-[18rem] md:grid-cols-6">
          {frames.map((frame, i) => (
            <li key={i} className={`reveal ${frame.span}`}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-muted text-left"
                aria-label={`Open ${frame.caption}`}
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  loading="lazy"
                  style={{ objectPosition: frame.position }}
                  className="h-full w-full object-cover brightness-[.72] saturate-[.55] transition duration-700 group-hover:scale-[1.04] group-hover:brightness-100 group-hover:saturate-100"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background/90 to-transparent p-5 pt-16">
                  <span className="font-display text-lg font-bold uppercase leading-tight">
                    {frame.caption}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[60] flex flex-col bg-background/95 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between pb-4 text-[10px] font-semibold uppercase tracking-[0.3em]">
            <span className="text-primary">
              {String(open + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="rounded-full border border-foreground/20 px-4 py-2 hover:border-primary hover:text-primary"
              onClick={() => setOpen(null)}
              autoFocus
            >
              Close ✕
            </button>
          </div>
          <div
            className="flex min-h-0 flex-1 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-full max-w-full rounded-2xl object-contain"
            />
          </div>
          <div
            className="flex items-center justify-between gap-4 pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              className="font-display text-2xl font-bold hover:text-primary"
              aria-label="Previous image"
            >
              ←
            </button>
            <p className="font-display text-lg font-bold uppercase md:text-2xl">
              {current.caption}
            </p>
            <button
              type="button"
              onClick={() => step(1)}
              className="font-display text-2xl font-bold hover:text-primary"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
