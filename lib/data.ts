export type Job = {
  year: string
  role: string
  company: string
  description: string
  tech?: string[]
}

export type ContentBlock = {
  type: 'p' | 'h2' | 'ul' | 'code'
  content?: string
  items?: string[]
  language?: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  content?: ContentBlock[]
}

export type Social = {
  name: string
  handle: string
  url: string
}

export type Project = {
  title: string
  description: string
  year: string
  tech: string[]
  url?: string
}

export type Recommendation = {
  name: string
  affiliation?: string
  quote: string
}

export const profile = {
  firstName: "Mohamed",
  lastName: "Kesraoui",
  title: "Développeur Fullstack JavaScript (React & Node.js)",
  location: "France (Marseille / Aix‑en‑Provence)",
  available: true,
  email: "kesraouidev@gmail.com",
}

export const skills: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
]

export const jobs: Job[] = [
  {
    year: "2023",
    role: "Développeur Fullstack / Formateur",
    company: "La Capsule",
    description:
      "Encadrement pédagogique et technique en bootcamp intensif. Transmission des bonnes pratiques, revue de code et coaching individuel sur des stacks modernes.",
    tech: ["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    year: "2023",
    role: "Développeur Fullstack freelance",
    company: "Indépendant",
    description:
      "Réalisation de sites vitrines et applications web pour PME et indépendants.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "node.js", "MongoDB" ],
  },
  
  {
    year: "2019",
    role: "Chef de Projet DAFI",
    company: "AFAD",
    description:
      "Pilotage de projets et optimisation de flux métier. Outils internes et automatisations.",
    tech: ["Gestion de projet", "Automatisation", "Excel VBA" ],
  },
]

export const posts: Post[] = [
  {
    slug: "avenir-developpement-web",
    title: "Le futur du développement web",
    excerpt:
      "Comment l'IA et l'automatisation transforment nos façons de construire pour le web.",
    date: "déc. 2024",
    readTime: "5 min",
    content: [
      { type: 'p', content: "L'IA générative et les outils d'automatisation accélèrent la conception et la livraison d'applications. Mais ils ne remplacent pas la pensée produit, la qualité du code, ni l'empathie utilisateur." },
      { type: 'h2', content: "Où l'IA apporte de la valeur" },
      { type: 'ul', items: [
        "Génération de boilerplate (Next.js, API, tests)",
        "Refactorings sûrs et ciblés",
        "Détection d'anomalies de performance et d'accessibilité",
      ]},
      { type: 'p', content: "L'approche gagnante consiste à confier à l'IA les tâches mécaniques, pour concentrer l'effort humain sur l'architecture, l'UX et la robustesse long terme." },
      { type: 'h2', content: "Outils et usages concrets" },
      { type: 'ul', items: [
        "Copilotes pour générer des tests unitaires à partir d'exemples",
        "Assistants de migration (React 18/19, App Router, RSC)",
        "Génération de contenu SEO initial (à réviser humainement)",
      ] },
      { type: 'h2', content: "Bonnes pratiques" },
      { type: 'ul', items: [
        "Revue humaine systématique avant merge",
        "Benchmarks et métriques (CWV) pour valider les gains",
        "CI stricte: lint, tests, type‑checks, audit deps",
      ]},
      { type: 'code', language: 'bash', content: "# Exemple de pipeline minimal\nnext build && vitest run && eslint . --max-warnings=0" },
      { type: 'h2', content: "Limites et risques" },
      { type: 'ul', items: [
        "Hallucinations et approximations de code",
        "Endettement caché si on ne factorise pas",
        "Dérive de sécurité (ex: libs obsolètes) sans audit",
      ] },
      { type: 'p', content: "Conclusion: l'IA est un accélérateur, pas un substitut. Les équipes qui gagnent sont celles qui combinent automation, standards d'ingénierie élevés et boucles de feedback rapides." },
    ],
  },
  {
    slug: "design-systems-a-echelle",
    title: "Design Systems à l'échelle",
    excerpt:
      "Leçons tirées de la création et maintenance de design systems multi‑produits.",
    date: "nov. 2024",
    readTime: "8 min",
    content: [
      { type: 'p', content: "Un design system n'est pas une simple bibliothèque de composants; c'est un contrat entre produit, design et engineering." },
      { type: 'h2', content: "Piliers" },
      { type: 'ul', items: [
        "Tokens (couleurs, espaces, typo) versionnés",
        "Composants accessibles et testés",
        "Documentation vivante (exemples + anti‑patterns)",
      ]},
      { type: 'p', content: "À l'échelle, la gouvernance est essentielle: RFC légères, owners identifiés, et un cycle de release prévisible (semver)." },
      { type: 'code', language: 'ts', content: "// tokens.ts\nexport const spacing = { xs: 4, sm: 8, md: 12, lg: 16 } as const" },
      { type: 'h2', content: "Architecture" },
      { type: 'ul', items: [
        "Base: tokens de design (CSS vars, TS)",
        "Primitives: composants headless accessibles",
        "Composants UI: stylés via Tailwind/CVA",
      ] },
      { type: 'h2', content: "Versioning et diffusion" },
      { type: 'ul', items: [
        "SemVer: patch (fix), minor (ajouts rétro‑compatibles), major (breakings)",
        "Changelog clair et guides de migration",
        "Storybook/Docs avec exemples copiables",
      ] },
      { type: 'h2', content: "Accessibilité (checklist)" },
      { type: 'ul', items: [
        "Contrastes, focus visibles, navigation clavier",
        "ARIA correct sur menus, dialogues, onglets",
        "Tests: axe-core, linters a11y, revues manuelles",
      ] },
    ],
  },
  {
    slug: "performance-first",
    title: "Performance‑First au quotidien",
    excerpt:
      "Pourquoi la performance doit être un réflexe clé dans votre workflow.",
    date: "oct. 2024",
    readTime: "6 min",
    content: [
      { type: 'p', content: "La performance influence SEO, conversion et satisfaction. Viser vert sur Core Web Vitals n'est pas un luxe." },
      { type: 'h2', content: "Quick wins" },
      { type: 'ul', items: [
        "Images optimisées (formats modernes, tailles, lazy)",
        "Code‑splitting et import dynamique",
        "Mise en cache (HTTP, ISR) et CDN",
      ]},
      { type: 'code', language: 'tsx', content: "// Import dynamique\nconst Chart = dynamic(() => import('@/components/chart'), { ssr: false });" },
      { type: 'p', content: "Mesurez avant/après avec Lighthouse, WebPageTest et les rapports de la Search Console." },
      { type: 'h2', content: "Mesure et budgets" },
      { type: 'ul', items: [
        "Fixer des budgets (LCP < 2.5s, TTI < 3.5s)",
        "Suivre en continu (RUM) vs ponctuel (lab)",
        "Alertes quand un budget est dépassé",
      ] },
      { type: 'h2', content: "Décisions d'architecture" },
      { type: 'ul', items: [
        "SSR/ISR pour contenu public dynamique",
        "Edge pour latence critique",
        "Cache et CDN au plus près de l'utilisateur",
      ] },
    ],
  },
  {
    slug: "art-du-code-review",
    title: "L'art du code review",
    excerpt:
      "Mieux collaborer grâce à des revues de code bienveillantes et précises.",
    date: "sept. 2024",
    readTime: "4 min",
    content: [
      { type: 'p', content: "Une bonne review améliore la qualité sans bloquer l'équipe. Elle est précise, factuelle, et propose des pistes concrètes." },
      { type: 'h2', content: "Checklist rapide" },
      { type: 'ul', items: [
        "Nom des commits clair et scope limité",
        "Tests présents pour les cas critiques",
        "Accessibilité et i18n pris en compte",
      ]},
      { type: 'p', content: "Favorisez la discussion. Le but n'est pas d'avoir raison, mais d'aligner l'équipe vers un meilleur résultat." },
      { type: 'h2', content: "Anti‑patterns fréquents" },
      { type: 'ul', items: [
        "Nitpicks stylistiques sans valeur ajoutée",
        "Grosses refontes dans une PR gigantesque",
        "Absence de contexte (screens, perf, risques)",
      ] },
      { type: 'h2', content: "Template de review (exemple)" },
      { type: 'code', language: 'md', content: "### Contexte\n- But de la PR : ...\n- Impact utilisateur : ...\n\n### Tests\n- [ ] Unitaires\n- [ ] Accessibilité\n\n### Risques\n- ...\n\n### Notes\n- ..." },
    ],
  },
]

export const socials: Social[] = [
  { name: "GitHub", handle: "@KesraouiMohamed1991", url: "https://github.com/KesraouiMohamed1991" },
  { name: "LinkedIn", handle: "kesraouimohamed", url: "https://www.linkedin.com/in/kesraouimohamed/" },
]

export const projects: Project[] = [
  {
    title: "Quizzfr",
    description:
      "Une application web moderne pour la préparation à la naturalisation française. L'application propose des quiz interactifs sur 5 catégories essentielles avec authentification Google et suivi des performances.",
    year: "2025",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    url: "https://quizzfr.vercel.app/",
  },
  {
    title: "Massiliapixx photography",
    description:
      "Site vitrine pour un photographe professionnel à Marseille, avec galerie d'images et formulaire de contact.",
    year: "2025",
    tech: ["Next.js", "Recharts", "Node.js"],
    url: "https://massiliapixx.netlify.app/",
  },
  {
    title: "ComptaSolution",
    description:
      "Un portfolio pour un expert‑comptable, mettant en avant ses services et réalisations.",
    year: "2024",
    tech: ["React", "Tailwind CSS", "Vercel"],
    url: "https://compta-solution.vercel.app/",
  },
  {
    title: "MistralTips",
    description:
      "Application mobile pour organiser des sorties entre amis à Marseille.",
    year: "2023",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    url: "https://github.com/KesraouiMohamed1991/MistralTips",
  },
]

export const recommendations: Recommendation[] = [
  {
    name: "Amaury Patris",
    affiliation: "AP Développement",
    quote: "Mohamed livre un code propre et fiable, avec un vrai souci de l'expérience utilisateur."
  },
 
  {
    name: "David Freau",
    affiliation: "La Capsule",
    quote: "Curieux et rigoureux, il monte vite en compétence et partage volontiers ses apprentissages."
  },
  
]
