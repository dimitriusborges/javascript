const menorValor = 1
const elementoMenorValor = document.getElementById('menor-valor')
const maiorValor = 20
const elementoMaiorValor = document.getElementById('maior-valor')

const numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}



