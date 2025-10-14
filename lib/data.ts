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
  handle?: string
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
  link?: string
}

export type FAQ = {
  question: string
  answer: string
}

export type Service = {
  title: string
  description: string
  benefits: string[]
  ctaLabel?: string
  ctaHref?: string
}

export type PricingPlan = {
  name: string
  tagline: string
  priceMonthly?: number
  priceYearly?: number
  highlight?: boolean
  badge?: string
  customLabel?: string
  ctaLabel: string
  ctaHref: string
  ctaNote?: string
  features: string[]
}

export const profile = {
  firstName: "Calimo",
  lastName: "Agency",
  title: "Agence digitale & marketing — sites web, branding, growth",
  location: "Marseille • Aix-en-Provence • Remote",
  available: true,
  email: "calimoagency@gmail.com",
}

export const skills: string[] = [
  "Stratégie digitale",
  "Branding & Identité",
  "UX/UI Design",
  "Next.js & React",
  "Marketing & Growth",
  "SEO & Performance",
]

export const jobs: Job[] = [
  {
    year: "2025",
    role: "Sites vitrines & e-commerce premium",
    company: "Calimo Studio",
    description:
      "Conception et développement de plateformes sur-mesure : architecture Next.js, design system cohérent et intégration CRM/marketing.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "HubSpot"],
  },
  {
    year: "2024",
    role: "Produits digitaux & SaaS",
    company: "Scale-ups & startups EU",
    description:
      "Accompagnement produit global : discovery, UX, développements fullstack, automatisations data et pilotage des livrables.",
    tech: ["React", "Node.js", "PostgreSQL", "Figma", "Segment"],
  },
  {
    year: "2023",
    role: "Branding & activation",
    company: "Marques B2B/B2C",
    description:
      "Plateformes de marque, guidelines graphiques, campagnes d'acquisition et reporting data-driven pour des PME et scale-ups.",
    tech: ["Figma", "Illustrator", "Meta Ads", "Google Ads", "Notion"],
  },
]

export const posts: Post[] = [
  {
    slug: "tendances-web-2025",
    title: "Tendances web 2025 : rapidité, confiance et narration",
    excerpt:
      "Pourquoi le trio performance, preuve sociale et storytelling devient indispensable pour convertir en 2025.",
    date: "janv. 2025",
    readTime: "12 min",
    content: [
      {
        type: 'p',
        content:
          "En 2025, les sites web performants ne se contentent plus d’être beaux ou ergonomiques. Ils deviennent de véritables plateformes d’expérience et de réassurance. Les utilisateurs sont aujourd’hui sursollicités, pressés et méfiants. Ils ne lisent plus : ils scannent, évaluent et décident en quelques secondes. La différence entre un site qui convertit et un site qui rebondit se joue désormais sur trois piliers : la rapidité perçue, la confiance générée et la clarté narrative. Ces trois leviers combinent des dimensions techniques, cognitives et sociales, parfaitement alignées avec les nouveaux comportements économiques des consommateurs digitaux."
      },
      {
        type: 'h2',
        content: "1. La performance perçue : accélérateur de crédibilité"
      },
      {
        type: 'p',
        content:
          "Le premier facteur déterminant d’un site performant en 2025 reste la vitesse, mais pas uniquement au sens technique. La notion de « performance perçue » prend le dessus : ce que ressent l’utilisateur compte davantage que les chiffres bruts de Google PageSpeed. Un site peut avoir un LCP (Largest Contentful Paint) de 2,1 secondes et pourtant paraître plus rapide qu’un autre à 1,8 seconde, simplement parce que la structure visuelle rassure, que le contenu prioritaire s’affiche d’abord, et que les transitions sont fluides. La perception crée la confiance."
      },
      {
        type: 'p',
        content:
          "L’économie numérique actuelle repose sur un paradoxe : plus l’offre s’élargit, plus le temps de décision se raccourcit. L’utilisateur moyen passe moins de 50 secondes sur une page avant de juger la valeur d’un produit ou d’un service. Dans ce contexte, la vitesse est un argument économique : elle conditionne directement le taux de conversion, le coût d’acquisition et même la fidélisation. Amazon l’avait déjà prouvé dès 2012 : chaque 100 ms de latence coûtait 1 % de ventes. En 2025, ce n’est plus un luxe, c’est une base. Les entreprises qui intègrent la performance dans leur stratégie de marque — au même titre que le design ou la promesse produit — gagnent un avantage compétitif durable."
      },
      {
        type: 'ul',
        items: [
          "Optimisation du LCP (< 2s) sur desktop et mobile via compression adaptative et CDN régionalisés",
          "Préchargement intelligent des assets critiques (images, fonts, scripts essentiels)",
          "Animations douces et progressives pour réduire la sensation d’attente",
          "Mise en cache orientée UX : prioriser le contenu perçu comme vital (hero, CTA, preuve sociale)"
        ]
      },
      {
        type: 'p',
        content:
          "La performance devient ainsi un vecteur de storytelling implicite : un site qui se charge vite envoie inconsciemment le message d’une marque organisée, efficace, crédible. À l’inverse, une lenteur — même légère — évoque l’amateurisme ou le manque de fiabilité. Dans une économie attentionnelle, la vitesse n’est pas qu’une métrique technique, c’est un signal social."
      },
      {
        type: 'h2',
        content: "2. La narration claire : du storytelling à la storydoing"
      },
      {
        type: 'p',
        content:
          "Le storytelling, autrefois réservé aux marques grand public, devient en 2025 un outil stratégique pour toutes les entreprises, y compris les B2B et les SaaS techniques. Mais la narration évolue : on ne vend plus des histoires, on fait vivre une transformation. C’est le passage du storytelling au storydoing. Les utilisateurs veulent voir des preuves d’impact, des résultats tangibles et des parcours authentiques. Ce n’est plus le ‘pourquoi’ qui convainc, c’est le ‘comment’."
      },
      {
        type: 'p',
        content:
          "Dans cette nouvelle logique, chaque page web doit raconter une histoire cohérente : celle du problème que l’on résout, du changement que l’on provoque et du futur que l’on propose. Le ‘hero’ de page n’est plus un simple slogan ; c’est une promesse contextualisée qui doit capter la tension du moment. Le reste de la page déroule une narration progressive — bénéfices, preuves, objections, action — comme un entonnoir psychologique. Cette approche narrative améliore non seulement la conversion mais aussi la mémorisation de la marque."
      },
      {
        type: 'ul',
        items: [
          "Un hero productif : promesse claire + bénéfice immédiat + CTA contextualisé",
          "Des bénéfices segmentés par persona, illustrés par des données ou témoignages",
          "Des transitions narratives : chaque bloc prépare le suivant (preuve → bénéfice → action)",
          "Un ton conversationnel, mais rigoureux : crédibilité avant tout"
        ]
      },
      {
        type: 'p',
        content:
          "Dans un contexte où les IA génératives produisent des milliards de contenus similaires, la narration humaine et authentique devient un facteur de différenciation majeur. Ce que les utilisateurs recherchent n’est plus une avalanche d’arguments mais une structure mentale dans laquelle ils peuvent se projeter. En économie comportementale, on parlerait d’‘architecture cognitive de la persuasion’. Chaque phrase doit réduire la friction mentale entre curiosité et décision."
      },
      {
        type: 'h2',
        content: "3. La confiance : nouvelle monnaie du web"
      },
      {
        type: 'p',
        content:
          "La confiance est aujourd’hui le carburant invisible de la croissance. En 2025, le consommateur digital est à la fois plus informé et plus sceptique. Il a été exposé à des milliers de promesses creuses, à des arnaques bien marketées et à des IA générant des faux avis. Dans ce climat, une marque qui inspire confiance prend instantanément l’ascendant sur son marché. La preuve sociale, la transparence et la cohérence de marque ne sont plus des ‘bonus’, mais des conditions d’existence."
      },
      {
        type: 'ul',
        items: [
          "Mettre en avant des études de cas chiffrées et vérifiables",
          "Afficher les visages : clients, fondateurs, équipe — l’humain renforce la légitimité",
          "Utiliser des labels ou certifications réelles, pas des icônes décoratives",
          "Soigner les onboarding : les 30 premières secondes déterminent la perception globale"
        ]
      },
      {
        type: 'p',
        content:
          "Les utilisateurs jugent la crédibilité d’une marque à travers des micro-signaux : cohérence du design, alignement entre promesse et ton, qualité du support, clarté juridique. Les marques qui investissent dans l’expérience de confiance (Trust Experience Design) créent un effet réseau : chaque interaction positive renforce la valeur perçue du tout. C’est une approche systémique, où la conversion n’est plus un acte isolé mais la conséquence logique d’un parcours maîtrisé."
      },
      {
        type: 'h2',
        content: "Notre approche Calimo : méthodologie agile et mesurable"
      },
      {
        type: 'p',
        content:
          "Chez Calimo, nous abordons chaque refonte ou création web comme un sprint stratégique. D’abord un audit complet — technique, UX, contenu et perception — pour détecter les points de friction. Puis un prototypage rapide sur Figma et Next.js, orienté Core Web Vitals, avec un design system modulaire et réutilisable. Cette approche itérative permet de livrer un MVP performant en quelques semaines, puis d’optimiser sur données réelles (heatmaps, analytics, feedbacks clients)."
      },
      {
        type: 'p',
        content:
          "L’objectif n’est pas seulement d’avoir un site rapide et beau, mais d’orchestrer une machine de conversion continue : chaque élément du site devient un levier mesurable dans un système global de croissance. C’est ce qu’on appelle la logique ‘Growth Loop’. Chaque test, chaque interaction, chaque clic nourrit le système, améliore le message et alimente la stratégie. En 2025, la réussite digitale appartient à ceux qui combinent rigueur de mesure, empathie narrative et excellence technique."
      },
      {
        type: 'p',
        content:
          "En somme, la tendance web 2025 n’est pas une mode esthétique, mais un tournant structurel. Les sites deviennent des interfaces de confiance, où la performance traduit la promesse, la narration guide la compréhension, et la transparence renforce la fidélité. Dans un monde où les algorithmes évoluent sans cesse, une vérité demeure : les humains achètent d’autres humains — pas des pixels. Et c’est ce lien de confiance, soutenu par la vitesse et la clarté, qui fera la différence entre une marque passagère et une marque durable."
      }
    ],
  },
  {
    slug: "importance-seo-2025",
    title: "Pourquoi le SEO reste un levier majeur en 2025",
    excerpt:
      "La recherche organique continue de générer un trafic qualifié et durable pour les marques ambitieuses.",
    date: "févr. 2025",
    readTime: "13 min",
    content: [
      {
        type: 'p',
        content:
          "En 2025, le SEO est loin d’être mort — il a simplement changé de visage. L’avènement de l’IA générative, de la recherche conversationnelle et des moteurs hybrides (Google SGE, Perplexity, You.com) a profondément redéfini la manière dont les utilisateurs accèdent à l’information. Pourtant, malgré cette mutation, le référencement naturel demeure le socle de visibilité le plus solide pour les marques. C’est le seul canal capable de combiner volume, intention et crédibilité à long terme. Dans un contexte où les coûts d’acquisition explosent sur les canaux payants, le SEO redevient une stratégie économique avant d’être technique."
      },
      {
        type: 'h2',
        content: "1. Le SEO 2025 : entre IA et intention utilisateur"
      },
      {
        type: 'p',
        content:
          "La grande révolution de 2025 réside dans la compréhension de l’intention. Les moteurs de recherche — ou plutôt les moteurs de réponse — ne se contentent plus d’indexer des pages, ils interprètent les besoins. Grâce aux modèles de langage avancés, Google et ses concurrents construisent désormais des ‘synthèses dynamiques’ plutôt que des listes de liens. Cela change tout : la position #1 n’est plus seulement une question de mots-clés, mais de pertinence contextuelle, d’autorité perçue et de capacité à nourrir l’IA de réponses crédibles."
      },
      {
        type: 'p',
        content:
          "Dans ce nouveau paradigme, le contenu SEO performant n’est plus celui qui répète des expressions, mais celui qui structure l’information de manière logique et vérifiable. Les marques qui gagnent sont celles qui pensent comme des éditeurs, pas comme des référenceurs. L’algorithme évalue la cohérence sémantique, la profondeur de traitement et l’expérience de lecture. C’est ce qu’on appelle désormais le ‘Human Search Experience’ — une fusion entre l’UX, le contenu et la confiance algorithmique."
      },
      {
        type: 'ul',
        items: [
          "Écrire pour l’intention, pas pour le mot-clé : comprendre les micro-moments de recherche (besoin, exploration, décision)",
          "Structurer les contenus autour de ‘topics clusters’ interconnectés plutôt que d’articles isolés",
          "Optimiser les formats enrichis (FAQ, How-to, vidéos intégrées, citations expertes) pour nourrir les réponses IA",
          "Rendre chaque page scannable, explicite et mesurable : l’UX devient un facteur SEO central"
        ]
      },
      {
        type: 'p',
        content:
          "Autrement dit, le SEO n’est plus une discipline d’optimisation, mais une discipline d’orchestration. Il relie la technique, le contenu et la data dans une même dynamique de croissance durable. Les entreprises qui comprennent cette interconnexion en 2025 consolident leur visibilité à long terme, tandis que celles qui misent uniquement sur les publicités payantes subissent une volatilité croissante de leurs coûts d’acquisition."
      },
      {
        type: 'h2',
        content: "2. L’impact économique du SEO : un levier de rentabilité mesurable"
      },
      {
        type: 'p',
        content:
          "D’un point de vue économique, le SEO est aujourd’hui le seul canal capable de réduire le CAC (coût d’acquisition client) tout en augmentant la valeur vie client (LTV). Pourquoi ? Parce qu’il capitalise sur des actifs pérennes : chaque page bien positionnée continue de générer du trafic et des conversions sans coût marginal. À l’inverse, chaque clic payé sur Google Ads ou Meta devient un coût immédiat et éphémère. C’est la logique du patrimoine digital : le SEO construit un actif, là où le paid construit une dette."
      },
      {
        type: 'p',
        content:
          "Les entreprises matures ont compris que le ROI SEO ne se mesure pas seulement en volume de trafic, mais en qualité et en intention. Un contenu qui attire 1 000 visiteurs ultra-qualifiés peut générer plus de revenus qu’un article qui attire 10 000 lecteurs non pertinents. En 2025, le rôle du SEO manager s’apparente de plus en plus à celui d’un analyste stratégique : comprendre les cycles de décision, les comportements de recherche et les dynamiques concurrentielles pour créer des tunnels organiques rentables."
      },
      {
        type: 'ul',
        items: [
          "Optimiser le CAC par la création d’actifs organiques à long terme",
          "Identifier les segments à forte intention commerciale via l’analyse sémantique",
          "Aligner la stratégie SEO avec la roadmap produit et les objectifs business",
          "Mesurer la contribution du SEO dans le mix d’acquisition global (SEO-assisted conversions)"
        ]
      },
      {
        type: 'p',
        content:
          "Le SEO devient donc un levier macroéconomique pour les entreprises numériques : il influence non seulement la croissance, mais la structure même de leurs coûts. Une entreprise qui dépend à 80 % du paid media reste vulnérable à chaque évolution d’algorithme ou hausse de CPM. Celle qui équilibre ses sources d’acquisition, en combinant organique et payant, stabilise son modèle et sécurise ses marges."
      },
      {
        type: 'h2',
        content: "3. Checklist SEO 2025 : allier technique, contenu et confiance"
      },
      {
        type: 'p',
        content:
          "En 2025, une stratégie SEO performante repose sur trois fondations indissociables : la santé technique, la pertinence éditoriale et la confiance perçue. Ces piliers sont à la fois complémentaires et interconnectés — négliger l’un d’entre eux revient à saboter l’ensemble."
      },
      {
        type: 'ul',
        items: [
          "Audit Core Web Vitals + plan d’optimisation mensuel pour maintenir les scores LCP, INP et CLS dans le vert",
          "Stratégie éditoriale pilotée par les personas et les offres, soutenue par des briefs orientés conversion",
          "Mise en place d’un maillage interne intelligent : relier les contenus selon la logique de parcours utilisateur",
          "Déploiement de balises Schema.org pour enrichir les résultats et alimenter la Search Generative Experience",
          "Création de ‘pages de preuve’ : études de cas, témoignages clients, FAQ dynamiques, ressources téléchargeables"
        ]
      },
      {
        type: 'p',
        content:
          "Le référencement naturel ne se joue plus sur des ajustements de balises, mais sur la cohérence d’un écosystème digital. Google ne juge plus uniquement la qualité du contenu, mais la confiance qu’il inspire. Une page techniquement parfaite mais pauvre en signal humain (avis, engagement, backlinks de qualité) n’aura pas le même poids qu’une page plus authentique, ancrée dans une réputation vérifiable."
      },
      {
        type: 'h2',
        content: "4. Le futur du SEO : de la visibilité à l’autorité"
      },
      {
        type: 'p',
        content:
          "Le SEO du futur n’aura plus pour objectif d’apparaître, mais de dominer son segment de conversation. On entre dans l’ère de l’autorité. Les moteurs IA ne se contentent plus de référencer : ils citent, synthétisent, recommandent. Être cité par une IA dans une réponse générative équivaut à un nouveau type de référencement, que l’on pourrait appeler ‘AI Citation’. Pour être éligible à ces citations, il faut devenir une source de référence dans son domaine — et cela passe par une crédibilité sémantique et humaine."
      },
      {
        type: 'ul',
        items: [
          "Travailler son E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)",
          "Associer chaque contenu à un auteur identifiable et crédible",
          "Publier des insights propriétaires (données, études, retours terrain) plutôt que des compilations",
          "Construire des ponts entre SEO et PR digitale : les mentions de marque renforcent le signal d’autorité"
        ]
      },
      {
        type: 'p',
        content:
          "Cette approche repositionne le SEO comme une stratégie de réputation numérique. Le moteur de recherche ne cherche plus à montrer tout le monde, mais à recommander ceux qui incarnent la confiance. C’est une évolution socio-économique majeure : dans un monde saturé d’informations, la rareté n’est plus celle du contenu, mais celle de la crédibilité."
      },
      {
        type: 'h2',
        content: "Notre approche Calimo : intégrer le SEO au cœur de la stratégie de croissance"
      },
      {
        type: 'p',
        content:
          "Chez Calimo, nous intégrons le SEO non pas comme une brique isolée, mais comme un système vivant au cœur de la stratégie growth. Chaque projet commence par une cartographie des intentions : comprendre ce que cherche réellement l’audience, à quel moment et pourquoi. Cette approche ‘intent-driven’ alimente ensuite la production de contenus à haute valeur ajoutée, conçus dès l’origine pour convertir."
      },
      {
        type: 'p',
        content:
          "Sur le plan technique, nos équipes travaillent avec des stacks modernes (Next.js, headless CMS, GraphQL) afin d’allier performance et scalabilité. Les audits Core Web Vitals sont intégrés au cycle mensuel d’optimisation. Côté contenu, nous co-créons des assets durables : articles piliers, études de cas, ressources téléchargeables et FAQ interactives. Enfin, nous mesurons systématiquement l’impact SEO dans la boucle de croissance globale : combien de leads, de rendez-vous ou de ventes chaque page génère-t-elle réellement ?"
      },
      {
        type: 'p',
        content:
          "Cette approche intégrée permet de transformer le SEO en moteur d’apprentissage business. Chaque requête devient une donnée d’insight, chaque contenu une opportunité d’optimisation. En 2025, la frontière entre marketing organique et stratégie d’entreprise s’efface : le SEO n’est plus un outil, c’est une intelligence de croissance."
      },
      {
        type: 'p',
        content:
          "En résumé, le SEO reste en 2025 le pilier de la visibilité numérique durable. Il s’adapte aux évolutions technologiques sans jamais perdre son essence : relier l’offre à la demande, de manière fluide, pertinente et crédible. Les marques qui comprennent cette logique ne dépendent plus des algorithmes : elles deviennent les repères mêmes du web. Et dans un monde où tout s’accélère, la stabilité de cette position vaut bien plus que n’importe quelle campagne éphémère."
      }
    ],
  },
   {
    slug: "ux-landing-b2b",
    title: "Landing pages B2B : transformer l'intérêt en rendez-vous",
    excerpt:
      "Nos patterns UX pour faire signer des rendez-vous qualifiés sur des offres complexes.",
    date: "déc. 2024",
    readTime: "14 min",
    content: [
      {
        type: 'p',
        content:
          "En B2B, la landing page n’est pas une simple vitrine : c’est un outil de qualification et de conversion. En 2025, les entreprises qui réussissent à générer des leads qualifiés ne se contentent plus de ‘présenter’ leur offre. Elles orchestrent un parcours de conviction. Dans un environnement où le décideur moyen est exposé à plus de 500 publicités par jour et où le cycle de vente peut durer plusieurs mois, chaque interaction doit être stratégique. L’objectif n’est pas seulement d’obtenir un clic, mais de déclencher un rendez-vous qualifié avec un prospect réellement intéressé. Pour cela, la clé réside dans une UX empathique, des messages clairs et une structure narrative orientée décision."
      },
      {
        type: 'h2',
        content: "1. Le contexte B2B : complexité, rationalité et confiance"
      },
      {
        type: 'p',
        content:
          "Contrairement au B2C, le B2B repose sur une logique de décision collective. Un site web ne parle pas à une seule personne, mais à un écosystème : CEO, CMO, CTO, acheteur, parfois même le comité d’investissement. Chacun a ses critères, ses freins et son niveau d’expertise. C’est pourquoi une landing B2B doit être conçue comme un argumentaire structuré, capable de répondre simultanément à plusieurs profils. L’UX n’a pas seulement pour rôle de séduire, mais d’orchestrer la compréhension et la confiance."
      },
      {
        type: 'p',
        content:
          "La psychologie du décideur B2B est marquée par trois traits : la prudence, la recherche de preuve et la peur du risque. Le prospect ne cherche pas le meilleur produit, mais la solution la plus sûre. Le design, le ton, les preuves et la structure doivent donc minimiser la perception de risque à chaque étape. Ce principe économique — ‘minimiser le coût psychologique de la décision’ — est au cœur de toute stratégie de growth B2B performante."
      },
      {
        type: 'ul',
        items: [
          "Une landing B2B ne doit pas convaincre, elle doit rassurer.",
          "Chaque bloc doit réduire une objection potentielle.",
          "L’UX doit rendre la compréhension immédiate : 5 secondes pour situer l’offre.",
          "Le CTA doit paraître logique, pas intrusif."
        ]
      },
      {
        type: 'p',
        content:
          "Ainsi, la conversion ne dépend pas seulement du contenu, mais du sentiment de maîtrise que ressent le visiteur. Une page qui structure bien l’information donne à l’utilisateur la sensation d’avoir compris — et donc de contrôler sa décision. C’est ce sentiment d’autonomie qui génère la confiance."
      },
      {
        type: 'h2',
        content: "2. Structure type d’une landing B2B performante"
      },
      {
        type: 'p',
        content:
          "En 2025, une landing page B2B doit raconter une histoire en quatre temps : capter l’attention, prouver la valeur, lever les objections et inviter à l’action. Ce modèle, inspiré des frameworks de persuasion (AIDA, PAS, JTBD), s’applique à toutes les offres complexes — SaaS, services professionnels, conseil, formation ou tech industrielle."
      },
      {
        type: 'ul',
        items: [
          "Hero orienté valeur + CTA principal",
          "Bloc ‘problèmes résolus’ et bénéfices chiffrés",
          "Preuve sociale : logos, citations, quick wins",
          "FAQ et derniers verrous (sécurité, accompagnement, délais)"
        ]
      },
      {
        type: 'p',
        content:
          "Le hero, véritable première impression cognitive, doit être conçu comme un ‘résumé de la promesse’. En une phrase, l’utilisateur doit comprendre ce que l’entreprise fait, pour qui, et pourquoi cela compte. Les meilleures landings de 2025 utilisent des formulations orientées transformation (‘Passez de X à Y’), soutenues par des CTA orientés bénéfice (‘Planifiez votre diagnostic gratuit’, ‘Découvrez votre potentiel d’automatisation’)."
      },
      {
        type: 'p',
        content:
          "Les blocs suivants doivent développer une narration rationnelle. En B2B, on ne vend pas un rêve, mais une efficacité. Il faut donc démontrer, chiffrer et illustrer. Les bénéfices doivent être concrets, mesurables, alignés sur les KPIs du prospect (gain de temps, réduction des coûts, fiabilité, scalabilité). C’est ce qu’on appelle le ‘Proof-driven Design’ : un design qui s’appuie sur des données plutôt que des superlatifs."
      },
      {
        type: 'p',
        content:
          "La preuve sociale, quant à elle, reste la clé de voûte du parcours. Selon les études LinkedIn B2B Institute, 92 % des décideurs affirment qu’un témoignage client ou un logo connu influence leur décision. En 2025, on privilégie des preuves qualitatives (résultats chiffrés, études de cas réelles) à des phrases génériques (‘ils nous font confiance’). Chaque citation doit raconter une micro-victoire vérifiable."
      },
      {
        type: 'h2',
        content: "3. Les leviers UX de conversion en B2B"
      },
      {
        type: 'p',
        content:
          "La conversion B2B repose sur la capacité à transformer un intérêt diffus en une action mesurable. L’UX joue ici un rôle stratégique : il faut réduire la friction cognitive, anticiper les comportements et créer des déclencheurs subtils. Une bonne landing ne force jamais la conversion — elle la rend inévitable. Voici les principaux leviers utilisés dans les stratégies growth actuelles."
      },
      {
        type: 'ul',
        items: [
          "Clarté visuelle : hiérarchie typographique, espaces blancs, CTA visibles mais discrets.",
          "Réciprocité : offrir une valeur immédiate avant de demander un engagement (livre blanc, audit, diagnostic).",
          "Progression naturelle : diviser les étapes du formulaire pour éviter la fatigue cognitive.",
          "Micro-engagements : boutons de type ‘Je veux en savoir plus’ ou ‘Simuler mon ROI’ plutôt que ‘Contactez-nous’.",
          "Social proof dynamique : logos et témoignages qui s’adaptent au persona détecté ou au secteur choisi."
        ]
      },
      {
        type: 'p',
        content:
          "En 2025, les meilleurs sites B2B intègrent aussi des éléments interactifs : simulateurs de gains, quiz d’éligibilité, configurateurs d’offres. Ces outils permettent de personnaliser le parcours et de nourrir le CRM avec des données qualifiées. C’est une approche data-driven où la page devient un point d’entrée dans le funnel marketing. En retour, chaque interaction enrichit la connaissance client, ce qui permet d’ajuster les campagnes et d’augmenter le taux de rendez-vous conclus."
      },
      {
        type: 'p',
        content:
          "Autre tendance forte : la personnalisation temps réel. Grâce à l’IA et à l’analyse comportementale, les pages peuvent désormais adapter leur contenu en fonction du secteur détecté, de la localisation ou du stade du parcours. Un décideur industriel ne verra pas le même bénéfice qu’un cabinet de conseil. Cette contextualisation améliore significativement la pertinence perçue et donc le taux de conversion."
      },
      {
        type: 'h2',
        content: "4. Du lead au rendez-vous : la dimension relationnelle"
      },
      {
        type: 'p',
        content:
          "Obtenir un formulaire rempli ne suffit plus. Le véritable enjeu du B2B est de transformer un lead en opportunité réelle. C’est là qu’intervient la dimension relationnelle. En 2025, les utilisateurs attendent une expérience fluide et personnalisée après leur conversion : un onboarding humain, rapide et transparent. Chaque heure d’attente réduit les chances de transformer le contact en rendez-vous effectif. La vitesse de réaction devient un facteur de confiance."
      },
      {
        type: 'ul',
        items: [
          "Réponse automatisée immédiate avec personnalisation (nom, offre, contexte).",
          "Prise de rendez-vous intégrée directement après le formulaire (Calendly, Hubspot Meeting).",
          "Séquence d’e-mails de réassurance : contenu utile, études de cas, préparation au rendez-vous.",
          "Appel de qualification rapide (< 24h) pour valider le besoin et contextualiser l’échange."
        ]
      },
      {
        type: 'p',
        content:
          "L’économie comportementale explique ce phénomène par la loi de la ‘fenêtre d’attention’ : après un acte d’intérêt, la motivation du prospect décroît exponentiellement. La marque qui engage en premier capture la confiance. Le temps de réaction devient donc un KPI stratégique, au même titre que le taux de clic ou de conversion."
      },
      {
        type: 'h2',
        content: "5. Notre approche Calimo : l’UX au service de la croissance"
      },
      {
        type: 'p',
        content:
          "Chez Calimo, nous concevons les landing pages B2B comme des outils d’accélération commerciale. Chaque projet commence par un audit comportemental : analyse du funnel existant, cartographie des frictions et compréhension du parcours décisionnel. Nous identifions ensuite les signaux clés qui déclenchent la confiance et la conversion. L’objectif : créer une expérience qui parle autant à la raison qu’à l’émotion."
      },
      {
        type: 'p',
        content:
          "Notre méthodologie repose sur trois étapes : recherche, prototypage, validation. Nous utilisons des tests utilisateurs pour valider la compréhension du message, des heatmaps pour détecter les zones de friction, et des tests A/B pour mesurer l’impact de chaque variable (CTA, visuel, argument). Le design final n’est pas une fin, mais un point de départ : nous optimisons en continu sur la base des données collectées."
      },
      {
        type: 'p',
        content:
          "Sur le plan technique, nous exploitons Next.js pour garantir une performance maximale et un chargement instantané, associé à un design system scalable. Chaque composant (formulaire, CTA, bloc témoignage) est conçu comme un élément réutilisable, mesurable et testable. Cette approche modulaire nous permet de déployer des variantes rapidement et d’ajuster selon les insights réels de conversion."
      },
      {
        type: 'p',
        content:
          "Mais surtout, nous mettons la **donnée comportementale** au centre de la stratégie. Chaque clic, chaque scroll, chaque abandon alimente un système de compréhension des intentions. Cela permet de prédire, d’adapter et d’anticiper. En B2B, le succès ne vient pas d’un message unique, mais de la répétition cohérente d’expériences bien orchestrées. Nos landings ne vendent pas : elles ouvrent le dialogue."
      },
      {
        type: 'p',
        content:
          "En conclusion, une landing page B2B performante en 2025 n’est plus une simple page d’accueil optimisée, mais un écosystème miniature de conversion. C’est un espace où psychologie, design, data et stratégie se rencontrent pour transformer la curiosité en confiance, puis la confiance en rendez-vous. Dans un marché saturé, la différence entre un clic et un contrat se joue souvent sur la clarté d’un mot, la vitesse d’un chargement ou la pertinence d’un témoignage. En maîtrisant ces détails, on ne conçoit pas seulement une landing page — on construit un accélérateur de croissance."
      }
    ],
  },
]

export const socials: Social[] = [
  { name: "LinkedIn", handle: "calimo-agency", url: "https://www.linkedin.com/company/calimo-agency" },
  { name: "Instagram", handle: "@calimo.agency", url: "https://www.instagram.com/calimo.agency" },
  { name: "Dribbble", handle: "@calimo", url: "https://dribbble.com/calimo" },
]

export const projects: Project[] = [




    {
    title: "Quizzfr",
    description:
      "Une application web moderne pour la préparation à la naturalisation française par mariage. L'application propose des quiz interactifs sur 5 catégories essentielles avec authentification Google et suivi des performances.",
    year: "2025",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://quizzfr.vercel.app",
  },
  {
    title: "Massilia pixel ",
    description:
      "Portfolio d'un studio de photographie : design minimaliste, animations subtiles et intégration headless CMS pour une gestion autonome.",
    year: "2025",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Framer Motion"],
    url: "https://massiliapixx.netlify.app/",
  },
  {
    title: "ComptaSolution",
    description:
      "ComptaSolution est un portfolio d'une boite de conseil en algerie, spécialisée dans le domaine administratif et financier",
    year: "2024",
    tech: ["Next.js", "HubSpot", "GSAP", "LinkedIn Ads"],
    url: "https://compta-solution.vercel.app/",

  },
  {
    title: "Abstractly",
    description:
      "Platforme Saas pour la creation d'ilustration et gradients. Design system complet, onboarding interactif et intégration Stripe pour la gestion des abonnements.",
    year: "2023",
    tech: ["Next.js", "TypeScript", "Contentful", "Google Optimize", "Stripe"],
    url: "https://abstractly-website.vercel.app/",
  },
]

export const recommendations: Recommendation[] = [
  {
    name: "Lucie Darras",
    affiliation: "Fondatrice — Massilia Pixel",
    quote:
      "Calimo a su traduire notre ADN en expérience digitale cohérente. Leur accompagnement design + tech a boosté nos ventes en quelques semaines.",
  },
  {
    name: "Yacine Kaoudjt",
    affiliation: "Directeur Marketing — ComptaSolution",
    quote:
      "Une équipe qui comprend les enjeux business et livre vite. Les itérations sont basées sur les data, pas sur l'intuition.",
  },
  {
    name: "María González",
    affiliation: "Head of Growth — Abstractly",
    quote:
      "Structure, créativité et exécution impeccable. Calimo est notre partenaire clé pour nos lancements en Europe.",
  },
]

export const services: Service[] = [
  {
    title: 'Création de sites vitrines & e-commerce',
    description:
      'Positionnement, UX/UI et développement Next.js ou Shopify Headless pour transformer vos visiteurs en clients.',
    benefits: [
      'Ateliers positionnement & storytelling produit',
      'Design system et pages facilement pilotables',
      'SEO technique et Core Web Vitals optimisés',
    ],
    ctaLabel: 'Voir un cas client',
    ctaHref: '#projects',
  },
  {
    title: 'Applications web & outils métier',
    description:
      'Prototypage, développement fullstack et intégrations API pour accélérer vos produits digitaux et outils internes.',
    benefits: [
      'Architecture Next.js / Node.js sécurisée',
      'Automatisation des workflows & intégrations CRM',
      'Tableaux de bord et analytics temps réel',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: 'mailto:bonjour@calimo.agency?subject=Devis%20application%20web',
  },
  {
    title: 'Branding, UI Design & Design System',
    description:
      'Plateformes de marque, identités visuelles et design systems activables par vos équipes marketing et produit.',
    benefits: [
      'Plateforme de marque, ton éditorial et messages clés',
      'Design system Figma + composants documentés',
      'Kit médias (logos, templates, guidelines)',
    ],
    ctaLabel: 'Voir un cas client',
    ctaHref: '#projects',
  },
  {
    title: 'SEO technique & contenus premium',
    description:
      'Audit technique, stratégie éditoriale et production premium pour capter un trafic qualifié et durable.',
    benefits: [
      'Audit Core Web Vitals et plan d’optimisation',
      'Calendrier éditorial orienté offres & personas',
      'Schema.org, maillage interne et suivi conversions',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: 'mailto:bonjour@calimo.agency?subject=Devis%20SEO%20Calimo',
  },
  {
    title: 'Activation marketing & growth',
    description:
      'Campagnes multicanales pilotées par la donnée : paid media, email marketing et automation pour scaler votre acquisition.',
    benefits: [
      'Workshops funnel & personas prioritaires',
      'Campagnes Meta / Google / LinkedIn avec AB testing',
      'Dashboards hebdo et boucle d’amélioration continue',
    ],
    ctaLabel: 'Voir un cas client',
    ctaHref: '#projects',
  },
  {
    title: 'Accompagnement et maintenance',
    description:
      'Support long terme pour vos plateformes : monitoring, évolutions, optimisation performance et transfert de compétences.',
    benefits: [
      'Suivi technique et sécurité applicative',
      'Sprints d’amélioration continue trimestriels',
      'Formation et documentation pour vos équipes',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: 'mailto:bonjour@calimo.agency?subject=Maintenance%20Calimo',
  },
]

export const faqs: FAQ[] = [
  {
    question: 'Quels types de projets prenez-vous en charge ?',
    answer: 'Sites vitrines et e-commerce Next.js, applications web/SaaS, refontes de marque et campagnes d’acquisition data-driven.'
  },
  {
    question: 'Quels sont vos délais pour démarrer ?',
    answer: 'Un audit express sous 24 h ouvrées, puis un démarrage de sprint entre 1 et 3 semaines selon la complexité du projet.'
  },
  {
    question: 'Travaillez-vous avec nos équipes internes ?',
    answer: 'Oui. Nous co-construisons avec vos équipes produit, marketing ou sales, avec rituels partagés et documentation livrable.'
  },
  {
    question: 'Proposez-vous un accompagnement après la mise en ligne ?',
    answer: 'Nous assurons maintenance, optimisation continue (SEO, growth) et transfert de compétences via des sprints mensuels ou trimestriels.'
  },
  {
    question: 'Quelles sont vos modalités de facturation ?',
    answer: 'Sprints forfaitaires ou rétention mensuelle, avec devis détaillé et jalons. Un acompte de 30% est demandé au lancement.'
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    name: "Site vitrine simple",
    tagline: "Mettre en ligne une présence claire et impactante en quelques semaines.",
    priceMonthly: 999,
    priceYearly: 999 * 12 * 0.85,
    ctaLabel: "Réserver un appel",
    ctaHref: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://cal.com/calimo-agency/30min",
    ctaNote: "Intéressé(e) par l'offre Site vitrine simple",
    features: [
      "Atelier cadrage express (positionnement, objectifs, contenus)",
      "Design responsive 3-5 pages avec animations légères",
      "Intégration Next.js + CMS simplifié pour modifier textes et médias",
      "Optimisation SEO technique de base et performance Core Web Vitals",
      "Formation de prise en main (1 h) + support Slack / email (J+1)",
    ],
  },
  {
    name: "Site vitrine évolutif",
    tagline: "Structure multi-pages avec back-office pour piloter vos contenus et leads.",
    priceMonthly: 1999,
    priceYearly: 1999 * 12 * 0.82,
    highlight: true,
    badge: "Populaire",
    ctaLabel: "Planifier un workshop",
    ctaHref: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://cal.com/calimo-agency/30min",
    ctaNote: "Intéressé(e) par l'offre Site vitrine évolutif",
    features: [
      "Architecture 10-15 pages et sections blog/ressources modulaires",
      "Back-office personnalisé (CMS complet, rôles, workflows)",
      "Automations CRM, formulaires avancés et tracking évènementiel",
      "Design system étendu avec composants réutilisables",
      "Support prioritaire et évolutions continues (SLA 48 h)",
    ],
  },
  {
    name: "Application web",
    tagline: "Produit digital sur mesure : discovery, design, développement et lancement.",
    customLabel: "Sur devis",
    priceMonthly: undefined,
    priceYearly: undefined,
    ctaLabel: "Construire l'application",
    ctaHref: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://cal.com/calimo-agency/30min",
    ctaNote: "Intéressé(e) par l'offre Application web",
    features: [
      "Product discovery, UX research et wireframes interactifs",
      "Front-end Next.js / React et back-end Node.js, API sécurisées",
      "Architecture data (PostgreSQL, Supabase, Firebase, etc.)",
      "Intégrations métier (ERP, CRM, IA, paiements) et automatisations",
      "Monitoring, analytics produit et rituels d'amélioration continue",
    ],
  },
]
