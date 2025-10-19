# Portfolio MBENGUE IBA

Portfolio professionnel développé avec Next.js, TypeScript et Tailwind CSS.

## À propos

Ce portfolio présente le parcours académique et professionnel de **MBENGUE IBA**, étudiant en Géographie et Géomatique.

### Informations personnelles
- **Prénom** : MBENGUE
- **Nom** : IBA
- **Formation** : Licence 3 en Géographie à l'Université Cheikh Anta Diop de Dakar
- **Spécialisation** : 2ème année de BTS Géomatique au CEDT G15
- **Localisation** : Dakar, Sénégal

## Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fluide avec ancres
- ✅ Section d'accueil avec présentation personnelle
- ✅ Section À propos avec parcours académique
- ✅ Section Projets avec compétences techniques
- ✅ Section Contact avec formulaire
- ✅ Animations et transitions CSS
- ✅ Optimisé pour mobile et desktop

## Technologies utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **React** - Bibliothèque JavaScript

## Installation et utilisation

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

### Accès
Le portfolio sera accessible à l'adresse : `http://localhost:3000`

## Structure du projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
└── components/
    ├── Navigation.tsx   # Barre de navigation
    ├── Section.tsx      # Composant section
    ├── Card.tsx         # Composant carte
    └── ContactForm.tsx  # Formulaire de contact
```

## Personnalisation

Pour personnaliser le portfolio :

1. **Informations personnelles** : Modifiez le contenu dans `src/app/page.tsx`
2. **Couleurs** : Ajustez les couleurs dans `tailwind.config.js`
3. **Projets** : Ajoutez vos projets dans la section projets
4. **Compétences** : Modifiez la liste des compétences et leurs niveaux

## Contact

- **Email** : mbengue.iba@email.com
- **Localisation** : Dakar, Sénégal

---

Développé avec ❤️ par MBENGUE IBA


