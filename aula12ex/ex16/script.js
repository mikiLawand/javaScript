function verificar() {
    //pegando a data atual do sistema
    var data = new Date()
    var ano = data.getFullYear()
    //pegando o ano que o usuario colocou no formulário
    var fano = document.getElementById('txtano').value
    var saida = document.getElementById('saida')
    //verificando se o ano está vazio ou se é maior que o ano atual 
    if (fano.length === 0 || parseInt(fano) > ano) {
    //aqui eu tive que converter o texto de fano para int,para só então fazer a comparação
        window.alert('Dados inválidos!Tente novamente.')
    } else {
        //window.alert('Tudo certo!')
        var fsex = document.getElementsByName('radsex')
        //calculando a idade
        var idade = ano - parseInt(fano)
        //saida.innerHTML = `Idade calculada: ${idade}`
        //verificando o genero do usuario
        var genero 
        //imagens dinamicamente
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 18) {
                //menina
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 18 && idade < 60) {
                //mulher
                img.setAttribute('src', 'mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'idosa.png')
            }
        } else if (fsex[1].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 18) {
                //menino
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 18 && idade < 60) {
                //homem
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        //centralizando com javaScript
        saida.style.textAlign = 'center'
        saida.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //fazendo a imagem aparecer 
        saida.appendChild(img)
    }
}