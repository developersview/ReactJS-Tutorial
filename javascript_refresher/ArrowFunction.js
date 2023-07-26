//before ES6
function helloOld() {
    return "Hello World!"
}

/************with arrow function********/

//example 1
const hello = () => {
    return "Hello World!"
}


//example 2
const sum = (a, b) => {
    return a + b;
}
console.log(hello());
console.log(sum(45.02, 89.36));


//example 3
const getYear = (date) => {
    return date.split('-')[0];
}
const getMonth = (date) => {
    return date.split('-')[1];
}
const getDate = (date) => {
    return date.split('-')[2];
}

const dateString = '2022-07-26' //yyyy-mm-dd
console.log(getYear(dateString));
console.log(getMonth(dateString));
console.log(getDate(dateString));
