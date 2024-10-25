// Scrieți o funcție pentru a adăuga numere nelimitate
// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției.
// Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

const addNumber = (...arguments) => console.log(arguments.reduce((acc, current) => acc + current, 0));

addNumber(1, 2, 3);
addNumber(1, 2, 3, 4, 5);