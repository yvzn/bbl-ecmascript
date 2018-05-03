# Démarrage
* Ardoise `Shift + F4`
* `Ctrl+A, Suppr`
* Afficher `Ctrl+L`
* Toujours utiliser un bloc
```JavaScript
{
    ...
}
```
* Recharger via le menu

# ? ECMAScript 
* JavaScript = TM Oracle
    * [Article TheRegister](https://www.theregister.co.uk/2018/04/18/oracle_ios_app_takedown_javascript/)
    * [Article Dev.com](https://www.developpez.com/actu/198598/Oracle-peut-il-s-opposer-a-l-utilisation-du-terme-JavaScript-par-des-tiers-Le-createur-du-langage-s-exprime-sur-la-question/)
* ECMAScript = Standard (ECMA Intl.)
    * LiveScript => JS / ES5 => ES2015+
    
# `let` / `const`
* Exemple `var` + accès hors bloc / hors fonction
* Même exemple avec `let`
* Motivation (variable globale)
* block-scoped function

# Arrow function
* Exemple de `map` avec `function (x) { }` 
* Même exemple avec  `() =>`
* filter, forEach
* 🎁 trailing commas

# Lexical this
* C'est quoi `this` ?
* Perte du this
```JavaScript
{
    function Test() {
        this.valeurs = [2015, 2016, 2017]
        this.copies = []
        
        this.creerCopie = function () {
            this.valeurs.forEach(function(e) {
                this.copies.push(e)
            })
            return this
        }
    }
    new Test().creerCopie().copies
}
```

* Remplacer par `(e) => this.copies.push(e)`
* 🎁 ASI
