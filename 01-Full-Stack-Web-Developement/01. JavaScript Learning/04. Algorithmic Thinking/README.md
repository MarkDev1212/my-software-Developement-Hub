# 4. Algorithmic Thinking

## What Is an Algorithm in Programming?

In our previous class on functions and conditional statements, we discussed how to write JavaScript instructions and functions by breaking a task into small components and describing each step.

An **algorithm** is a set of step-by-step instructions that tells a computer how to solve a problem.

Algorithms are used in many areas of programming, including:

- Sorting a set of numbers.
- Finding routes on maps.
- Searching for information.
- Displaying information on a screen.
- Processing and organizing data.

### Real-Life Example: A Cooking Recipe

A cooking recipe is a good example of an algorithm because it explains what must be done, step by step.

- **Input:** Ingredients.
- **Process:** Following the recipe instructions.
- **Output:** The completed dish.

Similarly, a computer algorithm takes input, processes it according to a sequence of instructions, and produces an output.

---

## Steps to Follow When Solving Algorithmic Problems

### 1. Understand the Problem Statement

You cannot solve a problem that you do not understand.

Before writing code, make sure you understand exactly what the problem requires.

- Read the problem statement as many times as necessary until you understand every word.
- Use your own words to describe the problem.
- Try explaining the problem to a friend and check whether their understanding matches yours.
- Identify the expected inputs and outputs.

**Goal:** Understand what problem you need to solve before deciding how to solve it.

### 2. Handwrite the Solution or Solve It on Paper First

Take a piece of paper and work through the problem manually before writing code.

- Make a drawing if it helps you understand the problem.
- Use all the important information provided in the problem.
- Try different examples and sample data.
- Write down the steps you follow to reach the solution.

**Important note:** One of the biggest challenges for beginners is not necessarily solving a problem. It is identifying and describing the smallest steps their brains take to solve it. Our brains can sometimes process information so quickly that we do not notice every individual step.

Writing the steps on paper helps make the thinking process clear.

### 3. Create a General Solution That Works for Similar Problems

After solving a specific example, develop a general approach that works for other cases of the same problem.

- Consider scenarios that were not covered by your original examples.
- Use experience from similar problems you have solved before.
- Check whether any steps can be simplified.
- Identify and eliminate repeated steps.
- Remove redundant or unnecessary information.
- Consider special cases, such as empty inputs or unexpected values.

**Goal:** Create a solution that works for different inputs, not just one example.

### 4. Write the Pseudocode Line by Line

Pseudocode helps you plan the logic of a program before implementing it in a specific programming language.

**Pseudocode** is a simplified description of an algorithm written in plain English or another human-readable form, often using programming-like structures.

It helps you define the structure of your code and makes implementation easier.

When writing pseudocode:

- Divide the problem into smaller, simpler cases.
- Identify which programming concepts you need, such as functions, loops, and conditional statements.
- Write the steps in a logical order.
- Focus on the logic instead of worrying about exact programming syntax.
- Keep the steps clear and easy to understand.

Pseudocode does not have a single strict syntax. You can use some JavaScript-like expressions if they help explain your logic, but the main goal is to describe the algorithm clearly.

---

## Example: Selecting Even Numbers from an Array

Suppose we have an array of numbers and want to create a new array containing only the even numbers.

Input:

```javascript
[1, 2, 3, 4, 5, 6, 7, 8]
```

Expected output:

```javascript
[2, 4, 6, 8]
```

An even number is a number that can be divided by `2` without leaving a remainder.

In JavaScript, the remainder operator `%` can be used to check whether a number is even:

```javascript
number % 2 === 0
```

If the condition is true, the number is even.

### Example 1: Pseudocode With More Words

```text
FUNCTION selectEvenNumbers

    Create an empty array called evenNumbers
    to store the selected even numbers.

    FOR each element in the original array:

        Check whether the element is even.

        IF the element is even:
            Add the element to evenNumbers.

    RETURN evenNumbers
```

This example explains the algorithm using descriptive, easy-to-understand instructions.

### Example 2: Shorter Pseudocode

```text
FUNCTION selectEvenNumbers(array)

    evenNumbers = []

    FOR each element in array:

        IF element % 2 === 0:
            Add element to evenNumbers.

    RETURN evenNumbers
```

This version uses fewer words while preserving the same logic.

### JavaScript Implementation

Once the pseudocode is clear, we can translate it into JavaScript.

```javascript
function selectEvenNumbers(array) {
    const evenNumbers = [];

    for (const element of array) {
        if (element % 2 === 0) {
            evenNumbers.push(element);
        }
    }

    return evenNumbers;
}

console.log(selectEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
```

Output:

```text
[2, 4, 6, 8]
```

### How the Algorithm Works

1. The function receives an array as input.
2. It creates an empty array called `evenNumbers`.
3. The `for...of` loop visits each element in the original array.
4. The `if` statement checks whether each element is divisible by `2` without a remainder.
5. If the number is even, `push()` adds it to `evenNumbers`.
6. The function returns the array containing only even numbers.

---

## Summary

- An **algorithm** is a step-by-step procedure for solving a problem.
- Algorithms take inputs, process them, and produce outputs.
- Understanding the problem is the first step toward solving it.
- Solving examples manually helps identify the necessary steps.
- A good algorithm should work for different valid inputs.
- **Pseudocode** helps describe the solution before writing actual code.
- Functions, loops, and conditional statements can be combined to implement algorithms.
- Practicing algorithmic thinking improves problem-solving skills and prepares you for more advanced programming topics.
