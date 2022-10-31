//Listas, arrays/arreglo Es un conjunto de variables puestas en un orden 

const lista = [1,"Hola", true, undefined, null];
const lista2 = new Array(1,"Hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "perro";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura: 10,
    anchura: 5, 
    marca: "Xiaomi", 
    isWhite: false,
    contactos: ["Gorka", "Jesus", "Raul"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}
console.log(movil.tarjeta, movil.marca);
movil.anio = 2019;
console.log(movil.anio);




//Fechas
//Librerias de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Utilizando milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const dia = ahora.getDate()
const mes = ahora.getMonth() +1; // el +1 se utiliza debido a que los meses empiezan a contar desde 0
const anio = ahora.getFullYear();
console.log(dia, mes, anio);