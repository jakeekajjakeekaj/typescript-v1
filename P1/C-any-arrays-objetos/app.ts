// ---------------- ANY ----------------

// ANY es el tipo de dato que se tiene que intentar evitar en TS, esto es porque el ojetivo de usar TS es que el lenguaje se vuelva más estructurado y ordenado, sin embargo con el ANY es como declarar cualquier versión de JS, es decir que no es necesario declarar el tipo de dato ya que aceptará cualquier tipo de variable.

// EJEMPLO EN TS:

// let disney:any;

// disney = 'Star Wars';
// console.log(disney);

// disney = 1500000000;
// console.log(disney);

// Al declarar el let disney, lo que sucede es que como tenemos a la misma variable como string, pero después la tenemos con enteros, para este caso nuestro let ya pasa a ser como un :any


// ------------------ ARRAYS ----------------

// Nosotros tenemos que declarar el number o el string para indicar el tipo de dato, pero esta vez con corchetes para justamente indicar que es un arreglo de numeros o string por ejemplo

// let arreglo : number[] = [1, 2, 3, 4, 5, 6];

// let arreglo2 : string[] = ['HTML', 'CSS', 'JS', 'TS'];


// ---------------- OBJETOS -----------------

// Al declarar a un objeto de forma tan simple como se muestra abajo, ya se puede observar la estructura que el propio TS se encarga de asignar, esto significa que ya se define la asignación del tipado y así si el objeto se quiere reescribir, tiene que coincidir con el tipado indicado

// let programador = {
//   nombre : 'jakeekajjakeekaj',
//   edad : 24,
//   cool : true
// };

