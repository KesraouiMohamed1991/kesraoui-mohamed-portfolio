# Portfolio – Kesraoui Mohamed

Portfolio minimaliste et performant construit avec Next.js 15, TypeScript et Tailwind CSS. Thème clair/sombre, scroll fluide (Lenis), animations discrètes, blog, SEO avancé et pages légales.

## ✨ Fonctionnalités

- Design épuré (Geist), responsive et accessible
- Thème sombre/clair persistant (next-themes)
- Scroll fluide (Lenis) + reveals au scroll (désactivés sur mobile/réduced‑motion)
- Blog avec contenu structuré (titres, listes, code, JSON‑LD Article)
- SEO complet: metadata OG/Twitter, sitemap, robots, JSON‑LD Person/WebSite
- Pages légales: Mentions légales, Confidentialité, CGU, Cookies

## 🚀 Démarrage

```bash
# Installer les dépendances (recommandé)
yarn install

# Lancer en dev
yarn dev

# (Alternatives)
# npm install && npm run dev
# pnpm install && pnpm dev
```

Ouvre http://localhost:3000.

## ⚙️ Configuration

- Domaine canonique: définis `NEXT_PUBLIC_SITE_URL` (prod)
  - Exemple: `https://kesraoui.dev`
  - Vercel: Project → Settings → Environment Variables
- Image Open Graph: ajoute `public/og.png` (1200×630)
- Favicons/logo: place tes fichiers dans `public/` (logo.svg déjà pris en charge)

## 🧩 Personnalisation

- Données (profil, compétences, expériences, projets, liens, posts): `lib/data.ts`
- Styles/variables: `app/globals.css`
- Header/nav: `components/site-header.tsx`
- Effets scroll: `components/lenis-provider.tsx`, `components/scroll-reveal.tsx`
- SEO (global): `app/layout.tsx`
- Blog: index `app/blog/page.tsx`, article `app/blog/[slug]/page.tsx`

## 📦 Déploiement

- Vercel recommandé. Ajoute ton domaine dans Project → Domains.
- Redirige `www` → apex ou l’inverse (301) pour une seule version canonique.

## 📝 Licence

MIT — libre d’utilisation et de modification.
