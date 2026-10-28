"use client";

import * as React from "react";

/**
 * Pointer-follow radial glow — drop inside any `relative` container and it
 * paints a soft light that tracks the cursor (the "bento spotlight" effect).
 * The glow layer is purely decorative: it never catches events, never
 * triggers a React re-render (position updates via CSS custom properties
 * written straight to the DOM node) and fades in/out with the pointer.
 */
export function SpotlightGlow({
  className,
  size = 380,
  color = "59, 130, 246",
  opacity = 0.16,
}: {
  className?: string;
  /** glow diameter in px */
  size?: number;
  /** "r, g, b" triplet */
  color?: string;
  /** peak alpha at the center */
  opacity?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;

    const move = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
      el.style.setProperty("--sopacity", "1");
    };
    const leave = () => el.style.setProperty("--sopacity", "0");

    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    return () => {
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--sopacity,0)] transition-opacity duration-300 ${className ?? ""}`}
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 40%), rgba(${color}, ${opacity}), transparent 78%)`,
      }}
    />
  );
}

/**
 * Card with a built-in spotlight — the bento card with the mouse-follow glow.
 * The glow tracks the pointer across the whole card while the content layer
 * stays above the light.
 */
export function SpotlightCard({
  className,
  children,
  glowColor,
  glowSize,
  glowOpacity,
  ...rest
}: React.ComponentProps<"div"> & {
  glowColor?: string;
  glowSize?: number;
  glowOpacity?: number;
}) {
  return (
    <div className={`group relative ${className ?? ""}`} {...rest}>
      <SpotlightGlow color={glowColor} size={glowSize} opacity={glowOpacity} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
