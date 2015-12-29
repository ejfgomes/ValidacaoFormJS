//Regras - [INICIO]
function nulo(elemento) {

    if (elemento.getAttribute("type") == "radio" || elemento.getAttribute("type") == "checkbox") {
        var arrayElementos = document.getElementsByClassName(elemento.getAttribute("type") + elemento.getAttribute("name"));
        var arrayVerificador = [];
        
        for (var i = 0; i < arrayElementos.length; i++) {
            if (arrayElementos[i].checked)
                arrayVerificador.push(true);
        };

        if (arrayVerificador.length == 0)
            return true;
    }else{
        if (elemento.value == '')
            return true;
    }

    return false;
};

function quantidadeDeCaracteresEntre (elemento, inicio, fim) {
	var valor = elemento.value;
    if (valor >= inicio && valor <= fim)
        return true;

    return false;
}

function numeroEntre(elemento, inicio, fim){
    var valor = elemento.value;
    if (valor >= inicio && valor <= fim)
        return true
     
    return false
}

function checkado(elemento){
    if (elemento.checked)
        return true;

    return false;
}
//Regras - [INICIO]