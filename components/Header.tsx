"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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

        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden rounded-md bg-cyan px-4 py-2 font-display text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Se connecter
          </a>
          <ScrollGauge />

          {/* Bouton menu mobile (hamburger) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-ash md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Panneau du menu mobile */}
      {open && (
        <nav className="border-t border-line bg-ink px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-body text-base text-ash transition-colors hover:bg-panel2 hover:text-cyan"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={APP_URL}
            className="mt-3 block rounded-md bg-cyan px-4 py-3 text-center font-display text-sm font-semibold text-ink shadow-glow"
          >
            Se connecter
          </a>
        </nav>
      )}
    </header>
  );
}
