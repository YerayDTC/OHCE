import { Ohce, Logger, ConsoleReader } from "./ohce.js";
// Importa las clases Ohce, Logger y ConsoleReader del archivo ohce.js.

// const ohce = new Ohce(new Logger()) // estamos inyectando (refactorizar como este caso)

const logger = new Logger();
// Crea una nueva instancia de Logger. Este objeto será usado para loggear mensajes en la consola.

const reader = new ConsoleReader();
// Crea una nueva instancia de ConsoleReader. Este objeto será usado para leer la entrada del usuario desde la consola.

const ohce = new Ohce(logger, reader);
// Crea una nueva instancia de Ohce, inyectando las instancias de Logger y ConsoleReader como dependencias.

const nombre = process.argv[2];
// Toma el tercer argumento de la línea de comandos (el nombre del usuario) y lo asigna a la variable nombre.

await ohce.execute(nombre);
// Llama al método execute de la instancia de Ohce con el nombre del usuario y espera a que se complete.



/*Resumen de main.js
Importaciones:

Ohce, Logger, ConsoleReader: Importa estas clases desde el archivo ohce.js para usarlas en el programa principal.
Instanciaciones:

Logger: Crea una instancia de Logger para manejar la salida de mensajes.
ConsoleReader: Crea una instancia de ConsoleReader para manejar la entrada de usuario.
Inyección de Dependencias:

Ohce: Crea una instancia de Ohce pasando las instancias de Logger y ConsoleReader como dependencias al constructor. Esto permite a Ohce usar estos objetos para loggear mensajes y leer la entrada del usuario.
Ejecución del Programa:

Nombre del Usuario: Obtiene el nombre del usuario desde los argumentos de la línea de comandos.
Método execute: Llama al método execute de la instancia de Ohce con el nombre del usuario. Este método se encarga de saludar al usuario, procesar sus entradas y manejar la finalización del programa.
Este código constituye el punto de entrada del programa, configurando y ejecutando la aplicación Ohce con las dependencias necesarias para interactuar con el usuario a través de la consola. */