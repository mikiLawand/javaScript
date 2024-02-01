function tabuada() {
    var num = document.getElementById('txtnum')
    //pegando a area de tabuada
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número válido!')
    } else {
        var n = Number(num.value)
        //converte para numero

        //criando a tabuada 
        var c = 1
        //limpando o select
        tab.innerHTML = ''
        while (c <= 10) {
            //criando elementos dentro do select 
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}