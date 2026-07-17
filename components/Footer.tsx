import Link from "next/link";

const APP_URL = "https://app.autopresta360.fr/";

const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgu", label: "CGU" },
  { href: "/cgv", label: "CGV" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/remboursement", label: "Remboursement" },
];

const NAV_LINKS = [
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/#facturation", label: "Conformité 2026" },
  { href: "/#apercu", label: "Aperçu" },
  { href: "/#contact", label: "Contact" },
];

const ABOUT_LINKS = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
  { href: "/securite-donnees", label: "Sécurité et données" },
  { href: "/garantie-export", label: "Garantie export des données" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Identité */}
          <div className="lg:col-span-2">
            <span className="font-display text-lg font-semibold tracking-wide text-ash">
              AUTO<span className="text-cyan">PRESTA</span> 360
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
              L'application de gestion complète pour les professionnels de l'automobile.
              Devis, factures, stock, clients et conformité e-facturation.
            </p>
            <a
              href={APP_URL}
              className="mt-5 inline-block rounded-md bg-cyan px-5 py-2.5 font-display text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Accéder à l'application
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-mute transition-colors hover:text-ash">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-4">À propos</p>
            <ul className="space-y-2">
              {ABOUT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-mute transition-colors hover:text-ash">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-4">Légal</p>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-mute transition-colors hover:text-ash">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-mute">
            © {year} AutoPresta 360 — Tous droits réservés
          </p>
          <p className="font-mono text-xs text-mute">
            Fait avec passion pour les pros de l'auto
          </p>
        </div>
      </div>
    </footer>
  );
}
