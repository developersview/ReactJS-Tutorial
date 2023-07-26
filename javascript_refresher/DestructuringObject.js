const book = {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    hasMovieAdaptation: false,
    pages: 295
}

//old way
const bookTitle = book.title;
const bookAuthor = book.author;
const publishedDate = book.publicationDate;
console.log(`The book "${bookTitle}" written by ${bookAuthor} has been published on ${publishedDate}`);

//with Destructuring
const { title, author, publicationDate, pages } = book;
console.log(`The book "${title}" written by ${author} has been published on ${publicationDate}. It contains ${pages} pages.`);