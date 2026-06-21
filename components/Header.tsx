import Image from "next/image";
import Link from "next/link";
import ScrollGauge from "./ScrollGauge";

const APP_URL = "https://mon-app-devis.vercel.app";

const NAV = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#facturation", label: "Conformité 2026" },
  { href: "#apercu", label: "Aperçu" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="AutoPresta 360"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide text-ash">
            AUTO<span className="text-cyan">PRESTA</span> 360
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-mute transition-colors hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={APP_URL}
            className="hidden rounded-md bg-cyan px-4 py-2 font-display text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Se connecter
          </a>
          <ScrollGauge />
        </div>
      </div>
    </header>
  );
}

