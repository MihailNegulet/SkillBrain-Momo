// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

function getPartOfObject(obj, propertyToRemove) {
    const obj2 = {...obj};
    delete obj2[propertyToRemove];

    return obj2;
}

const obiect = {
    a: 1,
    b: 2,
}

console.log(getPartOfObject(obiect, "b"));
console.log(obiect);