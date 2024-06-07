// DATOS PRIMITIVOS

// ------------- booleanos ------------

// let estudiasteJS : boolean = false;

// if (estudiasteJS) {
//   console.log("Puedes seguir viendo este curso de TS");
// } else {
//   console.log("Seria mejor que aprendas JS primero");
// }

// ------------- numeros ------------

let numero1 : number = 5;
let numero2 : number = 5;

// declarar el void es opcional, pero es bueno colocarlo para indicar que no devolverá nada
function jugar (numero1 : number, numero2 : number) : void {
  if (numero1 > numero2) {
    console.log("El numero 1 es mayor que el numero 2");
  }
  else if (numero1 == numero2) {
    console.log("El numero 1 es igual que el numero 2");
  }
  else {
    console.log("el numero 1 es menor que el numero 2");
  }
}

jugar(numero1, numero2);

// ----------- string -------------
// Usa la misma lógica

// HASTA AHORITA NOS DAMOS CUENTA QUE SERÍA COMO CUANDO TRABAJÁBAMOS CON C O C++ QUE TENIAMOS QUE DELCARAR SI O SI EL TIPO DE DATOS, las ventajas de esto en compración de usar el JS puro y no preocuparnos por este apartado, es que aparte de definir bien los tipos de variables que se usarán, nosotros podemos trabajar de mejor manera con los métodos que incluso nuestro propio editor de texto nos puede sugerir desde el inicio al ya tener declarado el tipo de dato, y que así se sepa a qué métodos se puede acceder desde un inicio.


// **** DATO IMPORTANTE *****
// No nos tenemos que casar con un tipo de dato, es decir que nosotros podemos tener:
// let numero : number = 1;
// Pero suponiendo que trabajamos con una DB en donde no sabemos exactamente si será este dato, podemos tener varias opciones para la misma variable, ejemplo:
// let numero : number | null | undefined = 1;
// De esta manera estamos indicando que podemos recibir un numero, pero también podemos estar recibiendo null o undefined y así no casarnos con un solo tipo de dato para una variable