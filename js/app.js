function cargarVista(vista) {
    fetch(vista + ".html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("contenido").innerHTML = data;
    });
}

// Cargar inicio por defecto
window.onload = () => {
    cargarVista("inicio");
};
