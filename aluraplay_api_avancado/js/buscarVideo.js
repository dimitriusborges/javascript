import {conectaApi} from "./conectapi.js";
import constroiCard from "./loadVideos.js";

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")

async function buscarVideos(evt){
    evt.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(el => lista
        .appendChild(constroiCard(el.titulo, el.descricao, el.url, el.imagem)))

    if(busca.length === 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`
    }
}


botaoPesquisa.addEventListener("click", evt => buscarVideos(evt));