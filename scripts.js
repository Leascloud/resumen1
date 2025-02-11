// La contraseña para acceder a la siguiente página
const correctNickname = "iron man"; // Cambia esto por el sobrenombre correcto

// Función para verificar la contraseña
function checkPassword() {
    const nickname = document.getElementById('nicknameInput').value;
    
    if (nickname.toLowerCase() === correctNickname.toLowerCase()) {
        document.getElementById('greetingPage').style.display = 'none';
        document.getElementById('countdownPage').style.display = 'block';
        startCountdown();
    } else {
        // Mostrar imagen de error cuando la respuesta sea incorrecta
        document.getElementById('errorImage').style.display = 'block';
    }
}

// Función para iniciar el contador hacia el 15 de febrero de 2025
function startCountdown() {
    const targetDate = new Date("February 15, 2025 00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    // Actualiza el contador cada segundo
    setInterval(function() {
        const currentDate = new Date().getTime();
        const timeLeft = targetDate - currentDate;

        // Calcula los días restantes
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

        // Si ya ha pasado la fecha objetivo, mostrar mensaje de "¡Hoy es el día!"
        if (daysLeft <= 0) {
            countdownElement.innerHTML = "¡Hoy es el día! 💖";
        } else {
            countdownElement.innerHTML = `Faltan ${daysLeft} días`;
        }
    }, 1000);
}


// Función para insertar un video de YouTube
function embedVideo() {
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoContainer = document.getElementById('videoContainer');
    
    const videoId = youtubeUrl.split("v=")[1].split("&")[0]; // Extraer ID del video de YouTube
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;
    videoContainer.innerHTML = ''; // Limpiar contenido anterior
    videoContainer.appendChild(iframe);
}
