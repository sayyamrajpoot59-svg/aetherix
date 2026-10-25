"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/news", label: "News" },
  { href: "/products", label: "Products" },
  { href: "/company", label: "Company" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          className="flex items-center gap-2.5"
          aria-label="Aetherix home"
          href="/"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/aetherix-orb.png" alt="" className="h-7 w-7" />
          <span className="text-lg font-bold tracking-[0.14em] text-white">
            AETHERIX
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={
                  active
                    ? "rounded-full px-4 py-2 text-[15px] transition-colors bg-white/10 text-white"
                    : "rounded-full px-4 py-2 text-[15px] transition-colors text-zinc-400 hover:bg-white/5 hover:text-white"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://agentguard-chi-mocha.vercel.app"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-[15px] font-semibold text-emerald-950 transition-colors hover:bg-emerald-400"
          >
            Try AgentGuard
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 hover:bg-white/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                className="rounded-lg px-3 py-3 text-[15px] text-zinc-300 hover:bg-white/5 hover:text-white"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://agentguard-chi-mocha.vercel.app"
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2.5 text-[15px] font-semibold text-emerald-950 transition-colors hover:bg-emerald-400"
            >
              Try AgentGuard
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
