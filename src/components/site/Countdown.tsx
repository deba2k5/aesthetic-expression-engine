import { useEffect, useState } from "react";

const units = [
  { key: "days", label: "Days", ms: 86_400_000 },
  { key: "hours", label: "Hrs", ms: 3_600_000 },
  { key: "minutes", label: "Min", ms: 60_000 },
  { key: "seconds", label: "Sec", ms: 1_000 },
] as const;

function split(remaining: number) {
  let rest = Math.max(0, remaining);
  return units.map((u) => {
    const n = Math.floor(rest / u.ms);
    rest -= n * u.ms;
    return { ...u, n };
  });
}

/** Live countdown. Renders dashes on the server so hydration never mismatches the clock. */
export function Countdown({ to }: { to: string }) {
  const target = new Date(to).getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = now === null ? null : split(target - now);
  const live = parts !== null && target - (now ?? 0) > 0;

  return (
    <div>
      <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/60">
        <span className="pulse-dot" aria-hidden="true" />
        {live || parts === null ? "Countdown to day one" : "Live now"}
      </p>
      <dl className="flex gap-2" aria-live="off">
        {units.map((u, i) => (
          <div key={u.key} className="countdown-cell">
            <dd className="font-display text-2xl font-extrabold tabular-nums leading-none md:text-3xl">
              {parts ? String(parts[i]!.n).padStart(2, "0") : "--"}
            </dd>
            <dt className="mt-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-foreground/50">
              {u.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
