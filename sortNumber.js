const menorValor = 1
const maiorValor = 10

const secretNumber = geraNumeroSecreto


function geraNumeroSecreto () {
    return parseInt(Math.random() * (menorValor - maiorValor - 1 ) + maiorValor + 1);

}
const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor

const elementoMaior = document.getElementById("maior-valor")
elementoMaior.innerHTML = maiorValor