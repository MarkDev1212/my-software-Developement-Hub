

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


let x_forward_for = "  10.11.11.11.1   ,  8.8.8.8   ";

let clientId = x_forward_for.split(",")[0].trim();


console.log(clientId);


let isAdmin = false;
if(!isAdmin){
    console.log(!isAdmin);
       console.log("You are not an admin");

}
else{
    console.log("You are an admin");
}


let abebe = "    aaaaaa     "
console.log(abebe.trim());


let ar = "you know"

console.log("this is javascript"+ar+ " and this is a string");


console.log(`this is javascript ${ar}

        
     and this is a string `);


     const conditions = [
  "u.status = 'ACTIVE'",
  "u.first_name LIKE ?",
  "u.email LIKE ?"
];

const result = conditions.join(' AND ');
console.log(conditions.length);
console.log(result);

let now = new Date();
console.log(now.toString());
console.log(now.toISOString());