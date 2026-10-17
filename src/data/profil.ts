// Toutes les informations du profil. Modifie ce fichier pour mettre à jour
// le stage recherché, les expériences, les compétences ou les liens.

export const profil = {
  nom: 'Marie-Ezéchiel Akpaca',
  email: 'ezechielakpaca@gmail.com',
  ville: 'Lille',
  liens: {
    github: 'https://github.com/ezechielakpaca',
    linkedin: 'https://www.linkedin.com/in/marie-ezechiel-akpaca/',
    behance: 'https://www.behance.net/ezechielakpaca',
  },
};

export const stage = {
  missions: ['Java / Spring Boot', 'Full-stack', 'Analyse fonctionnelle', 'Front-end & UX'],
  fiche: [
    { cle: 'Début', valeur: '19 avril 2027' },
    { cle: 'Durée', valeur: '12 semaines', note: 'prolongeable jusqu’au 27 août' },
    { cle: 'Lieu', valeur: 'Lille et métropole', note: 'télétravail jusqu’à 50 %' },
    { cle: 'Cadre', valeur: 'L3 MIAGE', note: 'Université de Lille' },
  ],
};

export const experiences = [
  {
    quand: '2025 – 2026',
    ou: 'BFT · Bénin',
    poste: 'Développeur Java / Spring Boot, puis UX designer',
    points: [
      'Services backend et <strong>API REST</strong> pour un core banking system, dans une équipe de 20+ personnes.',
      'UX et prototypes d’une <strong>application de microcrédit</strong>.',
    ],
    tags: ['Java', 'Spring Boot', 'SQL', 'Figma'],
  },
  {
    quand: '2024 – auj.',
    ou: 'Oranex Tech · Bénin',
    poste: 'Chef de produit digital',
    points: ['Vision produit et coordination design, développement et stratégie.'],
    tags: ['Produit', 'Agile'],
  },
  {
    quand: '2023 · 6 mois',
    ou: 'e-Gbavou · stage',
    poste: 'UX designer & développeur front-end',
    points: ['Interface en <strong>Vue.js / Nuxt.js</strong>, tests unitaires et intégration continue.'],
    tags: ['Vue.js', 'Nuxt.js', 'Tailwind', 'CI'],
  },
  {
    quand: 'Emploi étudiant',
    ou: 'La Maison de l’Aide à Domicile',
    poste: 'Aide à domicile',
    points: ['Accompagnement au quotidien : ponctualité, autonomie, fiabilité.'],
    tags: [],
  },
];

export const competences = [
  { label: 'Backend', items: ['Java', 'Spring Boot', 'API REST', 'SQL', 'Laravel'] },
  { label: 'Front-end', items: ['Vue.js', 'Nuxt.js', 'React', 'Angular', 'Tailwind CSS'] },
  { label: 'Produit & UX', items: ['Analyse fonctionnelle', 'Parcours utilisateurs', 'Wireframes', 'Figma'] },
  { label: 'Méthodes', items: ['Git', 'Agile', 'UML', 'Tests & TDD', 'CI'] },
];

export const formation = [
  { titre: 'Licence 3 MIAGE', lieu: 'Université de Lille', annees: '2026 – 2027' },
  { titre: 'DN MADE 1re année, Design de l’objet', lieu: 'Lycée Théophile-Legrand, Louvroil', annees: '2025 – 2026' },
  {
    titre: 'Licence 3 Informatique',
    lieu: 'IFRI, Université d’Abomey-Calavi',
    annees: '2020 – 2023',
    note: 'Soutenance mention Très Bien',
  },
];

export const certifications = [
  { titre: 'UX Design', source: 'Google' },
  { titre: 'Project Management', source: 'Google' },
  { titre: 'Software Engineering', source: 'IBM · en cours' },
  { titre: 'Graphic Designer', source: 'Adobe' },
];

export const langues = ['Français C2', 'Anglais A2'];

// Bandeau défilant sous le hero
export const motsCles = ['Java', 'Spring Boot', 'API REST', 'Vue.js', 'React', 'SQL', 'UX / UI', 'Figma'];

// Chiffres de la section « À propos »
export const chiffres = [
  { valeur: '1', unite: 'an', label: 'Java / Spring Boot en banque' },
  { valeur: '20', unite: '+', label: 'personnes dans l’équipe' },
  { valeur: '6', unite: 'mois', label: 'de stage front-end' },
  { valeur: '3', unite: 'rôles', label: 'dev, UX et produit' },
];

// Capsules de la section Compétences (icônes Devicon : https://devicon.dev)
export const technos = [
  { nom: 'Java', icone: 'devicon-java-plain colored' },
  { nom: 'Spring Boot', icone: 'devicon-spring-plain colored' },
  { nom: 'Vue.js', icone: 'devicon-vuejs-plain colored' },
  { nom: 'React', icone: 'devicon-react-original colored' },
  { nom: 'Figma', icone: 'devicon-figma-plain colored' },
  { nom: 'Git', icone: 'devicon-git-plain colored' },
];
