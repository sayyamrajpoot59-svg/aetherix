# Aetherix — Company Site

The standalone site of **Aetherix**, the parent company behind
[AgentGuard](https://agentguard-chi-mocha.vercel.app) — AI products that put
oversight at the frontier.

**Live:** https://aetherix-site.vercel.app

## Pages

| Route       | Description                                              |
| ----------- | -------------------------------------------------------- |
| `/`         | Landing — hero, editorial artwork, product, principles, newsroom, CTA |
| `/news`     | Newsroom — filter by Product/Company + search            |
| `/products` | Product family — AgentGuard deep-dive                    |
| `/company`  | About — story, facts, founder                            |

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **Tailwind CSS v4** with a custom Aetherix theme (emerald/zinc palette)
- **lucide-react** icons
- System serif stack (Times New Roman / Liberation Serif)

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deployment

Deployed on Vercel. Connect this repo to the Vercel project
(`aetherix-site`) with Git integration, or use the CLI:

```bash
npx vercel --prod
```

## Brand assets

All brand assets live in `public/` — orb logo, favicon, app icons, OG image
and the editorial artwork series (`public/art/`).

---

© 2026 Aetherix. All rights reserved. AgentGuard is an Aetherix company.
