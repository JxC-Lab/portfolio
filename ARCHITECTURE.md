# Architecture du projet

## Vue d'ensemble

Portfolio single-page (SPA) construit avec React + Vite.  
Aucun backend — toutes les données sont statiques dans `src/data/projects.ts`.

## Flux de données

```
src/data/projects.ts (données statiques)
        │
        ▼
  Composants React (FeaturedProjects, AllProjects, Skills, Experience)
        │
        ▼
    Rendu côté client (Vite + React)
```

## Sections de la page

| Section            | Composant              | Description                                    |
| ------------------ | ---------------------- | ---------------------------------------------- |
| Navigation         | `Navbar.tsx`           | Barre de navigation fixe avec liens ancres     |
| Accueil            | `Hero.tsx`             | Présentation, CTA, liens sociaux               |
| Projets phares     | `FeaturedProjects.tsx` | Grille des projets marqués `featured: true`     |
| Tous les projets   | `AllProjects.tsx`      | Liste filtrable par domaine et technologie      |
| Compétences        | `Skills.tsx`           | Catégories de compétences techniques            |
| Expérience         | `Experience.tsx`       | Timeline du parcours professionnel              |
| Contact            | `Contact.tsx`          | Formulaire de contact (front-only, non fonctionnel) |

## Design System

- **Tokens CSS** définis dans `src/index.css` (variables HSL)
- **Tailwind** configuré dans `tailwind.config.ts` avec les tokens sémantiques
- **shadcn/ui** pour les composants de base (boutons, cartes, etc.)
- **Framer Motion** pour les animations d'entrée

## Modèle de données

```typescript
interface Project {
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
```

## Limitations actuelles

- Pas de backend → le formulaire de contact n'envoie pas d'emails
- Données codées en dur → toute mise à jour nécessite une modification du code
- Liens LinkedIn/GitHub pointent vers les pages d'accueil génériques (à personnaliser)
