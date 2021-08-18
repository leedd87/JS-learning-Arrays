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

// class Hotel {
//     constructor(hotel, habitacion, servicio) {
//         this.hotel = hotel;
//         this.habitacion = habitacion;
//         this.servicio = servicio;
//     }
//     visualizar() {
//         console.log(`Seleccionaste las siguientes opciones: ${hotel}, ${habitacion} y ${servicio}`);
//     }
// }


// let preguntarHotel = prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro');
// let preguntarHabitacion = prompt('Elegi tipo de habitacion: Suite, Doble, Triple');
// let preguntarServicio = prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno');

// let seleccionUsuario1 = new Hotel(preguntarHotel);

// console.log(seleccionUsuario1);


// let preguntarHotel2 = prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro');
// let preguntarHabitacion2 = prompt('Elegi tipo de habitacion: Suite, Doble, Triple');
// let preguntarServicio2 = prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno');

// let seleccionUsuario2 = new Hotel(preguntarHotel2, preguntarHabitacion2, preguntarServicio2);

// console.log(seleccionUsuario2);

// let preguntarHotel3 = prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro');
// let preguntarHabitacion3 = prompt('Elegi tipo de habitacion: Suite, Doble, Triple');
// let preguntarServicio3 = prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno');

// let seleccionUsuario3 = new Hotel(preguntarHotel3, preguntarHabitacion3, preguntarServicio3);

// console.log(seleccionUsuario3);

// const totalSeleccionUsuario = [seleccionUsuario1, seleccionUsuario2, seleccionUsuario3];

// console.log(totalSeleccionUsuario);

// let preguntarHotel4 = prompt('Elegi un hotel: Punta Cana, Dominica, Grand Bavaro');
// let preguntarHabitacion4 = prompt('Elegi tipo de habitacion: Suite, Doble, Triple');
// let preguntarServicio4 = prompt('Elegi tipo de servicio: All Inclusive, Media Pension, Solo Desayuno');

// let seleccionUsuario4 = new Hotel(preguntarHotel4, preguntarHabitacion4, preguntarServicio4);

// totalSeleccionUsuario.push(seleccionUsuario4);

// console.log(totalSeleccionUsuario);

const reservaNombre = [];

let totalHabitaciones = 5;

do {
    preguntarNombre = prompt('Cual es su nombre para la reserva?');
    reservaNombre.push(preguntarNombre);
    console.log(reservaNombre.length)
    console.log(`Reserva exitosa de ${reservaNombre}`)

} while (reservaNombre.length != totalHabitaciones) {
    if (reservaNombre.length == totalHabitaciones)
        console.log('No hay mas habitaciones')

}


console.log(reservaNombre)