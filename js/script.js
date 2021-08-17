class Prueba {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.familia = familia;
    }
    visualizar() {
        console.log(this);
    }
}

this.direccion = prompt('pasame tu direccion');
this.familia = prompt('cuantas personas son en tu familia');

let david = new Prueba('david', 'lee', 34)

console.log(david)