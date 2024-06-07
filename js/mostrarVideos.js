import { conexionApi } from "./conexionApi";

const lista = document.querySelector("[data-lista]");


function crearCard() {
    const video = document.createElement('li');
    video.className = "videos__items"
    video.innerHTML = `
    <li class="videos__item">
        <iframe width="100%" height="72%" src="https://www.youtube.com/embed/QjOWz9avkg8"
            title="Front-end vs. Back-end: ¡Descubre el lado perfecto para ti!" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        <div class="descripcion-video">
            <img src="./img/logo.png" alt="logo canal alura">
            <h3>Front-end vs. Back-end: ¡Descubre el lado perfecto para ti!</h3>
            <p>236 mil visualizaciones</p>
        </div>
    </li>
    `
    return video;
}

async function listarVideo(){
    const listaApi = conexionApi.listaVideos;
}