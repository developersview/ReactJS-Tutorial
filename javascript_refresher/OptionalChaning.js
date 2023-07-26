const book1 = {
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
    },
    reviews: {
        goodreads: {
            rating: 4.44,
            ratingsCount: 2295233,
            reviewsCount: 59058,
        },
        librarything: {
            rating: 4.36,
            ratingsCount: 38358,
            reviewsCount: 1095,
        },
    }
}
const book2 = {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
        goodreads: {
            rating: 4.47,
            ratingsCount: 8910059,
            reviewsCount: 140625,
        }
    }
}

console.log(book1.reviews.librarything.rating);
//console.log(book2.reviews.librarything.rating); // TypeError: Cannot read properties of undefined (reading 'rating')

//using optional chaining
console.log(book2.reviews?.librarything?.rating); // undefined

//using optional chaining and short circuiting
console.log(book2.reviews?.librarything?.rating || `"${book2.title}" book does not have Libarything reviews`);
console.log(book2.reviews?.goodreads ?? `"${book2.title}" book does not have Goodread reviews`);