// ENCAPSULAMIENTO Y GENÉRICOS
// GETTERS Y SETTERS
// Para este caso, se utilizan los Getters y Setters para así tenes encapsulado todo y así poder estar trabajando con datos privados

// Al tener <T> se le denomina como un dato genérico, es decir que nosotros nombramos el dato con cualquier nombre entre pico paréntesis <cualquier-dato> y más abajo al crear objetos de esta clase, nosotros indicamos el tipo de dato de la misma manera, es decir <number> o <string> como ejemplo
class Sorteo <T> {
  private ticket? : T;

  constructor(private nombre : string) {

  }

  // Aquí se trabaja con el tipo de dato encapsulado, para así indicar si llevará numeros o letras
  setTicket(ticket : T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear() : string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
};

// Aquí se indica un objeto que contendrá solo números
let sorteo = new Sorteo<number>('Jakeekajjakeekaj');
sorteo.setTicket(7);
console.log(sorteo.sortear());

// Este sería un ejemplo mandando a llamar a la misma clase, peo esta vez creando un objeto que acepte string en vez de números
let sorteo2 = new Sorteo<string>('Jakeekajjakeekaj');
sorteo2.setTicket('ABC7');
console.log(sorteo2.sortear());