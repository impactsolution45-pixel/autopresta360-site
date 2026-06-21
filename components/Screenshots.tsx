"use client";

import { useEffect, useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + SHOTS.length) % SHOTS.length));
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % SHOTS.length));

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

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
            Clique sur une capture pour l'agrandir.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOTS.map((s, i) => (
            <figure
              key={s.title}
              className="group overflow-hidden rounded-xl border border-line bg-panel2 transition-colors hover:border-cyan/40"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="block w-full cursor-zoom-in overflow-hidden text-left"
                aria-label={`Agrandir la capture : ${s.title}`}
              >
                <Image
                  src={s.src}
                  alt={s.text}
                  width={900}
                  height={650}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="p-5">
                <p className="font-display text-base font-semibold text-ash">{s.title}</p>
                <p className="mt-1 text-sm text-mute">{s.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Visionneuse plein écran */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={SHOTS[openIndex].title}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel2 text-ash hover:text-cyan sm:right-8 sm:top-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Image précédente"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-panel2 text-ash hover:text-cyan sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Image suivante"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-panel2 text-ash hover:text-cyan sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            className="max-h-[85vh] max-w-5xl overflow-hidden rounded-xl border border-line shadow-glow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={SHOTS[openIndex].src}
              alt={SHOTS[openIndex].text}
              width={1400}
              height={1000}
              className="max-h-[85vh] w-auto"
            />
            <div className="bg-panel2 px-5 py-3">
              <p className="font-display text-sm font-semibold text-ash">{SHOTS[openIndex].title}</p>
              <p className="text-xs text-mute">{SHOTS[openIndex].text}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
