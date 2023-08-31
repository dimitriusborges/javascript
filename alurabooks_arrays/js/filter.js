const btnsFiltrar = document
    .querySelectorAll('.btn')


function exibirValorTotalLivrosUI(valor) {
    elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">R$${valor.toFixed(2)}</span></p>
    </div>    
    `
}

function filtrarLivros(categoria) {
    if (categoria === 'disponivel') {
        filtrarLivrosDisponiveis(livros)
    } else {
        filtrarLivroPorCategoria(livros)
    }


}

function filtrarLivrosDisponiveis(livros){
    livrosFiltrados = livros.filter(livro => livro.quantidade > 0)
    let valorTotal = livrosFiltrados.reduce((acc, livro) => acc + livro.preco, 0)
    exibeLivrosUI(livrosFiltrados)
    exibirValorTotalLivrosUI(valorTotal)



}

function filtrarLivroPorCategoria(livros){
    livrosFiltrados = livros.filter(livro => livro.categoria === categoria)
    exibeLivrosUI(livrosFiltrados)
}

console.log(btnsFiltrar)
btnsFiltrar.forEach(btn => btn.addEventListener('click', () => {
        filtrarLivros(btn.value)
    }))
