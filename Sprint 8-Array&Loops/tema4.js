// Returnează numărul de vocale dintr-un șir de caractere (string)

function getNumarVocale(text) {
    let nr = 0;
    const vocale = 'aeiou';
    for (let element of text.toLowerCase()) {
        if (vocale.includes(element)) {
            nr = nr + 1;
        }
    }
    return nr;
}
const text = "La mUlTi Ani";

console.log(getNumarVocale(text));
