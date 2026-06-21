import Image from "next/image";

const APP_URL = "https://app.autopresta360.com";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pb-20 pt-16 sm:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            Gestion 360° · Métiers de l'automobile
          </p>

          <h1 className="text-balance font-display text-[2.6rem] font-semibold leading-[1.05] text-ash sm:text-6xl">
            Du diagnostic à la facture,{" "}
            <span className="text-cyan">tout votre garage</span> dans un seul tableau de bord.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-mute">
            AutoPresta 360 réunit devis, factures, stock et clients dans une seule
            application — pour la serrurerie, la reprogrammation ECU, la carrosserie
            légère, le detailing, le covering et le débosselage sans peinture.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={APP_URL}
              className="rounded-md bg-cyan px-6 py-3.5 font-display text-base font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Essayer l'application
            </a>
            <a
              href="#apercu"
              className="rounded-md border border-line px-6 py-3.5 font-display text-base font-semibold text-ash transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              Voir un aperçu
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-6 font-mono">
            <div>
              <dt className="text-xs uppercase tracking-wide text-mute">Modules</dt>
              <dd className="mt-1 text-2xl font-medium text-ash">8</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-mute">Véhicules en base</dt>
              <dd className="mt-1 text-2xl font-medium text-ash">1000+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-mute">Conformité</dt>
              <dd className="mt-1 text-2xl font-medium text-leaf">2026/2027</dd>
            </div>
          </dl>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-2xl bg-cyan/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-line shadow-glow-lg">
            <Image
              src="/images/dashboard.png"
              alt="Tableau de bord AutoPresta 360 : chiffre d'affaires, interventions et répartition des services"
              width={1400}
              height={1000}
              className="w-full"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-line bg-panel2/95 px-4 py-3 shadow-glow backdrop-blur sm:block">
            <p className="font-mono text-xs text-mute">Taux d'encaissement</p>
            <p className="font-display text-2xl font-semibold text-leaf">87.5%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
