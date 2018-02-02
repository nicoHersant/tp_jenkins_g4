# API - procédure d'installation

Prérequis :
- NodeJS
- Npm

Installation :

```bash
git clone https://github.com/nicoHersant/tp_jenkins_g4/
cd tp_jenkins_g4
npm i
```
Mise en place de la base de données:
Importer le fichier ```dump.sql``` dans votre Système de Gestion de Base de Données MySQL

Démarrage :

```bash
npm start
```

Accès à l'API sur l'url : `http://localhost:3000`


# Urls de l'API

Ci dessous, les routes de l’application web :

| VERBES      | URL                     | ACTION                                                                |
|-------------|-------------------------|-----------------------------------------------------------------------|
| GET         |    /                    | Affiche l’interface de l’application web.                             |
| GET         |    /new                 | Permet l'enregistrement d'une livraison (paramètres obligatoires)     |

## Attention, les requêtes http d'enregistrement doivent être au format suivant :
```
http://localhost:3000/pi/v1/new?firstname=john&lastname=snow&package=2&createdAt=886375680000
```

Ci dessous, les url utilisées par notre API

| VERBES      | URL                     | ACTION                                                                |
|-------------|-------------------------|-----------------------------------------------------------------------|
| GET         |    /api/v1/name         | Renvoie l’ensemble des nom des livreurs.                              |
| GET         |    /api/v1/delivery     | Renvoie les livraisons filtrées par livreurs.                         |


# Déploiement

Pour protéger l'application des attaques cross-domain type CSRF (Cross-Site Request Forgery), il est nécessaire de renseigner
le paramètre ```Access-Control-Allow-Origin``` dans les headers de la requête HTTP (fichier ```app.js```). Pour des raisons de sécurité, évitez d'utiliser le wildcard ```*``` et renseignez le nom de domaine de votre site.
