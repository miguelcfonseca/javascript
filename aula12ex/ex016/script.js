function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var género = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            género = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca.png')
            } else if (idade < 18) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            género = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if (idade < 18) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectámos ${género} com ${idade} anos.`
        res.appendChild(img)
    }
}