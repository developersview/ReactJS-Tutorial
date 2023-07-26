const movies = [
    "Thor : Love And Thunder",
    "The Interseller",
    "Avengers Endgame",
    "Mission Impossible 6",
    "Inception",
    "Titanic",
    "Prince Of Persia : The Sands of Time"
]

//old way
const cinema1 = movies[0];
const cinema2 = movies[1];
const cinema3 = movies[2];
const cinema4 = movies[3];
console.log(cinema1, cinema2, cinema3, cinema4);

//with Destructuring
const [movie1, movie2, movie3, movie4] = movies;
console.log(movie1, movie2, movie3, movie4)