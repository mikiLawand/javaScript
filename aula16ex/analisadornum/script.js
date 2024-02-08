let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
//criando uma array
let valores = []

//verificando se o numero est´pa entre 1 e 100 como pedido
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//verificando se o numero esta no array
function inLista(n, l) {
    if(l.indexOf(Number(n) != -1)) {
        return true
    } else{
        return false 
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}