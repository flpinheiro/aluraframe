"use strict";

class Negociation{
    
    constructor(data, qtd, val){
        this._date = new Date(data.getTime());
        this._qtd = qtd;
        this._valor = val;
        Object.freeze(this);
    }

    get quantidade (){
        return this._qtd;
    }

    get valor(){
        return this._valor;
    }

    get data(){
        return new Date(this._date.getTime());
    }

    get volume(){
        return Number(this._qtd) * Number(this._valor);
    }
}