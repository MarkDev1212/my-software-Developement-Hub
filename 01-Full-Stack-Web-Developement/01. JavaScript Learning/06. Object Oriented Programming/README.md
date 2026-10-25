# 6. Introduction to Object-Oriented Programming

## 6.1 The Object-Oriented Data Model

Using structured data such as arrays is very helpful in programming. However, arrays alone are not always enough to describe real-world objects effectively to computers.

To represent real-world entities more clearly, we use **data models**.

### What Is a Data Model?

A **data model** is a model that organizes data elements and defines how they relate to one another.

Data elements describe real-world people, places, things, and the events or relationships between them. Therefore, a data model helps represent aspects of the real world in a form that computers can work with.

Examples:

- A car has tires.
- A cow has four legs.
- A person has a name and a date of birth.

One commonly used approach is the **Object-Oriented Data Model**.

### What Is the Object-Oriented Data Model?

Humans naturally understand real-world situations in terms of people, places, and things. We can represent these things as objects in programming so that computers can store information about them and perform related actions.

**Object-oriented data modeling** is a way of representing real-world entities as objects, including their properties, behaviors, and interactions.

For example, a car can be represented as an object with properties such as its model, color, and number of doors, as well as behaviors such as starting, accelerating, and stopping.

---

## Components of the Object-Oriented Data Model

The main building blocks of object-oriented programming include objects, attributes, methods, events, classes, and inheritance.

### 1. Objects

An **object** represents a real-world entity or an abstract concept that we want to describe to a computer.

Objects can represent physical things, such as cars and people, or abstract concepts, such as user accounts and shopping carts.

Examples:

- A particular car.
- A specific person.
- A customer account.
- A shopping cart in an online store.

In JavaScript, an object can store related information as properties.

```javascript
const car = {
    model: "Toyota Corolla",
    color: "Black",
    doors: 4
};
```

Here, `car` is an object representing a particular car.

### 2. Attributes (Properties)

**Attributes** describe the characteristics or properties of an object.

For example, a `PERSON` object might have the following attributes:

- Name
- Date of birth
- Address
- Age

In JavaScript, these characteristics can be represented as object properties.

```javascript
const person = {
    name: "Mark",
    dateOfBirth: "2003-05-15",
    age: 23
};
```

The properties `name`, `dateOfBirth`, and `age` describe the person.

### 3. Methods (Functions or Actions)

**Methods** represent the behaviors or actions associated with an object. They answer the question: "What does this object do?"

For example, a car can:

- Start.
- Accelerate.
- Decelerate.
- Stop.

In JavaScript, we can define these behaviors as methods.

```javascript
const car = {
    model: "Toyota Corolla",

    startCar() {
        console.log("The car has started.");
    },

    accelerate() {
        console.log("The car is accelerating.");
    },

    decelerate() {
        console.log("The car is slowing down.");
    }
};

car.startCar();
car.accelerate();
car.decelerate();
```

The methods define actions that can be performed through the `car` object.

### 4. Events

**Events** represent occurrences or interactions that can trigger actions in a program.

For example, in a car simulation:

| Event | Action |
|---|---|
| The user enters the car | Prepare to start the car |
| The user presses the Up Arrow key | Accelerate |
| The user presses the Down Arrow key | Decelerate |

In JavaScript, events are commonly handled using event listeners.

```javascript
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        console.log("Accelerate");
    }

    if (event.key === "ArrowDown") {
        console.log("Decelerate");
    }
});
```

This example listens for keyboard events and responds to the Up and Down Arrow keys.

### 5. Classes

A **class** is a blueprint for creating objects that share similar properties and behaviors.

For example, a `Person` class could describe the common properties and methods of people. Individual people would then be represented by separate objects created from that class.

In a class-based model:

- `Person` is the class.
- Mark is one person represented by an instance.
- Abebe is another person represented by an instance.

A class can also be used as a parent class for more specialized classes, such as `Customer` and `Employee`.

#### JavaScript Example

Modern JavaScript supports class syntax.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}.`);
    }
}

const person1 = new Person("Mark", 23);
const person2 = new Person("Abebe", 25);

person1.introduce();
person2.introduce();
```

Output:

```text
My name is Mark.
My name is Abebe.
```

Here, `Person` is a class, and `person1` and `person2` are separate instances of that class.

**Important JavaScript note:** JavaScript supports the `class` keyword, but its object-oriented inheritance model is prototype-based. Class syntax provides a more familiar way to create objects and establish inheritance using JavaScript's prototype system.

### 6. Inheritance

**Inheritance** allows one class or object to reuse properties and methods from another class or object.

For example, `Customer` and `Employee` can share common properties inherited from a `Person` class.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`My name is ${this.name}.`);
    }
}

class Customer extends Person {
    purchase() {
        console.log(`${this.name} is purchasing a product.`);
    }
}

const customer = new Customer("Mark");

customer.introduce();
customer.purchase();
```

Output:

```text
My name is Mark.
Mark is purchasing a product.
```

The `Customer` class inherits the `name` property and `introduce()` method from `Person`. It also defines its own `purchase()` method.

In JavaScript, this inheritance works through the prototype chain.

---

## Example: Describing a Car Using the Object-Oriented Data Model

Let's represent a car using the concepts discussed above.

### Object

The object represents a particular car.

### Properties

The car has the following properties:

- `model`
- `make`
- `color`
- `doors`

### Methods (Actions)

The car can perform the following actions:

- `startCar()` — starts the car.
- `accelerate()` — increases speed.
- `decelerate()` — decreases speed.

### Events

The car simulation responds to events such as:

- Entering the car.
- Pressing the Up Arrow key.
- Pressing the Down Arrow key.

### JavaScript Implementation

```javascript
const car = {
    make: "Toyota",
    model: "Corolla",
    color: "Black",
    doors: 4,

    startCar() {
        console.log("The car has started.");
    },

    accelerate() {
        console.log("The car is accelerating.");
    },

    decelerate() {
        console.log("The car is decelerating.");
    }
};

console.log(car.make);
console.log(car.color);

car.startCar();
car.accelerate();
car.decelerate();
```

Output:

```text
Toyota
Black
The car has started.
The car is accelerating.
The car is decelerating.
```

At this point, the computer can work with the information we have provided about the car. However, it does not automatically know everything about a real car.

For example, unless we add the relevant properties, the computer does not know that the car has windows, tires, seats, or an engine.

We must explicitly represent the information and behaviors that our program needs.

---

## Summary

- A **data model** organizes data and describes relationships between data elements.
- The **object-oriented data model** represents real-world entities as objects.
- **Objects** represent entities or concepts.
- **Attributes or properties** describe an object's characteristics.
- **Methods** describe an object's behaviors.
- **Events** represent occurrences or interactions that can trigger actions.
- **Classes** provide blueprints for creating objects with shared characteristics and behaviors.
- **Inheritance** allows classes or objects to reuse properties and methods.
- JavaScript supports objects, classes, and inheritance through its prototype-based object model.
- Computers only know the properties, behaviors, and relationships that we explicitly represent in our programs.
