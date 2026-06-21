import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-ink py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Contact</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ash sm:text-4xl">
            Une question, une démo, un essai ?
          </h2>
          <p className="mt-4 max-w-md text-mute">
            Décrivez votre activité en quelques lignes — serrurerie, carrosserie,
            détailing — et nous vous montrons comment AutoPresta 360 s'adapte à votre
            atelier.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-panel2 p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
