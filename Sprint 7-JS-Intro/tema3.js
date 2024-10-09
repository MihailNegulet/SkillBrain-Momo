// Definim functia
function getDay(n){
    let dayName = 'Astazi este ';

    switch (n){
        case 0:
        case 7:
            dayName += "Duminica";
            break;
        case 1:
            dayName += "Luni";
            break;
        case 2:
            dayName += "AMarti";
            break;
        case 3:
            dayName += "Miercuri";
            break;
        case 4:
            dayName += "Joi";
            break;
        case 5:
            dayName += "Vineri";
            break;
        case 6:
            dayName = "Sambata";
            break;
        default:
            dayName = "Introduceti un numar intre 0 si 7"
    }
    return dayName;
}

// Afisam mai multe rezultate:

console.log(getDay(0));
console.log(getDay(1));
console.log(getDay(7));
console.log(getDay(5));
console.log(getDay(8));

