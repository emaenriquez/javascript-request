
import {conexionApi} from "./conexionApi.js"

const formulario = document.querySelector("[data-formulario]")

async function crearVideo(evento) {
    evento.preventDefault()
    const titulo = document.querySelector("[data-titulo]").value
    const url = document.querySelector("[data-url]").value
    const imagen = document.querySelector("[data-img]").value
    const description = Math.floor(Math.random * 10).toString()

   

    try {
        conexionApi.enviarVideo(titulo, url, imagen, description)
        window.location.href = '../pages/envio-concluido.html'
    } catch (error) {
        alert(error)
    }

    

}

formulario.addEventListener('submit', evento => crearVideo(evento))
