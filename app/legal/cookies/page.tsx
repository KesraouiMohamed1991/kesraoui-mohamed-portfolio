export default function Cookies() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-light">Politique Cookies</h1>
      <p className="text-muted-foreground">Dernière mise à jour: {new Date().getFullYear()}</p>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Qu’est‑ce qu’un cookie ?</h2>
        <p>Un cookie est un fichier déposé sur votre terminal pour mesurer l’audience, mémoriser vos préférences ou sécuriser l’accès.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Cookies utilisés</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Mesure d’audience (Vercel Analytics) — cookies techniques/équivalents</li>
          <li>Préférences d’affichage (thème clair/sombre)</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Gestion des cookies</h2>
        <p>Vous pouvez configurer votre navigateur pour bloquer certains cookies. Le site reste accessible mais certaines fonctionnalités peuvent être limitées.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Contact</h2>
        <p>Pour toute question, consultez la <a className="underline" href="/legal/confidentialite">Politique de confidentialité</a>.</p>
      </section>
    </main>
  )
}

