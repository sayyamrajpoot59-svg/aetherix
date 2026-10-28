import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const AGENTGUARD_URL = "https://agentguardapp.vercel.app";

const FEATURES = [
  "Every AI tool monitored by default — not a list you pick from",
  "Live activity reports and per-agent risk scores",
  "Your own blacklist and whitelist, enforced the moment you save",
  "Location and identity intelligence on every session",
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Oversight is not optional",
    body: "Every product we ship monitors everything it touches by default. Oversight should never depend on a user remembering to enable it — so it never does.",
  },
  {
    number: "02",
    title: "People stay in command",
    body: "Artificial intelligence should amplify people, never replace their judgment. Our tools surface what matters and let a human make the call — one tap, full context.",
  },
  {
    number: "03",
    title: "Trust is engineered",
    body: "Security standards, auditable logs and clear data rules are set at the company level. Trust is not a promise we make; it is a property we build.",
  },
];

const FEATURED_NEWS = [
  {
    href: "/news#identity-and-location-intelligence",
    img: "/art/n2.png",
    meta: "Product · Oct 25, 2026",
    title:
      "AgentGuard now greets every user by their real name — and logs where they sign in from",
    excerpt:
      "Names are derived automatically from work email at sign-in, and each session records IP, city, region, country and postal code. Founder-only admin, free default plan and a full purge of demo accounts ship in the same release.",
  },
  {
    href: "/news#preference-based-governance",
    img: "/art/n1.png",
    meta: "Product · Oct 24, 2026",
    title:
      "Preference-based governance: your own blacklist and whitelist, enforced live",
    excerpt:
      "Admins can now define exactly which actions their AI tools may take — block a domain, allow a vendor, freeze anything in between. Rules apply across every monitored tool the moment they are saved.",
  },
  {
    href: "/news#export-quotas",
    img: null,
    meta: "Product · Oct 24, 2026",
    title: "Report exports arrive on every plan, with clear monthly quotas",
    excerpt:
      "Free accounts can inspect everything on screen, Personal plans export five reports a month, Business thirty — and Enterprise is unlimited. Quota usage is visible right beside the export button.",
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
        <h1 className="mx-auto max-w-5xl text-4xl leading-[1.18] tracking-tight sm:text-5xl sm:leading-[1.16] lg:text-[3.5rem] lg:leading-[1.14]">
          <span className="anim-fade-up font-bold text-white">
            AI products that put oversight at the frontier.
          </span>{" "}
          <span className="anim-fade-up anim-delay-1 text-zinc-300">
            Aetherix is the parent company behind AgentGuard, building a family
            of AI products on one conviction: artificial intelligence should
            amplify people, never replace their judgment.
          </span>
        </h1>
      </section>

      <section className="px-4 sm:px-6" aria-label="Aetherix editorial artwork">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <Reveal key={n} delay={i * 60}>
              <div
                className="art-hover card-lift aspect-square overflow-hidden rounded-xl border border-white/[0.08] bg-[#121215]"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/art/g${n}.png`}
                  alt={`Aetherix editorial artwork ${n}`}
                  className="h-full w-full object-cover"
                  loading={n <= 3 ? undefined : "lazy"}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28" aria-label="Products">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              What we build
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A growing family of AI products, governed from day one.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal className="lg:col-span-2 lg:row-span-2">
            <SpotlightCard
              glowColor="99, 102, 246"
              glowSize={480}
              glowOpacity={0.14}
              className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-b from-blue-500/[0.09] via-indigo-500/[0.04] to-transparent"
            >
              <a
                href={AGENTGUARD_URL}
                className="flex h-full flex-col p-6 sm:p-8"
              >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-300">
                    Live — early access
                  </span>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-blue-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                AgentGuard
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-400">
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
              <span className="btn-gradient mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                Open AgentGuard
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              </a>
            </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/5 bg-[#121215] px-4 py-20 sm:px-6 sm:py-28"
        aria-label="Principles"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              How we build
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three principles, set at the company level.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.number} delay={i * 80}>
                <div className="glow-hover h-full rounded-2xl border border-transparent p-4 -m-4">
                  <p className="text-gradient text-5xl font-bold">{p.number}</p>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28" aria-label="Latest news">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Latest news
                </p>
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Newsroom
              </h2>
            </div>
            <Link
              className="glow-hover hidden items-center gap-1.5 rounded-full border border-white/[0.08] px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-blue-400 sm:inline-flex"
              href="/news"
            >
              All news
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {FEATURED_NEWS.map((item, i) => (
              <Reveal key={item.href} delay={i * 80} className="h-full">
                <Link
                  className="card-lift glow-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121215]"
                  href={item.href}
                >
                  <div
                    className={
                      item.img
                        ? "aspect-[16/9] overflow-hidden border-b border-white/5"
                        : "aspect-[16/9] border-b border-white/5 bg-gradient-to-br from-indigo-500/10 to-transparent"
                    }
                  >
                    {item.img && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                      {item.meta}
                    </p>
                    <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-blue-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 sm:hidden"
            href="/news"
          >
            All news
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <Reveal>
        <div className="glow-hover mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-500/25 bg-gradient-to-b from-indigo-500/[0.1] via-white/[0.02] to-transparent px-6 py-16 text-center shadow-[0_0_64px_-24px_rgba(99,102,241,0.5)] sm:px-12 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/aetherix-orb.png"
            alt="Aetherix logo"
            className="brand-logo anim-float mx-auto h-14 w-14 rounded-2xl"
          />
          <p className="mx-auto mt-8 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
            The tools are already running.{" "}
            <span className="text-gradient">Someone has to keep watch.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={AGENTGUARD_URL}
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold"
            >
              Try AgentGuard
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[15px] text-zinc-200 transition-colors hover:border-blue-500/40 hover:text-blue-300"
              href="/company"
            >
              About Aetherix
            </Link>
          </div>
        </div>
        </Reveal>
      </section>
    </main>
  );
}
