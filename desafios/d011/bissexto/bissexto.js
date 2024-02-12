function verificarAno() {

    let ano = Number.parseInt(window.prompt('Qual o ano que você quer verificar?'))

    document.getElementById('saida').innerHTML = `<h2>Analisando o ano de ${ano}...</h2><br>`

    /*
    para ser bissexto:
    -É divisível por 4 e divisível por 400.
    -não é divisível por 100.
     */
    if (ano % 4 == 0 && ano % 400 == 0 || ano % 100 != 0) {
        document.getElementById('saida').innerHTML += `O ano de ${ano} <mark style= "Background-color:#4C86A8">É BISSEXTO!</mark><br>`
    } else {
        document.getElementById('saida').innerHTML += `O ano de ${ano} <mark style= "background-color:#E0777D">NÃO É BISSEXTO</mark><br>`
    }


}