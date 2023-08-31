function aplicaDesconto(livros){
    const desconto = 0.3;
    return livros.map(livro => {
        return {...livro, preco: livro.preco * (1 - desconto)}
    });
}