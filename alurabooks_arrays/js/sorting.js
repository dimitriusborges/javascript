const btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibeLivrosUI(livrosOrdenados)
}

btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco)
