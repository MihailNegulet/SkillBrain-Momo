// Returnează numărul de vocale dintr-un șir de caractere (string)

function returneazaNumarVocale(text) {
    let nr = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
            nr = nr + 1;
        }
    }
    return nr;
}
const text = "string de test";

console.log(returneazaNumarVocale(text));
