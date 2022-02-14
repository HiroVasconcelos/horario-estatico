function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data1 = new Date()
    var hora = data1.getHours()
    var data2 = new Date()
    var minuto = data2.getMinutes()
    parseFloat(hora)
    parseFloat(minuto)
    msg.innerHTML = `${hora}h ${minuto}min`
    if (hora >= 6 && hora < 12) {
        //dia
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#b18959'
    }
    else if (hora >= 12 && hora < 19) {
        //tarde
        imagem.src = 'fototarde.png'
        document.body.style.background = '#72467b'
    }
    else {
        //noite
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#292c5c'
    }
}
