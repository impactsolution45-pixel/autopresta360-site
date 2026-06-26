import Link from "next/link";

const LEGAL_PAGES = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgu", label: "CGU" },
  { href: "/cgv", label: "CGV" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/remboursement", label: "Remboursement" },
];

export default function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink">
      {/* Header minimal */}
      <header className="border-b border-line/70 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-display text-lg font-semibold tracking-wide text-ash">
              AUTO<span className="text-cyan">PRESTA</span> 360
            </span>
          </Link>
          <Link href="/" className="font-body text-sm text-mute transition-colors hover:text-cyan">
            ← Retour au site
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
          {/* Navigation latérale */}
          <aside className="hidden lg:block">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-4">Pages légales</p>
            <nav className="flex flex-col gap-1">
              {LEGAL_PAGES.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="rounded-md px-3 py-2 font-body text-sm text-mute transition-colors hover:bg-panel2 hover:text-ash"
                >
                  {p.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Contenu */}
          <main className="prose-legal">
            <h1 className="font-display text-3xl font-semibold text-ash sm:text-4xl">{title}</h1>
            <p className="mt-2 font-mono text-xs text-mute">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <div className="mt-10 space-y-10 font-body text-mute leading-relaxed">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
