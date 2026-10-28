import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Aetherix product family — starting with AgentGuard, the governance layer for every AI tool you run.",
};

const AGENTGUARD_URL = "https://agentguardapp.vercel.app";

const FEATURES = [
  "Every AI tool monitored by default — not a list you pick from",
  "Live activity reports and per-agent risk scores",
  "Your own blacklist and whitelist, enforced the moment you save",
  "Location and identity intelligence on every session",
];

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <section className="px-4 pb-10 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              Product family
            </p>
          </div>
          <h1 className="mt-6 text-4xl leading-[1.18] tracking-tight sm:text-5xl sm:leading-[1.16]">
            <span className="anim-fade-up font-bold text-white">
              Built to keep people in command.
            </span>{" "}
            <span className="anim-fade-up anim-delay-1 text-zinc-300">
              One conviction runs through everything Aetherix ships: powerful
              software, human judgment, no trade-off.
            </span>
          </h1>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6" aria-label="AgentGuard">
        <Reveal>
        <SpotlightCard
          glowColor="99, 102, 246"
          glowSize={520}
          glowOpacity={0.13}
          className="glow-hover overflow-hidden rounded-3xl border border-blue-500/25 bg-gradient-to-b from-indigo-500/[0.09] via-white/[0.02] to-transparent"
        >
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-300">
                  Live — early access
                </span>
              </div>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                AgentGuard
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-300">
                The governance layer for every AI tool you run. AgentGuard
                watches all of your AI tools automatically — their work logged,
                risk scored in real time, anything dangerous frozen — with
                one-tap Allow / Block decisions in your hand.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-zinc-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={AGENTGUARD_URL}
                className="btn-gradient mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold"
              >
                Open AgentGuard
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="glow-hover overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/art/n1.png"
                alt="AgentGuard governance artwork"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </SpotlightCard>
        </Reveal>
      </section>
    </main>
  );
}
