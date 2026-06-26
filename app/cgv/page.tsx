import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Conditions Générales de Vente — AutoPresta 360",
};

export default function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente">

      <section>
        <h2>Article 1 — Champ d'application</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) s'appliquent à toute souscription d'un abonnement payant à l'application AutoPresta 360, accessible à l'adresse <a href="https://app.autopresta360.com">app.autopresta360.com</a>.
        </p>
        <p>
          Elles s'appliquent exclusivement aux professionnels (B2B) agissant dans le cadre de leur activité commerciale. Toute commande implique l'acceptation sans réserve des présentes CGV.
        </p>
      </section>

      <section>
        <h2>Article 2 — Offres et tarifs</h2>
        <p>Les abonnements proposés sont les suivants :</p>
        <ul>
          <li><strong>Basique Mensuel :</strong> 19,90 € TTC/mois</li>
          <li><strong>Basique Annuel :</strong> 199 € TTC/an</li>
          <li><strong>Pro Mensuel :</strong> 29,90 € TTC/mois</li>
          <li><strong>Pro Annuel :</strong> 299 € TTC/an</li>
        </ul>
        <p>
          Les prix sont indiqués en euros TTC (TVA applicable au taux en vigueur au moment de la souscription). AutoPresta 360 se réserve le droit de modifier ses tarifs à tout moment. Les nouvelles grilles tarifaires sont applicables aux nouveaux abonnements et, pour les abonnements en cours, avec un préavis de 30 jours.
        </p>
      </section>

      <section>
        <h2>Article 3 — Souscription et prise d'effet</h2>
        <p>
          La souscription s'effectue directement depuis l'application AutoPresta 360, via les prestataires de paiement Stripe ou PayPal. L'abonnement prend effet immédiatement après confirmation du paiement.
        </p>
        <p>
          Un essai gratuit de 48h (formule Pro) est proposé sans nécessité de renseigner des informations bancaires. À l'issue de la période d'essai, l'accès est limité à la formule Basique ou suspendu, selon le choix de l'utilisateur.
        </p>
      </section>

      <section>
        <h2>Article 4 — Paiement</h2>
        <p>
          Le règlement s'effectue par carte bancaire ou compte PayPal, via les plateformes sécurisées Stripe et PayPal. AutoPresta 360 ne stocke aucune information bancaire sur ses propres serveurs.
        </p>
        <p>
          Pour les abonnements mensuels, le prélèvement est effectué chaque mois à la date anniversaire de la souscription. Pour les abonnements annuels, le prélèvement est effectué en une fois à la souscription, puis à chaque renouvellement annuel.
        </p>
        <p>
          En cas d'échec de paiement, l'accès à l'application peut être suspendu jusqu'à régularisation.
        </p>
      </section>

      <section>
        <h2>Article 5 — Facturation</h2>
        <p>
          Une facture électronique est émise automatiquement après chaque paiement et mise à disposition dans l'espace personnel de l'utilisateur. AutoPresta 360 s'engage à respecter les obligations légales de facturation électronique applicables à partir de 2026/2027 conformément à la réforme française.
        </p>
      </section>

      <section>
        <h2>Article 6 — Durée et renouvellement</h2>
        <p>
          Les abonnements sont souscrits pour une durée d'un mois (formule mensuelle) ou d'un an (formule annuelle) et se renouvellent automatiquement par tacite reconduction, sauf résiliation avant la fin de la période en cours.
        </p>
        <p>
          L'utilisateur peut résilier son abonnement à tout moment depuis son espace personnel. La résiliation prend effet à la fin de la période payée ; aucun remboursement au prorata n'est accordé (voir politique de remboursement).
        </p>
      </section>

      <section>
        <h2>Article 7 — Droit de rétractation</h2>
        <p>
          Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contrats de fourniture de contenu numérique dont l'exécution a commencé avant l'expiration du délai de rétractation, avec l'accord exprès du consommateur.
        </p>
        <p>
          En souscrivant un abonnement payant et en accédant immédiatement au service, l'utilisateur renonce expressément à son droit de rétractation de 14 jours. Cette renonciation est confirmée lors du processus d'achat.
        </p>
        <p>
          <strong>Note :</strong> AutoPresta 360 s'adressant exclusivement aux professionnels (B2B), le droit de rétractation prévu par le Code de la consommation n'est pas applicable. Voir néanmoins la <a href="/remboursement">politique de remboursement</a> commerciale.
        </p>
      </section>

      <section>
        <h2>Article 8 — Responsabilité</h2>
        <p>
          AutoPresta 360 est tenu à une obligation de moyens concernant la disponibilité et le bon fonctionnement de l'application. L'éditeur ne saurait être tenu responsable des préjudices indirects résultant de l'utilisation ou de l'impossibilité d'utilisation du service.
        </p>
        <p>
          La responsabilité d'AutoPresta 360 ne pourra en aucun cas excéder le montant payé par l'utilisateur au titre des 3 derniers mois d'abonnement.
        </p>
      </section>

      <section>
        <h2>Article 9 — Litiges</h2>
        <p>
          En cas de litige, l'utilisateur peut contacter AutoPresta 360 à <a href="mailto:contact@autopresta360.com">contact@autopresta360.com</a> pour tenter une résolution amiable. À défaut d'accord, les tribunaux compétents sont ceux du ressort du siège social d'AutoPresta 360.
        </p>
        <p>
          Pour les professionnels, la médiation de la consommation n'est pas applicable. Pour toute contestation, la loi française est applicable.
        </p>
      </section>

    </LegalLayout>
  );
}
