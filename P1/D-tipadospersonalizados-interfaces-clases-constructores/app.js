"use strict";
// -------------- TIPADOS PERSONALIZADOS ---------------
// Nosotros podemos definir desde aquí los datos que se estarán aceptando dentro de nuestro objeto, pero no solo eso, si hay algún dato que puede que esté o no esté en nuestro backend, nosotros colocamos ? para indicar que puede o no estar, como en el caso de 'cool? : boolean' de esta manera aunque no se encuentre el dato no marcará error porque estamos indicando que puede o no estar; así mismo si queremos indicar que podemos recibir más tipos de datos, en vez de declarar ': any', simplemente basta con escribir un pipe y el tipo de dato, es decir 'cool? : boolean | null' y de esta manera acabamos con el probelma, así nos acepta booleano o null, y nos evitamos el uso del any
// type Programador = {
//   nombre : string,
//   tecnologias : string[],
//   cool? : boolean | null
// };
// let programador : Programador = {
//   nombre : 'jakeekajjakeekaj',
//   tecnologias : ['HTML', 'CSS'],
//   cool : true
// };
// let programador2 : Programador = {
//   nombre : 'jakeekajjakeekaj2',
//   tecnologias : ['HTML', 'JS','TS']
// }
// ------------------- INTERFACES -------------------
// Las interfaces son como los objetos al momento de declararlas, la diferencia es que ya no se coloca el signo de =, pero a su vez nosotros podemos observar que a pesar de no existir objetos con el tipado declarado, es decir que pertenecen a otro tipo de objeto o interfaz, con que cumplan con lo indicado de la interfaz, es suficiente para que sean aceptados a pesar de tener otras variables
// interface Programador {
//   nombre : string,
//   tecnologias : string[],
//   cool? : boolean | null
// };
// let programador : Programador = {
//   nombre : 'jakeekajjakeekaj',
//   tecnologias : ['HTML', 'CSS'],
//   cool : true
// };
// // Como se observa, aquí abajo ya no estamos indicando el tipo Programador y a su vez agregamos un dato extra (apellido)
// let programador2 = {
//   nombre : 'jakeekajjakeekaj2',
//   tecnologias : ['HTML', 'JS','TS'],
//   apellido : 'ekaj'
// };
// const enviarCurriculum = (programador : Programador)=> {
//   console.log(`Este curriculum es de ${programador.nombre}`)
// };
// enviarCurriculum(programador);
// // Salta como correcto ya que contiene los datos de nombre y tecnologias, es decir al ejecutar la función, a pesar de indicar que es con el tipado Porgramador, debido a que el objeto contiene los datos necesarios de la interfaz, si pasa a pesar de tener datos extra
// enviarCurriculum(programador2);
// --------------------- CLASES Y POO ----------------
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} está siendo proyectada`);
    }
    // De esta manera definimos a nuestro constructor, como se puede observar, lo que se realiza es primero encapsulamos los valores que si van a inicializar, y una vez enviados desde fuera de la clase, únicamente con el this.nombre por ejmplo, asignamos el valor del nombre encapsulado con el valor de la variable indicada aquí mismo en la clase y así almacenar dicho dato y trabajar con el mismo dentro del método
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('StarWars', ['Anakin', 'Obi-Wan'], ['sepa1', 'sepa2']);
pelicula.proyectarEnCine();
