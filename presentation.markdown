# Démarrage
* Ardoise `Shift + F4`
* Afficher `Ctrl+L`
* Utiliser un bloc
```javascript
{
    // code
}
```
note:
* Recharger via le menu

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
* Comportement avec `let`
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
* `this` ?
* Perte du this
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
* sucre syntaxique / pas de modif structurelle
* `let obj = {}` avec nom, methode hello (syntaxe simplifiee)
* ⌛ property shorthand `{x, hello}`
* conversion `class Actor`, constructor
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
* Formalisation des promesses ($q.defer()) 
* But: prog asynchrone (vs. monothread)
* Créer un service avec methode getActors
* Utiliser setTimeout + return
* Mise en place de la promesse (juste avec resolve)
* Utilisation, reject
* ⌛ Promise.all

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
* Exemple fetch GET

{
  films = []
  fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => films = data.results.map(f => f.title))
  films
}

---

# `async`/`await` [🚀 ES2017]
* Simplifie le chaînage de Promise

---
