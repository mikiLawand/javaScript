function contar() {

    //pegando os dados que o usuario forneceu no form
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfinal')
    var passo = document.getElementById('txtpasso')

    var saida = document.getElementById('saida')

    //verificando se algum dado não foi preenchido
    if (inicio.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0 ) {
        saida.innerHTML = 'Impossivel realizar a contagem.'
        alert('[Bandeira Vermelha] Dados incompletos!')
    } else {
        saida.innerHTML = 'A largada foi dada...<br>'

        //convertendo os textos do formulario para numeros
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0) {
            window.alert('Passo inválido.Considerando Passo 1.')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for( var c = i; c <= f; c += p) {
                saida.innerHTML += `${c} \u{1F3CE}`
            }
        } else {
            //contagem decrescente
            for (var c = i; c >= f; c -= p) {
                saida.innerHTML += `${c} \u{1F3CE}`
            }
        }
        saida.innerHTML += `\u{1F3C1}`
    }

}