# Portfolio — Marie-Ezéchiel Akpaca

Site personnel construit avec [Astro](https://astro.build). Les projets et les articles sont de simples fichiers Markdown : pour mettre le site à jour, on ajoute ou modifie un fichier, puis on pousse sur GitHub.

## Lancer le site en local

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:4321 et se recharge à chaque modification.

## Ajouter un projet

Crée un fichier dans `src/content/projets/`, par exemple `gestion-reservations.md`. Le nom du fichier devient l'adresse de la page (`/projets/gestion-reservations/`).

```markdown
---
titre: Gestion de réservations
resume: Une phrase qui présente le projet.
categorie: Projet personnel
date: 2026-11-01
periode: 2025          # ou statut: En cours
tags: [Java, Spring Boot, Vue.js]
icone: web             # code, mobile, objet, web ou data
image: ./images/reservations.png   # facultatif, chemin relatif au fichier
depot: https://github.com/ezechielakpaca/mon-projet   # facultatif
demo: https://mon-projet.vercel.app                   # facultatif
enAvant: true          # affiché sur la page d'accueil (3 projets max)
ordre: 1               # plus petit = affiché en premier
---

## Le besoin
...

## Ce que j'ai fait
...
```

## Écrire un article de blog

Copie `src/content/blog/modele-article.md`, renomme-le et remplis-le. Un article avec `brouillon: true` reste invisible sur le site. La section Blog de la page d'accueil n'apparaît qu'à partir du premier article publié.

## Modifier le profil

Le stage recherché, les expériences, les compétences, la formation, les certifications, les langues et les liens sont dans `src/data/profil.ts`.

## Mettre le site en ligne (GitHub Pages)

1. Sur GitHub, crée un dépôt public nommé exactement **`ezechielakpaca.github.io`**, sans README.
2. Dans ce dossier :

   ```bash
   git init
   git add .
   git commit -m "Premier commit du portfolio"
   git branch -M main
   git remote add origin https://github.com/ezechielakpaca/ezechielakpaca.github.io.git
   git push -u origin main
   ```

3. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. Le site est en ligne sur https://ezechielakpaca.github.io après une ou deux minutes. Chaque `git push` le met à jour.

Garde ce nom de dépôt : le site est alors servi à la racine du domaine, ce que supposent tous les liens internes.
