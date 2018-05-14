export class Actor {       
    constructor(name) {
        this.name = name
    }
    
    hello() {
        return helloThere(this)
    }
    
    get yodaName() {
        return this.name.split('').reverse().join('')
    }
    
    set yodaName(v) {
        this.name = v.split('').reverse().join('')
    }
}

export let oz = new Actor('Frank Oz')

function helloThere(actor) {
    return `Hello actor ${actor.name}`
}
