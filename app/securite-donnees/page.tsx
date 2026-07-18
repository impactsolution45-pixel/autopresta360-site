export default function SecuriteDonneesPage() {
  return (
    <main className="min-h-screen bg-[#050b18] text-white">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-sm tracking-widest text-blue-400 uppercase mb-4">
          Protection & Conformité
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Sécurité et données
        </h1>

        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Vos données sont protégées
            </h2>
            <p>
              Chez AutoPresta 360, la sécurité de vos données professionnelles
              est notre priorité absolue. Nous mettons en œuvre les meilleures
              pratiques de l'industrie pour garantir la confidentialité,
              l'intégrité et la disponibilité de vos informations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Hébergement sécurisé
            </h2>
            <p>
              Vos données sont hébergées sur des serveurs européens conformes
              RGPD, avec chiffrement de bout en bout. Toutes les communications
              entre votre navigateur et nos serveurs sont sécurisées via
              protocole HTTPS/TLS.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Sauvegardes automatiques
            </h2>
            <p>
              Des sauvegardes quotidiennes automatiques sont effectuées pour
              garantir la récupération de vos données en cas d'incident.
              Vos informations sont répliquées sur plusieurs sites pour une
              disponibilité maximale.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Conformité RGPD
            </h2>
            <p>
              AutoPresta 360 respecte scrupuleusement le Règlement Général sur
              la Protection des Données (RGPD). Vous conservez le contrôle
              total sur vos données : droit d'accès, de
              rectification, de suppression et de portabilité.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Accès sécurisé
            </h2>
            <p>
              Authentification renforcée, gestion des sessions, et surveillance
              des accès pour protéger votre compte contre les intrusions. Vous
              êtes le seul à avoir accès à vos données professionnelles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Transparence totale
            </h2>
            <p>
              Nous ne vendons jamais vos données à des tiers. Vos informations
              clients, devis et factures restent strictement confidentielles et
              ne sont utilisées que dans le cadre du service fourni.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </section>
    </main>
  );
}
