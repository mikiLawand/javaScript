function calcularBaskara() {

    //solicta as variaveis para o calculo
    let a = window.prompt('Qual é o valor de a?')
    let b = window.prompt('Qual é o valor de b?')
    let c = window.prompt('Qual é o valor de c?')

    document.getElementById('saida').innerHTML = `<h2>Resolvendo Bhaskara...</h2><br>`
    document.getElementById('saida').innerHTML += `A equação atual é ${a}x² + ${b}x + ${c} = 0<br>`
    document.getElementById('saida').innerHTML += `O cálculo realizado será Δ = ${b}² - 4 * ${a} * ${c}.<br>`

    let resultado = b ** 2 - 4 * a * c 
    document.getElementById('saida').innerHTML += `O resultado é <mark style="background-color: #DF57BC;">Δ = ${resultado}</mark>.<br>`


}