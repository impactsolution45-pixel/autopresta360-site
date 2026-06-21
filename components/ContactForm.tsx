"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-leaf/30 bg-leaf/5 p-8 text-center">
        <p className="font-display text-lg font-semibold text-leaf">Message envoyé.</p>
        <p className="mt-2 text-sm text-mute">
          Merci, nous revenons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-mute">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border-2 border-line bg-panel px-4 py-3 text-ash outline-none transition-colors focus:border-cyan"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-mute">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border-2 border-line bg-panel px-4 py-3 text-ash outline-none transition-colors focus:border-cyan"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-mute">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border-2 border-line bg-panel px-4 py-3 text-ash outline-none transition-colors focus:border-cyan"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-cyan px-6 py-3 font-display font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Envoi…" : "Envoyer le message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          L'envoi a échoué. Réessayez ou écrivez-nous directement par email.
        </p>
      )}
    </form>
  );
}
