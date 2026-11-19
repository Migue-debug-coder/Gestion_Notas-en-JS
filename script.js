let lista_notas = [];
let validacion = false;
// Variable para pasarla como parámetro para la funcion validarNota(nota)

do {
    const opcion = window.prompt("Bienvenido al Gestor de Notas,¿Que desea Realizar?: \n" +
        "A. Introducir una nota al principio \n" +
        "B. Introducir una nota al final \n" +
        "C. Subir todas las notas X puntos \n" +
        "D. Calcular estadísticas actuales \n" +
        "E. Vaciar notas \n" +
        "F. Inicializar N notas a valor X \n" +
        "G. Eliminar la primera nota \n" +
        "H. Eliminar la segunda nota \n" +
        "I. Establecer a 0 todos los suspensos \n" +
        "J. Sustituir una nota por otra \n" +
        "K. Añadir una nota en una posición determinada \n" +
        "L. Contar el número de suspensos \n" +
        "M. Salir \n"
    ).toUpperCase();

    switch (opcion) {
        case "A":
            lista_notas.unshift(introduceNota());
            break;
        case "B":
            lista_notas.push(introduceNota());
            break;
        case "C":
            let puntos = parseFloat(window.prompt("Introdzca el número de puntos a subir: "));
            for (let i = 0; i < lista_notas.length; i++) {
                if (!(puntos + lista_notas[i] > 10)) {
                    lista_notas[i] += puntos;
                } else {
                    lista_notas[i] = 10;
                }
            }
            break;
        case "D":
            let suma = 0;
            if (lista_notas.length == 0) {
                window.alert("No se puede mostrar estadísticas porque la lista de notas está vacía");
            } else {
                for (let i = 0; i < lista_notas.length; i++) {
                    suma += lista_notas[i];
                }
                let lista_notas_copy = [...lista_notas];
                lista_notas_copy.sort();

                window.alert(`La moda es ${obtenerModa(lista_notas)}\n` +
                    `La nota máxima es: ${lista_notas_copy[0]} \n` +
                    `La nota mínima es: ${lista_notas_copy[lista_notas_copy.length - 1]} \n` +
                    `El promedio de notas de la lista es: ${parseFloat(suma / lista_notas.length).toFixed(2)}`
                );
            }
            break;
        case "E":
            lista_notas.length = 0;
            window.alert("La lista de notas ha sido vaciada");
            break;
        case "F":
            const num = parseInt(window.prompt("Introduzca el número de notas que desea generar: "));
            const valor = parseFloat(window.prompt("Introduzca el valor de esas notas: "));
            lista_notas = new Array(num);
            lista_notas.fill(valor);
            break;
        case "G":
            if (lista_notas.length == 0) {
                window.alert("No se puede eliminar la primera nota porque la lista de notas está vacía");
            } else {
                lista_notas.shift();
            }
            break;
        case "H":
            if (!(lista_notas.length >= 2)) {
                window.alert("No existe una segunda nota en la lista");
            } else {
                lista_notas.splice(2, 1);
            }
            break;
        case "I":
            for (let i = 0; i < lista_notas.length; i++) {
                if (lista_notas[i] < 5) {
                    lista_notas[i] = 0;
                }
            }
            break;
        case "J":
            let nota_origen = introduceNota();
            let nota_destino = introduceNota();
            for (let i = 0; i < lista_notas.length; i++) {
                if (lista_notas[i] == nota_origen) {
                    lista_notas[i] = nota_destino;
                }
            }
            break;
        case "K":
            let nota_posicion = introduceNota();
            let posicion = parseInt(window.prompt("¿En que posición desea introducir la nota?: "));
            if (posicion > lista_notas.length - 1 || posicion < 0) {
                window.alert("No existe dentro de la lista de notas la posición indicada");
            } else {
                lista_notas.splice(posicion, 0, nota_posicion);
            }
            break;
        case "L":
            let suspensos = 0;
            for (let i = 0; i < lista_notas.length; i++) {
                if (lista_notas[i] < 5) {
                    suspensos++;
                }
            }
            window.alert(`El número total de suspensos es de: ${suspensos}`);
            break;
        case "M":
            window.alert("Has seleccionado salir del programa de Gestión de Notas, Hasta la Próxima!");
            validacion = true;
            break;
        default:
            window.alert("Introduzca una opción válida");
            break;
    }


} while (!validacion);

console.table(lista_notas);

function introduceNota() {
    let nota = 0;
    do {
        nota = parseFloat(parseFloat(window.prompt("Introduzca una nota: ")).toFixed(2));
    } while (nota < 0 || nota > 10);

    return nota;
}

// ---------- Cómo Obtener la Moda con arrays ----------
// function obtenerModa(array) {
//   let moda = array[0];
//   let contadorMaximo = 0;

//   for (let i = 0; i < array.length; i++) {
//     let contador = 0;

//     for (let j = 0; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         contador++;
//       }
//     }

//     if (contador > contadorMaximo) {
//       contadorMaximo = contador;
//       moda = array[i];
//     }
//   }
//   return moda;
// }

// ---------- Cómo Obtener la Nota usando Mapas ----------
function obtenerModa(lista_notas) {
    let mapa = new Map();
    for (nota of lista_notas) {
        if (mapa.has(nota)) {
            mapa.set(nota, mapa.get(nota) + 1);
        } else {
            mapa.set(nota, 1);
        }
    }
    let moda = 0;
    let repes_max = 0;
    for (nota of mapa.keys()) {
        if (repes_max < mapa.get(nota)) {
            repes_max = mapa.get(nota);
            moda = nota;
        }
    }
    return moda;
}