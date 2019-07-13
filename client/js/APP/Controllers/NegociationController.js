"use strict";
class NegociationController{

    static _contador;

    constructor (){
        let  $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._outPutContador = $("#contador");
        this._contador = 0;
        this._listaNegociations = new ListaNegociation();
        this._negociationView = new NegociationView($('#NegociationView'));
        this._negociationView.update(this._listaNegociations);
    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociations.add(this._criaNegociation());
        this._negociationView.update(this._listaNegociations);
        this._limpaFormulario();
        this._atualizaContador();
    }

    _limpaFormulario(){
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }

    _atualizaContador(){
        this._contador++;
        this._outPutContador.innerHTML = this._contador;
    }

    _criaNegociation(){
        return new Negociation(
            DateHelper.textoToData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }
}