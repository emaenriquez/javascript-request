async function listaVideos() {
    let conexion = await fetch("http://localhost:3001/videos");
    let conexionComvertida = conexion.json();
    return conexionComvertida
    // console.log(conexionComvertida)
}


async function enviarVideo(titulo, url, imagen, descripcion) {
    const conexion = await fetch("http://localhost:3001/videos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url,
            imagen: imagen,
            descripcion: `${descripcion} mil visualizaciones`
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida
}


// npx json-server --watch db.json --port 3001
export const conexionApi = {
    listaVideos,
    enviarVideo
}