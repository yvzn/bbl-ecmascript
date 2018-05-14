import { Actor } from './actor.js'

export class Film {
    constructor(name) {
        this.name = name
        this.actors = []
    }
    
    addActorByName(name) {
        this.addActor(new Actor(name))
    }
    
    addActor(actor) {
        this.actors.push(actor)
    }
    
    hello() {
        return helloThere(this)
    }
}

function helloThere(film) {
    return `Hello movie ${film.name}`
}