// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

const letterCount = (str, letter) => {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            num++;
       }
    }
    return num;
}

const showNumberOfLetters = (text, letter) => 
    console.log(`Litera '${letter}' apare de ${letterCount(text, letter)} ori în șirul '${text}'.`);

showNumberOfLetters("Îmi place progrAmarea", "a");
showNumberOfLetters("Vreau să lucrez în IT", "R");
