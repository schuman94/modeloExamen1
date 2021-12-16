let modo;
let usuario;

function Usuario(nombre, email, dni, rango) {
    this.nombre = nombre;
    this.email = email;
    this.dni = dni;
    this.rango = rango;

    console.log("usuario creado");
}

function modoInvitado() {
    modo = "invitado";
    usuario = new Usuario("", "", "", "invitado");
}

function modoUsuario() {
    modo = "usuario";
    eliminarBoton("login");
    crearBoton("guardar", "Guardar Datos");
    //crearBoton("administrador");
}

function modoAdministrador() {
    modo = "administrador"
}

function crearBoton(id, mensaje) {
    let boton = document.createElement("button");
    boton.setAttribute("id", id);
    boton.textContent = mensaje;
    document.getElementById("contenedorUno").appendChild(boton);
}

function eliminarBoton(id) {
    let boton = document.getElementById(id);
    if (boton) {
        boton.remove;
        document.getElementById("contenedorUno").removeChild(boton);
    } else {
        console.log("El boton no existe");
    }
}

document.getElementById("login").addEventListener("click", modoUsuario);




// Inicio del html
modoInvitado();
