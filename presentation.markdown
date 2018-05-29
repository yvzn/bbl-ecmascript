# JS ➡ ES.Next

[[github]](https://github.com/yvzn/bbl-ecmascript)

note:
* Ardoise `Shift + F4`
* Afficher `Ctrl+L`
* Utiliser un bloc
```javascript
{
    // code
}
```
* Console `Ctrl+Shift+K`
* _Recharger_ via le menu

---

## Références

1. [ES6 features.org](http://es6-features.org/)
1. [lukehoban](https://github.com/lukehoban/es6features)
1. [ES2016 ➡ ES2018](https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e)

---

## ECMAScript

* Standard defini par ECMA Intl.
    * LiveScript (Netscape)
    * JavaScript (&trade; Oracle)
    * ES

note:
* C'est quoi ce nom ?

---

## ECMAScript ?

* JS1.5 ➡ ES5
* ES6 ➡ ES2015
* ES2015 ➡ ES2017
* ES.Next

note:
* C'est quoi ces versions ?
    * Normalisation JS1.5 ➡ ES5
    * Passage à un versionning par année
    * ES.Next = prochaine version
---

<!-- .slide: data-background-image="resource/cat.jpg" class="dark-bg" -->

# Visibilité

---

## `let` / `const`

* Portée de `var` : `function` 😞
* 👍 Portée de bloc avec `let`
* 👍 Constantes

---

👨🏽‍💻

note:
* 💻 `{var }` visible hors du bloc
    * Comportement avec `function`
    * Comportement de `let`
* Variable globale
* ⌛ function désormais block-scoped
    * 💻 `function test()` imbriquées

---

## Classes

* Clarifier la notion existante
    * basé sur `__proto__`
    * pas de modif structurelle

---

👨🏽‍💻

note:
* 💻 `let obj = {}` avec nom, `hello()`
    * syntaxe simplifiee de `function`
    * 🎁 String interpolation
    * ⌛ property shorthand si var existe déjà `{x, hello}`
* conversion `class Actor`, `constructor`

```javascript
{
    class Actor {
        constructor(name) {
            this.name = name
        }

        hello() {
            return `Hello ${this.name}`
        }
    }
    new Actor('Frank Oz').hello()
}
```
---

## Classes

* Propriétés
* Héritage

note:
* Héritage simple uniqt. (une seule superclasse)
---

👨🏽‍💻

note:
* `get yodaName();`
* `set yodaName(v);`
* `extends`, `super`
* ⌛ object literals `[ "name" + foo() ]: 42`

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

🧘🏽

---

## Modules

* _n_ fichiers de script = _n_ balises `<script>` 😞
* Visibilité
* Collision de noms (entre librairies)
* Solutions 😞 :
    * Utilisation d'un bundler (webpack...) 
    * `(function(){})()`
    
note:
* Organiser une grande codebase

---

## Modules

* 👍 Modules ES
    * `import`, `export`
* Bien supporté
* Mode strict par défaut

note:
* Quelques restrictions (`./`) 

---

👨🏽‍💻

note:
* 💻 classe `Actor` + hello dans une fonction + export
* une classe `Film` avec une liste d'acteurs + hello
* Import entre scripts
    * named import {}, export default
* Import dans le navigateur
    * `<script type=module>`

---

<!-- .slide: data-background-image="resource/gear.jpg" class="dark-bg" -->

# Prog. fonctionnelle

---

## Arrow functions

* Simplifier les déclarations à la volée
* `function(x) {}` ➡ `(x) => ...` 👍

---

👨🏽‍💻

note:
* Comportement quasi-identique
* 💻 `Array.map` avec `function (x) { }` (Acteurs)
    * Version avec  `() =>`
    * filter, forEach
* 🎁 trailing commas dans []

---

## Lexical `this`

* Eviter la perte du contexte 👍
  
note:
* Comportement quasi-identique
* `this` = contexte exec. function 
  
---

👨🏽‍💻

note:
* 💻 `let obj = {}` avec valeurs, copies, initCopie avec forEach(function())
    * Contournement avec `self` (`vm`, `$ctrl`)
    * Remplacer par `(e) => this.copies.unshift(e)`
* 🎁 ASI
* 🎁 trailing commas dans {}

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

## Décompostion

---

👨🏽‍💻

note:
* 💻 tableau `let [a, b, c] = array`
    * Swap deux valeurs `[a, b] = [b, a]`
    * Ignorer `let [a, , c] = array`
    * Par défaut `let [a, b, c = 3] = array`
    * Fail-soft `let [a, b, c = 3] = [0]`
* 💻 object `let { name, age } = getActor()`
    * `let { n:name, a:age } = getActor()`
* 💻 paramètre de fonction `function ([a, b])`

```javascript
{
  function test([first, second]) {
    return first * 10 + second
  }

  test([1, 2])
}
```

---

🧘🏽

---

## Fonctions++

* 🎁 Paramètres par défaut 
* [🚀 ES2017] trailing comma in function args

---

👨🏽‍💻

---

## Rest / Spread

* Opérateur `...`
* Autres paramètres (rest)
* Itération (spread)
  
---

👨🏽‍💻

note:
* Rest `...`
    * 💻 `generique()` réalisateur, producteur, ...acteurs
* Spread `...`
    * 💻 passer une liste à `generique()`
    * 🎁 Utiliser un Set
* Concaténation de listes `[a, b, ...list]`
    * Clonage `[...list]`
    * Marche aussi pour les string, Map, Set, les objets `{...obj}` [🚀 ES2018]
* 💻 somme des carrés d'une liste
    * [🚀 ES2016] opérateur * *

```javascript    
{
  function générique(réalisateur, producteur, ...acteurs) {
    return `
      Réalisé par: ${réalisateur}
      Produit par: ${producteur}
      Avec: ` + acteurs.join(',')
  }
  
  générique('Irvin Kershner', 'George Lucas', 'Mark Hamill', 'Carrie Fisher', 'Harrison Ford')

  let whoSwho = new Set(['Irvin Kershner', 'George Lucas', 'Mark Hamill', 'Carrie Fisher', 'Harrison Ford', 'George Lucas'])
  générique(...whoSwho)
}

{
  function somme(a, ...tail) {
    let f = x => x ** 2
    if (!a) return 0
    return f(a) + somme(...tail)
  }
  
  somme(1, 2, 3, 4)
}
```

---

<!-- .slide: data-background-image="resource/hallway.jpg" class="dark-bg" -->

# API ++

---

## Promise

* Formalisation des promesses (lib. `$q`)
* Prog. asynchrone (vs. monothread)

note:
* Navigateur monothread (performances / sécurité)
* Asynchrone = ne pas freezer l'UI
---

👨🏽‍💻

note:
* 💻 service avec methode `getActors`
    * Utiliser `setTimeout` + return
    * Mise en place de la promesse (juste avec resolve)
    * Utilisation, reject
    * ⌛ `Promise.all`

```javascript
{
    let service = {
        getActors() {
            return new Promise((resolve, _) => {
                setTimeout(() => resolve(['Nathalie Portman', 'Carrie Fisher', 'Peter Mayhew']), 5000)
            })
        }
    }

    service.getActors().then(data => console.log(data), err => console.error(err))
}
```

---

🧘🏽

---

## fetch

* Simplifier les requêtes distantes
* Asynchrone
    * Renvoie une promesse
* Bye XHR 👋

---

👨🏽‍💻
    
note:
* 💻 avec [Swapi](https://swapi.co/api/films/)
    * avec `{method: 'POST'}`

```javascript
{
  fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => console.log(data.results.map(f => f.title)))
}
```

---

## `async`/`await`

* [🚀 ES2017]
* Simplifie le chaînage de promesses
* Mais pas que

---

👨🏽‍💻

note:
* `then()` successifs ou imbriqués
* 💻 avec fetch + response.json

```javascript
{
  async function getFilms() {
    let response = await fetch('https://swapi.co/api/films/')
    let data = await response.json()
    return data.results.map(f => f.title)
  }
  
  getFilms().then(data => console.log(data))
}
```

---

<!-- .slide: data-background-image="resource/etc.jpg" class="dark-bg" -->

---

## ⌛ Et aussi...

* `Object.assign()`
* String
    * {`repeat`, `startsWith`, ...}
* Unicode support
* Generator functions
    * `yield`

---

## Références

1. [CanIuse.com](https://www.caniuse.com)
1. [You Dont Know JS](https://github.com/getify/You-Dont-Know-JS)
---

<!-- .slide: data-background-image="resource/milky-way.jpg" class="yellow" -->

# ECMAScript

---

# 💬

---

## R.O.T.I.

<https://framaforms.org/roti-js-esnext-1526642510>

---

# ✔
