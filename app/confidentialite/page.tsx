import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Politique de confidentialité — AutoPresta 360",
};

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">

      <section>
        <h2>1. Responsable du traitement</h2>
        <div className="info-block">
          <p><strong>[NOM DE VOTRE SOCIÉTÉ / PRÉNOM NOM]</strong></p>
          <p>SIRET : [000 000 000 00000]</p>
          <p>Email : <a href="mailto:contact@autopresta360.com">contact@autopresta360.com</a></p>
        </div>
        <p className="mt-4">
          Dans le cadre du Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et de la loi Informatique et Libertés, AutoPresta 360 s'engage à traiter vos données personnelles avec transparence et sécurité.
        </p>
      </section>

      <section>
        <h2>2. Données collectées</h2>

        <h3>2.1 Données d'inscription et de compte</h3>
        <ul>
          <li>Adresse email</li>
          <li>Nom et prénom (optionnel)</li>
          <li>Nom de l'entreprise (optionnel)</li>
          <li>Mot de passe (stocké sous forme hachée — non lisible)</li>
        </ul>

        <h3>2.2 Données de facturation</h3>
        <ul>
          <li>Informations de paiement traitées par Stripe ou PayPal (nous ne stockons pas vos coordonnées bancaires)</li>
          <li>Historique des transactions et factures</li>
        </ul>

        <h3>2.3 Données métier saisies par l'utilisateur</h3>
        <ul>
          <li>Fiches clients et véhicules créées dans l'application</li>
          <li>Devis, factures, interventions, stock</li>
          <li>Ces données vous appartiennent et sont traitées pour votre compte</li>
        </ul>

        <h3>2.4 Données techniques</h3>
        <ul>
          <li>Adresse IP (logs de connexion)</li>
          <li>Type de navigateur et appareil</li>
          <li>Pages visitées et actions effectuées dans l'application</li>
        </ul>
      </section>

      <section>
        <h2>3. Finalités et bases légales</h2>
        <ul>
          <li><strong>Exécution du contrat :</strong> gestion de votre compte, fourniture du service, facturation</li>
          <li><strong>Intérêt légitime :</strong> sécurité du service, prévention de la fraude, amélioration de l'application</li>
          <li><strong>Obligation légale :</strong> conservation des données de facturation (10 ans)</li>
          <li><strong>Consentement :</strong> envoi de communications marketing (avec opt-in explicite)</li>
        </ul>
      </section>

      <section>
        <h2>4. Durée de conservation</h2>
        <ul>
          <li><strong>Données de compte actif :</strong> pendant toute la durée de l'abonnement</li>
          <li><strong>Après résiliation :</strong> 3 ans pour les données de compte, puis suppression</li>
          <li><strong>Données de facturation :</strong> 10 ans (obligation légale comptable)</li>
          <li><strong>Logs techniques :</strong> 12 mois</li>
        </ul>
      </section>

      <section>
        <h2>5. Sous-traitants et transferts</h2>
        <p>AutoPresta 360 fait appel aux sous-traitants suivants :</p>
        <ul>
          <li><strong>Supabase</strong> (base de données) — Données hébergées en Europe (région EU)</li>
          <li><strong>Vercel</strong> (hébergement) — Serveurs edge en Europe</li>
          <li><strong>Stripe</strong> (paiement) — Certifié PCI-DSS, transfert vers les États-Unis couvert par les clauses contractuelles types</li>
          <li><strong>PayPal</strong> (paiement) — Certifié PCI-DSS, transfert vers les États-Unis couvert par les clauses contractuelles types</li>
        </ul>
        <p>
          Aucune donnée n'est vendue à des tiers à des fins commerciales.
        </p>
      </section>

      <section>
        <h2>6. Vos droits (RGPD)</h2>
        <p>Vous disposez des droits suivants sur vos données personnelles :</p>
        <ul>
          <li><strong>Accès :</strong> obtenir une copie de vos données</li>
          <li><strong>Rectification :</strong> corriger des données inexactes</li>
          <li><strong>Effacement :</strong> demander la suppression de vos données ("droit à l'oubli")</li>
          <li><strong>Portabilité :</strong> recevoir vos données dans un format structuré</li>
          <li><strong>Opposition :</strong> vous opposer à certains traitements</li>
          <li><strong>Limitation :</strong> demander la suspension temporaire d'un traitement</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@autopresta360.com">contact@autopresta360.com</a>. Nous répondons dans un délai d'un mois.
        </p>
        <p>
          En cas de désaccord, vous pouvez introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a> (Commission Nationale de l'Informatique et des Libertés).
        </p>
      </section>

      <section>
        <h2>7. Cookies</h2>
        <p>
          AutoPresta 360 utilise des cookies strictement nécessaires au fonctionnement du service (session d'authentification). Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement explicite.
        </p>
        <p>
          Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités de l'application.
        </p>
      </section>

      <section>
        <h2>8. Sécurité</h2>
        <p>
          AutoPresta 360 met en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données : chiffrement des communications (HTTPS/TLS), hachage des mots de passe (bcrypt), contrôle d'accès par rôle, sauvegardes régulières.
        </p>
      </section>

      <section>
        <h2>9. Modifications</h2>
        <p>
          Cette politique peut être mise à jour. Toute modification substantielle vous sera notifiée par email ou via une bannière dans l'application au moins 30 jours avant son entrée en vigueur.
        </p>
      </section>

    </LegalLayout>
  );
}
