"use client";

import * as React from "react";

/**
 * Scroll-reveal wrapper — the same pattern AgentGuard's console uses.
 * Children start slightly translated + transparent and ease into place each
 * time they enter the viewport (one shared IntersectionObserver for the
 * whole page — cheap).
 *
 * Replays: `is-visible` is removed while the element is fully out of view,
 * so scrolling back and re-entering re-runs the animation every time.
 *
 * The `reveal` base class is only rendered by this client component, so
 * without JavaScript content simply renders visible — nothing is ever hidden
 * from crawlers or no-JS users. The global `prefers-reduced-motion` rule
 * flattens the transition for users who opt out of motion.
 */

let sharedObserver: IntersectionObserver | null = null;
const revealCallbacks = new WeakMap<Element, () => void>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined")
    return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealCallbacks.get(entry.target)?.();
          } else {
            // fully out of view → reset so the reveal replays on re-entry
            entry.target.classList.remove("is-visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
  }
  return sharedObserver;
}

export function Reveal({
  children,
  className,
  /** stagger delay in ms (e.g. index * 70 for lists) */
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    const observer = getObserver();
    if (!el || !observer) return;
    revealCallbacks.set(el, () => el.classList.add("is-visible"));
    observer.observe(el);
    return () => {
      revealCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className ?? ""}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
