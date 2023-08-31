const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const listaLivrosUI = document.getElementById('livros');
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')

let livros = [];


async function buscaLivros () {

    const result = await fetch(endpoint);
    livros = await result.json();

    const livrosComDesconto = aplicaDesconto(livros);
    exibeLivrosUI(livrosComDesconto);
}

buscaLivros();