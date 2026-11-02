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


const date = new Date();
console.log(date.toString());

console.log(date.toISOString());


let member =[
  {id: 1, name: "Abebe", team: "Dev 1", score: 90},
  {id: 2, name: "Kebede",team: "Dev 2", score: 80},
  {id: 3, name: "Alemu",team: "Dev 3", score: 85}
]
const sameMember = member[0]
console.log(sameMember)
 sameMember.score = 100
 console.log(member[0].score)
 member[0].score = 90
 console.log(sameMember === member[0])


 let fined = prompt("Enter the id of the person you want to find: ");
 let foundPerson = pewple.find(person => person.id === parseInt(fined));
 console.log(foundPerson);


const aq =3;
// aq =5;
console.log(aq)

let original = {
  name: "abebe",
  address: {city: "assela"}
}


const  t = {...original}
const ad = structuredClone(original)
console.log(ad)
console.log(t)


let original1 = {
  nname: "abebe",
  address:"assela"
}

let {nname, address} = original1;
console.log(nname);
console.log(address);
console.log(original1.nname);


let ab ="10";
console.log(typeof ab);
let num = parseInt(ab,10);
console.log(num)
console.log(typeof num);