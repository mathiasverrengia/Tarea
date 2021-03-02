
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];



for (let i = 0; i <=7; i++) {

    if (i % 2 == 0) {

        console.log(`Los días par son: ${dias[i]}`)

    }

    if (i == 6) {

        console.log(`Empieza la semana de nuevo: ${dias[i]}`);

    }

}