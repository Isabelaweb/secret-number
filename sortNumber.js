const menorValor = 1
const maiorValor = 20
const secretNumber = geraNumeroSecreto()

function geraNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Número secreto:", secretNumber)

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor

const elementoMaior = document.getElementById("maior-valor")
elementoMaior.innerHTML = maiorValor

