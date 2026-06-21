const METIERS = [
  {
    icon: "🔑",
    title: "Serrurerie auto",
    text: "Duplication de clés, programmation transpondeur et keyless, ouvertures et déblocages de serrure.",
  },
  {
    icon: "⚙️",
    title: "Reprogrammation ECU / Moteur",
    text: "Diagnostic moteur, reprogrammation Stage 1 et Stage 2, pose de boîtier additionnel.",
  },
  {
    icon: "🚗",
    title: "Carrosserie légère et rénovation",
    text: "Rénovation de phares, retouches de rayures, pose de films de protection.",
  },
  {
    icon: "✨",
    title: "Nettoyage et detailing",
    text: "Lavage extérieur et intérieur, polissage, traitement céramique et vitrification.",
  },
  {
    icon: "🎨",
    title: "Covering et personnalisation",
    text: "Wrap complet ou partiel, film de protection peinture, finitions carbone, mat ou chrome.",
  },
  {
    icon: "🔨",
    title: "Débosselage sans peinture",
    text: "Du petit impact isolé au capot complet, sans repeindre.",
  },
] as const;

export default function Metiers() {
  return (
    <section className="border-t border-line bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Métiers couverts</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ash sm:text-4xl">
            Pas que la serrurerie : tout l'atelier.
          </h2>
          <p className="mt-4 text-mute">
            Chaque devis se rattache à l'un de ces six métiers, avec sa propre liste de
            prestations type — pour aller plus vite sans perdre en précision.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {METIERS.map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-line bg-panel2 p-7 transition-colors hover:border-cyan/40"
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
