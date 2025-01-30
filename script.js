document.addEventListener('DOMContentLoaded', () => {
    const abrirCartaBtn = document.getElementById('abrirCarta');
    const aceptarBtn = document.getElementById('aceptar');
    const moverNoBtn = document.getElementById('moverNo');
    const audio = document.getElementById('audio');

    // Reproduce la canción al hacer clic en "Abrir carta"
    abrirCartaBtn.addEventListener('click', () => {
        mostrarFase(2);
        audio.play().catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    });

    aceptarBtn.addEventListener('click', () => aceptar());
    moverNoBtn.addEventListener('mouseover', () => moverNo(moverNoBtn));
});

let intentos = 0;

function mostrarFase(numeroFase) {
    const fases = document.querySelectorAll('.fase');
    fases.forEach(fase => fase.classList.remove('activa'));

    const faseSeleccionada = document.querySelector(`.fase-${numeroFase}`);
    if (faseSeleccionada) {
        faseSeleccionada.classList.add('activa');
        faseSeleccionada.focus();
    }
}

function aceptar() {
    mostrarFase(3);
}

function moverNo(boton) {
    const botonWidth = boton.offsetWidth;
    const botonHeight = boton.offsetHeight;
    const maxX = window.innerWidth - botonWidth - 40; // Margen de 20px a cada lado
    const maxY = window.innerHeight - botonHeight - 40; // Margen de 20px arriba y abajo

    // Mueve el botón a una posición aleatoria dentro del área permitida
    boton.style.position = 'absolute';
    boton.style.left = Math.random() * maxX + 20 + 'px'; // Añade margen izquierdo
    boton.style.top = Math.random() * maxY + 20 + 'px'; // Añade margen superior

    intentos++;
    if (intentos === 5) {
        alert("¡Vas a tener que decir que sí en algún momento! 😄");
    }
}