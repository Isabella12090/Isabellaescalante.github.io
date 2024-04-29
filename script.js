// Definición de la base de datos de preguntas
const bd_juego = [
    // Array de objetos con las preguntas, opciones y respuestas correctas
    {
        id:0,
        pregunta:"¿Cuál es el país más pequeño del mundo?",
        op0:"Estado Vaticano",
        op1:"Mónaco",
        op2:"San Marino",
        correcta:"0"
    },
    {
        id:1,
        pregunta:"¿Cuántos océanos hay en la Tierra?",
        op0:"Seis",
        op1:"Cinco",
        op2:"Cuatro",
        correcta:"1"
    },
    {
        id:2,
        pregunta:"¿Qué país tiene más habitantes?",
        op0:"China",
        op1:"Estados Unidos",
        op2:"Rusia",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"¿Qué país es el más grande del mundo?",
        op0:"Rusia",
        op1:"Estados Unidos",
        op2:"India",
        correcta:"0"
    },
    {
        id:4,
        pregunta:"¿Cuál es la montaña más alta del mundo?",
        op0:"Acongagua",
        op1:"Tabor",
        op2:"Everest",
        correcta:"2"
    },
    {
        id:5,
        pregunta:"¿Cuál es el río más largo del mundo?",
        op0:"Nilo",
        op1:"Amazonas",
        op2:"Eufrates",
        correcta:"0"
    },
    {
        id:6,
        pregunta:"¿Cuál es la capital de la India?",
        op0:"Chennai",
        op1:"Bombay",
        op2:"Nueva Delhi",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"¿Qué continente se encuentra en los 4 hemisferios?",
        op0:"Africa",
        op1:"Europa",
        op2:"Ninguno",
        correcta:"0"
    },
    {
        id:8,
        pregunta:"¿Cuál es la capital de Egipto?",
        op0:"Alejandría",
        op1:"El Cairo",
        op2:"Menfis",
        correcta:"1"
    },
    {
        id:9,
        pregunta:"¿Dónde se encuentra el estrecho de Magallanes?",
        op0:"Parte sur de america del Norte",
        op1:"En Europa",
        op2:"Parte sur de Sudamérica",
        correcta:"2"
    }
];
// Variables para almacenar las respuestas del usuario y el estado del juego
let respuestas = []; // Un array que almacenará las respuestas seleccionadas por el usuario para cada pregunta
let cantiCorrectas = 0; // Contador de respuestas correctas
let numPregunta = 0; // Índice de la pregunta actual que se está mostrando

// Función para cargar las preguntas en la interfaz
function cargarPreguntas() {
    // Esta función se encarga de crear y mostrar en la interfaz gráfica una pregunta y sus opciones de respuesta
    const pregunta = bd_juego[numPregunta]; // Obtiene la pregunta actual de la base de datos
    const contenedor = document.createElement("div"); // Crea un elemento div para contener la pregunta y sus opciones
    contenedor.className = "contenedor-pregunta"; // Asigna una clase CSS al contenedor
    contenedor.id = pregunta.id; // Asigna un id único al contenedor, que corresponde al id de la pregunta
    const h2 = document.createElement("h2"); // Crea un elemento h2 para mostrar el texto de la pregunta
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta; // Asigna el texto de la pregunta al h2
    contenedor.appendChild(h2); // Agrega el h2 al contenedor
    const opciones = document.createElement("div"); // Crea un elemento div para contener las opciones de respuesta
    const label1 = crearLabel("0",pregunta.op0); // Crea un elemento label para la primera opción de respuesta
    const label2 = crearLabel("1",pregunta.op1); // Crea un elemento label para la segunda opción de respuesta
    const label3 = crearLabel("2",pregunta.op2); // Crea un elemento label para la tercera opción de respuesta
    opciones.appendChild(label1); // Agrega el label de la primera opción al contenedor de opciones
    opciones.appendChild(label2); // Agrega el label de la segunda opción al contenedor de opciones
    opciones.appendChild(label3); // Agrega el label de la tercera opción al contenedor de opciones
    contenedor.appendChild(opciones); // Agrega el contenedor de opciones al contenedor principal
    document.getElementById("juego").appendChild(contenedor); // Agrega el contenedor principal al elemento con id "juego" en el HTML
}

// Función para crear un elemento label con su respectivo input y span para mostrar una opción de respuesta
function crearLabel(num, txtOpcion) {
    // Esta función crea un elemento label que contiene un input tipo radio y un span para mostrar el texto de la opción de respuesta
    const label = document.createElement("label"); // Crea un elemento label
    label.id = "l" + numPregunta + num; // Asigna un id único al label
    const input = document.createElement("input"); // Crea un elemento input
    input.setAttribute("type", "radio"); // Establece el tipo de input como radio
    input.name = "p" + numPregunta; // Establece el nombre del input (para agrupar las opciones de respuesta)
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")"); // Asigna una función al evento onclick del input
    const span = document.createElement("span"); // Crea un elemento span
    const correccion = document.createElement("span"); // Crea un elemento span para mostrar la corrección de la respuesta
    correccion.id = "p" + numPregunta + num; // Asigna un id único al span de corrección
    span.textContent = txtOpcion; // Asigna el texto de la opción de respuesta al span
    label.appendChild(input); // Agrega el input al label
    label.appendChild(span); // Agrega el span de texto al label
    label.appendChild(correccion); // Agrega el span de corrección al label

    return label; // Devuelve el label creado
}

// Bucle para cargar todas las preguntas al cargar la página
for (let i = 0; i < bd_juego.length; i++) {
    cargarPreguntas(); // Se llama a la función cargarPreguntas para cada pregunta en la base de datos
    numPregunta++; // Se incrementa el índice de la pregunta actual
}

// Función para almacenar la opción seleccionada por el usuario
function seleccionar(pos, opElegida) {
    // Esta función almacena la opción seleccionada por el usuario en el array de respuestas
    respuestas[pos] = opElegida; // Asigna la opción seleccionada al índice correspondiente del array de respuestas
}

// Función para corregir las respuestas del usuario
let corregir = document.getElementById("corregir"); // Obtiene el botón de corregir del HTML
corregir.onclick = function() {
    // Esta función comprueba las respuestas del usuario y muestra si son correctas o incorrectas
    for (let i = 0; i < bd_juego.length; i++) {
        const pregunta = bd_juego[i]; // Obtiene la pregunta actual de la base de datos
        if (pregunta.correcta == respuestas[i]) { // Comprueba si la respuesta seleccionada por el usuario es correcta
            cantiCorrectas++; // Incrementa el contador de respuestas correctas
            let idCorreccion = "p" + i + pregunta.correcta; // Construye el id del elemento de corrección
            document.getElementById(i).className = "contenedor-pregunta correcta"; // Añade una clase CSS para resaltar la pregunta como correcta
            document.getElementById(idCorreccion).innerHTML = "&check;"; // Muestra un símbolo de check como corrección
            document.getElementById(idCorreccion).className = "acierto"; // Añade una clase CSS para estilizar la corrección
        } else { // Si la respuesta es incorrecta
            let id = "p" + i + respuestas[i]; // Construye el id del elemento de respuesta incorrecta
            let idCorreccion = "p" + i + pregunta.correcta; // Construye el id del elemento de corrección
            document.getElementById(i).className = "contenedor-pregunta incorrecta"; // Añade una clase CSS para resaltar la pregunta como incorrecta
            document.getElementById(id).innerHTML = "&#x2715;"; // Muestra una marca de "X" como indicador de respuesta incorrecta
            document.getElementById(id).className = "no-acierto"; // Añade una clase CSS para estilizar la respuesta incorrecta
            document.getElementById(idCorreccion).innerHTML = "&check;"; // Muestra un símbolo de check como corrección
            document.getElementById(idCorreccion).className = "acierto"; // Añade una clase CSS para estilizar la corrección
        }
    }

    // Deshabilita todos los inputs para evitar más selecciones
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }

    // Hace scroll hacia arriba para mostrar el resultado al usuario
    window.scrollTo(0,0);

    // Muestra la cantidad de respuestas correctas e incorrectas al usuario
    let h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10 - cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}

// Función para reiniciar el juego
function reiniciar() {
    // Reinicia todas las variables y elimina las preguntas cargadas
    respuestas = []; // Vacía el array de respuestas
    cantiCorrectas = 0; // Reinicia el contador de respuestas correctas
    numPregunta = 0; // Reinicia el índice de la pregunta actual

    const contenedorPreguntas = document.getElementById("juego"); // Obtiene el contenedor de preguntas del HTML
    while (contenedorPreguntas.firstChild) { // Mientras haya elementos hijos en el contenedor de preguntas
        contenedorPreguntas.removeChild(contenedorPreguntas.firstChild); // Elimina todos los elementos hijos
    }

    // Vuelve a cargar todas las preguntas en la interfaz
    for (let i = 0; i < bd_juego.length; i++) {
        cargarPreguntas();
        numPregunta++;
    }

    // Elimina el elemento de resultado si existe
    const resultado = document.querySelector(".resultado");
    if (resultado) {
        resultado.remove();
    }
}

// evento para el botón de reiniciar
let reiniciarBtn = document.getElementById("reiniciar");
reiniciarBtn.onclick = reiniciar; // Cuando se hace clic en el botón, se llama a la función reiniciar
