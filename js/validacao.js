const qtdParentsAteAhLabel = 2;
const qtdParentsAteOhNomeDoCampo = 2;
const classeCssRefetenteAoErro = "form-group has-error"

function wrapPadrao(funcaoDeValidacao, elemento, arrayDasMensagens){

	var event; // The custom event that will be created

	if (document.createEvent) {
		event = document.createEvent("HTMLEvents");
		event.initEvent(funcaoDeValidacao, true, true);
	} else {
		event = document.createEventObject();
		event.eventType = funcaoDeValidacao;
	}

	event.eventName = funcaoDeValidacao;

	var retornoDaFuncaoDeValidacao;
	if (document.createEvent) {
		 element.dispatchEvent(event);
	} else {
		element.fireEvent("on" + event.eventType, event);
	}

    if (funcaoDeValidacao(elemento)) {
        addErroAoElemento(elemento, qtdParentsAteAhLabel, classeCssRefetenteAoErro);
        //ArrayValidacaoDoFormulario.push(false);
        arrayDasMensagens.push("O campo " + obtemNomeDoCampo(elemento) + "é obrigatório.");
    } else {
        removeErro(elemento);
    }

    return arrayDasMensagens;
}

function obtemNomeDoCampo(elemento){

	var elementoNomeDoCampo = elemento;
	for (var i = 0; i < qtdParentsAteOhNomeDoCampo; i++) {
		elementoNomeDoCampo = elementoNomeDoCampo.parentElement || elementoNomeDoCampo.parentNode;
	};

	return elementoNomeDoCampo.innerHTML;
}

function addErroAoElemento(elemento, qtdParentsAteAhLabel, classeCss) {

	var pai = elemento;
	for (var i = 0; i < qtdParentsAteAhLabel; i++) {
		pai = pai.parentElement || pai.parentNode;
	};

    pai.setAttribute("class", "form-group has-error");
};

function removeErro(elemento, qtdParentsAteAhLabel, classeCss) {

	var pai = elemento;
	for (var i = 0; i < qtdParentsAteAhLabel; i++) {
		pai = pai.parentElement || pai.parentNode;
	};

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
	}s
};