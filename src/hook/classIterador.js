import react,{ Map } from 'react'

const LIMIT = Symbol();

export default class classIterador extends Map {
    constructor (iterador, limit){
        if(typeof iterador === 'number'){
            limit = iterador;
            iterador = undefined;
        }
        super(iterador);
        this[ LIMIT ] = limit
    }

    set (key, value) {
        if(this.size >= this[LIMIT]) {
            throw new Error ('Limit exceeded')
        }
    return super.set (key, value)
    }
    
}
