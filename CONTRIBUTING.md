# Contribuer au projet

## Prérequis

- Node.js ≥ 18
- npm ≥ 9

## Installation

```bash
git clone <URL_DU_REPO>
cd <NOM_DU_PROJET>
npm install
npm run dev
```

## Ajouter un projet

1. Ouvrir `src/data/projects.ts`
2. Ajouter un objet au tableau `projects` en respectant l'interface `Project`
3. Mettre `featured: true` pour l'afficher dans la section "Projets Phares"

## Ajouter une expérience

1. Ouvrir `src/data/projects.ts`
2. Ajouter un objet au tableau `experiences`

## Modifier les compétences

1. Ouvrir `src/data/projects.ts`
2. Modifier l'objet `skills` (clé = catégorie, valeur = tableau de technologies)

## Conventions

- **Langue** : Interface en français, code/commentaires en anglais
- **Composants** : Un fichier par composant dans `src/components/`
- **Styles** : Utiliser les tokens Tailwind sémantiques (`text-foreground`, `bg-primary`, etc.)
- **Animations** : Framer Motion avec `whileInView` pour les entrées

## Tests

```bash
npm run test        # Run une fois
npm run test:watch  # Watch mode
```

## Build

```bash
npm run build
```
