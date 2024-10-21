// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function getReceipe(title, mumberOfPortions, incredients){
    const reteta = {
        titlu : title,
        portii : mumberOfPortions,
        incrediente : incredients,
    };

    return reteta;
}

const showReceipe = (reteta) => {
    console.log(`Reteta noastra preferata de astazi este: ${reteta.titlu}, pentru ${reteta.portii} portii, cu urmatoarele incrediente: ${reteta.incrediente}.`);

}

const reteta1 = getReceipe("Pizza", 3, ['sunca', 'cas', 'ketchup']);
const reteta2 = getReceipe("salata", 5, ['rosii', 'castraveti', 'cascaval', 'salata', 'morcovi']);

showReceipe(reteta1);
showReceipe(reteta2);

