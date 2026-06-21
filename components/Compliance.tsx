import Image from "next/image";

const STEPS = [
  {
    date: "Sept. 2026",
    title: "Réception obligatoire",
    text: "Toutes les entreprises doivent être en mesure de recevoir des factures électroniques.",
  },
  {
    date: "Sept. 2027",
    title: "Émission obligatoire",
    text: "Les TPE/PME émettent leurs factures via une plateforme de dématérialisation partenaire (PDP).",
  },
] as const;

export default function Compliance() {
  return (
    <section id="facturation" className="border-t border-line bg-ink py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Réforme facturation électronique
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ash sm:text-4xl">
            Prêt pour l'obligation 2026/2027, sans rien changer à vos habitudes.
          </h2>
          <p className="mt-4 text-mute">
            Le module E-Facturation suit, pour chaque facture, son statut de transmission
            et intègre les champs requis par la réforme : SIREN du client, catégorie
            d'opération et adresse de livraison si différente.
          </p>

          <ol className="mt-10 space-y-6 border-l border-line pl-6">
            {STEPS.map((s) => (
              <li key={s.date} className="relative">
                <span className="absolute -left-[1.84rem] top-1 h-3 w-3 rounded-full border-2 border-ink bg-gold" />
                <p className="font-mono text-xs uppercase tracking-wide text-gold">{s.date}</p>
                <p className="mt-1 font-display text-lg font-semibold text-ash">{s.title}</p>
                <p className="mt-1 text-sm text-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-line shadow-glow-lg">
            <Image
              src="/images/efacturation.png"
              alt="Tableau de bord de transmission des factures électroniques dans AutoPresta 360"
              width={1400}
              height={900}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
