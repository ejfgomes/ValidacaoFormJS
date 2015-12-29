function addErro(elemento) {
    var pai = elemento.parentElement.parentElement || elemento.parentNode.parentNode;

    pai.setAttribute("class", "form-group has-error");
};

function removeErro(elemento) {
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

	document.getElementById("listaErros").style.display = "block";

	for (var i = 0; i < mensagens.length; i++) {
		var li = document.createElement("li");
		var texto = document.createTextNode(mensagens[i]);
		li.appendChild(texto);
		lista.appendChild(li);
	};
};

function addMensagemDeErro(arrayDasMensagens, mensagem){
	if (!verificaSeExisteAhStringNoArray(arrayDasMensagens, mensagem))
		arrayDasMensagens.push(mensagem);

	return arrayDasMensagens;
}

function verificaSeExisteAhStringNoArray(array, string){
	for (var i = 0; i < array.length; i++) {
		if (array[i] == string)
			return true
	};

	return false;
}