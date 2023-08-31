function verificaDisponibiliadeLivro(livro) {
    return livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
}

function exibeLivrosUI(livros){
    elementoValorTotal.innerHTML = ''
    listaLivrosUI.innerHTML = ''
    livros.forEach(livro => {

        listaLivrosUI.innerHTML += `
            <div class="livro">
              <img class="${verificaDisponibiliadeLivro(livro)}" src="${livro.imagem}" 
              alt="${livro.alt}" />
              <h2 class="livro__titulo">
               ${livro.titulo}
              </h2>
              <p class="livro__descricao">${livro.autor}</p>
              <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
              <div class="tags">
                <span class="tag">${livro.categoria}</span>
              </div>
            </div>            
        `
    });
}