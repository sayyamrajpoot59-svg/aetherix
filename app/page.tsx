import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

const AGENTGUARD_URL = "https://agentguard-chi-mocha.vercel.app";

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
          <span className="font-bold text-white rise rise-1">
            AI products that put oversight at the frontier.
          </span>{" "}
          <span className="text-zinc-300 rise rise-2">
            Aetherix is the parent company behind AgentGuard, building a family
            of AI products on one conviction: artificial intelligence should
            amplify people, never replace their judgment.
          </span>
        </h1>
      </section>

      <section className="px-4 sm:px-6" aria-label="Aetherix editorial artwork">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <div
              key={n}
              className="art-hover aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
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
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28" aria-label="Products">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              What we build
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A growing family of AI products, governed from day one.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <a
              href={AGENTGUARD_URL}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-500/[0.07] to-transparent p-6 transition-colors hover:border-emerald-500/50 sm:p-8 lg:col-span-2 lg:row-span-2"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400">
                    Live — early access
                  </span>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-emerald-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-colors group-hover:bg-emerald-400">
                Open AgentGuard
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6 sm:py-28"
        aria-label="Principles"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-500" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              How we build
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three principles, set at the company level.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.number}>
                <p className="text-5xl font-bold text-emerald-500/90">
                  {p.number}
                </p>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28" aria-label="Latest news">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-500" />
                <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Latest news
                </p>
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Newsroom
              </h2>
            </div>
            <Link
              className="hidden items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400 sm:inline-flex"
              href="/news"
            >
              All news
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {FEATURED_NEWS.map((item) => (
              <Link
                key={item.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-emerald-500/40"
                href={item.href}
              >
                <div
                  className={
                    item.img
                      ? "aspect-[16/9] overflow-hidden border-b border-white/5"
                      : "aspect-[16/9] border-b border-white/5 bg-gradient-to-br from-emerald-500/10 to-transparent"
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
                  <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-white group-hover:text-emerald-400">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 sm:hidden"
            href="/news"
          >
            All news
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-500/[0.08] via-white/[0.02] to-transparent px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/aetherix-orb.png"
            alt="Aetherix logo"
            className="mx-auto h-14 w-14"
          />
          <p className="mx-auto mt-8 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
            The tools are already running.{" "}
            <span className="text-emerald-400">
              Someone has to keep watch.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={AGENTGUARD_URL}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-[15px] font-semibold text-emerald-950 transition-colors hover:bg-emerald-400"
            >
              Try AgentGuard
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[15px] text-zinc-200 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
              href="/company"
            >
              About Aetherix
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
