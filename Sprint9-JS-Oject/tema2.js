// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

function getPartOfObject(obj, p){
    const obj2 = {...obj};
    
    for(let propietati of p) {
        delete obj2[propietati];
    }

    return obj2;
}

const obiect = {
    a: 1,
    b: 2,
}

console.log(getPartOfObject(obiect, "b"));
console.log(obiect);