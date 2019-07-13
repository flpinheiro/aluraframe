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

        this._mensage = new Mensage();
        this._mensageView = new MensageView($('#mensagemView'));
        this._mensageView.update(this._mensage);

    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociations.add(this._criaNegociation());
        this._negociationView.update(this._listaNegociations);
        
        this._atualizaContador();
        this._mensage.text = 'Negociação adicionada com sucesso';
        this._mensageView.update(this._mensage);

        this._limpaFormulario();
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