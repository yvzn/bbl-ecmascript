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
* Exemple de `map` avec `function (x) { }` 
* Même exemple avec  `() =>`
* filter, forEach
* 🎁 trailing commas

---

# Lexical this
* C'est quoi `this` ?
* Perte du this
* `let obj = {}` avec valeurs, copies, initCopie avec forEach(function())
* Ancienne methode avec self
* Remplacer par `(e) => this.copies.push(e)`
* 🎁 ASI

note:
```javascript
{
    let obj = {
        valeurs: ['Chewie', 'Boba', 'Mace'],
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
* Sucre syntaxique / fondamentalement → clarifier
* Reprendre obj précédent + methode (syntaxe simplifiee)
* `let obj = {}` avec nom, methode hello (syntaxe simplifiee)
* conversion `class Jedi`, constructor
* héritage
* properties
```javascript
    {
        get yodaName();
        set yodaName(v); // ⌛
    }
```
* ⌛ property shorthand `{x, y}`
* ⌛ object literals `[ "baz" + quux() ]: 42`
* 🎁 String interpolation 

note:
```javascript
{
    class Jedi {       
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
    new Jedi('Obi-Wan').yodaName
}
```

---

# API Promise
* Formalisation des promesses ($q.defer()) 
* Appels asynchrones (vs. monothread)
* Créer un service avec methode getPeople
* Utiliser setTimeout + return
* Mise en place de la promesse (juste avec resolve)
* Utilisation, reject
* ⌛ Promise.all

note:
```javascript
{
    let service = {
        getPeople() {
            return new Promise((resolve, _) => {
                setTimeout(() => resolve(['Anakin', 'Leia', 'Padme']), 5000)
            })
        }
    }
    
    list = []
    service.getPeople().then(data => list = data, err => list = [':-('])
    list
}
```

