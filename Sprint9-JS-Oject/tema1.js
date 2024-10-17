// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function getObject(){
    const reteta = {
        titlu : "Pizza",
        portii : 3,
        incrediente : ["sunca", "cas", "ketchup"],
    };

    return reteta;
}

console.log(getObject());