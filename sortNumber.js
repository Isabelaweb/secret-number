const menorValor = 13
const maiorValor = 13

const secretNumber = geraNumeroSecreto


function geraNumeroSecreto () {
    parseInt(Math.random()*100)

}
const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor

const elementoMaior = document.getElementById("maior-valor")
elementoMaior.innerHTML = maiorValor