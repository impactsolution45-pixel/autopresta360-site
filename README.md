# AutoPresta 360 — Site vitrine

Site vitrine Next.js (App Router, TypeScript, Tailwind CSS) pour AutoPresta 360.

## 1. Lancer en local

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## 2. Avant de mettre en ligne

- **Bouton "Se connecter"** : remplace l'URL temporaire dans `components/Header.tsx` et
  `components/Hero.tsx` (constante `APP_URL`) par l'URL réelle de ton application une
  fois déployée publiquement.
- **Formulaire de contact** : `app/api/contact/route.ts` log actuellement les messages
  dans les logs Vercel (aucun email n'est envoyé). Pour recevoir vraiment les messages :
  1. Crée un compte sur [resend.com](https://resend.com) (gratuit jusqu'à 100 emails/jour)
  2. `npm install resend`
  3. Décommente le bloc d'exemple dans `app/api/contact/route.ts` et mets ton adresse
  4. Ajoute la variable d'environnement `RESEND_API_KEY` dans Vercel
     (Project Settings → Environment Variables)
- **Domaine** : pense à mettre à jour `metadataBase` dans `app/layout.tsx` avec ton vrai
  nom de domaine une fois acheté.

## 3. Mettre sur GitHub

```bash
git init
git add .
git commit -m "Site vitrine AutoPresta 360"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/autopresta360-site.git
git push -u origin main
```

(Crée d'abord le dépôt vide sur github.com, sans README ni .gitignore — ils sont déjà
présents ici.)

## 4. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) → **Add New → Project**
2. Importe le dépôt GitHub `autopresta360-site`
3. Vercel détecte Next.js automatiquement, laisse les réglages par défaut
4. Clique **Deploy**

À chaque `git push` sur `main`, Vercel redéploie automatiquement.

## 5. Brancher ton nom de domaine

Dans le projet Vercel → **Settings → Domains** → ajoute `autopresta360.com` (ou le TLD
que tu choisis : `.fr`, `.io`...) et suis les instructions DNS affichées (en général un
enregistrement `A` ou `CNAME` à ajouter chez ton registrar).

## Structure du projet

```
app/
  layout.tsx          ← polices, métadonnées SEO
  page.tsx             ← assemble toutes les sections
  globals.css
  api/contact/route.ts ← traitement du formulaire de contact
components/
  Header.tsx            Hero.tsx          Features.tsx
  Compliance.tsx         Screenshots.tsx   Contact.tsx
  ContactForm.tsx         Footer.tsx        ScrollGauge.tsx
public/images/          ← logo + captures d'écran (déjà anonymisées)
```

## Notes de design

- Palette et typographie reprennent l'identité visuelle déjà en place dans
  l'application (fond marine #0a1120/#0f172a, accent cyan #38bdf8, police display
  Rajdhani pour les titres — esprit tableau de bord/compteur automobile).
- Le petit cadran circulaire dans l'en-tête (`ScrollGauge.tsx`) reprend le
  speedomètre du logo : son aiguille avance avec la progression de lecture de la page.
- Les captures d'écran "Clients" et "E-Facturation" ont été anonymisées (noms,
  téléphones, emails, adresses, plaques) avant intégration au site.
