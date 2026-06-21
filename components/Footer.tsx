import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="AutoPresta 360" width={28} height={28} className="rounded-full" />
          <span className="font-display text-sm font-semibold text-ash">
            AUTO<span className="text-cyan">PRESTA</span> 360
          </span>
        </div>
        <p className="font-mono text-xs text-mute">
          © {new Date().getFullYear()} AutoPresta 360 — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
