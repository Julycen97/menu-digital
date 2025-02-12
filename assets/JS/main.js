document.addEventListener("DOMContentLoaded", () => {
    cargarDatosCreador();

    const secciones = document.querySelectorAll("section:not(:first-child)");

    
    secciones.forEach(seccion => {
        const nombreSeccion = seccion.id.toString();
        const productos = obtenerProductos(nombreSeccion);

        productos.then(productos => {
            const div = document.createElement("div");
            productos.forEach(producto => {

                div.innerHTML += `
                <div>
                    <div>
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <h3>$${producto.precio}</h3>
                    </div>
                    <div id="imagen" role="img" style="background-image: url(${producto.imagen})"></div>
                </div>`;


            });
            seccion.appendChild(div);
        });
    });
});

function obtenerProductos(nombreProducto) {
    return fetch("./assets/JSON/productos.json")
        .then(response => response.json())
        .then(data => {
            const productos = data.productos[nombreProducto];
            return productos;
        })
        .catch(error => console.log(error));
}

function redireccionar(elemento) {
    const name = elemento.getAttribute("name");
    window.location.href = `#${name}`;
}

function cargarDatosCreador(){
    const divCreador = document.querySelector("#infoCreador");
    const p = document.createElement("p");

    p.innerHTML = `&copy Todos los derechos reservados - ${new Date().getFullYear()} <br> Creado por <strong><a href="https://www.linkedin.com/in/julian-centurion" target="_blank" rel="noopener noreferrer">Julián Centurión</a></strong>`;

    divCreador.appendChild(p);
}