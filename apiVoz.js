const elementoChute = document.querySelector("#chute")

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

var recognition = new SpeechRecognition()
recognition.lang = "pt-Br"

recognition.start()


recognition.addEventListener("result", onSpeak)
function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChutenaTela(chute)
    verificaSeValorValido(chute)
    
}
function exibeChutenaTela(chute){
    elementoChute.innerHTML = ` 
    <div>Você disse</div>
    <span class=”box”>${chute}</span>
    `
}
