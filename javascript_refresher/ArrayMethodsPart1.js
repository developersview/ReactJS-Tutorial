//Array.prototype.map() method
const array1 = [1, 4, 9, 16];
const newArray1 = array1.map(x => x * 2);
console.log(newArray1);

//Array.prototype.find()
const array2 = [2, 8, 10, 15, 45, 26];
console.log(array2.find(
    element => element > 10)
);

//Array.prototype.findIndex() method
const array3 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array3.findIndex(isLargeNumber));

//Array.prototype.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//Array.prototype.reduce()
const message = ["JavaScript ", "is ", "fun."];
const initialValue = '';
const joinedString = message.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(joinedString);

//Array.prototype.concat() method
const array4 = ['a', 'b', 'c'];
const array5 = ['d', 'e', 'f'];
const array6 = array4.concat(array5);
console.log(array6);