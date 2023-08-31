//https://viacep.com.br/


//fetch returns then in a success and catch in a error
// var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json')
//     .then(response => response.json())
//         .then(r => {
//             if(r.erro){
//                 throw Error('Esse cep não existe'); //but the format is correct
//             }
//             else{
//                 console.log(r);
//             }
//         })
//     .catch(erro => console.log(erro))//format incorrect
//     .finally(msg => console.log( 'Procesamento concluído.'));

//same as code above
//note, though, that are not directly equivalent: async await is sequential while
// .then are parallel, so, faster.
// Also, async await only works with one promise at a time
async function buscaAddr(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerText = "";
    try {
        var consultaCEP = await fetch( `https://viacep.com.br/ws/${cep}/json`);
        var resultJson = await consultaCEP.json();

        if(resultJson.erro){
            throw Error('Esse cep não existe'); //but the format is correct
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');


        cidade.value = resultJson.localidade;
        logradouro.value = resultJson.logradouro;
        estado.value = resultJson.uf;
        bairro.value = resultJson.bairro;

        console.log(resultJson)

        return resultJson;

    }catch (err){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`;
        console.log(err)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaAddr(cep.value));

// let ceps = ['01001000', '01001001'];
// let bulkCepFetch = ceps.map(valor => buscaAddr(valor));
// Promise.all(bulkCepFetch).then(results => console.log(results))