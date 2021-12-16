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
    eliminarBoton("logout");
    eliminarBoton("guardar");
    eliminarBoton("administrador");
    if (!document.getElementById("login")) {
        crearBoton("login", "Login", modoUsuario);
    }
    document.getElementById("contenedorDos").innerHTML = "Bienvenido a esta web!<br>Pulsa login para entrar como usuario registrado";
}

function modoUsuario() {
    modo = "usuario";
    eliminarBoton("login");
    crearBoton("logout", "LogOut", modoInvitado);
    crearBoton("guardar", "Guardar Datos");
    document.getElementById("guardar").setAttribute("disabled", "");
    //document.getElementById("guardar").removeAttribute("disabled"); Esto lo haremos cuando validemos el formulario
    crearBoton("administrador", "Modo Administrador", modoAdministrador);
    crearFormUsuario();
}

function modoAdministrador() {
    modo = "administrador";
    document.getElementById("guardar").setAttribute("disabled", "");
    //document.getElementById("guardar").removeAttribute("disabled"); Esto lo haremos cuando validemos el formulario
    crearFormAdmin();
    
}

function crearBoton(id, mensaje, funcion) {
    let boton = document.createElement("button");
    boton.setAttribute("id", id);
    boton.textContent = mensaje;
    document.getElementById("contenedorUno").appendChild(boton);
    darFuncion(id, funcion);
}

function darFuncion(id, funcion) {
    document.getElementById(id).addEventListener("click", funcion);
}

function eliminarBoton(id) {
    let boton = document.getElementById(id);
    if (boton) {
        boton.remove;
        document.getElementById("contenedorUno").removeChild(boton);
    }
}

function crearFormUsuario() {
    document.getElementById("contenedorDos").innerHTML="<label for='usuario'>Usuario: </label><input type='text' id='email'><br><label for='email'>Email: </label><input type='email' id='email'>";
}

function crearFormAdmin() {
    document.getElementById("contenedorDos").innerHTML="<label for='usuario'>Usuario: </label><input type='text' id='email'><br><label for='email'>Email: </label><input type='email' id='email'><br><label for='dni'>DNI: </label><input type='text' id='dni'>";
}




// Inicio del html
modoInvitado();
document.getElementById("login").addEventListener("click", modoUsuario);
