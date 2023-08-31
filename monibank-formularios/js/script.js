import cpfValido from "./validaCPF.js";
import maiorDeIdade from "./validaIdade.js";
const camposDoForm = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]")



function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if(campo.name === "cpf" && campo.value.length >= 11){
        cpfValido(campo);
    }

    if(campo.name === "aniversario" && campo.value !== ""){
        maiorDeIdade(campo);
    }

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
        }
    });

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();

    if(!validadorInput){
        mensagemErro.textContent = mensagem;
    }
    else{
        mensagemErro.textContent = "";
    }
}

console.log(formulario)
formulario.addEventListener("submit", (evt) => {
    console.log(evt)
    evt.preventDefault()
    const listaResposta = {
        "nome": evt.target.elements["nome"].value,
        "email": evt.target.elements["email"].value,
        "rg": evt.target.elements["rg"].value,
        "cpf": evt.target.elements["cpf"].value,
        "aniversario": evt.target.elements["aniversario"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaResposta));

    window.location.href = "../pages/abrir-conta-form-2.html"
});


camposDoForm.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    //campo.addEventListener("invalid", evento => evento.preventDefault());
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        //patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}