async function listaVideos(){
    const conn = await fetch("http://localhost:3000/videos");

    return await conn.json();
}

async function criaVideo(titulo, descricao, url, imagem){
    const conn = await fetch("http://localhost:3000/videos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url:  url,
            imagem: imagem
        })

    });

    if(!conn.ok){
        throw new Error("Não foi impossível enviar o video");
    }

    return await conn.json();
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`);

    return await conexao.json();

}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}