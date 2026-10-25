# 9. JavaScript Events

## 9.1 Introduction

JavaScript events are actions or occurrences that happen in a web browser when a user interacts with a website or when the browser itself performs an action.

As a JavaScript developer, your job is to write scripts that respond to these events. This is what makes websites **interactive and responsive to user actions**.

For example:

- When a user clicks a button, JavaScript can display a message.
- When a user types in a text field, JavaScript can validate the input.
- When a user submits a form, JavaScript can check whether the information is correct.
- When a browser window is resized, JavaScript can respond to the change.

In this section, we will learn what JavaScript events are, the different types of events, and what happens when an event occurs, such as a mouse movement or a keystroke.

---

## 9.2 What Are JavaScript Events and JavaScript Event Types?

### Definition of JavaScript Events

An **event** is an action or occurrence that a browser can detect and that JavaScript can respond to.

In programming, events often represent changes in state or interactions with elements. Browser events include actions that happen when a user interacts with a website or when the browser performs certain operations.

Examples include:

- When a web page finishes loading.
- When a user clicks a button.
- When a user presses a keyboard key.
- When a user moves the mouse.
- When a user resizes the browser window.
- When a user submits a form.

These are commonly called **JavaScript events, HTML events, or browser events**.

### How Do JavaScript Events Make Websites Interactive?

When a user interacts with a web page, the browser detects the interaction and generates an event. JavaScript code can listen for that event and execute instructions in response.

For example, when a user clicks a button, JavaScript can change the text displayed on the page.

The process works like this:

1. A developer creates an HTML element, such as a button.
2. The developer writes JavaScript code to listen for a specific event.
3. The user performs an action, such as clicking the button.
4. The browser detects the action and dispatches the event.
5. JavaScript executes the associated event handler.
6. The web page responds to the interaction.

### Example: Responding to a Button Click

HTML:

```html
<button id="myButton">Click Me</button>
<p id="message">Waiting for your click...</p>
```

JavaScript:

```javascript
const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "You clicked the button!";
});
```

**How it works:**

- `getElementById()` finds the HTML elements.
- `addEventListener()` registers a function that will respond to an event.
- `"click"` is the event type.
- The function is the event handler.
- `textContent` changes the text displayed on the page.

When the user clicks the button, the message changes to `You clicked the button!`.

### Common JavaScript Event Types

| Event | Description | Example use |
|---|---|---|
| `click` | Occurs when an element is clicked. | Clicking a button |
| `dblclick` | Occurs when an element is double-clicked. | Opening an item |
| `mouseover` | Occurs when the pointer enters an element. | Highlighting a menu |
| `mousemove` | Occurs when the pointer moves. | Tracking pointer movement |
| `keydown` | Occurs when a keyboard key is pressed down. | Detecting arrow keys |
| `keyup` | Occurs when a pressed key is released. | Checking keyboard input |
| `input` | Occurs when a user changes a form control's value. | Live search |
| `change` | Occurs when a control's value change is committed. | Selecting an option |
| `submit` | Occurs when a form is submitted. | Validating a registration form |
| `load` | Occurs when a resource finishes loading. | Running code after page resources load |
| `resize` | Occurs when the browser window is resized. | Adjusting a layout |
| `focus` | Occurs when an element receives focus. | Highlighting an input field |
| `blur` | Occurs when an element loses focus. | Checking an input after leaving it |

---

## Example: Responding to a Keyboard Event

JavaScript can respond to keyboard actions, just as it responds to mouse clicks.

```javascript
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        console.log("Up Arrow pressed!");
    }

    if (event.key === "ArrowDown") {
        console.log("Down Arrow pressed!");
    }
});
```

When the user presses the Up Arrow or Down Arrow key, the browser detects the `keydown` event and JavaScript executes the corresponding instructions.

Here, `event.key` identifies which key was pressed.

---

## Example: Responding to Form Submission

Developers can also write JavaScript code that responds when a user submits a form.

For example, a website may display a message explaining that a password must include special characters.

HTML:

```html
<form id="registrationForm">
    <label for="password">Password:</label>
    <input type="password" id="password" required>
    <button type="submit">Register</button>
</form>

<p id="message"></p>
```

JavaScript:

```javascript
const form = document.getElementById("registrationForm");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password.value);

    if (!hasSpecialCharacter) {
        message.textContent =
            "Password needs to include special characters.";
    } else {
        message.textContent = "Password format is valid.";
    }
});
```

**How it works:**

1. The browser detects the form's `submit` event.
2. `event.preventDefault()` prevents the browser's default form submission.
3. JavaScript checks whether the password contains a special character.
4. The appropriate message is displayed on the page.

This example demonstrates how events can be used to validate user input. Real applications should also validate passwords on the server and enforce their complete password requirements.

---

## Important Concept: Event Handlers

As a web developer, you are responsible for preparing JavaScript code that responds to the events users may trigger on your website.

An **event handler** is a function that runs when its associated event occurs.

For example:

```javascript
button.addEventListener("click", function () {
    console.log("Button clicked!");
});
```

In this example:

- `button` is the HTML element.
- `addEventListener()` registers the handler.
- `"click"` is the event type.
- The function is the event handler.

The browser does not automatically know what response you want when a user clicks a button. You write the JavaScript instructions that define the behavior.

---

## Summary

- JavaScript events represent actions or occurrences detected by the browser.
- Events can be triggered by users or by browser and resource activity.
- Common events include `click`, `keydown`, `input`, `submit`, `load`, and `resize`.
- An event handler is a function that executes in response to an event.
- `addEventListener()` is a common way to register event handlers.
- Events allow websites to respond to user interactions and update their content dynamically.
- Developers must define the responses they want their websites to perform when events occur.
