document.getElementById("form").onsubmit = valida;

function valida() {
    var form = document.forms["form"];
    var tamanho = form.length;

    var mensagens = [];
    for (var i = 0; i < tamanho; i++) {
        var elemento = form[i];
        if (elemento.tagName == "INPUT" || elemento.tagName == "SELECT" || elemento.tagName == "TEXTAREA") {
            switch (elemento.getAttribute("name")) {
                case 'texto':
                    var elementoComErro = [];
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Texto é obrigatório.");
                        elementoComErro.push(true);
                    }

                    if (elementoComErro.length == 0) 
                        removeErro(elemento);    

                    break;
                case 'numero':
                    var elementoComErro = [];
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Número é obrigatório.");
                        elementoComErro.push(true);
                    }

                    if (!numeroEntre(elemento, 10, 20)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Número deve estar entre 10 e 20");
                        elementoComErro.push(true);
                    };

                    if (elementoComErro.length == 0) 
                        removeErro(elemento);    

                    break;
                case 'algumaCoisa':
                    var elementoComErro = [];
                	if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Alguma coisa é obrigatório.");
                        elementoComErro.push(true);
                    }

                    if (quantidadeDeCaracteresEntre(elemento, 0, 500)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Alguma coisa deve ser menor que 500 caracteres.");
                        elementoComErro.push(true);
                    }

                    if (elementoComErro.length == 0) 
                        removeErro(elemento);    

                    break;
                case 'selectOption':
                    var elementoComErro = [];
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo SelectOption é obrigatório.");
                        elementoComErro.push(true);
                    }

                    if (elementoComErro.length == 0) 
                        removeErro(elemento);    

                    break;
                case 'dtcriacao':
                    var elementoComErro = [];
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Data de criação é obrigatório.");
                        elementoComErro.push(true);
                    }

                    if (elementoComErro.length == 0) 
                        removeErro(elemento);    

                    break;
                case 'ativo':
                    var elementoComErro = [];
                    if (!checkado(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Ativo precisa estar marcado.");
                        elementoComErro.push(true);
                    };

                    if (elementoComErro.length == 0)
                        removeErro(elemento);

                    break;
                case 'radioList':
                    var elementoComErro = [];
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo RadioList é obrigatório.");
                        elementoComErro.push(true);
                    }

                    if (elementoComErro.length == 0) 
                        removeErro(elemento);

                    break;
                case 'cor':
                    var elementoComErro = [];
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Cor é obrigatório.");
                        elementoComErro.push(true);
                    }

                    if (elementoComErro.length == 0) 
                        removeErro(elemento);

                    break;
            }
        }
    }

    populaListaDeErros(mensagens);

    if(mensagens.length > 0){
        return false;
    }

    return true;
}