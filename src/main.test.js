import { describe, it, expect, vi } from "vitest";
// Importa funciones y objetos necesarios de la biblioteca de pruebas Vitest.

import { Ohce } from "./ohce.js";
// Importa la clase Ohce del archivo ohce.js para poder probarla.

describe("Default test", () => {
  // Define un conjunto de pruebas agrupadas bajo el nombre "Default test".

  it("should greet the user", async () => {
    // Define una prueba individual con el nombre "should greet the user".

    const logger = { log: vi.fn() };
    // Crea un espía para el método log. Esto permite verificar si log fue llamado y con qué argumentos.

    const reader = { readLine: vi.fn().mockResolvedValue("Stop!") };
    // Crea un espía para el método readLine. Simula que readLine siempre devuelve "Stop!".

    const ohce = new Ohce(logger, reader);
    // Crea una instancia de Ohce, inyectando los espías de logger y reader.

    await ohce.execute("yeray");
    // Ejecuta el método execute de la instancia de Ohce con el nombre "yeray".

    expect(logger.log).toHaveBeenCalledWith("Buenos días yeray");
    // Verifica que el método log haya sido llamado con "Buenos días yeray".

    expect(logger.log).toHaveBeenCalledWith("Adios yeray");
    // Verifica que el método log haya sido llamado con "Adios yeray".
  });

  it("should reverse input", async () => {
    // Define una prueba individual con el nombre "should reverse input".

    const logger = { log: vi.fn() };
    // Crea un espía para el método log.

    const reader = { readLine: vi.fn().mockResolvedValueOnce("hola").mockResolvedValueOnce("Stop!") };
    // Crea un espía para el método readLine. Simula que la primera vez devuelve "hola" y la segunda vez "Stop!".

    const ohce = new Ohce(logger, reader);
    // Crea una instancia de Ohce, inyectando los espías de logger y reader.

    await ohce.execute("yeray");
    // Ejecuta el método execute de la instancia de Ohce con el nombre "yeray".

    expect(logger.log).toHaveBeenCalledWith("aloh");
    // Verifica que el método log haya sido llamado con "aloh", la versión inversa de "hola".
  });

  it("should recognize a palindrome", async () => {
    // Define una prueba individual con el nombre "should recognize a palindrome".

    const logger = { log: vi.fn() };
    // Crea un espía para el método log.

    const reader = { readLine: vi.fn().mockResolvedValueOnce("oto").mockResolvedValueOnce("Stop!") };
    // Crea un espía para el método readLine. Simula que la primera vez devuelve "oto" y la segunda vez "Stop!".

    const ohce = new Ohce(logger, reader);
    // Crea una instancia de Ohce, inyectando los espías de logger y reader.

    await ohce.execute("yeray");
    // Ejecuta el método execute de la instancia de Ohce con el nombre "yeray".

    expect(logger.log).toHaveBeenCalledWith("oto");
    // Verifica que el método log haya sido llamado con "oto", la versión inversa de "oto".

    expect(logger.log).toHaveBeenCalledWith("¡Bonita palabra!");
    // Verifica que el método log haya sido llamado con "¡Bonita palabra!", indicando que "oto" es un palíndromo.
  });
});


/*Resumen
Importaciones:

describe, it, expect, vi son funciones y objetos de Vitest para definir y ejecutar pruebas.
Ohce es la clase que estamos probando, importada del archivo ohce.js.
Definición de Conjunto de Pruebas:

describe agrupa varias pruebas bajo un nombre común, en este caso, "Default test".
Pruebas Individuales:

Cada it define una prueba específica.
logger y reader son espías (mocks) creados con vi.fn() para simular y verificar interacciones.
ohce es la instancia de la clase Ohce que se está probando, con los espías inyectados.
await ohce.execute("yeray") ejecuta el método execute de la instancia Ohce con el argumento "yeray".
expect verifica que los métodos de los espías hayan sido llamados con los argumentos esperados.
Funcionamiento del Código de Pruebas
El objetivo de las pruebas es verificar que:

Ohce saluda al usuario correctamente.
Invierte las entradas correctamente.
Reconoce y responde a los palíndromos.
Termina la ejecución cuando se introduce "Stop!". */