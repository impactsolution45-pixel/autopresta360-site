const MODULES = [
  {
    icon: "📊",
    title: "Tableau de bord",
    text: "CA du mois, panier moyen, taux d'encaissement et répartition des services en un coup d'œil.",
  },
  {
    icon: "🔧",
    title: "Interventions",
    text: "Devis et factures liés au client et au véhicule, avec passage en facture en un clic.",
  },
  {
    icon: "💰",
    title: "Comptabilité",
    text: "Export FEC, CA3, livre des recettes, grand livre et import Sage/EBP, prêts pour votre comptable.",
  },
  {
    icon: "📑",
    title: "Factures",
    text: "Génération PDF, envoi par mail ou SMS, et passage devis → facture sans ressaisie.",
  },
  {
    icon: "📦",
    title: "Stock",
    text: "Suivi des quantités, seuils d'alerte, prix d'achat/revente et marge par article.",
  },
  {
    icon: "👥",
    title: "Clients & véhicules",
    text: "Fiches clients, historique des interventions et base de plus de 1000 véhicules référencés.",
  },
  {
    icon: "🔑",
    title: "Lishi",
    text: "Référence outils Lishi par marque et modèle, avec sens horaire/anti-horaire et astuces.",
  },
  {
    icon: "💬",
    title: "Forum Pro",
    text: "Échangez entre professionnels directement dans l'application, sans changer d'outil.",
  },
] as const;

export default function Features() {
  return (
    <section id="fonctionnalites" className="border-t border-line bg-panel py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Fonctionnalités</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ash sm:text-4xl">
            Huit modules, une seule application.
          </h2>
          <p className="mt-4 text-mute">
            Pas de logiciel de devis d'un côté et de tableur de stock de l'autre :
            chaque module s'appuie sur les mêmes fiches client et véhicule.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <div
              key={m.title}
              className="group relative bg-panel2 p-7 transition-colors hover:bg-panel3/60"
            >
              <span className="text-2xl">{m.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ash">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
