const botaoIniciaCam = document.querySelector(" [data-video-botao]")
const campoCamera = document.querySelector(" [data-camera]")
const video = document.querySelector(" [data-video]")
const btnCapturaFoto = document.querySelector(" [data-tirar-foto]")
const canvas = document.querySelector(" [data-video-canvas]")
const mensagem = document.querySelector(" [data-mensagem]")
const botaoEnviarFoto = document.querySelector("[data-enviar]")

let imageURL= ""

botaoIniciaCam.addEventListener("click", async function () {
    const iniciarVideo = await navigator
        .mediaDevices
        .getUserMedia({video: true, audio: false})

    botaoIniciaCam.style.display = "none";
    campoCamera.style.display="block";

    video.srcObject = iniciarVideo;
})

btnCapturaFoto.addEventListener("click", function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imageURL = canvas.toDataURL("image/jpeg")

    campoCamera.style.display = "none"
    mensagem.style.display= "block"

})

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro")
    const converteRetorno = JSON.parse(receberDadosExistentes)

    converteRetorno.imagem = imageURL;

    localStorage.setItem("cadastro", JSON.stringify(converteRetorno))
    window.location.href = "../pages/abrir-conta-form-3.html"
})