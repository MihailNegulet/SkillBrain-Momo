// Tipăriți toate numerele pare de la 0 la 10

let text = "Numerele sunt: ";
let n = 10;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        text += i;
        if (i < n- 1) {
            text += ', ';
        }
    }
}
console.log(text);
