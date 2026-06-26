import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Politique de remboursement — AutoPresta 360",
};

export default function Remboursement() {
  return (
    <LegalLayout title="Politique de remboursement">

      <section>
        <h2>Principe général</h2>
        <p>
          AutoPresta 360 est un service SaaS (Software as a Service) à destination des professionnels. Les abonnements étant des services numériques à exécution immédiate, les remboursements ne sont pas systématiques. Cette page détaille les cas dans lesquels un remboursement peut être accordé.
        </p>
      </section>

      <section>
        <h2>Période d'essai gratuite</h2>
        <div className="info-block">
          <p>🎁 Un essai gratuit de <strong>48 heures</strong> est proposé pour la formule Pro, <strong>sans carte bancaire</strong>.</p>
          <p className="mt-2">Profitez-en pour tester toutes les fonctionnalités avant tout engagement financier.</p>
        </div>
      </section>

      <section>
        <h2>Remboursements accordés</h2>

        <h3>Dysfonctionnement majeur du service</h3>
        <p>
          Si l'application est indisponible pendant plus de <strong>72 heures consécutives</strong> sur un mois calendaire pour des raisons imputables à AutoPresta 360 (hors cas de force majeure), un avoir ou remboursement au prorata peut être accordé sur simple demande.
        </p>

        <h3>Double facturation</h3>
        <p>
          En cas d'erreur technique entraînant une double facturation, le montant prélevé en trop est remboursé intégralement dans un délai de 5 à 10 jours ouvrés.
        </p>

        <h3>Première souscription — geste commercial</h3>
        <p>
          À titre exceptionnel et commercial, un remboursement peut être accordé dans les <strong>48 heures suivant la première souscription</strong> si l'utilisateur n'a pas ou peu utilisé le service et en fait la demande motivée par email. Cette décision relève de l'appréciation d'AutoPresta 360 et ne constitue pas un droit.
        </p>
      </section>

      <section>
        <h2>Cas non remboursables</h2>
        <ul>
          <li>Résiliation en cours de période d'abonnement (mensuel ou annuel)</li>
          <li>Oubli de résiliation avant renouvellement automatique</li>
          <li>Non-utilisation du service</li>
          <li>Mécontentement lié à une fonctionnalité non disponible (hors promesse explicite)</li>
          <li>Problèmes liés à l'équipement ou à la connexion internet de l'utilisateur</li>
        </ul>
      </section>

      <section>
        <h2>Annulation de l'abonnement</h2>
        <p>
          Vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel dans l'application. L'annulation prend effet à la fin de la période en cours : vous continuez à bénéficier du service jusqu'à cette date, sans remboursement du temps restant.
        </p>
        <p>
          Aucune résiliation n'est rétroactive.
        </p>
      </section>

      <section>
        <h2>Comment faire une demande de remboursement</h2>
        <p>Envoyez un email à <a href="mailto:contact@autopresta360.com">contact@autopresta360.com</a> avec :</p>
        <ul>
          <li>L'adresse email associée à votre compte</li>
          <li>La date et le montant du prélèvement concerné</li>
          <li>Le motif de votre demande</li>
        </ul>
        <p>
          Nous accusons réception sous 24h et traitons les demandes éligibles sous 5 jours ouvrés. Le remboursement est effectué sur le moyen de paiement utilisé lors de la transaction (carte bancaire ou compte PayPal).
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <div className="info-block">
          <p>Pour toute question relative à la facturation ou à un remboursement :</p>
          <p className="mt-2"><a href="mailto:contact@autopresta360.com">contact@autopresta360.com</a></p>
        </div>
      </section>

    </LegalLayout>
  );
}
