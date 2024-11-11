const adviceID = document.getElementById("advice-id");
const textAdvice = document.getElementById("advice-text");
const button = document.getElementById("dice-button");



const randomAdvice = (text) => textAdvice.textContent = text;
const randomId = (id) => adviceID.textContent = "ADVICE #" + id;

async function tellAdvice () {
    
    const url = "https://api.adviceslip.com/advice";

    let text = '';
    let id = '';
    try {
        const response = await fetch(url);
        const data = await response.json();

        text = '"' + data.slip.advice + '"';
        id = data.slip.id;
       
    }
    catch(e) {
        console.log(e);
    }
    
    randomAdvice(text);
    randomId(id);

}

button.addEventListener('click', tellAdvice);
