//Se solicita año, mes y dia de nacimiento. Se restan los valores en ese orden, se llega a una cifra de cuatro digitos.
//luego debe separarse esa cifra en digitos y sumarse hasta obtener un solo dígito. Y con ese valor se devuelve una interpretación segun el número. 

let num1 = parseInt(prompt("Ingrese año de nacimiento en números"));
if (num1 >= 1900 && num1 <= 2023) {//
    alert(`año de nacimiento ${num1}`);
} else {//
    alert("ingresa un año entre 1900 y 2023");
    let num1 = parseInt(prompt("Ingrese año de nacimiento en números"));
}

let num2 = parseInt(prompt("Ingresa mes de nacimiento en números"));
if (num2 >= 1 && num2 <= 12) {//
    alert(`mes de nacimiento ${num2}`);
} else {
    alert("ingresa un mes entre 1 y 12");
    let num2 = parseInt(prompt("Ingresa mes de nacimiento en números"));
}

let num3 = parseInt(prompt("Ingresa día de nacimiento en números"));
if (num3 >= 1 && num3 <= 31) {
    alert(`día de nacimiento ${num3}`);
} else {
    alert("ingresa un día entre 1 y 31");
    let num3 = parseInt(prompt("Ingresa día de nacimiento en números"));
}
alert(`Tu año karmico es ${num1 - num2 - num3}`);

// Noto que si se pone un valor fuera de parámetro y se corrige toma como valor el primero que se colocó y hace mal la cuenta.
// Dejo la función que aplicaría para este cálculo.

//const restar = (num1, num2, num3) => num1 - num2 - num3;



// Mes promocional en los cursos de Numerología, descuento 15%. 

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const descuento = (x) => x * porcentaje / 100;

let precioCurso = 12000;
let porcentaje = 15;

let totalCurso = suma(resta(precioCurso, descuento(precioCurso)), porcentaje);

console.log(totalCurso);


// preinscripcion para un curso con 20 vacantes 

for (let vacante = 1; vacante <= 20; vacante++) {
    let nombre = prompt("Ingresa tu nombre y Apellido");
    alert(`Vancante #${vacante} Nombre: ${nombre}`);
}
alert("Ya no quedan vacantes para este curso");


