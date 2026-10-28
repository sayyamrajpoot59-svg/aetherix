"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const AGENTGUARD_URL = "https://agentguardapp.vercel.app";

type Article = {
  id: string;
  category: "Product" | "Company";
  date: string;
  title: string;
  excerpt: string;
  img: string | null;
};

const ARTICLES: Article[] = [
  {
    id: "identity-and-location-intelligence",
    category: "Product",
    date: "Oct 25, 2026",
    title:
      "AgentGuard now greets every user by their real name — and logs where they sign in from",
    excerpt:
      "Names are derived automatically from work email at sign-in, and each session records IP, city, region, country and postal code. Founder-only admin, free default plan and a full purge of demo accounts ship in the same release.",
    img: "/art/n2.png",
  },
  {
    id: "preference-based-governance",
    category: "Product",
    date: "Oct 24, 2026",
    title:
      "Preference-based governance: your own blacklist and whitelist, enforced live",
    excerpt:
      "Admins can now define exactly which actions their AI tools may take — block a domain, allow a vendor, freeze anything in between. Rules apply across every monitored tool the moment they are saved.",
    img: "/art/n1.png",
  },
  {
    id: "export-quotas",
    category: "Product",
    date: "Oct 24, 2026",
    title: "Report exports arrive on every plan, with clear monthly quotas",
    excerpt:
      "Free accounts can inspect everything on screen, Personal plans export five reports a month, Business thirty — and Enterprise is unlimited. Quota usage is visible right beside the export button.",
    img: null,
  },
  {
    id: "every-ai-tool-monitored",
    category: "Product",
    date: "Oct 23, 2026",
    title:
      "Every AI tool is monitored by default — not a list you pick from",
    excerpt:
      "ChatGPT, Claude, Gemini, Copilot, email assistants, trading bots, scrapers: AgentGuard watches all of them the moment they run. There is no opt-in list to configure, because oversight should never depend on remembering to enable it.",
    img: "/art/g3.png",
  },
  {
    id: "aetherix-founded",
    category: "Company",
    date: "Oct 22, 2026",
    title:
      "Aetherix founded to build AI products that keep people in command",
    excerpt:
      "The parent company behind AgentGuard begins with one conviction: artificial intelligence should amplify people, never replace their judgment. Aetherix sets product strategy, security standards and long-term investment for everything it builds.",
    img: "/art/n3.png",
  },
  {
    id: "agentguard-early-access",
    category: "Company",
    date: "Oct 22, 2026",
    title: "AgentGuard opens early access",
    excerpt:
      "Aetherix’s first product, AgentGuard — the governance layer for every AI tool you run — is live in early access. Real-time activity reports, one-tap Allow / Block decisions and a live risk score for each agent.",
    img: null,
  },
];

const TABS = ["All", "Product", "Company"] as const;

export default function NewsList() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const inTab = tab === "All" || a.category === tab;
      const inQuery =
        q === "" ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q);
      return inTab && inQuery;
    });
  }, [tab, query]);

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 pt-16 sm:pt-24">
          <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              All news
            </h1>
            <div
              className="glass inline-flex rounded-full border border-white/[0.08] p-1"
              role="tablist"
              aria-label="Filter news"
            >
              {TABS.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  className={
                    tab === t
                      ? "btn-gradient rounded-full px-5 py-2 text-[15px] font-semibold"
                      : "rounded-full px-5 py-2 text-[15px] text-zinc-400 transition-colors hover:text-white"
                  }
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          </Reveal>
          <Reveal delay={80}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              {filtered.length} article{filtered.length === 1 ? "" : "s"}
            </p>
            <label className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                aria-hidden="true"
              />
              <input
                placeholder="Enter search..."
                className="h-10 w-56 rounded-full border border-white/[0.08] bg-[#121215] pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
                aria-label="Search news"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          </Reveal>
        </div>

        <div className="mt-2 divide-y divide-white/5">
          {filtered.map((article, i) => (
            <Reveal key={article.id} delay={Math.min(i, 6) * 60}>
            <article id={article.id} className="scroll-mt-24 py-10">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                    {article.category} · {article.date}
                  </p>
                  <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-white sm:text-[1.7rem]">
                    {article.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-zinc-400">
                    {article.excerpt}
                  </p>
                  <a
                    href={AGENTGUARD_URL}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300"
                  >
                    Read on AgentGuard
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <div
                  className={
                    article.img
                      ? "glow-hover aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.08]"
                      : "hidden aspect-[16/10] rounded-xl border border-white/5 bg-gradient-to-br from-indigo-500/10 to-transparent lg:block"
                  }
                >
                  {article.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.img}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
