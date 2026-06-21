import Image from "next/image";

const SHOTS = [
  { src: "/images/clients.png", title: "Clients", text: "Fiches clients et accès rapide aux interventions." },
  { src: "/images/base-vehicules.png", title: "Base de véhicules", text: "Plus de 1000 véhicules référencés." },
  { src: "/images/vehicule-detail.png", title: "Fiche technique", text: "Clé, transpondeur, outil et procédure recommandés." },
  { src: "/images/lishi.png", title: "Outils Lishi", text: "Référence par marque, modèle et sens de rotation." },
  { src: "/images/comptabilite.png", title: "Comptabilité", text: "CA HT, TVA collectée et exports prêts pour le comptable." },
  { src: "/images/stock.png", title: "Stock", text: "Quantités, seuils d'alerte et marge par article." },
] as const;

export default function Screenshots() {
  return (
    <section id="apercu" className="border-t border-line bg-panel py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Aperçu</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ash sm:text-4xl">
            Une interface pensée pour l'atelier, pas pour le bureau.
          </h2>
          <p className="mt-4 text-mute">
            Fond sombre, contrastes nets, lecture rapide sur mobile entre deux interventions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOTS.map((s) => (
            <figure
              key={s.title}
              className="group overflow-hidden rounded-xl border border-line bg-panel2 transition-colors hover:border-cyan/40"
            >
              <div className="overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.text}
                  width={900}
                  height={650}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-display text-base font-semibold text-ash">{s.title}</p>
                <p className="mt-1 text-sm text-mute">{s.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
