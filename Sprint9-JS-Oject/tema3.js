// Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).

const books = [
    {
        titlu: "Hobbitul",
        autor: "J.R.R. Tolkien",
        esteCitita: true,
    },
    {
        titlu: "Harry Potter",
        autor: "J.K. Rowling",
        esteCitita: false,
    }, 
    {
        titlu: "Atomic Habits",
        autor: "James Clear",
        esteCitita: false,
    }
];

function printBooksStatus (books) {
    for (let book of books) {
        if (book.esteCitita) {
            console.log(`Ai citit deja "${book.titlu}" de "${book.autor}".`);
        }
        else {
            console.log(`Trebuie sa citesti "${book.titlu}" de "${book.autor}".`);
        }
    }
}


printBooksStatus(books);
