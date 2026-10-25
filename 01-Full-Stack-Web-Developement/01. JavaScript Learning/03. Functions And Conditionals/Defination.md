# 3. Functions and Conditional Statements

## 3.1 What Are Functions? Why Do We Need Them?

### What Are Functions and Methods?

**Functions and methods** are sets of instructions or procedures that we design and group together to perform a specific task.

You can think of functions as verbs in English or any other human language. A verb describes an action, and a function defines a set of instructions that a computer can execute to perform an action.

Writing a function means defining a block of code that we can use later in our program whenever we need it.

### Example: Understanding the Function "RUN"

If we say **"RUN"** in English, it describes an action that involves several smaller steps.

Running can be broken down into the following instructions:

1. Stand on your right leg.
2. Lift your left leg.
3. Move your left leg in front of your right leg.
4. Stand on your left leg.
5. Lift your right leg.
6. Move your right leg in front of your left leg.
7. Repeat these steps continuously and faster.

Walking and running can each be thought of as actions made up of multiple instructions.

Similarly, in programming, a function groups several instructions together so that they can be executed as one task.

### Difference Between Functions and Methods

Functions and methods are closely related, but there is an important difference.

- **Function:** A reusable block of code that can be called independently.
- **Method:** A function associated with an object.

In JavaScript, methods are commonly accessed through object properties.

For example:

```javascript
// A function
function greet() {
    console.log("Hello!");
}

greet();

// A method
const person = {
    greet: function () {
        console.log("Hello!");
    }
};

person.greet();
```

In this example, `greet()` is a standalone function, while `person.greet()` is a method associated with the `person` object.

Objects and methods can be studied in more detail in a separate lesson.

---

### Why Do We Need Functions?

As explained above, we write functions to perform specific tasks and reuse their instructions whenever we need those tasks to be performed.

Functions are important because they help us avoid writing the same instructions repeatedly.

For example, imagine that you need to display a greeting ten times in a program. Instead of writing the same code ten times, you can define a function once and call it whenever necessary.

```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
```

The same function can be reused as many times as needed.

### Naming Functions

To reuse a function, we give it a name. Whenever we want to perform the same task again, we call that function by its name.

The general syntax of a JavaScript function is:

```javascript
function functionName() {
    // Instructions to perform a task
}
```

For example:

```javascript
function greet() {
    console.log("Welcome to programming!");
}

greet();
```

Here:

- `function` is the keyword used to declare a function.
- `greet` is the function name.
- The curly braces `{}` contain the instructions.
- `greet()` calls the function and executes its instructions.

### Functions, Inputs, and Arguments

Functions often need inputs to perform their tasks correctly. These inputs allow the same function to work with different values.

The values passed to a function when it is called are called **arguments**.

Consider the following example:

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("Mark");
greet("Abebe");
```

Output:

```text
Hello, Mark
Hello, Abebe
```

In this example:

- `name` is a **parameter** — a variable that receives a value inside the function.
- `"Mark"` and `"Abebe"` are **arguments** — the actual values passed when calling the function.

The function is reusable because we can provide different arguments each time we call it.

---

### Real-Life Example: The "PAINT" Function

We can also understand functions by using an example from everyday life.

Suppose someone tells you to **"paint."** The instruction is not specific enough because:

- One person might paint a wall.
- Another person might paint on a canvas.
- One person might use red paint.
- Another person might use yellow paint.

However, if someone says **"paint the wall blue,"** the instruction becomes more specific.

We can represent this idea as follows:

| Real-life concept | Programming concept |
|---|---|
| Paint | Function |
| Wall | Argument |
| Blue | Argument |
| Paint the wall blue | Calling a function with specific arguments |

For example, we can create a JavaScript function that describes a painting task:

```javascript
function paint(surface, color) {
    console.log("Painting the " + surface + " " + color);
}

paint("wall", "blue");
paint("door", "red");
paint("fence", "green");
```

Output:

```text
Painting the wall blue
Painting the door red
Painting the fence green
```

The function `paint()` can be used repeatedly by changing the values of `surface` and `color`.

This demonstrates one of the most important benefits of functions: **write the instructions once and reuse them with different inputs.**

---

## Summary

- A **function** is a reusable block of code designed to perform a specific task.
- A **method** is a function associated with an object.
- Functions help prevent code repetition and make programs easier to maintain.
- A function needs a name so that we can call it when needed.
- **Parameters** are variables declared in a function definition to receive inputs.
- **Arguments** are the actual values passed to a function when it is called.
- Reusable functions can perform the same task with different arguments.
