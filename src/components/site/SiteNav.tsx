import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { brand, site } from "@/lib/site";

import { BrandMark } from "./BrandMark";

const links = [
  { to: "/", label: "Home", index: "01" },
  { to: "/events", label: "Events", index: "02" },
  { to: "/schedule", label: "Schedule", index: "03" },
  { to: "/gallery", label: "Gallery", index: "04" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav aria-label="Primary navigation" className={cn("site-nav", scrolled && "is-scrolled")}>
        <Link to="/" aria-label={`${brand} home`} className="flex items-center gap-3 pr-4">
          <BrandMark className="h-10 w-10 rounded-xl object-cover md:h-11 md:w-11" />
          <span className="hidden font-display text-lg font-extrabold uppercase leading-none sm:block md:hidden xl:block">
            {site.name}
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.3em] text-foreground/50">
              {site.year} · {site.theme}
            </span>
          </span>
        </Link>

        <ul className="hidden items-stretch md:flex">
          {links.map((link) => (
            <li key={link.to} className="flex">
              <Link
                to={link.to}
                className="nav-link"
                activeOptions={{ exact: true, includeSearch: false }}
                activeProps={{ className: "is-active" }}
              >
                <span className="nav-link-index">{link.index}</span>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex">
            <a href="#contact" className="nav-link">
              <span className="nav-link-index">05</span>
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-stretch gap-2">
          <Link
            to="/"
            hash="access"
            className="nav-cta hidden sm:inline-flex md:hidden lg:inline-flex"
          >
            Register <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="nav-burger inline-flex md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={cn("nav-burger-line", open && "translate-y-[3px] rotate-45")} />
            <span className={cn("nav-burger-line", open && "-translate-y-[3px] -rotate-45")} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn("mobile-menu flex md:hidden", open && "is-open")}
        aria-hidden={!open}
      >
        <div className="mobile-menu-tear" />
        <ul className="relative z-10 flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                tabIndex={open ? 0 : -1}
                className="mobile-link"
                activeOptions={{ exact: true, includeSearch: false }}
                activeProps={{ className: "text-primary" }}
              >
                <span className="text-xs font-semibold tracking-[0.3em] text-primary">
                  {link.index}/
                </span>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              tabIndex={open ? 0 : -1}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-primary">05/</span>
              Contact
            </a>
          </li>
        </ul>
        <p className="relative z-10 mt-auto text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          Sound / Image / Movement / Kolkata
        </p>
      </div>
    </>
  );
}
