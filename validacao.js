function verificaSeValorValido(chute){
    const numero = +chute
    console.log("chute", numero)
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div> Valor inválido</div>`
        return
    }
    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div> Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
    }
    if (numero === secretNumber){
        document.body.innerHTML = `<h2> Você acertou !!</h2>
        <h3> O número secreto é ${secretNumber}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
    else if (numero > secretNumber ){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
    else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}
function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor (numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})