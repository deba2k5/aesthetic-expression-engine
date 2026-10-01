import { Link } from "@tanstack/react-router";

import { brand, site } from "@/lib/site";

import { BrandMark } from "./BrandMark";

const contacts = [
  { label: "Write to us", value: site.email, href: `mailto:${site.email}` },
  { label: "Call", value: "+91 98300 00000", href: "tel:+919830000000" },
  {
    label: "Find us",
    value: "Park Street, Kolkata 700016, West Bengal",
    href: "https://maps.google.com/?q=Park+Street+Kolkata",
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-foreground/10 bg-background"
    >
      <div className="pointer-events-none absolute -bottom-24 -right-10 font-display text-[22rem] font-extrabold leading-none text-primary/[0.07]">
        মায়া
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 md:px-12 md:pt-32">
        <div className="flex items-center gap-6 text-foreground/30">
          <span className="shrink-0 text-[10px] uppercase tracking-[0.5em] text-primary">
            Contact
          </span>
          <span className="h-px flex-1 bg-foreground" />
        </div>

        <div className="mt-14 grid gap-16 md:grid-cols-12">
          <h2 className="font-display text-[2.5rem] font-extrabold uppercase leading-[0.86] sm:text-5xl md:col-span-5 md:text-7xl">
            Break the
            <br />
            <span className="text-primary">silence.</span>
          </h2>

          <dl className="grid gap-px self-start overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2 md:col-span-7">
            {contacts.map((c) => (
              <div key={c.label} className="footer-cell">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/45">
                  {c.label}
                </dt>
                <dd className="mt-4">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-display text-xl font-bold leading-tight transition-colors hover:text-primary md:text-2xl"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="footer-cell">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/45">
                Follow
              </dt>
              <dd className="mt-4 flex flex-col gap-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between font-display text-lg font-bold uppercase transition-colors hover:text-primary"
                  >
                    {s.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-24 flex flex-col gap-8 border-t border-foreground/10 pt-10 text-foreground/45 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-5">
            <BrandMark className="h-14 w-14 rounded-2xl object-cover grayscale" />
            <div>
              <p className="font-display text-xl font-bold text-foreground">{brand}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em]">
                Presents {site.theme} · {site.themeBengali}
              </p>
            </div>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.3em]"
          >
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/events" className="hover:text-primary">
              Events
            </Link>
            <Link to="/schedule" className="hover:text-primary">
              Schedule
            </Link>
            <Link to="/gallery" className="hover:text-primary">
              Gallery
            </Link>
          </nav>
          <p className="text-[10px] uppercase tracking-[0.25em]">
            © {site.year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
