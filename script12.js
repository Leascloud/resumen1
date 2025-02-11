function verificarContraseña() {
    var contraseña = prompt("Introduce la contraseña:");
    var correcta = ""; // Cambia esto por la contraseña que desees

    if (contraseña === correcta) {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSduLcvf5xiEUsyUukf-XplcLfkrr5_FbTQnnJx_tzm2zXF2Hw/viewform?usp=dialog"; // URL de la página a la que deseas redirigir
    } else {
        alert("Contraseña incorrecta.");
    }
}
