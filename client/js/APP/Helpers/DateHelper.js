class DateHelper{
    constructor (){
        throw new Error("static Class - DateHelper não pode ser instanciado");
    }
    static textoToData(texto) {
        if(/\d{4}-\d{2}-\d{2}/.test(texto)){
            return new Date(...
                texto
                .split("-")
                .map((item, index) => Number(item) - index % 2)
                );
        }
        else {
            throw new Error('Deve estar no formato yyyy-mm-dd');
        }
    }

    static dataToTexto(data){
        return `${data.getDate()}/${data.getMonth() +1}/${data.getFullYear()}`;
    }
}