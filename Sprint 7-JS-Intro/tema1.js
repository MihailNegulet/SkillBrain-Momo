// Definim functia
function isDividedByTen(x) {
    return x % 10 === 0;
}

// Creem o functie pentru a nu se mai repeta textul
function printOutput(n) {
    console.log(`Numarul ${n} este divizibil cu 10? ` + isDividedByTen(n));
}

// Afisam rezultatele
printOutput(23);
printOutput(100);
