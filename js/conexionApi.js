async function listaVideos() {
    let conexion = await fetch("http://localhost:3001/videos");
    let conexionComvertida = conexion.json();
    return conexionComvertida
    // console.log(conexionComvertida)
}
// npx json-server --watch db.json --port 3001
export const conexionApi = {
    listaVideos
}