export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  context: string;
  objectives: string[];
  technologies: string[];
  challenges: string[];
  results: string[];
  domains: string[];
  featured: boolean;
  date: string;
  organization: string;
}

export const projects: Project[] = [
  {
    id: "supply-chain-forecasting",
    title: "Prévision Supply Chain – ML & Forecasting",
    subtitle: "Roquette Frères",
    description: "Développement d'un modèle prédictif pour challenger les estimations commerciales et améliorer la fiabilité des stocks.",
    context: "Dans le cadre d'un stage chez Roquette Frères, leader mondial des ingrédients d'origine végétale, j'ai travaillé sur l'optimisation des prévisions de la supply chain.",
    objectives: [
      "Développer un modèle ML pour améliorer les prévisions de stocks",
      "Concevoir des KPI Supply Chain orientés tendances et saisonnalité",
      "Automatiser les tableaux de bord décisionnels",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Qlik", "Excel", "SQL"],
    challenges: [
      "Feature engineering sur des données de ventes complexes avec forte saisonnalité",
      "Traduction des résultats techniques en insights actionnables pour le comité de direction",
    ],
    results: [
      "Amélioration de la fiabilité des estimations commerciales",
      "Dashboards automatisés pour le support décisionnel opérationnel",
      "Consolidation et fiabilisation des données de suivi planification/production",
    ],
    domains: ["Data Science", "Machine Learning", "Supply Chain", "BI"],
    featured: true,
    date: "Sept 2025 – Jan 2026",
    organization: "Roquette Frères, Lestrem",
  },
  {
    id: "hospital-data-analysis",
    title: "Analyse de Données Hospitalières – Big Data",
    subtitle: "CESI Lille",
    description: "Modélisation d'un Data Warehouse et création de dashboards décisionnels interactifs à partir de sources hétérogènes.",
    context: "Projet académique Big Data visant à centraliser et analyser des données hospitalières provenant de sources multiples.",
    objectives: [
      "Modéliser un Data Warehouse multi-sources",
      "Automatiser les pipelines ETL",
      "Créer des dashboards décisionnels interactifs",
    ],
    technologies: ["PostgreSQL", "Talend Open Studio", "Power BI", "CSV", "SQL"],
    challenges: [
      "Harmonisation de sources de données hétérogènes (PostgreSQL, CSV)",
      "Conception de pipelines ETL robustes et automatisés",
    ],
    results: [
      "Data Warehouse fonctionnel avec intégration multi-sources",
      "Dashboards Power BI interactifs pour indicateurs clés",
      "Pipeline ETL automatisé et reproductible",
    ],
    domains: ["Data Engineering", "BI", "ETL", "Big Data"],
    featured: true,
    date: "Juin 2025",
    organization: "CESI Lille",
  },
  {
    id: "employee-attrition",
    title: "Prédiction d'Attrition d'Employés – IA & ML",
    subtitle: "CESI Lille",
    description: "Modèle d'apprentissage supervisé pour prédire le départ des employés à partir de données RH multi-sources.",
    context: "Projet IA & Machine Learning visant à anticiper l'attrition des talents via des modèles prédictifs.",
    objectives: [
      "Préparer et nettoyer des données RH multi-sources",
      "Entraîner et évaluer des modèles de classification",
      "Analyser les variables influentes et les biais potentiels",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter", "NumPy"],
    challenges: [
      "Données RH déséquilibrées nécessitant des techniques de rééchantillonnage",
      "Analyse des biais potentiels dans les prédictions",
    ],
    results: [
      "Modèle performant avec métriques Accuracy et F1-Score optimisées",
      "Identification des facteurs clés d'attrition via Feature Importance",
    ],
    domains: ["Data Science", "Machine Learning", "IA", "RH"],
    featured: true,
    date: "Décembre 2024",
    organization: "CESI Lille",
  },
  {
    id: "migration-informatique",
    title: "Migration d'Application Métier",
    subtitle: "La MEM en Pays d'Artois",
    description: "Analyse, conception et migration d'une application métier vers une architecture web moderne et sécurisée.",
    context: "Stage de migration d'outils internes obsolètes vers une solution web sécurisée.",
    objectives: [
      "Auditer l'application existante",
      "Concevoir une architecture web sécurisée (Laravel/MVC)",
      "Migrer les bases de données historiques (Access vers MySQL)",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Access", "MVC"],
    challenges: [
      "Migration de données historiques sans perte ni régression",
      "Adoption de la nouvelle solution par les équipes",
    ],
    results: [
      "Application web sécurisée et moderne déployée",
      "Migration complète avec intégrité des données garantie",
      "Documentation technique et guide utilisateur rédigés",
    ],
    domains: ["Développement Web", "Migration", "Base de Données"],
    featured: false,
    date: "Fév – Avr 2025",
    organization: "La MEM, Arras",
  },
  {
    id: "backend-api-eds",
    title: "Architecture Back-End & API REST",
    subtitle: "EDS Telecom & Consulting",
    description: "Développement d'une architecture applicative robuste avec API REST sécurisées et documentées.",
    context: "Développement back-end pour EDS Telecom & Consulting à Cotonou.",
    objectives: [
      "Développer une architecture applicative robuste",
      "Exposer des API REST sécurisées et documentées",
      "Concevoir des schémas relationnels optimisés",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Swagger", "API REST"],
    challenges: [
      "Performance et scalabilité des schémas relationnels complexes",
      "Documentation exhaustive des API via Swagger",
    ],
    results: [
      "API REST sécurisées et documentées déployées",
      "Schémas relationnels optimisés pour la performance",
    ],
    domains: ["Développement Web", "API", "Base de Données"],
    featured: false,
    date: "Fév – Juin 2024",
    organization: "EDS Telecom, Cotonou",
  },
];

export const skills = {
  "Data Science & IA": [
    "Python", "Pandas", "Polars", "NumPy", "Scikit-learn", "Machine Learning", "Jupyter",
  ],
  "BI & Data Engineering": [
    "Power BI", "Qlik", "Talend Open Studio", "Snowflake", "SQL", "PostgreSQL", "MySQL", "Modélisation de données",
  ],
  "Développement & API": [
    "Laravel", "PHP", "React", "JavaScript", "API REST", "Swagger",
  ],
  "DevOps & Outils": [
    "Docker", "Git", "Linux", "Bash", "PowerShell", "C/C++/C#",
  ],
};

export const experiences = [
  {
    title: "Stagiaire Data Analyst – Supply Chain",
    company: "Roquette Frères",
    location: "Lestrem",
    period: "Sept 2025 – Jan 2026",
    highlights: [
      "Machine Learning & Forecasting",
      "Feature Engineering & KPI Supply Chain",
      "Data Visualization (Qlik)",
      "Business Intelligence",
    ],
  },
  {
    title: "Stagiaire Migration Informatique",
    company: "La MEM en Pays d'Artois",
    location: "Arras",
    period: "Fév – Avr 2025",
    highlights: [
      "Audit & Conception (Laravel/MVC)",
      "Migration de Données (Access → MySQL)",
      "Documentation & Formation",
    ],
  },
  {
    title: "Développeur Back-End & Base de Données",
    company: "EDS Telecom & Consulting",
    location: "Cotonou",
    period: "Fév – Juin 2024",
    highlights: [
      "Architecture applicative Laravel",
      "API REST sécurisées (Swagger)",
      "Schémas relationnels PostgreSQL",
    ],
  },
];
