// Returnează numărul de vocale dintr-un șir de caractere (string)

const text = "string de test";

let nr = 0;
function returneazaNumarVocale(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
            nr = nr + 1;
        }
    }
    return nr;
}

console.log(returneazaNumarVocale(text));