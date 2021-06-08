function carregar(){
    var mensagem = window.document.getElementById('mensagem-hora')
    var imagem = window.document.getElementById('imagem-hora')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}:${minutos} no horário local`

    if (hora >= 0 && hora < 12){
        imagem.src = 'imagens/dia.png'
        document.body.style.background = '#cead80'
    }
    else if (hora >= 12 && hora < 18){
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#b37f6b'
    }
    else {
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#156265'
    }
}