(function() {
	document.getElementById("listaErros").style.display = "none";
})();


//Regras - [INICIO]
function Nulo(elemento) {
    if (elemento.value == '') {
        return true;
    }

    return false;
};

function QuantidadeDeCaracteresEntre (elemento, inicio, fim) {
	//Implemntar
}
//Regras - [INICIO]

function AddErro(elemento) {
    var paiDoPai = elemento.parentElement.parentElement || elemento.parentNode.parentNode;

    paiDoPai.setAttribute("class", "form-group has-error");
};

function RemoveErro(elemento) {
    var pai = elemento.parentElement.parentElement || elemento.parentNode.parentNode;

    pai.setAttribute("class", "form-group");
};

function populaListaDeErros(mensagens) {
	var lista = document.getElementById("erros");

	//Para limpar a lista - [INICIO]
	while (lista.firstChild) {
	    lista.removeChild(lista.firstChild);
	}
	//Para limpar a lista - [FIM]

	for(mensagem of mensagens) {
		document.getElementById("listaErros").style.display = "block";

		var li = document.createElement("li");
		var texto = document.createTextNode(mensagem);
		li.appendChild(texto);
		lista.appendChild(li);
	}
};