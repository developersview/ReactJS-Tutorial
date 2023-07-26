const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [one, two, ...rest] = numbers;
console.log(one, two, rest);

//updating array using spread opeartor
const newArray = [...numbers, 9, 10];
console.log(newArray);

//updating objects
const book = {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    hasMovieAdaptation: true,
    pages: 295
}
const updateBook = { ...book, moviePublicationDate: "2022-05-12" }
console.log(updateBook);

//creating new object from two diffrent objects
const myVehicle = {
    brand: "Royal Enfield",
    model: "Hunter 350",
    color: "Rebel Red"
}
const vehicleDetails = {
    type: "Bike",
    year: 2022,
    cost: 215000
}
const myUpdateVehicle = { ...myVehicle, ...vehicleDetails };
console.log(myUpdateVehicle)