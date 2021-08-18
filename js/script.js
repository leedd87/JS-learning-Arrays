// class Prueba {
//     constructor(nombre, apellido, edad, direccion, familia) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.direccion = direccion;
//         this.familia = familia;
//     }
//     visualizar() {
//         console.log(this);
//     }
// }

// let pideDireccion = prompt('pasame tu direccion');
// let pideFamilia = prompt('cuantas personas son en tu familia');

// let david = new Prueba('david', 'lee', 34, pideDireccion, pideFamilia)

// console.log(david)


const listaNombre = [];

let cantidad = 5;

do {
    let entrada = prompt('pasame nombre');
    listaNombre.push(entrada.toUpperCase());
    console.log(listaNombre);
} while (listaNombre.length == cantidad)

const nuevaListaNombre = listaNombre.concat(['ana', 'grace']);

console.log(nuevaListaNombre);