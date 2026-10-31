

let fruits = ["apple", "banana", "orange"];
console.log(fruits);

fruits.push("grape");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("kiwi");
console.log(fruits);    

fruits.shift();
console.log(fruits);



let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});


numbers.forEach(function(num) {
    console.log(num * 2);
});

console.log(doubledNumbers);