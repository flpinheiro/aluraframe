class ListaNegociation{

    constructor( armadilha){
        this._negociations = [];
        this._armadilha = armadilha;
    }

    add(negociation){
        this._negociations.push(negociation);
        this._armadilha(this);
    }

    get negociation(){
        return [].concat(this._negociations);
    }
    apaga(){
        this._negociations = [];
        this._armadilha(this);
    }
}