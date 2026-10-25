# 2. Introduction to Programming Basics (Part II)

## 2.1 What Is a Data Structure and Why Do We Need to Structure Data?

### What Is a Data Structure?

A **data structure** is a particular way of storing, organizing, and processing data or information in a computer so that it can be retrieved and used as productively as possible.

- The concept of **data types** is important in programming. That is why learning a programming language starts with understanding what data is and how it is structured for effective use.
- To operate on variables, it is important to understand their data types.
- Data structures are the building blocks of algorithms and computer programs. They are also important topics in Software Engineering interviews. Therefore, developers must have a good understanding of data structures.

### Why Do We Need to Structure Data?

Data is essential for computers to process information and help us solve problems. We provide computers with data so they can process information and represent aspects of the real world.

If we store data on a computer without organizing it properly, it quickly becomes difficult to manage. Retrieving and using the data later can also become challenging.

Therefore, we need to **organize and structure data** so that it can be stored, retrieved, and processed efficiently.

### Example

Without understanding data types, a programmer might encounter an expression like this:

```javascript
var x = 14 + "Hello";
```

In JavaScript, the number `14` and the string `"Hello"` are different data types. JavaScript converts the number to a string in this expression, producing `"14Hello"` rather than performing numerical addition.

Understanding data types helps programmers predict how expressions behave.

### Benefits of Data Structures

Data structures are necessary for designing efficient algorithms. They provide:

- **Efficiency:** Help improve the speed of data operations.
- **Reusability:** Allow data organization techniques to be reused in different programs.
- **Abstraction:** Hide unnecessary implementation details and simplify how data is used.
- **Better storage and retrieval:** Make it easier to store, find, and process information.
- **Time savings:** Appropriate data structures help programmers perform operations more efficiently.

---

## 2.2 Types of Data Structures

There are two main categories of data structures used in programming:

1. **Primitive Data Structures**
2. **Non-Primitive Data Structures**

### 1. Primitive Data Structures

Primitive data types are the basic types of data supported by a programming language.

Examples include:

- **Numbers:** Used to represent numerical values, such as `10`, `25.5`, and `-3`.
- **Booleans:** Used to represent logical values, such as `true` and `false`.
- **Strings:** Used to represent text, such as `"Hello"` and `"Programming"`.

### 2. Non-Primitive Data Structures

Non-primitive data structures are used to organize and store collections of data or more complex information.

Many programming languages provide built-in data structures to organize code and information.

Examples include:

- **Python:** Lists and dictionaries.
- **JavaScript:** Arrays and objects.

### Scope of This Course

For the scope of this course, we will focus on:

- **Primitive data types:** Numbers, Booleans, and strings.
- **Non-primitive linear data structures:** Arrays.

This means we will learn how to instruct a computer to store, retrieve, and process data using these data types and structures.

### Why Should We Learn Other Data Structures?

It is also important to understand other linear and non-linear data structures, especially if you decide to study machine learning.

However, according to the course material, junior or mid-level web developers are less likely to implement non-linear data structures directly in their everyday work, although they may encounter them through libraries, frameworks, and algorithms.

Learning more advanced data structures will help you solve complex problems and develop more efficient software.

---

## Summary

- A **data structure** is a way of organizing, storing, and processing data.
- Data structures make retrieving and processing information easier and more efficient.
- **Primitive data types** include numbers, Booleans, and strings.
- **Non-primitive data structures** include arrays, objects, lists, and dictionaries.
- Arrays are an important data structure for organizing collections of values.
- Understanding data structures is essential for learning algorithms, software development, and problem-solving.
