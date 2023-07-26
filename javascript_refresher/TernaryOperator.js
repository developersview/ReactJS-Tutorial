const book = {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure", "Thriller"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
    }
}

//old way
if (book.pages > 200) {
    console.log('This book has more than 200 pages');
} else {
    console.log('This book has less than 200 pages');
}

//with ternary operator
const pageDetails = book.pages > 200 ? "This book has more than 200 pages" : "This book has less than 200 pages";
console.log(pageDetails);

const genereDetails = book.genres.length > 0 ? book.genres : "Book Genere details does not exists";
console.log(genereDetails);