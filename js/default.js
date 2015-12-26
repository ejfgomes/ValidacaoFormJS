
document.getElementById("form").onsubmit = valida;

function valida() {
    var form = document.forms["form"];
    var tamanho = form.length;

    var valido = [];
    var mensagens = [];
    for (var i = 0; i < tamanho; i++) {
        var elemento = form[i];
        if (elemento.tagName == "INPUT" || elemento.tagName == "SELECT" || elemento.tagName == "TEXTAREA") {
            switch (elemento.getAttribute("name")) {
                // case 'nome':
                //     if (Nulo(elemento)) {
                //         AddErro(elemento);
                //         valido.push(false);
                //         mensagens.push("O campo Nome é obrigatório.");
                //     } else {
                //         RemoveErro(elemento);
                //     }
                //     break;
                // case 'descricao':
                //     if (Nulo(elemento)) {
                //         AddErro(elemento);
                //         valido.push(false);
                //         mensagens.push("O campo Descrição é obrigatório.");
                //     } else {
                //         RemoveErro(elemento);
                //     }
                //     break;
                // case 'algumaCoisa':
                // 	if (Nulo(elemento)) {
                //         AddErro(elemento);
                //         valido.push(false);
                //         mensagens.push("O campo Alguma coisa é obrigatório.");
                //     } else {
                //         RemoveErro(elemento);
                //     }
                //     break;
                // case 'numero':
                //     if (Nulo(elemento)) {
                //         AddErro(elemento);
                //         valido.push(false);
                //         mensagens.push("O campo Número é obrigatório.");
                //     } else {
                //         RemoveErro(elemento);
                //     }
                //     break;
                case 'dtcriacao':
                    wrapPadrao("nulo", elemento, mensagens);
                    break;
            }
        }
    }

    populaListaDeErros(mensagens);

    for(val of valido) {
        if (val == false)
            return false;
    }

    return true;
}
