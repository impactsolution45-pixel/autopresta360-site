import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Conditions Générales d'Utilisation — AutoPresta 360",
};

export default function CGU() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation">

      <section>
        <h2>Article 1 — Objet</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles AutoPresta 360 met à disposition de ses utilisateurs l'application de gestion pour professionnels de l'automobile accessible à l'adresse <a href="https://app.autopresta360.com">app.autopresta360.com</a>.
        </p>
        <p>
          Toute utilisation de l'application implique l'acceptation sans réserve des présentes CGU. L'éditeur se réserve le droit de les modifier à tout moment ; les modifications prennent effet dès leur publication.
        </p>
      </section>

      <section>
        <h2>Article 2 — Accès au service</h2>
        <p>
          L'application est accessible via un navigateur web moderne ou en mode PWA (Progressive Web App) sur mobile. L'utilisateur est responsable des équipements et de la connexion internet nécessaires à l'accès au service.
        </p>
        <p>L'accès au service est réservé aux professionnels majeurs. L'inscription requiert :</p>
        <ul>
          <li>Une adresse email valide</li>
          <li>La création d'un mot de passe sécurisé</li>
          <li>L'acceptation des présentes CGU et de la politique de confidentialité</li>
        </ul>
      </section>

      <section>
        <h2>Article 3 — Compte utilisateur</h2>
        <p>
          L'utilisateur est seul responsable de la confidentialité de ses identifiants de connexion. Toute utilisation du compte avec ces identifiants est réputée effectuée par l'utilisateur lui-même.
        </p>
        <p>
          En cas de perte ou de compromission des identifiants, l'utilisateur doit en informer immédiatement AutoPresta 360 via <a href="mailto:contact@autopresta360.com">contact@autopresta360.com</a>.
        </p>
      </section>

      <section>
        <h2>Article 4 — Fonctionnalités et abonnements</h2>
        <p>
          L'application propose deux formules d'abonnement payant (Basique et Pro) ainsi qu'une période d'essai gratuite de 48h sans carte bancaire pour la formule Pro. Le détail des fonctionnalités incluses est précisé sur la page <a href="/#tarifs">Tarifs</a>.
        </p>
        <p>
          AutoPresta 360 se réserve le droit de faire évoluer les fonctionnalités incluses dans chaque formule, avec un préavis de 30 jours pour les modifications substantielles défavorables à l'utilisateur.
        </p>
      </section>

      <section>
        <h2>Article 5 — Données saisies par l'utilisateur</h2>
        <p>
          L'utilisateur reste propriétaire des données qu'il saisit dans l'application (clients, véhicules, devis, factures, stock). AutoPresta 360 s'engage à ne pas exploiter ces données à des fins commerciales sans consentement exprès.
        </p>
        <p>
          Sur demande, l'utilisateur peut obtenir un export complet de ses données dans un format standard (CSV/JSON) dans un délai de 30 jours.
        </p>
      </section>

      <section>
        <h2>Article 6 — Obligations de l'utilisateur</h2>
        <p>L'utilisateur s'engage à :</p>
        <ul>
          <li>Utiliser l'application conformément à sa destination professionnelle</li>
          <li>Ne pas tenter d'accéder aux données d'autres utilisateurs</li>
          <li>Ne pas introduire de code malveillant dans l'application</li>
          <li>Respecter la législation applicable, notamment en matière de protection des données personnelles de ses propres clients</li>
          <li>Renseigner des informations exactes lors de l'inscription</li>
        </ul>
      </section>

      <section>
        <h2>Article 7 — Disponibilité du service</h2>
        <p>
          AutoPresta 360 s'efforce d'assurer la disponibilité de l'application 24h/24, 7j/7. Des interruptions peuvent survenir pour maintenance, mises à jour ou en cas de force majeure. L'éditeur ne saurait être tenu responsable des conséquences d'une indisponibilité temporaire.
        </p>
      </section>

      <section>
        <h2>Article 8 — Résiliation</h2>
        <p>
          L'utilisateur peut résilier son abonnement à tout moment depuis son espace personnel dans l'application. La résiliation prend effet à la fin de la période d'abonnement en cours.
        </p>
        <p>
          AutoPresta 360 se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes CGU, sans préavis ni remboursement.
        </p>
      </section>

      <section>
        <h2>Article 9 — Loi applicable</h2>
        <p>
          Les présentes CGU sont soumises au droit français. Tout litige sera soumis aux juridictions compétentes du ressort du siège social d'AutoPresta 360, après tentative de résolution amiable.
        </p>
      </section>

    </LegalLayout>
  );
}
