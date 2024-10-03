// Definim functia
function getDay(n){
    let dayName;

    switch (n){
        case 0:
            dayName = "Astazi este Duminica";
            break;
        case 1:
            dayName = "Astazi este Luni";
            break;
        case 2:
            dayName = "Astazi este Marti";
            break;
        case 3:
            dayName = "Astazi este Miercuri";
            break;
        case 4:
            dayName = "Astazi este Joi";
            break;
        case 5:
            dayName = "Astazi este Vineri";
            break;
        case 6:
            dayName = "Astazi este Sambata";
            break;
        default:
            dayName = "Introduceti un numar intre 0 si 6"
    }
    return dayName;
}

// Afisam mai multe rezultate:

console.log(getDay(0));
console.log(getDay(1));
console.log(getDay(7));
console.log(getDay(5));
