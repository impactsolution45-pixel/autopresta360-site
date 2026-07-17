"use client";

import { useState } from "react";

const APP_URL = "https://mon-app-devis.vercel.app";

// Définition des différents plans tarifaires disponibles
const PLANS = [
  {
    nom: "Formule Basique TTC", // Nom du plan
    description: "Pour démarrer et gérer l'essentiel au quotidien", // Description succincte des fonctionnalités
    prixMensuel: 19.9, // Prix mensuel du plan
    prixAnnuel: 199, // Prix annuel du plan
    accent: "cyan" as const, // Couleur d'accentuation pour le plan
    recommande: false, // Indique si ce plan est recommandé
    inclus: [
      "Tableau de bord", // Fonctionnalité de gestion des données
      "Clients & véhicules", // Gestion des clients et de leurs véhicules
      "Interventions", // Planification et suivi des interventions réalisées
      "Calendrier", // Outil de planification
      "Téléphonie", // Fonctionnalité de téléphonie intégrée
      "Forum Pro", // Accès à une communauté professionnelle
    ],
    exclus: [
      "Comptabilité", // Fonctionnalité non incluse
      "Stock", // Gestion de stock non incluse
      "Scan facture", // Fonctionnalité de scan de facture non incluse
      "Scan avancé", // Fonctionnalité de scan avancé non incluse
      "Capture client", // Outil de capture de données clients non inclus
      "Générateur de story", // Outil de création de contenu non inclus
    ],
  },
  {
    nom: "Formule Pro TTC", // Nom du plan Pro
    description: "Toutes les fonctionnalités, sans limite", // Description mettant en avant l'abondance de fonctionnalités
    prixMensuel: 29.9, // Prix mensuel du plan Pro
    prixAnnuel: 299, // Prix annuel du plan Pro
    accent: "violet" as const, // Couleur d'accentuation pour le plan Pro
    recommande: true, // Indique que ce plan est recommandé
    inclus: [
      "Tableau de bord", // Toutes les fonctionnalités de base
      "Clients & véhicules", // Gestion avancée des clients et véhicules
      "Interventions", // Planification et suivi détaillé des interventions
      "Calendrier", // Outil de planification complet
      "Téléphonie", // Fonctionnalité de téléphonie intégrée
      "Forum Pro", // Accès à la communauté professionnelle
      "Comptabilité", // Gestion comptable incluse
      "Stock", // Gestion des stocks incluse
      "Scan facture", // Fonctionnalité de scan de facture incluse
      "Scan avancé", // Fonctionnalité de scan avancé incluse
      "Capture client", // Outil de capture de données clients inclus
      "Générateur de story", // Outil de création de contenu inclus
    ],
    exclus: [], // Aucune fonctionnalité exclue
  },
] as const;

export default function Pricing() {
  const [billing, setBilling] = useState<"mensuel" | "annuel">("mensuel"); // État pour gérer le type de facturation (mensuel ou annuel)

  return (
    <section id="tarifs" className="border-t border-line bg-panel py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Tarifs</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ash sm:text-4xl">
            Une formule qui suit la taille de votre atelier.
          </h2>
          <p className="mt-4 text-mute">
            Sans engagement, sans carte bancaire pour l'essai. Changez de formule à tout
            moment depuis l'application.
          </p>
        </div>

        <div className="mt-10 inline-flex rounded-xl border border-line bg-panel2 p-1">
          <button
            type="button"
            onClick={() => setBilling("mensuel")}
            className={`rounded-lg px-5 py-2 font-display text-sm font-semibold transition-colors ${
              billing === "mensuel" ? "bg-cyan text-ink" : "text-mute hover:text-ash"
            }`}
          >
            Mensuel
          </button>
          <button
            type="button"
            onClick={() => setBilling("annuel")}
            className={`rounded-lg px-5 py-2 font-display text-sm font-semibold transition-colors ${
              billing === "annuel" ? "bg-cyan text-ink" : "text-mute hover:text-ash"
            }`}
          >
            Annuel <span className="text-leaf">· -15%</span> {/* Remise de 15% pour le paiement annuel */}
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:max-w-3xl">
          {PLANS.map((p) => {
            const prix = billing === "mensuel" ? p.prixMensuel : p.prixAnnuel; // Prix selon le type de facturation sélectionné
            const economie = p.prixMensuel * 12 - p.prixAnnuel; // Calcul des économies pour le paiement annuel
            const isViolet = p.accent === "violet"; // Vérification de la couleur d'accentuation

            return (
              <div
                key={p.nom}
                className={`relative rounded-2xl border bg-panel2 p-8 ${
                  p.recommande ? "border-violet shadow-[0_0_40px_rgba(139,92,246,0.18)]" : "border-line"
                }`}
              >
                {p.recommande && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet px-4 py-1 font-display text-xs font-semibold text-white">
                    ⭐ Recommandé
                  </span>
                )}

                <h3 className={`font-display text-xl font-semibold ${isViolet ? "text-violet" : "text-cyan"}`}>
                  {p.nom} {/* Affichage du nom du plan */}
                </h3>
                <p className="mt-1 text-sm text-mute">{p.description}</p> {/* Affichage de la description du plan */}

                <div className="mt-6">
                  <span className="font-display text-4xl font-semibold text-ash">
                    {prix.toFixed(billing === "mensuel" ? 2 : 0)}€ {/* Affichage du prix formaté */}
                  </span>
                  <span className="text-sm text-mute">/{billing === "mensuel" ? "mois" : "an"}</span>
                  {/* Économies affichées pour l'option annuelle */}
                  {billing === "annuel" && (
                    <p className="mt-1 text-xs text-leaf">Économisez {economie.toFixed(0)}€ par an</p>
                  )}
                </div>

                <a
                  href={`${APP_URL}/tarifs`}
                  className={`mt-7 block rounded-md px-5 py-3 text-center font-display text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    isViolet ? "bg-violet text-white" : "bg-cyan text-ink"
                  }`}
                >
                  Commencer avec {p.nom} {/* Lien pour démarrer avec le plan sélectionné */}
                </a>

                <ul className="mt-8 space-y-2.5">
                  {p.inclus.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ash">
                      <span className="mt-0.5 text-leaf">✓</span>
                      {f} {/* Affichage des fonctionnalités incluses */}
                    </li>
                  ))}
                  {p.exclus.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-mute/50">
                      <span className="mt-0.5">–</span>
                      {f} {/* Affichage des fonctionnalités excluses */}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-xl text-sm text-mute">
          🎁 Un essai gratuit de 48h, sans carte bancaire, est proposé directement depuis
          l'application pour tester toutes les fonctionnalités Pro.
        </p>
      </div>
    </section>
  );
}
