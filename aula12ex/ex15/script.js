function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#D68EA2'
        msg.innerHTML = 'Bom Dia 🎀'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#E2BA7D'
        msg.innerHTML = 'Boa Tarde 🕶️'
    } else if (hora >= 18 && hora < 24) {
        img.src = 'noite.png'
        document.body.style.background = '#C799CB'
        msg.innerHTML = 'Boa Noite ✨'
    } else {
        img.src = 'madrugada.png'
        document.body.style.background = '#95ABE1'
        msg.innerHTML = 'Boa Madrugada 💤'
    }
}
