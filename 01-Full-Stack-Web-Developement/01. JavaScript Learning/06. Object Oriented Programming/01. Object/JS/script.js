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



