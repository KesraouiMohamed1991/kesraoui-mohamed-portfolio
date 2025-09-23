import { profile } from "@/lib/data"

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-light">Mentions légales</h1>
      <p className="text-muted-foreground">Dernière mise à jour: {new Date().getFullYear()}</p>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Éditeur du site</h2>
        <p>{profile.firstName} {profile.lastName}</p>
        <p>{profile.location}</p>
        <p>Contact: {profile.email}</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Directeur de la publication</h2>
        <p>{profile.firstName} {profile.lastName}</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Hébergement</h2>
        <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
        <p>Site: <a className="underline" href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a></p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Propriété intellectuelle</h2>
        <p>Les contenus (textes, images, code) présents sur ce site sont protégés. Toute reproduction non autorisée est interdite.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Liens</h2>
        <p>Des liens externes peuvent être proposés. L’éditeur ne peut être tenu pour responsable de leur contenu.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-medium">Contact</h2>
        <p>Pour toute question: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </section>
    </main>
  )
}
