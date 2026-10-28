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
    <header className="glass sticky top-0 z-50 border-b border-white/[0.08]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          className="brand-lockup flex items-center gap-2.5"
          aria-label="Aetherix home"
          href="/"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/aetherix-orb.png" alt="" className="brand-logo h-7 w-7 rounded-lg" />
          <span className="brand-name font-display text-lg font-bold tracking-[0.14em]">
            AETHERIX
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={
                  active
                    ? "nav-link text-[15px] text-white"
                    : "nav-link text-[15px] text-zinc-400 hover:text-white"
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
            href="https://agentguardapp.vercel.app"
            className="btn-gradient inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-semibold"
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
        <div className="border-t border-white/[0.08] bg-[#09090b] px-4 pb-6 pt-2 md:hidden">
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
              href="https://agentguardapp.vercel.app"
              className="btn-gradient mt-3 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-semibold"
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
