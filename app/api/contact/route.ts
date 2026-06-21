import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    // TODO: brancher un vrai envoi d'email ici, par exemple avec Resend :
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "AutoPresta 360 <contact@autopresta360.com>",
    //   to: "votre-adresse@example.com",
    //   subject: `Nouveau message de ${name}`,
    //   text: `${message}\n\nRépondre à : ${email}`,
    // });
    //
    // En attendant, on logue simplement la demande côté serveur (visible
    // dans les logs Vercel) pour ne rien perdre.
    console.log("Nouveau message de contact :", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}
