function verificar() {
    var nm1 = document.getElementById('nm1')
    var nm2 = document.getElementById('nm2')
    var nm3 = document.getElementById('nm3')
    var res = document.querySelector('div#res')

    if (nm3.value.length == 0 || nm1.value.length == 0 || nm2.value.length == 0) {
        window.alert('[ERRO] POR FAVOR, VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    }
    else {

        let i = Number(nm1.value)
        let f = Number(nm2.value)
        let r = Number(nm3.value)

        if (i < f) {
            for (let index = i; index <= f; index = index + r) {
                res.innerHTML += `\u{1F449} ${index} `
            }
        }
        else {
            r = r**2
            r = Math.sqrt(r)*-1
            for (let index = i; index >= f; index = index + r) {
                res.innerHTML += `\u{1F449} ${index} `

            }
        }


    }
}












