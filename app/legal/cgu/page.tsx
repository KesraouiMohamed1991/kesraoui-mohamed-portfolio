import { profile } from "@/lib/data"

export default function CGU() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-light">Conditions Générales d’Utilisation</h1>
      <p className="text-muted-foreground">Dernière mise à jour: {new Date().getFullYear()}</p>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Objet</h2>
        <p>Les présentes CGU encadrent l’accès et l’utilisation du site, ainsi que les responsabilités de l’éditeur et de l’utilisateur.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Accès au site</h2>
        <p>Le site est accessible 24/7 sauf interruption planifiée ou cas de force majeure. L’éditeur ne saurait être tenu responsable des indisponibilités.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Propriété intellectuelle</h2>
        <p>Les contenus publiés sont protégés. Toute reproduction ou redistribution non autorisée est interdite.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Responsabilités</h2>
        <p>L’éditeur ne peut être tenu responsable des dommages indirects liés à l’utilisation du site ni du contenu des sites externes pointés.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Données personnelles</h2>
        <p>Reportez‑vous à la <a className="underline" href="/legal/confidentialite">Politique de confidentialité</a> pour plus d’informations.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Droit applicable</h2>
        <p>Le présent site est soumis au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort de l’éditeur.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Contact</h2>
        <p>Pour toute demande: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </section>
    </main>
  )
}
