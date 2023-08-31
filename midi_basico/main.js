function playSom (idElementoAudio) {
    const elAudio =  document.querySelector(idElementoAudio);
    if(elAudio === null){
        console.log("Execução do áudio: elemento não encontrado")
    }
    else if (elAudio.tagName.toLowerCase() !== 'audio'){
        console.log("Execução do áudio: elemento não é compatível")
    }
    else {
        elAudio.play();
    }

}

//busca tudo que aplica a classe .tecla
const listaTeclas = document.querySelectorAll('.tecla');

listaTeclas.forEach(tecla => {
    const nomeTecla = tecla.classList[1]

    const idAudio = `#som_${nomeTecla}`

    tecla.onclick = function () {
        playSom(idAudio)
    }

    //every anon function receives, optionally, an event as its first arg
    tecla.onkeydown = function (event) {

        const keyPressed = event.code

        //== compare values, === compares both value and type
        if (keyPressed === 'Enter' || keyPressed === 'Space'){
            tecla.classList.add('ativa')
        }
    }

    //arrow function === anon function
    tecla.onkeyup = () => {
        tecla.classList.remove('ativa')
    }

})
