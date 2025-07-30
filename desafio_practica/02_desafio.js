// Desafíos:

// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra
// "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let semana = prompt("Que dia de la semana es?").toLowerCase();

if (semana == "sabado" || semana == "domingo") {
    console.log("Buen Fin de semana"); 
} else {
    console.log("Buena Semana");
}

// Verifica si un número ingresado por el usuario es positivo o negativo.
// Muestra una alerta informativa.

let numero = prompt("Ingresa un numero");

if (numero >= 0) {
    console.log("El numero es positivo") 
} else {
    console.log("El numero es negativo");
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra
// "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

alert("Bienvenido al Sistema de puntuacion");
let puntuacion = prompt("Coloca tu calificacion");

if (puntuacion >= 100) {
    alert("Felicidades, has ganado"); 
} else {
    alert("Intentalo nuevamente para ganar");
}
// Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
// utilizando un template string para incluir el valor del saldo.

let usuario = prompt("Ingresa tu nombre de usuario");
let cuenta = 5000;

alert(`Estimado: ${usuario} el valor de su cuenta es de: ${cuenta}`);

// Pide al usuario que ingrese su nombre mediante un prompt.
//  Luego, muestra una alerta de bienvenida usando ese nombre.

let user = prompt("Ingresa tu nombre de usuario");

alert(`Bienvenido ${user}`);
