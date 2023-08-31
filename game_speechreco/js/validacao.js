function validaNumeroIntervalo(num) {
    return num >= menorValor && num <= maiorValor;
}

function verificaValor(chute) {
    const num = +chute

    if(isNaN(num)){
        elementoChute.innerHTML += '<div>Valor inválido: Não é um número"</div>';
    }

    else if(!validaNumeroIntervalo(num)){
        elementoChute.innerHTML +=
            `
                <div> Valor fora do intervalo. Deve estar entre ${menorValor} e ${maiorValor} </div>
            `
    }
    else if(num < numeroSecreto){
        elementoChute.innerHTML +=
            `
                <div>O número secreto é maior <i class="fa-solid fa-up-long"></i>
            `
    }
    else if(num > numeroSecreto){
        elementoChute.innerHTML +=
            `
                <div>O número secreto é menor <i class="fa-solid fa-down-long"></i>
            `
    }

    else if (num === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
}

document.body.addEventListener('click', evt => {
    if(evt.target.id === 'jogar-novamente'){
        window.location.reload()
    }
})