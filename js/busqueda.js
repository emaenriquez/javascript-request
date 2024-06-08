
//  archivo para hacer la busqueda de videos mediante al input

import { conexionApi } from "./conexionApi";
import crearCard from "./mostrarVideos";

const btnBusqueda = document.querySelector('[data-boton-busqueda]')

async function filtrarVideos(evento){
    evento.preventDefault()
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value

    const busqueda = await conexionApi.buscarvideos(datosDeBusqueda)

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busqueda.forEach(item => {
        lista.appendChild(crearCard(item.titulo,item.descripcion,item.url,item.imagen))
    });

}

btnBusqueda.addEventListener('click',evento => filtrarVideos(evento))