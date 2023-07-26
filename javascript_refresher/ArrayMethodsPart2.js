//Array.prototype.slice() method
const animals = ['tiger', 'bison', 'camel', 'lion', 'elephant', 'zebra', 'horse'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());

/**************Array.prototype.splice() method************/
let languages = ["JavaScript", "Python", "Java", "Lua"];

// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages); // [ 'JavaScript', 'Java', 'C++' ]


/****************Array.prototype.sort() method**********************/
//built in sort method
var names = ["Adam", "Jeffrey", "Fabianoooo", "Danil", "Ben"];
console.log(names.sort());

//custom sort function
const len_compare = (a, b) => a.length - b.length;
console.log(names.sort(len_compare));