// Scrieți o funcție pentru a adăuga numere nelimitate
// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției.
// Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

const addNumber = (...arguments) => arguments.reduce((acc, current) => acc + current, 0);

const printSum = (...arguments) => console.log(addNumber(...arguments));


printSum(1, 2, 3);
printSum(1, 2, 3, 4, 5);