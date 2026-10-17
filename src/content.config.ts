import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un projet = un fichier .md dans src/content/projets/
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      resume: z.string(),
      categorie: z.string(),
      // Catégorie utilisée par les filtres de la page Projets
      domaine: z.string().default('Développement'),
      role: z.string().optional(),
      date: z.coerce.date(),
      periode: z.string().optional(),
      statut: z.string().optional(),
      tags: z.array(z.string()).default([]),
      icone: z.enum(['code', 'mobile', 'objet', 'web', 'data']).default('code'),
      image: image().optional(),
      // Écrans affichés dans la galerie de la page projet
      ecrans: z.array(image()).default([]),
      // Écrans mis en avant sur la couverture (sinon les premiers de « ecrans »)
      couverture: z.array(image()).default([]),
      outils: z.array(z.string()).default([]),
      // Couverture générée : couleurs du projet, accroche, type d'écrans
      couleur: z.string().optional(),
      couleur2: z.string().optional(),
      slogan: z.string().optional(),
      format: z.enum(['mobile', 'web']).default('mobile'),
      points: z.array(z.string()).default([]),
      depot: z.string().url().optional(),
      demo: z.string().url().optional(),
      enAvant: z.boolean().default(false),
      ordre: z.number().default(100),
      brouillon: z.boolean().default(false),
    }),
});

// Un article = un fichier .md dans src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { projets, blog };
