## Gestion de Recettes - Application Node.js
## Description

Cette API permet de gérer des recettes culinaires en offrant des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle est développée avec Express.js et utilise MySQL pour la gestion de la base de données. Le projet comprend des tests unitaires, des outils d'analyse et de formatage de code (ESLint, Prettier), ainsi qu'une containerisation avec Docker pour le déploiement.


## Objectifs
- Développer et tester une API RESTful avec Express.js et MySQL.
- Intégrer des outils d'analyse et de formatage de code.
- Containeriser l'API avec Docker pour faciliter le déploiement.
- Déployer l'API dans un environnement conteneurisé via DockerHub.
## prérequis

Avant de démarrer, assurez-vous d'avoir installé les logiciels suivants :

- Node.js (version 14+)
- MySQL (version 5.7+)
- Postman (pour tester l'API)

## Technologies Utilisées
- **Node.js** : Plateforme JavaScript côté serveur.
- **Express** : Framework web pour Node.js.
- **MySQL** : Système de gestion de base de données relationnelle.
- **Jasmine** : Framework de tests pour JavaScript.
- **Postman** : Utilisé pour tester l'API.
## Installation

1. Clonez le dépôt sur votre machine locale :
```
git clone https://github.com/Mangassouba/gestion-recipes-api.git
```
2. Accédez au répertoire du projet :
```
cd gestion-recipes-api
```
3. Installez les dépendances du projet :
```
npm install
```
## Configuration de la base de données
1. Assurez-vous que MySQL est en cours d'exécution sur votre machine.
2. Créez une base de données pour le projet (par exemple, gestion_recipes).
3. Modifiez le fichier .env.examplen le nommant .env pour y insérer les informations de connexion à la base de données.

Exemple de fichier .env
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=motdepasse
DB_NAME=gestion_recipes
```
## Utilisation

Pour démarrer l'application, exécutez la commande suivante :
```
 npm start
```
 L'API sera accessible à http://localhost:3070.
## Endpoints de l'API

## GET /recipes

- Description : Récupère toutes les recettes.

- Réponse 

        [
                {
                    "id": 2,
                    "titre": "Crêpes classiques",
                    "type": "Dessert",
                    "ingredient": "250g de farine, 3 ?ufs",
                    "cartegory_id":"2"
                },
                {
                    "id": 3,
                    "titre": "Soupe de légumes",
                    "type": "Entrée",
                    "ingredient": "3 carottes, 2 pommes de terre",
                    "cartegory_id":"3"
                }
            ]

## POST /recipes
- Description : Crée une nouvelle recette.

- Corps de la requête :
```
{

"titre": "Salades Césars",
"type": "Entrée",
"ingredient": "Laitue, Poulet, Parmesan, Croutons",
"cartegory_id":"4"

    }
 ```
- Reponse:
```
{
  "message": "Recette ajouter avec succès"
}
```

## PUT /recipes/id

- Description : Met à jour une recette existante.

- Corps de la requête :

          {
          "titre": "Salade Césars",
          "type": "Entrée",
          "ingredient": "Laitue, Poulet, Parmesan, Croutons",
          "cartegory_id":"1"
          }

- Réponse :
```

{
  "message": "Recette mise à jour avec succès"
}
```
## DELETE /recipes/id

- Description : Supprime une recette par ID.
- Réponse :
```
{
  "message": "Recette supprimée avec succès"
}
```
## Tests unitaires
Des tests unitaires sont fournis pour vérifier le bon fonctionnement des fonctionnalités CRUD.
- **Framework utilisé** : Jasmine
- **Exécution des tests :**
```
npm test
```
Reponse:

![](/src/assets/images/img%20test.JPG)


## Analyse et formatage de code
L'analyse statique du code s'effectue à l'aide d'ESLint, tandis que le formatage est assuré par Prettier. Ces outils sont configurés pour être intégrés dans votre pipeline de développement afin de garantir un code propre et homogène

## Exécuter l'analyse du code :
```
npm run lint
```
## Exécuter le formatage automatique :
```
npm run format
```
## Containerisation avec Docker
**Lancer les conteneurs Docker :**
```
docker-compose up -d
```
## Auteur

[Hama Houllah Mangassouba](https://github.com/Mangassouba)

Contributeur

[N'Diaye Ousmane Camara](https://github.com/NdiayeOusmanaCamara)
