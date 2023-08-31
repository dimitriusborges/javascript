export default function cpfValido(campo){
    const cpf = campo.value.replace(/\.|-/g, "");

    if(validaNumRepetidos(cpf) || !validaPrimeiroDigito(cpf) || !validaSegundoDigito(cpf)){
        campo.setCustomValidity('Esse cpf não é válido');
    }

}

function validaNumRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    console.log(numerosRepetidos.includes(cpf))
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho ++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma*10) %11;

    if(soma === 10 || soma === 1){
        soma = 0;
    }

    console.log(soma)
    return soma !== cpf[9];
}

function validaSegundoDigito(cpf){

    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho ++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma*10) %11;

    if(soma === 10 || soma === 1){
        soma = 0;
    }

    console.log(soma)
    return soma !== cpf[10];
}