// Calculați suma numerelor dintr-un șir de numere


function getArraySum(array){
    let output = 0;
    for (let element of array) {
        output = output + element;
    }
    return output;
}

const array1 = [1, -5, 20, -34, 16, 29, 36, -4]
const array2 = [3.45, -2.68, 356, -75.96, 64, 19.28]


console.log(getArraySum(array1));
console.log(getArraySum(array2));

