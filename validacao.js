function verificaSeValorValido(chute){
    const numero = +chute
    console.log("validação", numero)
    
    if(chuteInvalido(numero)){
        console.log("Inválido")
    }
    if (numeroMaiorOuMenor(numero)){
        console.log(`Valor inválido: O número secreto precisa estar entre ${menorValor} ou ${maiorValor}`)
    }
    if (numero === secretNumber()){
        elementoChute.innerHTML = `<div> Você acertou !! </div>`
    }
    else if (numero > secretNumber ){
        elementoChute.innerHTML = `<div> Número secreto menor !! </div>`
    }
    else {
        elementoChute.innerHTML = `<div> Número secreto maior !! </div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor (numero){
    return numero > maiorValor || numero < menorValor
}