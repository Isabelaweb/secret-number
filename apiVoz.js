window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

var recognition = new SpeechRecognition()
recognition.lang = "pt-Br"

recognition.start()

console.log(recognition)

recognition.addEventListener("result", onSpeak)
function onSpeak(e) {
    console.log(e.results[0][0].transcript )
}