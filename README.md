# bbl-ecmascript
* 12@13 De JavaScript à ES2018
* Première présentation le 22 mai 2018

La présentation se trouve dans le fichier presentation.markdown

## Setup

L'affichage des slides utilise le framework de présentation
[RevealJS](https://revealjs.com/)
ajouté en tant que submodule git au projet.

Pour récupérer le code source

```bash
$ git clone https://github.com/yvzn/bbl-ecmascript.git
$ cd bbl-ecmascript
$ git submodule init
$ git submodule update
```

Pour lancer le serveur (par exemple avec NodeJS)

```bash
$ npx http-server -p 8080
```

Autre solution (avec Python)

```bash
$ python -m http.server 8080
```

Puis ouvrir <http://localhost:8080/?showNotes=separate-page> dans le navigateur

Ou pour la version imprimable <http://127.0.0.1:8080/?print-pdf&showNotes=separate-page>

