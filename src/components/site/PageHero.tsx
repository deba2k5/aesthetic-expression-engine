import type { CSSProperties, ReactNode } from "react";

type HeroArtProps = {
  src: string;
  alt: string;
  /** CSS object-position for the artwork, e.g. "70% 40%". */
  position?: string;
  /** Desktop width of the torn panel, e.g. "58%". Full-bleed on mobile. */
  width?: string;
  /** Optional second artwork for the open (left) side on desktop, instead of the blurred wash. */
  side?: { src: string; alt: string; position?: string };
};

/**
 * Hero artwork: full-bleed on mobile; on desktop a torn poster panel on the right,
 * with a blurred copy of the same image (or a `side` artwork) filling the rest of the header.
 */
export function HeroArt({ src, alt, position = "50% 50%", width = "52%", side }: HeroArtProps) {
  const style = { "--art-w": width } as CSSProperties;
  return (
    <>
      {side ? (
        <img
          src={side.src}
          alt={side.alt}
          className="hero-side"
          style={{ ...style, objectPosition: side.position ?? "50% 50%" }}
        />
      ) : (
        <img src={src} alt="" aria-hidden="true" className="hero-ambient" />
      )}
      <div className="hero-vignette absolute inset-0" />
      {/* The reveal animation animates clip-path, so it runs on inner layers to keep the torn edge. */}
      <div className="hero-art-edge" style={style} aria-hidden="true">
        <div className="animate-clip h-full w-full bg-primary" />
      </div>
      <div className="hero-art" style={style}>
        <img
          src={src}
          alt={alt}
          className="animate-clip h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    </>
  );
}

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  art: HeroArtProps;
  children?: ReactNode;
};

export function PageHero({ index, eyebrow, title, accent, art, children }: PageHeroProps) {
  return (
    <header className="poster-hero page-hero">
      <HeroArt {...art} />

      <span className="poster-index">{index}</span>
      <div className="relative z-20 w-full max-w-[92rem]">
        <p className="animate-reveal text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
        <h1 className="animate-reveal mt-6 font-display text-[2.5rem] font-extrabold uppercase leading-[0.82] sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block">{title}</span>
          <span className="ml-[0.3em] block text-primary">{accent}</span>
        </h1>
        {children && <div className="animate-reveal-delayed mt-10">{children}</div>}
      </div>
    </header>
  );
}
