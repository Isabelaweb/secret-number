function verificaSeValorValido(chute){

    const numeros = [
        {name: 'zero zero', value: 0,},
        {name: 'zero', value: 0},
        {name:'00', value: 0,},
        {name:'um', value: 1,},
        {name:'dois', value: 2,},
        {name:'três', value: 3,},
        {name:'quatro', value: 4,},
        {name:'cinco', value: 5,},
        {name:'seis', value: 6,},
        {name:'sete', value: 7,},
        {name:'oito', value: 8,},
        {name:'nove', value: 9,},
        {name:'dez', value: 10}
    ]
   const porExtenso = numeros.find((numero) => numero.name === chute)
    
    if (porExtenso){
        chute = porExtenso.value 
    }

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