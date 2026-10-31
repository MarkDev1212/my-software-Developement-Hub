//object is a collection of key value pairs

//normal way of creating an object
let abebe ={
    full_name: "Abebe",
    age: 25,
    isStudent: true
}
console.log(abebe.full_name);
console.log(abebe.age);

//object distructuring
//object distructuring is a way to extract values from an object and assign them to variables
//it helps to write cleaner code and avoid repetition

let {full_name, age, isStudent} = abebe;
console.log(full_name);
console.log(age);
console.log(isStudent);
