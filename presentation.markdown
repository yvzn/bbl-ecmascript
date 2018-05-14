# De JavaScript à ES2018

---

# Antisèches:
* Ardoise `Shift + F4`
* Afficher `Ctrl+L`
* Utiliser un bloc
```javascript
{
    // code
}
```
note:
* _Recharger_ via le menu

---

# ECMAScript ?
* JavaScript = TM Oracle
    * [Article TheRegister](https://www.theregister.co.uk/2018/04/18/oracle_ios_app_takedown_javascript/)
    * [Article Dev.com](https://www.developpez.com/actu/198598/Oracle-peut-il-s-opposer-a-l-utilisation-du-terme-JavaScript-par-des-tiers-Le-createur-du-langage-s-exprime-sur-la-question/)
* ECMAScript = Standard (ECMA Intl.)
    * LiveScript → JS / ES5 → ES2015+

---

# `let` / `const`
* Créer une `var` dans un bloc et accès hors du bloc / fonction
* Même comportement avec `let`
* Motivation (variable globale)
* block-scoped function

---

# Arrow function
* Exemple de `map` avec `function (x) { }` (Acteurs)
* Même exemple avec  `() =>`
* filter, forEach
* 🎁 trailing commas

---

# Lexical this
* `this` ? Perte du this ?
* `let obj = {}` avec valeurs, copies, initCopie avec forEach(function())
* Ancienne methode avec self
* Remplacer par `(e) => this.copies.push(e)`
* 🎁 ASI

note:
```javascript
{
    let obj = {
        acteurs: ['Oscar Isaac', 'Mark Hamill', 'Daisy Riley'],
        copies: [],

        initCopies: function () {
            this.valeurs.forEach(function(e) {
                this.copies.unshift(e)
            })
        }
    }
    obj.initCopies()
    obj.copies
}
```

---

# Classes
* clarifier la notion de classe
* toujours basé sur `__proto__`
* pas de modif structurelle := sucre syntaxique
* `let obj = {}` avec nom, methode hello (syntaxe simplifiee)
* ⌛ property shorthand `{x, hello}`
* conversion `class Actor`, `constructor`
* héritage
* properties
```javascript
    get yodaName();
    set yodaName(v); // ⌛
```
* ⌛ object literals `[ "baz" + quux() ]: 42`
* 🎁 String interpolation

note:
```javascript
{
    class Actor {
        constructor(name) {
            this.name = name
        }

        hello() {
            return `Hello ${this.name}`
        }

        get yodaName() {
            return this.name.split('').reverse().join('')
        }

        set yodaName(v) {
            this.name = v.split('').reverse().join('')
        }
    }
    new Actor('Frank Oz').yodaName
}
```

---

# API Promise
* Formalisation des promesses (`$q.defer()`)
* Objectif: prog asynchrone (vs. monothread)
* Créer un service avec methode getActors
* Utiliser `setTimeout` + return
* Mise en place de la promesse (juste avec resolve)
* Utilisation, reject
* ⌛ `Promise.all`

note:
```javascript
{
    let service = {
        getActors() {
            return new Promise((resolve, _) => {
                setTimeout(() => resolve(['Nathalie Portman', 'Carrie Fisher', 'Peter Mayhew']), 5000)
            })
        }
    }

    list = []
    service.getActors().then(data => list = data, err => list = [':-('])
    list
}
```
---

# API fetch
* Simplifier les appels réseaux asyncrones
* Renvoie une promesse
* Exemple avec `{method: 'POST'}`

note:
```javascript
{
  films = []
  fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => films = data.results.map(f => f.title))
  films
}
```

---

# `async`/`await` [🚀 ES2017]
* Simplifie le chaînage de Promise

---

# Modules

* _n_ fichiers de script = _n_ balises `<script>`
* Risque de collision de noms
* Utilisation d'un bundler (webpack...)
* Modules ES, `import`
    * Supporté par les navigateurs (`./`) quelques restrictions
    * Mode strict par défaut

* Reprendre la classe `Actor` + hello dans une fonction + export
* Créer une classe `Film` avec une liste d'acteurs + hello
* Créer un service Swapi
* Imports entre scripts
    * named import {}, export default
* Import dans le navigateur
    * `<script type=module>`

---

# Affectation par décompostion

* Cas d'un tableau `let [a, b, c] = array`
    * Swap deux valeurs `[a, b] = [b, a]`
    * Ignorer `let [a, , c] = array`
    * Par défaut `let [a, b, c = 3] = array`
    * Fail-soft `let [a, b, c = 3] = [0]`
* Cas d'un object `let { name, age } = getActor()`
    * `let { n:name, a:age } = getActor()`
* Cas d'un paramètre de fonction `function ([a, b])`

note:
```javascript
{
  function test([first, second]) {
    return first * 10 + second
  }

  test([1, 2])
}
```

---

# Fonctions++

* 🎁 Paramètres par défaut de fonction
* [🚀 ES2017] trailing comma in function args

---

# Opérateurs Rest / Spread

* Rest `...`
    * exemple réalisateur, producteur, acteurs
* Spread `...`
    * Exemple inverse
    * Concaténation de listes `[a, b, ...list]`
    * Clonage `[...list]`
    * Marche aussi pour les string, Map, Set, les objets `{...obj}` [🚀 ES2018]
* Exemple somme des carrés d'une liste
    * [🚀 ES2016] opérateur **

note:
```javascript    
{
  function générique(réalisateur, producteur, ...acteurs) {
    return `
      Réalisé par: ${réalisateur}
      Produit par: ${producteur}
      Avec: ` + acteurs.join(',')
  }
  
  générique('Irvin Kershner', 'George Lucas', 'Mark Hamill', 'Carrie Fisher', 'Harrison Ford')

  let whoSwho = ['Irvin Kershner', 'George Lucas', 'Mark Hamill', 'Carrie Fisher', 'Harrison Ford']
  générique(...whoSwho)
}

{
  function somme(a, ...tail) {
    if (!tail.length) return 0
    return a ** 2 + somme(...tail)
  }
  
  somme(1, 2, 3, 4)
}
```