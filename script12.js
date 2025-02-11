function verificarContraseña() {
    var contraseña = prompt("Introduce la contraseña:");
    var correcta = "12345"; // Cambia esto por la contraseña que desees

    if (contraseña === correcta) {
        window.location.href = "https://www.google.com.mx/?hl=es-419"; // URL de la página a la que deseas redirigir
    } else {
        alert("Contraseña incorrecta.");
    }
}