# 2. Introduction to Node.js

## 2.1 How Does a Local Static Web Page Work?

### Prerequisites to Understand Node.js

Before learning Node.js, we first need to understand why Node.js was created and what problem it solves.

To understand why Node.js is necessary, we must first understand how websites work.

Once we understand how websites work, it becomes much easier to understand:

- Why Node.js is useful.
- What problems Node.js solves.
- What Node.js allows developers to do.
- How Node.js helps us build backend applications.

Let's first understand all the steps involved in making a website work.

---

## 2.2 How Does a Website Work?

### 1. What Is a Webpage?

**Definition:**

A webpage is a document written using HTML (HyperText Markup Language) that can be displayed and viewed in a web browser.

The main purpose of a webpage is to display information in a well-organized and visually meaningful way so that users can easily understand it.

For example, a webpage can display:

- Text and paragraphs.
- Images and videos.
- Links.
- Tables.
- Forms.
- Buttons.

**Example:** A webpage on the Evangadi website.

### 2. Webpage vs. Web Application vs. Desktop Application

These three concepts are related, but they have different purposes and characteristics.

#### A. Webpage

A webpage is an HTML document displayed in a web browser.

It can contain text, images, links, and other content.

Example:
- An informational page on the Evangadi website.

#### B. Web Application (Web App)

A **web application** is software that users access through a web browser to perform specific tasks.

Web applications commonly communicate with remote servers to retrieve, store, and process data.

Examples:

- Facebook
- Gmail
- Google Docs
- Online banking applications

For example, when you log in to Facebook, your account information is retrieved and processed through remote servers.

#### C. Desktop Application

A **desktop application** is software designed to run directly on a computer's operating system.

Unlike traditional web applications, desktop applications are installed and executed locally on a computer.

Examples:

- Adobe Photoshop
- Microsoft Word
- Visual Studio Code
- VLC Media Player

Desktop applications generally do not require a web browser to operate, although some may require an internet connection for certain features.

### Comparison

| Feature | Webpage | Web Application | Desktop Application |
|---|---|---|---|
| Main purpose | Display information | Perform interactive tasks | Perform computer-based tasks |
| Access | Web browser | Web browser | Installed application |
| Internet | Not always required | Often required | Not always required |
| Data storage | Can use local or remote resources | Commonly uses remote servers | Can use local storage or remote servers |
| Example | Informational website page | Gmail | Photoshop |

---

## 2.3 The Browser (Web Browser)

### What Is a Browser?

A **web browser** is software that retrieves web resources, processes them, and displays web content to users.

Examples of web browsers include:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

A webpage is essentially a document containing HTML markup. However, HTML source code is not normally what users want to read directly.

We need software that understands HTML and turns it into a meaningful visual representation.

That software is called a **web browser**.

A browser is made up of different internal components and software that work together to display and run websites.

### Why Do We Need a Browser?

The main role of a web browser is to process web documents and display them in a human-readable and interactive format.

For example, consider this HTML code:

```html
<h1>Welcome to My Website</h1>
<p>This is my first webpage.</p>
```

Without a browser, this is simply HTML source code.

When the browser processes it, users see:

- A large heading: Welcome to My Website.
- A paragraph: This is my first webpage.

The browser makes the HTML document visually meaningful.

### Browser Rendering

**Browser rendering** is the process through which a browser processes HTML, CSS, and other resources to create the visual representation of a webpage on the screen.

In simple terms:

Browser rendering means converting webpage code into the visual page that users see and interact with.

The rendering process involves several steps:

1. The browser retrieves the HTML document.
2. It parses the HTML and creates the DOM (Document Object Model).
3. It processes CSS and calculates the styles.
4. It determines the layout of webpage elements.
5. It paints and displays the content on the screen.

JavaScript can also modify the DOM and CSS, causing the browser to update what users see.

---

## 2.4 Why Do Texts in a Webpage Need to Be Tagged With HTML?

HTML stands for **HyperText Markup Language**.

HTML provides tags that describe the structure and meaning of webpage content.

For example:

```html
<h1>My Website</h1>

<p>Welcome to my website.</p>

<button>Click Me</button>
```

Here:

- `<h1>` defines a main heading.
- `<p>` defines a paragraph.
- `<button>` defines a clickable button.

HTML tags help browsers understand how different parts of a document should be structured and displayed.

Without HTML markup, a browser would not have the same structural information about the document.

---

## 2.5 How Does a Browser Locate a Local HTML File?

When an HTML file is saved on your local computer, the browser needs to know where that file is located.

We provide this location through the browser's address bar.

The location is represented using a URL (Uniform Resource Locator).

For a local file, the browser can use a local file URL that points to the HTML document.

Example of a file path:

```text
/Week-1/clock/index.html
```

A browser may represent the local file location as:

```text
file:///Week-1/clock/index.html
```

The exact path depends on the operating system and where the file is stored.

For example, on Windows:

```text
C:\Users\FOUR____STARS\Documents\MyWebsite\index.html
```

On Linux:

```text
/home/mark/Documents/MyWebsite/index.html
```

The browser uses the supplied location to find and open the HTML document.

### Browser's Address Bar

The **address bar** is the input field located at the top of a web browser where users enter a URL or search query.

For example:

```text
file:///C:/Users/FOUR____STARS/Documents/MyWebsite/index.html
```

When you enter a valid local file URL:

1. The browser receives the location.
2. It locates the HTML file on your computer.
3. It reads the HTML document.
4. It processes the HTML and its referenced resources.
5. It displays the webpage.

---

## 2.6 How Does the Browser Locate Files Included in an HTML File?

An HTML document can include additional resources such as:

- CSS files.
- JavaScript files.
- Images.
- Videos.
- Fonts.

The browser locates these resources using the paths or URLs specified in the HTML document.

Let's consider the following project structure:

```text
MyWebsite/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    └── logo.png
```

The HTML file can reference these resources as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>

    <link rel="stylesheet" href="./css/style.css">
</head>
<body>

    <h1>Welcome to My Website</h1>

    <img src="./images/logo.png" alt="Website Logo">

    <script src="./js/script.js"></script>

</body>
</html>
```

### How Does It Work?

- `./css/style.css` tells the browser where to find the CSS file.
- `./images/logo.png` tells the browser where to find the image.
- `./js/script.js` tells the browser where to find the JavaScript file.

The browser follows these paths and loads the referenced resources.

If the resources exist at the specified locations and are accessible, the browser can load them without needing a backend server.

**Important:** Local file access is subject to browser security restrictions, especially when JavaScript tries to access other local files or make network requests.

---

## 2.7 How Does the Browser Process JavaScript Files?

We have discussed how browsers process HTML and CSS. Now let's understand how they execute JavaScript.

### HTML and CSS Processing

Browsers have built-in components that understand HTML and CSS.

- The HTML parser processes HTML documents and creates the DOM.
- The CSS parser processes CSS and helps determine how elements should look.

### JavaScript Processing

JavaScript is different because it contains programming instructions that must be executed.

For example:

```javascript
console.log("Hello, World!");
```

The browser needs a JavaScript engine to execute this code.

A **JavaScript engine** is software responsible for interpreting and executing JavaScript code.

Examples:

| Browser | JavaScript engine |
|---|---|
| Google Chrome | V8 |
| Microsoft Edge | V8 |
| Mozilla Firefox | SpiderMonkey |
| Safari | JavaScriptCore |

For example, Google Chrome uses the V8 JavaScript engine.

### What Does the JavaScript Engine Do?

The JavaScript engine:

1. Receives JavaScript code.
2. Parses and analyzes the code.
3. Compiles or interprets the code.
4. Executes the instructions.
5. Produces the expected results.

Modern JavaScript engines use a combination of interpretation and just-in-time (JIT) compilation to execute JavaScript efficiently.

### Example: HTML, CSS, and JavaScript Working Together

Consider this project:

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My First Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1 id="heading">Hello World!</h1>

    <button id="myButton">Click Me</button>

    <script src="script.js"></script>

</body>
</html>
```

**style.css**

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
    color: blue;
}
```

**script.js**

```javascript
const button = document.getElementById("myButton");
const heading = document.getElementById("heading");

button.addEventListener("click", function () {
    heading.textContent = "Welcome to JavaScript!";
});
```

### What Happens When the Browser Opens This Website?

1. The browser locates and reads `index.html`.
2. It processes the HTML and creates the webpage structure.
3. It finds `style.css` and applies the CSS styles.
4. It finds `script.js` and executes the JavaScript using its JavaScript engine.
5. JavaScript registers a click event listener on the button.
6. When the user clicks the button, JavaScript changes the heading text.

This demonstrates how HTML, CSS, and JavaScript work together to create an interactive website.

---

## 2.8 Summary: How Does a Local Static Webpage Work?

Let's summarize the entire process:

<escape>1.</escape> **HTML:** Defines the structure and content of a webpage.

<escape>2.</escape> **CSS:** Defines the appearance and styling of the webpage.

<escape>3.</escape> **JavaScript:** Adds behavior and interactivity.

<escape>4.</escape> **Browser:** Processes the HTML, CSS, and JavaScript and displays the webpage.

<escape>5.</escape> **JavaScript Engine:** Executes JavaScript instructions.

### The Overall Process

```text
        LOCAL COMPUTER
              |
              v
          index.html
              |
              v
       WEB BROWSER
              |
       +------+------+
       |      |      |
       v      v      v
      HTML   CSS    JavaScript
       |      |      |
       v      v      v
      DOM   Styles  JS Engine
       |      |      |
       +------+------+
              |
              v
       RENDERED WEBPAGE
              |
              v
       USER SEES THE PAGE
```

---

## 2.9 What Have We Learned Before Moving to Node.js?

So far, we have learned how a browser displays a webpage when the HTML, CSS, and JavaScript files are stored locally on our computer.

We can create a static webpage using HTML, CSS, and JavaScript without building a backend server.

However, there is an important question:

**What happens when our website needs to communicate with a remote computer (server)?**

For example:

- What happens when a user creates an account?
- Where is the user's information stored?
- How does a website retrieve information from a database?
- How does a user log in and access their account?
- How can multiple users access the same information?

A browser alone does not provide all the backend functionality needed to handle these operations.

This is where backend technologies become important.

In the next section, we will explore how websites work when their files and data are stored on remote computers called servers, and why Node.js is useful for building backend applications.

---

## Key Takeaways

- A webpage is a document structured using HTML.
- A web application allows users to perform tasks through a browser.
- A desktop application runs as software on a computer.
- A browser retrieves, processes, and displays web resources.
- Browser rendering converts webpage code into a visual representation.
- HTML defines structure, CSS defines appearance, and JavaScript adds behavior.
- A JavaScript engine executes JavaScript code.
- Local static webpages can work without a backend server.
- Backend technologies such as Node.js allow developers to build server-side applications that process requests, work with databases, and provide dynamic data.