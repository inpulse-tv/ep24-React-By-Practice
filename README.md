# React par la pratique

Ce dépôt contient le code source relatif à l'épisode 24 de notre chaîne [inpulse.tv](https://www.inpulse.tv) dédié à la bibliothèque JavaScript **React.js** :

- [React par la pratique  - [JavaScript]  [1ntro]  [#devtech]  [ep.X]](https://youtu.be/ClztBAyhZs4)

Le projet est une transposition du site Web [sandwichpouletmayonnaise.com](https://sandwichpouletmayonnaise.com) développé en PHP et Vanilla JavaScript sous la librairie React. Il aborde différents concepts comme la modularité, les appels API, les hooks et l'utilisation du JSX.

L'application a été initialisée à l'aide de l'outil [Create React App](https://github.com/facebook/create-react-app). Cet outil embarque l'ensemble des composants qui permet de développer un site web depuis un environnement sous [Node.js](https://nodejs.org) (webpack, Babel, ESLint, etc).

## Installation

Clonez le dépôt sur votre poste à l'aide de la commande suivante :

```shell
git clone https://github.com/labs-ingeniance/epX-React-By-Practice.git
```

Depuis un terminal Shell ouvert depuis le dossier de destination, exécutez les commandes suivantes pour lancer le site Web.

## Commandes

Vous aurez besoin d'installer une version de [Node.js](https://nodejs.org) pour exécuter les commandes Shell suivantes.

```shell
npm start
```

Lance le site Web en mode développement.\
Ouvre automatiquement l'adresse [http://localhost:9000](http://localhost:9000) dans un navigateur et lance un process en arrière plan qui permet l'édition à chaud des fichiers JavaScript et LESS.

```shell
npm run build
```

Génère l'application pour un environnement de production.\
Les sources sont récupérables dans le dossier `build`.

```shell
npm run eject
```

Décompile le projet vous permettant d'éditer par exemple les fichiers de configuration de Webpack ou Babel.\
C'est une opération à sens unique. Une fois l'éjection faite vous ne pourrez plus revenir en arrière. Utile si vous souhaitez customiser d'avantage votre environnement de développement.

## API

Le site Web utilise l'API fournie dans l'épisode dédié à Node.js, que vous pouvez retrouver à cette adresse :
https://github.com/inpulse-tv/ep17-Fullstack-with-NodeJS

Bonne installation et à bientôt sur [inpulse.tv](https://inpulse.tv).
