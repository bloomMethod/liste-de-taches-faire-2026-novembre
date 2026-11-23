To-Do List

🌐 **Voir** 
[To-Do-List](https://bloommethod.github.io/liste-de-taches-faire-2026-novembre/)

📌 Description

Une application web simple permettant de gérer une liste de tâches. Les tâches sont enregistrées dans le navigateur grâce à LocalStorage, ce qui permet de les retrouver après avoir fermé ou actualisé la page.

L'application propose une interface dans laquelle l'utilisateur peut saisir des tâches, les ajouter à une liste et consulter le nombre total de tâches.

🚀 Fonctionnalités

Ajouter de nouvelles tâches.

Supprimer une tâche individuellement.

Effacer toutes les tâches.

Marquer une tâche comme terminée ou à faire.

Conserver les tâches grâce à LocalStorage.

🛠️ Technologies utilisées

HTML5 : structure de l'application.

CSS3 : mise en forme et design responsive.

Sass (SCSS) : organisation et gestion des styles.

JavaScript : gestion des tâches et interaction avec l'utilisateur.

LocalStorage : sauvegarde des tâches dans le navigateur.

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

Organisation Sass

Les styles sont divisés en plusieurs dossiers pour rendre le code plus clair et plus facile à maintenir.

abstracts/ : contient les variables et les mixins réutilisables.

base/ : contient le reset CSS et les styles généraux.

components/ : contient les styles des différents composants de l'application.

layout/ : contient les règles de mise en page responsive.

styles.scss : fichier principal qui importe les différents modules SCSS avec @use.

Le fichier styles.scss compile les différents fichiers SCSS dans css/styles.css, qui est ensuite utilisé par le fichier HTML.

💻 Installation

Installation et utilisation

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

La sélection et la manipulation des éléments HTML avec JavaScript.

La gestion des événements au clic.

La récupération des valeurs d'un champ de saisie.

La création et l'affichage d'éléments HTML dynamiques.

La manipulation des données avec localStorage.

La mise à jour du nombre total de tâches.

Mise à jour de l'app 17-11-2026
Mise à jour de l'app 23-11-2026
