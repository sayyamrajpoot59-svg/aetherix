import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-[#0c0c0f]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="brand-lockup flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aetherix-orb.png" alt="Aetherix logo" className="brand-logo h-8 w-8 rounded-lg" />
              <span className="brand-name font-display text-lg font-bold tracking-[0.14em]">
                AETHERIX
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              A technology company building a family of AI products with one
              shared conviction: artificial intelligence should amplify people,
              never replace their judgment.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              Products
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a
                  href="https://agentguardapp.vercel.app"
                  className="text-zinc-300 transition-colors hover:text-blue-400"
                >
                  AgentGuard
                </a>
              </li>
              <li>
                <Link
                  className="text-zinc-300 transition-colors hover:text-blue-400"
                  href="/products"
                >
                  Product family
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <Link
                  className="text-zinc-300 transition-colors hover:text-blue-400"
                  href="/company"
                >
                  About
                </Link>
              </li>
              <li>
                <Link className="text-zinc-300 transition-colors hover:text-blue-400" href="/news">
                  News
                </Link>
              </li>
              <li>
                <a
                  href="mailto:sayyamrajpoot59@gmail.com"
                  className="text-zinc-300 transition-colors hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a
                  href="https://agentguardapp.vercel.app/privacy"
                  className="text-zinc-300 transition-colors hover:text-blue-400"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://agentguardapp.vercel.app/terms"
                  className="text-zinc-300 transition-colors hover:text-blue-400"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aetherix. All rights reserved.</p>
          <p>AgentGuard is an Aetherix company.</p>
        </div>
      </div>
    </footer>
  );
}
