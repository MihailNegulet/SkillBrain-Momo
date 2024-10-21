// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function getRecipe(title, mumberOfPortions, incredients) {
    const reteta = {
        titlu: title,
        portii: mumberOfPortions,
        incrediente: [...incredients],
    };

    return reteta;
}

const showRecipe = (reteta) => {
    console.log(`Reteta noastra preferata de astazi este: ${reteta.titlu}, pentru ${reteta.portii} portii, cu urmatoarele incrediente: ${reteta.incrediente}.`);
}

const reteta1 = getRecipe("Pizza", 3, ['sunca', 'cas', 'ketchup']);
const reteta2 = getRecipe("salata", 5, ['rosii', 'castraveti', 'cascaval', 'salata', 'morcovi']);

showRecipe(reteta1);
showRecipe(reteta2);

