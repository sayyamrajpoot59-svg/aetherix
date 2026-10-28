import type { Metadata } from "next";
import { ArrowUpRight, Compass, Mail, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Aetherix is the parent company behind AgentGuard — a technology company building AI products that keep people in command.",
};

const AGENTGUARD_URL = "https://agentguardapp.vercel.app";

const FACTS = [
  { icon: ShieldCheck, label: "Founded", value: "2026" },
  { icon: Compass, label: "Headquarters", value: "Remote-first" },
  { icon: Users, label: "First product", value: "AgentGuard — live in early access" },
];

export default function CompanyPage() {
  return (
    <main className="flex-1">
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 rise rise-1">
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              About Aetherix
            </p>
          </div>
          <h1 className="mt-6 text-4xl leading-[1.18] tracking-tight sm:text-5xl sm:leading-[1.16]">
            <span className="anim-fade-up font-bold text-white">
              The company behind AgentGuard.
            </span>{" "}
            <span className="anim-fade-up anim-delay-1 text-zinc-300">
              Aetherix builds a family of AI products with one shared
              conviction: artificial intelligence should amplify people, never
              replace their judgment.
            </span>
          </h1>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6" aria-label="Our story">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-zinc-400">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Why Aetherix exists
            </h2>
            <p>
              AI tools are everywhere — writing email, moving money, clicking
              buttons, running code. They arrived faster than the habits needed
              to supervise them, and almost every tool asks the user to trust it
              blindly. Aetherix was founded on the opposite instinct: powerful
              software and human command are not a trade-off, they are a design
              requirement.
            </p>
            <p>
              Our first product, <b className="text-zinc-200">AgentGuard</b>, is
              the governance layer for that belief. It watches every AI tool you
              run — not a list you pick from — logs their work, scores their
              risk in real time and freezes anything dangerous, while a single
              tap lets you allow or block any action. It is the trust product of
              the Aetherix family.
            </p>
            <p>
              Beyond AgentGuard, Aetherix sets product strategy, security
              standards and long-term investment for everything it builds.
              Sibling products are in development, and each will ship only when
              it meets the same bar: it must keep people firmly in command.
            </p>
          </div>
          </Reveal>
          <div className="space-y-4">
            <Reveal delay={80}>
            <div className="glow-hover overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/art/g5.png"
                alt="Aetherix editorial artwork"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.label} delay={140 + i * 60} className="h-full">
                  <div className="card-lift glow-hover h-full rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <fact.icon
                      className="h-4 w-4 text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-200">
                      {fact.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6"
        aria-label="Founder"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              Leadership
            </p>
          </div>
          <Reveal delay={60}>
          <div className="glow-hover mt-8 flex flex-col items-start gap-8 rounded-3xl border border-white/10 bg-zinc-950 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-blue-500/30 bg-blue-500/10 shadow-[0_0_36px_-12px_rgba(59,130,246,0.7)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/aetherix-orb.png" alt="Aetherix logo" className="h-14 w-14" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">
                  Sayyam Rajpoot
                </p>
                <p className="mt-1 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
                  Founder
                </p>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-400">
                  “The tools are already running. Someone has to keep watch —
                  that is the company I am building.”
                </p>
              </div>
            </div>
            <a
              href="mailto:sayyamrajpoot59@gmail.com"
              className="glow-hover inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition-colors hover:text-blue-300"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              sayyamrajpoot59@gmail.com
            </a>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the first Aetherix product.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400">
            AgentGuard is live in early access — free to start, every AI tool
            monitored by default.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={AGENTGUARD_URL}
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold"
            >
              Try AgentGuard
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[15px] text-zinc-200 transition-colors hover:border-blue-500/40 hover:text-blue-300"
              href="/products"
            >
              See the product family
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
