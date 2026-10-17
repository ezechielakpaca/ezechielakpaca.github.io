// Toutes les informations du profil. Modifie ce fichier pour mettre à jour
// le stage recherché, les expériences, les compétences ou les liens.

export const profil = {
  nom: 'Marie-Ezéchiel Akpaca',
  nomCourt: 'M-E. Akpaca',
  email: 'ezechielakpaca@gmail.com',
  ville: 'Lille (59)',
  liens: {
    github: 'https://github.com/ezechielakpaca',
    linkedin: 'https://www.linkedin.com/in/marie-ezechiel-akpaca/',
    behance: 'https://www.behance.net/ezechielakpaca',
  },
};

export const stage = {
  badge: 'Stage · avril 2027',
  debut: '19.04.2027',
  missions: [
    { titre: 'Développement Java / Spring Boot', detail: 'Backend, API REST, applications métier' },
    { titre: 'Développement full-stack', detail: 'Spring Boot + Vue.js, React ou Angular' },
    { titre: 'Analyse fonctionnelle & dev', detail: 'Recueil du besoin, spécifications, réalisation' },
    { titre: 'Front-end & UX/UI', detail: 'Parcours, prototypes Figma, intégration' },
  ],
  fiche: [
    { cle: 'Période', valeur: '19 avril → 12 juillet 2027', note: 'Prolongeable jusqu’au 27 août 2027' },
    { cle: 'Durée', valeur: '12 semaines minimum' },
    { cle: 'Lieu', valeur: 'Lille et métropole', note: 'Télétravail possible jusqu’à 50 %' },
    { cle: 'Cadre', valeur: 'Convention de stage', note: 'Université de Lille · L3 MIAGE' },
  ],
};

export const experiences = [
  {
    quand: 'Mai 2025 → Mai 2026',
    ou: 'BFT, Bénin · CDI',
    poste: 'Développeur Java / Spring Boot, puis UX designer',
    contexte: 'Présentiel puis télétravail · équipe de plus de 20 personnes',
    points: [
      'Développé des <strong>services backend en Java / Spring Boot</strong> sur un core banking system qui traite des flux financiers.',
      'Conçu des <strong>API REST</strong> et optimisé des <strong>requêtes SQL</strong> pour sécuriser et accélérer le traitement des données bancaires.',
      'Rejoint l’équipe UX : pris en charge toute la partie UX et le prototypage de produits financiers, dont une <strong>application de microcrédit</strong>, du besoin métier au prototype interactif.',
    ],
    tags: ['Java', 'Spring Boot', 'API REST', 'SQL', 'Figma'],
  },
  {
    quand: '2024 → aujourd’hui',
    ou: 'Oranex Tech, Bénin',
    poste: 'Chef de produit digital',
    contexte: 'Collectif tech',
    points: [
      'Définition de la vision produit et des fonctionnalités.',
      'Coordination des équipes design, développement et stratégie ; suivi de l’avancement des projets.',
    ],
    tags: ['Produit', 'Agile', 'Coordination'],
  },
  {
    quand: '2023 · 6 mois',
    ou: 'e-Gbavou · stage',
    poste: 'UX designer & développeur front-end',
    contexte: 'Agence digitale',
    points: [
      'Développé l’interface avec <strong>Vue.js, Nuxt.js et Tailwind CSS</strong>, branchée sur des API REST.',
      'Écrit des <strong>tests unitaires</strong> et mis en place l’<strong>intégration continue</strong>.',
    ],
    tags: ['Vue.js', 'Nuxt.js', 'Tailwind', 'CI'],
  },
  {
    quand: 'Hors informatique',
    ou: 'Emploi',
    poste: 'Aide à domicile',
    contexte: 'La Maison de l’Aide à Domicile',
    points: [
      'Accompagnement au quotidien de plusieurs personnes aux besoins différents : ponctualité, autonomie et fiabilité.',
    ],
    tags: [],
  },
];

export const competences = [
  { label: 'Backend', titre: 'Serveur & données', items: ['Java', 'Spring Boot', 'API REST', 'SQL', 'Laravel (PHP)'] },
  { label: 'Front-end', titre: 'Interfaces', items: ['Vue.js', 'Nuxt.js', 'React', 'Angular', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'] },
  { label: 'Programmation', titre: 'Fondamentaux', items: ['Java avancé (POO)', 'Tests & TDD', 'C (système)', 'Haskell (fonctionnel)'] },
  { label: 'Produit & UX', titre: 'Conception', items: ['Analyse fonctionnelle', 'Besoin métier', 'Parcours utilisateurs', 'Wireframes', 'Prototypage Figma'] },
  { label: 'Méthodes', titre: 'Façon de travailler', items: ['Git', 'Agile', 'UML', 'Merise', 'Intégration continue'] },
  { label: 'Design', titre: 'Objet & visuel', items: ['Modélisation 3D', 'Prototypage', 'Ergonomie', 'Dessin'] },
];

export const formation = [
  {
    titre: 'Licence 3 MIAGE',
    annees: '2026 – 2027',
    detail: 'Université de Lille · Java avancé (POO, tests, TDD), programmation fonctionnelle, programmation système, réseaux',
  },
  {
    titre: 'DN MADE, 1re année — Design de l’objet',
    annees: '2025 – 2026',
    detail: 'Lycée Théophile-Legrand, Louvroil · démarche de projet, modélisation 3D, prototypage, ergonomie',
  },
  {
    titre: 'Licence 3 Informatique',
    annees: '2020 – 2023',
    detail: 'IFRI, Université d’Abomey-Calavi (Bénin) · Internet et multimédia',
    note: 'Soutenance : mention Très Bien · Bases de données 18/20 · Java EE 17/20',
  },
];

export const certifications = [
  { titre: 'UX Design Professional Certificate', source: 'Google' },
  { titre: 'Project Management Professional Certificate', source: 'Google' },
  { titre: 'Software Engineering Professional Certificate', source: 'IBM · en cours' },
  { titre: 'Graphic Designer', source: 'Adobe' },
];

export const langues = ['Français · C2', 'Anglais · A2'];
