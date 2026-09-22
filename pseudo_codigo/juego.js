// =========================================
// PREGUNTAS DEL JUEGO
// =========================================

const preguntas = [

    {
        pregunta: "¿Qué pseudoclase selecciona el primer hijo?",
        codigo: "p:first-child { }",
        opciones: [
            ":first-child",
            ":last-child",
            ":nth-child()",
            ":only-child"
        ],
        respuesta: 0
    },

    {
        pregunta: "¿Qué pseudoclase selecciona el último hijo?",
        codigo: "p:last-child { }",
        opciones: [
            ":first-child",
            ":last-child",
            ":nth-of-type()",
            ":only-of-type"
        ],
        respuesta: 1
    },

    {
        pregunta: "¿Qué pseudoclase permite seleccionar un elemento por posición?",
        codigo: "p:nth-child(3) { }",
        opciones: [
            ":last-child",
            ":only-child",
            ":nth-child()",
            ":first-of-type"
        ],
        respuesta: 2
    },

    {
        pregunta: "¿Qué pseudoclase selecciona el segundo elemento de su mismo tipo?",
        codigo: "p:nth-of-type(2) { }",
        opciones: [
            ":nth-child()",
            ":nth-of-type()",
            ":last-child",
            ":only-child"
        ],
        respuesta: 1
    },

    {
        pregunta: "¿Qué pseudoclase selecciona un elemento que es el único hijo?",
        codigo: "p:only-child { }",
        opciones: [
            ":only-child",
            ":first-child",
            ":only-of-type",
            ":last-child"
        ],
        respuesta: 0
    },

    {
        pregunta: "¿Qué pseudoclase selecciona el primer elemento de un tipo específico?",
        codigo: "p:first-of-type { }",
        opciones: [
            ":first-child",
            ":first-of-type",
            ":nth-child()",
            ":last-of-type"
        ],
        respuesta: 1
    },

    {
        pregunta: "¿Qué pseudoclase selecciona el último elemento de un tipo específico?",
        codigo: "p:last-of-type { }",
        opciones: [
            ":last-of-type",
            ":last-child",
            ":only-child",
            ":nth-of-type()"
        ],
        respuesta: 0
    },

    {
        pregunta: "¿Qué selecciona :nth-child(even)?",
        codigo: "p:nth-child(even) { }",
        opciones: [
            "Elementos impares",
            "El primer elemento",
            "Elementos pares",
            "El último elemento"
        ],
        respuesta: 2
    },

    {
        pregunta: "¿Qué selecciona :nth-child(odd)?",
        codigo: "p:nth-child(odd) { }",
        opciones: [
            "Elementos pares",
            "Elementos impares",
            "El segundo elemento",
            "El único elemento"
        ],
        respuesta: 1
    },

    {
        pregunta: "¿Cuál es la diferencia principal entre nth-child y nth-of-type?",
        codigo: "p:nth-of-type(2) { }",
        opciones: [
            "No existe ninguna diferencia",
            "nth-child cuenta todos los hijos y nth-of-type cuenta elementos del mismo tipo",
            "nth-of-type solamente funciona con div",
            "nth-child solamente funciona con p"
        ],
        respuesta: 1
    }

];


// =========================================
// VARIABLES
// =========================================

let preguntaActual = 0;

let puntos = 0;

let vidas = 3;

let respondido = false;


// =========================================
// ELEMENTOS HTML
// =========================================

const textoPregunta =
    document.getElementById("textoPregunta");

const opciones =
    document.getElementById("opciones");

const puntosHTML =
    document.getElementById("puntos");

const vidasHTML =
    document.getElementById("vidas");

const numeroPregunta =
    document.getElementById("numeroPregunta");

const barraProgreso =
    document.getElementById("barraProgreso");

const mensaje =
    document.getElementById("mensaje");

const siguiente =
    document.getElementById("siguiente");

const resultado =
    document.getElementById("resultado");

const contenido =
    document.querySelector(".contenido");

const puntuacionFinal =
    document.getElementById("puntuacionFinal");

const mensajeFinal =
    document.getElementById("mensajeFinal");

const reiniciar =
    document.getElementById("reiniciar");


// =========================================
// MOSTRAR PREGUNTA
// =========================================

function mostrarPregunta() {

    respondido = false;

    mensaje.textContent = "";

    siguiente.style.display = "none";

    const pregunta = preguntas[preguntaActual];


    // Texto de la pregunta

    textoPregunta.textContent =
        pregunta.pregunta;


    // Número

    numeroPregunta.textContent =
        preguntaActual + 1;


    // Barra de progreso

    const progreso =
        ((preguntaActual + 1) / preguntas.length) * 100;

    barraProgreso.style.width =
        progreso + "%";


    // Código de ejemplo

    const codigo =
        document.querySelector(".codigo");

    codigo.innerHTML =
        `<span class="pseudoclase">
        ${pregunta.codigo}
        </span>`;


    // Limpiar opciones

    opciones.innerHTML = "";


    // Crear botones

    pregunta.opciones.forEach(
        (opcion, indice) => {

            const boton =
                document.createElement("button");

            boton.classList.add("opcion");

            boton.textContent =
                opcion;

            boton.addEventListener(
                "click",
                () => comprobarRespuesta(
                    indice,
                    boton
                )
            );

            opciones.appendChild(boton);

        }
    );

}


// =========================================
// COMPROBAR RESPUESTA
// =========================================

function comprobarRespuesta(indice, boton) {

    if (respondido) {
        return;
    }

    respondido = true;


    const pregunta =
        preguntas[preguntaActual];


    const botones =
        document.querySelectorAll(".opcion");


    // Desactivar botones

    botones.forEach(
        boton => {
            boton.style.pointerEvents = "none";
        }
    );


    // RESPUESTA CORRECTA

    if (indice === pregunta.respuesta) {

        boton.classList.add("correcta");

        puntos += 10;

        puntosHTML.textContent =
            puntos;

        mensaje.textContent =
            "🎉 ¡Respuesta correcta! +10 puntos";

        mensaje.style.color =
            "#16a34a";

    }

    // RESPUESTA INCORRECTA

    else {

        boton.classList.add("incorrecta");

        botones[pregunta.respuesta]
            .classList.add("correcta");


        vidas--;

        vidasHTML.textContent =
            vidas;


        mensaje.textContent =
            "❌ Incorrecto. La respuesta correcta está marcada en verde.";

        mensaje.style.color =
            "#dc2626";


        // Game Over

        if (vidas === 0) {

            setTimeout(
                finalizarJuego,
                1200
            );

            return;
        }

    }


    siguiente.style.display =
        "block";

}


// =========================================
// SIGUIENTE PREGUNTA
// =========================================

siguiente.addEventListener(
    "click",
    () => {

        preguntaActual++;

        if (
            preguntaActual >=
            preguntas.length
        ) {

            finalizarJuego();

        } else {

            mostrarPregunta();

        }

    }
);


// =========================================
// FINALIZAR JUEGO
// =========================================

function finalizarJuego() {

    contenido.classList.add("oculto");

    resultado.classList.remove("oculto");


    puntuacionFinal.textContent =
        puntos;


    if (puntos === 100) {

        mensajeFinal.textContent =
            "🔥 ¡PERFECTO! Dominas las pseudoclases CSS.";

    }

    else if (puntos >= 70) {

        mensajeFinal.textContent =
            "👏 ¡Muy bien! Tienes un buen dominio de CSS.";

    }

    else if (puntos >= 40) {

        mensajeFinal.textContent =
            "💪 Buen trabajo. Sigue practicando.";

    }

    else {

        mensajeFinal.textContent =
            "📚 Necesitas practicar un poco más.";

    }

}


// =========================================
// REINICIAR JUEGO
// =========================================

reiniciar.addEventListener(
    "click",
    () => {

        preguntaActual = 0;

        puntos = 0;

        vidas = 3;

        puntosHTML.textContent = 0;

        vidasHTML.textContent = 3;

        resultado.classList.add("oculto");

        contenido.classList.remove("oculto");

        mostrarPregunta();

    }
);


// =========================================
// INICIAR JUEGO
// =========================================

mostrarPregunta();