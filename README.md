To-Do List

🌐 **Voir** 
[To-Do-List](https://bloommethod.github.io/liste-de-taches-faire-2026-novembre/)

📌 Description

Une application web simple permettant de gérer une liste de tâches. Les tâches sont enregistrées dans le navigateur grâce à LocalStorage, ce qui permet de les retrouver après avoir actualisé ou fermé la page.

L'interface permet d'ajouter des tâches, de modifier leur état, de les supprimer individuellement ou d'effacer toute la liste.

🚀 Fonctionnalités

- Ajouter une nouvelle tâche à partir du champ de saisie.
- Ajouter une tâche avec la touche Entrée.
- Supprimer une tâche individuellement.
- Effacer toutes les tâches.
- Modifier l'état d'une tâche :
 - New : nouvelle tâche.
 - Pending : tâche à faire.
 - Done : tâche terminée.

- Masquer les boutons de changement d'état lorsqu'une tâche est terminée.
- Afficher le nombre total de tâches.
- Enregistrer et récupérer les tâches avec LocalStorage.
- Adapter l'affichage aux écrans mobiles.

🛠️ Technologies utilisées

- HTML5 : structure de l'application.
- CSS3 : mise en forme de l'interface.
- Sass (SCSS) : organisation des styles avec des fichiers partiels, des variables, des mixins et @use.
- JavaScript : gestion des tâches, des événements et du rendu dynamique.
- LocalStorage : persistance des tâches dans le navigateur.
- Node.js et npm : environnement et scripts de compilation Sass.

📂 Structure du projet

Le projet est organisé de manière à séparer les différents éléments de l'application et à faciliter la maintenance du code.

liste-de-taches-faire-2026-novembre/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _index.scss
│   │
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _base.scss
│   │
│   ├── components/
│   │   ├── _panel.scss
│   │   └── _lista-tareas.scss
│   │
│   ├── layout/
│   │   └── _responsive.scss
│   │
│   └── styles.scss
│
├── js/
│   └── listaTareasconLocalStorage.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

🎨 Organisation des styles avec Sass

Les styles sont répartis dans plusieurs dossiers afin de faciliter leur lecture et leur maintenance.

- abstracts/ : contient les variables, les mixins et le fichier _index.scss qui les centralise avec @forward.
- base/ : contient le reset CSS et les styles généraux.
- components/ : contient les styles des composants de l'application, comme le panneau et la liste des tâches.
- layout/ : contient les règles responsive.
- styles.scss : fichier principal qui rassemble les différents fichiers SCSS avec @use.
Le fichier styles.scss est compilé en css/styles.css, qui est chargé par index.html.


🧩 Organisation JavaScript

Le code JavaScript est regroupé dans js/listaTareasconLocalStorage.js et organisé en sections :
- DOM Elements : sélection des éléments HTML nécessaires à l'application.
- App State : stockage des tâches et gestion du prochain identifiant.
- Event Listeners : gestion des événements du clavier et des boutons.
- Task Management : ajout, suppression, suppression globale et modification de l'état des tâches.
- Tasks Rendering : création et affichage dynamique des tâches et mise à jour du compteur.
- Local Storage : sauvegarde et chargement des tâches.
Chaque tâche est représentée par un objet contenant notamment un titre (title), un identifiant (id), un état (status) et une propriété booléenne (done).

Les états utilisés sont new, pending et done. La propriété done est synchronisée avec l'état de la tâche.

🏷️ Convention BEM

Les classes CSS suivent la convention BEM (Block, Element, Modifier) afin de rendre les noms plus clairs et cohérents.

Exemples utilisés dans le projet :
- Blocs : .todo, .task
- Éléments : .todo__panel, .todo__list, .task__title, .task__delete-button
- Modificateurs : .todo__total--visible, .task--new, .task--pending, .task--done
Cette convention permet de distinguer les composants, leurs éléments et leurs différents états.

💻 Installation et utilisation

1. Cloner le dépôt
git clone https://github.com/bloomMethod/liste-de-taches-faire-2026-novembre.git
2. Ouvrir le dossier du projet
cd liste-de-taches-faire-2026-novembre
3. Installer les dépendances
Node.js et npm doivent être installés sur votre ordinateur.
npm install
4. Compiler les fichiers SCSS
Pour compiler les fichiers SCSS une seule fois :
npm run sass
Pour compiler automatiquement les modifications à chaque sauvegarde :
npm run watch
Laissez le terminal ouvert pendant que vous travaillez sur les fichiers SCSS. Pour arrêter la surveillance, utilisez Ctrl + C.

5. Ouvrir l'application

Ouvrez le fichier index.html dans votre navigateur.

👨‍💻 Auteur

- La structuration d'une page avec HTML.
- La sélection et la manipulation des éléments du DOM.
- La gestion des événements avec JavaScript.
- La création et l'affichage dynamique d'éléments HTML.
- La manipulation de tableaux et d'objets.
- La gestion des états d'une tâche.
- La sauvegarde et la récupération des données avec LocalStorage.
- L'organisation des styles avec Sass/SCSS.
- L'utilisation de variables, mixins, fichiers partiels, @use et @forward.
- L'application de la convention de nommage BEM.
- La création d'une mise en page responsive.

Mise à jour de l'app 17-11-2026
Mise à jour de l'app 23-11-2026
Mise à jour de l'app 25/11/2026 - fin
