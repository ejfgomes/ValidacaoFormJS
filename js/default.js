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
                    var elementoComErro = false;
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Texto é obrigatório.");
                        elementoComErro = true;
                    }

                    if (!elementoComErro) 
                        removeErro(elemento);    

                    break;
                case 'numero':
                    var elementoComErro = false;
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Número é obrigatório.");
                        elementoComErro = true;
                    }

                    if (!numeroEntre(elemento, 10, 20)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Número deve estar entre 10 e 20");
                        elementoComErro = true;
                    };

                    if (!elementoComErro) 
                        removeErro(elemento);    

                    break;
                case 'algumaCoisa':
                    var elementoComErro = false;
                	if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Alguma coisa é obrigatório.");
                        elementoComErro = true;
                    }

                    if (quantidadeDeCaracteresEntre(elemento, 0, 500)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Alguma coisa deve ser menor que 500 caracteres.");
                        elementoComErro = true;
                    }

                    if (!elementoComErro) 
                        removeErro(elemento);    

                    break;
                case 'selectOption':
                    var elementoComErro = false;
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo SelectOption é obrigatório.");
                        elementoComErro = true;
                    }

                    if (!elementoComErro) 
                        removeErro(elemento);    

                    break;
                case 'dtcriacao':
                    var elementoComErro = false;
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Data de criação é obrigatório.");
                        elementoComErro = true;
                    }

                    if (!elementoComErro) 
                        removeErro(elemento);    

                    break;
                case 'ativo':
                    var elementoComErro = false;
                    if (!checkado(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Ativo precisa estar marcado.");
                        elementoComErro = true;
                    };

                    if (!elementoComErro)
                        removeErro(elemento);

                    break;
                case 'radioList':
                    var elementoComErro = false;
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo RadioList é obrigatório.");
                        elementoComErro = true;
                    }

                    if (!elementoComErro) 
                        removeErro(elemento);

                    break;
                case 'cor':
                    var elementoComErro = false;
                    if (nulo(elemento)) {
                        addErro(elemento);
                        mensagens = addMensagemDeErro(mensagens, "O campo Cor é obrigatório.");
                        elementoComErro = true;
                    }

                    if (!elementoComErro) 
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