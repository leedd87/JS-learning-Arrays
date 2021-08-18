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


// const listaNombre = [];

// let cantidad = 5;

// do {
//     let entrada = prompt('pasame nombre');
//     listaNombre.push(entrada.toUpperCase());
//     console.log(listaNombre);
// } while (listaNombre.length != cantidad)

// const nuevaListaNombre = listaNombre.concat(['ana', 'grace']);

// console.log(nuevaListaNombre);

//Incorporando Arrays

class Hotel {
    constructor(hotel, habitacion, servicio) {
        this.hotel = hotel;
        this.habitacion = habitacion;
        this.servicio = servicio;
    }
    visualizar() {
        console.log(`Seleccionaste las siguientes opciones: ${hotel}, ${habitacion} y ${servicio}`);
    }
}

let preguntarHotel = prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro');

if (preguntarHotel == 'Punta Cana' || 'punta cana') {
    console.log('seleccionaste punta cana');
} else {
    console.log('no entendi');
}

let preguntarHabitacion = prompt('Elegi tipo de habitacion: Suite, Doble, Triple');
let preguntarServicio = prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno');

let seleccionUsuario1 = new Hotel(preguntarHotel);

console.log(seleccionUsuario1);


let preguntarHotel2 = prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro');
let preguntarHabitacion2 = prompt('Elegi tipo de habitacion: Suite, Doble, Triple');
let preguntarServicio2 = prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno');

let seleccionUsuario2 = new Hotel(preguntarHotel2, preguntarHabitacion2, preguntarServicio2);

console.log(seleccionUsuario2);

let preguntarHotel3 = prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro');
let preguntarHabitacion3 = prompt('Elegi tipo de habitacion: Suite, Doble, Triple');
let preguntarServicio3 = prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno');

let seleccionUsuario3 = new Hotel(preguntarHotel3, preguntarHabitacion3, preguntarServicio3);

console.log(seleccionUsuario3);

const totalSeleccionUsuario = [seleccionUsuario1, seleccionUsuario2, seleccionUsuario3];

console.log(totalSeleccionUsuario);