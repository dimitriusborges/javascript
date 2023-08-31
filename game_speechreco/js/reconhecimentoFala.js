window.SpeechRegonition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRegonition();
const elementoChute = document.getElementById('chute');

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML =
        `
        <div>Você disse </div>
        <span class="box">${chute}</span>
        `
}

function onSpeak(event){
    const chute = event.results[0][0].transcript;

    exibeChuteNaTela(chute);
    verificaValor(chute);

}