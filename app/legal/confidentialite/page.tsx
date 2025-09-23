import { profile } from "@/lib/data"

export default function Confidentialite() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-light">Politique de confidentialité</h1>
      <p className="text-muted-foreground">Dernière mise à jour: {new Date().getFullYear()}</p>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Responsable de traitement</h2>
        <p>{profile.firstName} {profile.lastName} — {profile.location}</p>
        <p>Contact: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Données traitées</h2>
        <p>Ce site traite un volume minimal de données personnelles. Aucune donnée sensible n’est collectée.</p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Données techniques anonymisées (mesure d’audience)</li>
          <li>Informations fournies volontairement via contact (email)</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Finalités</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Amélioration du site (performance, contenu)</li>
          <li>Réponse aux demandes de contact</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Base légale</h2>
        <p>Intérêt légitime et/ou consentement selon les cas.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Durée de conservation</h2>
        <p>Les données ne sont conservées que le temps nécessaire aux finalités.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Sous‑traitants</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Vercel (hébergement et analytics)</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Vos droits</h2>
        <p>Accès, rectification, effacement, limitation, opposition. Pour exercer vos droits, contactez‑nous à l’adresse ci‑dessus.</p>
      </section>
    </main>
  )
}
