function calculardiferenca() {
    let valant = Number.parseFloat(window.prompt('Qual o preço anterior do produto?'))
    let valatu = Number.parseFloat(window.prompt('Qual o preço atual do produto?'))

    document.getElementById('saida').innerHTML = '<h2>Analisando os valores informados...</h2><br>'

    document.getElementById('saida').innerHTML += `O produto custava R$${valant} e agora custa R$${valatu}.<br>`
    
    if ( valatu > valant) {
        let aumento = valatu - valant
        let pctau = (aumento / valant) * 100
        document.getElementById('saida').innerHTML += `O produto aumentou R$${aumento}.<br>O preço subiu em ${pctau}%.`
    } else {
        let diminuicao = valant - valatu
        let pctdim = (diminuicao / valant) * 100
        document.getElementById('saida').innerHTML += `O produto abaixou R$${diminuicao}.<br>O preço abaixou em ${pctdim}%.`
    }
}