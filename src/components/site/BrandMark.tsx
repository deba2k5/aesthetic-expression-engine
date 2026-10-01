import { useEffect, useRef, useState } from "react";

import logoAsset from "@/assets/maya-bengali-logo.png.asset.json";
import { cn } from "@/lib/utils";

/** Logo image, falling back to an "IE" monogram tile when the hosted asset can't load. */
export function BrandMark({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // The SSR'd image can fail before hydration attaches onError, so check once on mount too.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span
        role="img"
        aria-label="IEMPACT"
        className={cn(
          "inline-grid place-items-center bg-primary font-display text-sm font-extrabold text-primary-foreground",
          className,
        )}
      >
        IE
      </span>
    );
  }

  return (
    <img
      ref={ref}
      src={logoAsset.url}
      alt="IEMPACT"
      width={1024}
      height={1024}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
