const hello = (name) => `Hello, ${name}`;
let resutlt = hello('Pranoy');
console.log(resutlt);

let obj1 = {
    a: 25,
    b: 56,
    sum: function (a, b) {
        console.log(a + b);
    }
}

obj1.sum(4, 5);

document.getElementById("h1-tag").addEventListener("click", clickFunc = () => {
    let sure = confirm("Are you sure?");
    console.log(sure);
})

let arr = [24, 26, 27, 289, 9, 0, 29, 20, 98, 76];
arr.forEach(element => {
    console.log(element);
});