// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function getReceipe(title, num, inc){
    const reteta = {
        titlu : title,
        portii : num,
        incrediente : inc,
    };

    return reteta;
}

const reteta1 = getReceipe("Pizza", 3, ['sunca', 'cas', 'ketchup']);
const reteta2 = getReceipe("salata", 5, ['rosii', 'castraveti', 'cascaval', 'salata', 'morcovi']);

console.log(`Reteta noastra preferata de astazi este: ${reteta1.titlu}, pentru ${reteta1.portii} portii, cu urmatoarele incrediente: ${reteta1.incrediente}.`);
console.log(`Reteta noastra preferata de astazi este: ${reteta2.titlu}, pentru ${reteta2.portii} portii, cu urmatoarele incrediente: ${reteta2.incrediente}.`);
