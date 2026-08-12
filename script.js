const formulario = document.getElementById("form-helados");

function revisarFormulario(event) {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const aviso = document.getElementById("aviso-helados");

    if (nombre === "" || correo === "") {
        event.preventDefault();

        aviso.textContent = "Falta tu nombre o tu correo - sin eso no podemos anotar el pedido.";
        aviso.classList.add("error");
        aviso.classList.remove("exito");

    } else if (!correo.includes("@")) {
        event.preventDefault();

        aviso.textContent = "Ese correo no tiene arroba - revísalo por favor.";
        aviso.classList.add("error");
        aviso.classList.remove("exito");

    } else {
        aviso.textContent = "Pedido anotado - te atiende Ervin Rodrigo Lapaca Aima. Gracias por tu pedido.";
        aviso.classList.add("exito");
        aviso.classList.remove("error");
    }
}

formulario.addEventListener("submit", revisarFormulario);