// TYPE SCRIPT ES COMO SI FUERA JS PERO TIPADO, ESTO PROVOCA QUE LA APARICIÓN DE BUGS SEA MENOR, ES DECIR QUE LO HACE MENOS FLEXIBLE PARA ASÍ SEGUIR LA MANERA CORRECTA DE HACER LAS COSAS.

// Una vez creado el archivo script.ts, en la consola se tiene que escribir 'tsc script.ts', de esta manera creamos una copia exacta de nuestro archivo .ts, pro ahora siendo .js

// Nosotros tenemos que tener un modo observador, es decir si lo vemos bien, lo que está pasando es que nuestro typescript al final se convierte en un JS, pero si nosotros seguimos trabajando con nuestro TS ahora si habrán problemas porque nuestro JS no se estaría actualizando, para esto se utilizaría un modo observador que esté pendiente a cambios dentro del TS para así actualizar a nuestro JS; lo que se tiene que hacer es escribir 'tsc script.ts -w' esto estaría diciendo que se ejcute en modo watch; de esta manera si nosotros cambiamos algo, ahora sí se actulizarán los cambios

// Ahora bien, nosotros también así como se tiene el npm start o ese tipo de cosas, nosotros también tenemos un entorno de ejecución, esto sería como 'tsc -init', de esta manera se podrá utilizar TS sin ningún problema

// Ahora bien, si después de haber ejecutado el 'tsc -init' nosotros escribimos 'tsc -w' lo que estamos indicando así es que ahora sí todo se ejecutará de manera correcta, los archivos TS tendrán su JS de manera automática, pero aparte los JS tendrán un "use strict" ya que dentro del tsconfig.json creado al hacer el tsc -init, nosotros tenemos la configuración en true del "strict", por lo tanto como podemos ver lo definido ahí se verá reflejado en todos nuestros TS.

