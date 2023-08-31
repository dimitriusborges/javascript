import {conectaApi} from "./conectapi.js";

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evt){
    evt.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const descricao = Math.floor(Math.rando() * 10).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.hrf = "../pages/envio-concluido.html";
    }catch (e){
        alert(e);
    }
}

formulario.addEventListener("submit", evt => criarVideo(evt))