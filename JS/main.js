
//Se crea una función constructora para recolectar datos de consultas por estudio de numerologia 
 

function Numeroscopio(nombre, segundoNombre, anio, mes, dia) {
    this.nombre = nombre;
    this.segundoNombre = segundoNombre;
    this.anio = anio;
    this.mes = mes;
    this.dia = dia;
    this.destino = destino(anio, mes, dia)
    this.karma = karma(anio, mes, dia)
    this.compatibilidad = compatibilidad(nombre, segundoNombre)
    this.mostrarDatos = function () {
        alert(`Tu número destino es ${this.destino}`);
        alert(`Tu número kármico es ${this.karma}`);
        alert(`La compatibilidad es ${this.compatibilidad}`);
    }
}

const clientes = []

function destino(anio, mes, dia) {
    return anio + mes + dia;
}
function karma(anio, mes, dia) {
    return anio - mes - dia;
}
function compatibilidad(nombre, segundoNombre) {
    const valorLetras = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3,
        M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5,
        X: 6, Y: 7, Z: 8
    };

    nombre = nombre.toUpperCase().replace(/\s/g, '');
    segundoNombre = segundoNombre.toUpperCase().replace(/\s/g, '');

    let suma1 = 0;
    let suma2 = 0;

    for (let i = 0; i < nombre.length; i++) {
        suma1 += valorLetras[nombre[i]] || 0;
    }

    for (let i = 0; i < segundoNombre.length; i++) {
        suma2 += valorLetras[segundoNombre[i]] || 0;
    }

    const porcentaje = Math.floor(suma1 + suma2);

    return `La compatibilidad entre ${nombre} y ${segundoNombre} es del ${porcentaje}%`;
}

function agregarCliente() {
    let nombre = prompt("Ingresa tu nombre completo");
    let segundoNombre = prompt("Ingresa el nombre completo de otra persona para ver la compatibilidad");
    let anio = parseInt(prompt("Ingresa año de nacimiento en números"));
    if (anio <= 1900 && anio >= 2025) {
        alert("ingresa un año entre 1900 y 2023");
        anio = parseInt(prompt("Ingrese año de nacimiento en números"));
    }
    let mes = parseInt(prompt("Ingresa mes de nacimiento en números"));
    if (mes < 1 && mes > 12) {
        alert("ingresa un mes entre 1 y 12");
        mes = parseInt(prompt("Ingresa mes de nacimiento en números"));
    }
    let dia = parseInt(prompt("Ingresa día de nacimiento en números"));
    if (dia < 1 && dia > 31) {
        alert("ingresa un día entre 1 y 31");
        dia = parseInt(prompt("Ingresa día de nacimiento en números"));
    }
    alert(`Tu fecha de nacimiento es ${dia} ${mes} ${anio}`);
    const cliente = new Numeroscopio(nombre, segundoNombre, anio, mes, dia)
    clientes.push(cliente)
}
agregarCliente()




