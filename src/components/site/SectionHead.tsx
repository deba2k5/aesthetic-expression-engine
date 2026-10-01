import type { ReactNode } from "react";

/** Numbered section opener used across the home page: "03 / LABEL ───── action". */
export function SectionHead({
  index,
  label,
  title,
  action,
}: {
  index: string;
  label: string;
  title?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-14 max-w-7xl">
      <div className="flex items-center gap-5 border-b border-foreground/15 pb-5">
        <span className="font-display text-sm font-bold text-primary">{index}</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/70">
          {label}
        </span>
        <span className="flex-1" />
        {action}
      </div>
      {title && (
        <h2 className="reveal mt-10 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.92] md:text-6xl">
          {title}
        </h2>
      )}
    </div>
  );
}
