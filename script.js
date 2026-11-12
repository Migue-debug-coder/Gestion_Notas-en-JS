const lista_notas = [];
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
            let max = -Infinity;
            let min = Infinity;
            let suma = 0;
            if (lista.length == 0) {
                window.alert("No se puede mostrar estadísticas porque la lista de notas está vacía");
            } else {
                for (const valor of lista) {
                    if (valor > max) {
                        max = valor;
                    }
                    if (valor < min) {
                        min = valor;
                    }
                    suma += valor;
                }

                window.alert(`La nota máxima es: ${max} \n` +
                    `La nota mínima es: ${min} \n` +
                    `El promedio de notas de la lista es: ${suma / lista.length}`
                );
            }
            break;
        case "E":
            lista_notas.length = 0;
            window.alert("La lista de notas ha sido vaciada");
            break;
        case "F":
            let num = parseInt(window.prompt("Introduzca el número de notas que desea generar: "));
            let valor = parseFloat(window.prompt("Introduzca el valor de esas notas: "));
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
            break;
        case "K":
            let posicion = parseInt(window.prompt("¿En que posición desea introducir la nota?: "));
            
            break;

    }


} while (validacion);

function introduceNota() {
    let nota = 0;
    do {
        nota = parseFloat(window.prompt("Introduzca una nota: ")).toFixed(2);
    } while (nota < 0 || nota > 10);

    return nota;
}