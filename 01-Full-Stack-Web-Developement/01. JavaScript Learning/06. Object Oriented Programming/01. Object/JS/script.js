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


const skillRows = [
  { skill: 'JavaScript' },
 
  { skill: 'Node.js' },
  { skill: 'React' }
];

const skills = skillRows.map((rq) => rq.skill);

console.log(skills);

console.log(isNaN(100));       // false
console.log(isNaN('Mark'));    // true
console.log(isNaN('123'));     // false
console.log(isNaN('Hello123'));// true

const now = new Date();
console.log(now);

const b = new Date('2026-11-01T07:54:11.000Z');
console.log(b);

let a = (now - b) / (1000 *60);
console.log(a.toFixed(2));


let obj = {
  name: "Abebe",
  1: "JavaScript",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
obj.greet();
console.log(obj.name);
console.log(obj["age"]);
console.log(obj[1]);
console.log(obj["1"]);
// console.log(obj.1);  //this is not valid because 1 is not a valid identifier for a property name in JavaScript. Property names that are numbers must be accessed using bracket notation, as shown above.
// so bracket notation is used to access properties with numeric keys or keys that are not valid identifiers.
  let key = 1;
console.log(obj.key); // this will access the property with key 1, which is "JavaScript" but the out put will be undefined because obj.key is not a valid property name. To access the property with key 1, we need to use bracket notation like this:

console.log(obj[key]); // this will access the property with key 1, which is "JavaScript"
