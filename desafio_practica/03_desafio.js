// Desafíos:
// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let conta = 10;
while (conta >= 0) {
    console.log(conta);
    conta--;
}

// Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 
// hasta ese número utilizando un bucle 'while' en la consola del navegador.

let cuentaRegresiva = Number(prompt("Coloca un numero para realizar la cuenta regresiva"));

while (cuentaRegresiva >= 0) {
    console.log(cuentaRegresiva);
    cuentaRegresiva--;
}

// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
// hasta ese número utilizando un bucle 'while' en la consola del navegador.

let limite = Number(prompt("Coloca un numero para realizar la cuenta progresiva"));
let cuentaProgresiva = 0;

while (cuentaProgresiva <= limite) {
    console.log(cuentaProgresiva);
    cuentaProgresiva++;
}


