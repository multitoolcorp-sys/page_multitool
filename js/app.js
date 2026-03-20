function cargarVista(vista) {
    fetch(vista + ".html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("contenido").innerHTML = data;
    })
    .catch(() => {
        document.getElementById("contenido").innerHTML = "<h2>Error al cargar la vista</h2>";
    });
}

// Cargar inicio por defecto
window.onload = () => {
    cargarVista("inicio");
};
