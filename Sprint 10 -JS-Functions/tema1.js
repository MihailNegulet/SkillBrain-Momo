// Scrieți o funcție care returnează pătratul unui număr
// Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca 
// argument în apelul funcției).

const getSquare = (num) => num*num;

const printResult = (num) => console.log(getSquare(num));


printResult(6);
printResult(0);
printResult(-12);