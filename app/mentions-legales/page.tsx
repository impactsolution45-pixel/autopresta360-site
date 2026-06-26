import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Mentions légales — AutoPresta 360",
};

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">

      <section>
        <h2>Éditeur du site</h2>
        <div className="info-block">
          <p><strong>Raison sociale :</strong> [BOURDIN Sébastien]</p>
          <p><strong>Forme juridique :</strong> [Auto-entrepreneur]</p>
          <p><strong>SIRET :</strong> [123 309 873321]</p>
          <p><strong>Adresse du siège :</strong> [29, rue de la graillotte 45290 NOGENT-SUR-VERNISSON]</p>
          <p><strong>Téléphone :</strong> [+33 7 49 41 90 02]</p>
          <p><strong>Email :</strong> <a href="mailto:contact@autopresta360.com">contact@autopresta360.com</a></p>
          <p><strong>N° TVA intracommunautaire :</strong> [non assujeti à la TVA]</p>
        </div>
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>[Sébastien BOURDIN], en qualité de [gérant].</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <div className="info-block">
          <p><strong>Hébergeur du site vitrine :</strong> Vercel Inc. — 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
          <p><strong>Hébergeur de l'application :</strong> Vercel Inc. (même adresse ci-dessus)</p>
          <p><strong>Base de données :</strong> Supabase Inc. — 970 Toa Payoh North, Singapour — <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">supabase.com</a></p>
        </div>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, images, logos, icônes, interface) sont la propriété exclusive d'AutoPresta 360 ou de leurs auteurs respectifs, et sont protégés par le droit de la propriété intellectuelle français.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section>
        <h2>Limitation de responsabilité</h2>
        <p>
          AutoPresta 360 s'efforce de maintenir les informations publiées sur ce site à jour et exactes. Toutefois, l'éditeur ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
        </p>
        <p>
          L'éditeur décline toute responsabilité pour tout dommage direct ou indirect résultant de l'accès au site ou de l'utilisation des informations qu'il contient.
        </p>
      </section>

      <section>
        <h2>Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers. AutoPresta 360 n'est pas responsable du contenu de ces sites et ne peut être tenu responsable des dommages résultant de leur consultation.
        </p>
      </section>

      <section>
        <h2>Droit applicable</h2>
        <p>
          Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
        </p>
      </section>

    </LegalLayout>
  );
}
