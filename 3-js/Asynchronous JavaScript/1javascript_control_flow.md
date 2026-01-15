# JavaScript Control Flow

## What is Control Flow?

**Control Flow** is the order in which statements are executed in a program.

By default, JavaScript runs code:

- from **top to bottom**
- from **left to right**

Control flow statements allow you to change execution order based on:

- conditions
- loops
- keywords / jumps

---

## Default Flow

Default flow executes code sequentially.

✅ Example flow: `let x` → `let y` → `let z`

```js
let x = 5;
let y = 6;
let z = x + y;
```

---

## Conditional Control Flow

Conditions let you make decisions using:

- `if`
- `if...else`
- `switch`
- ternary (`? :`)

### Example

Flow branches depending on conditions:

```js
let text = "Unknown";

if (age >= 18) {
  text = "Adult";
} else {
  text = "Minor";
}
```

---

## Loops (Repetition Control Flow)

Loops let you run code multiple times using:

- `for`
- `while`
- `do...while`

### Example

Repeat flow until condition (`i < 5`) becomes false:

```js
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

---

## Jump Statements

Jump statements change the flow abruptly:

- `break` → exits a loop or switch
- `continue` → skips the current loop iteration
- `return` → exits from a function
- `throw` → jumps to error handling

### Example

Stop the loop when `i === 3`:

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}
```

---

## Function Flow

Functions are callable and reusable blocks of code.

### Example

Function to compute product of two numbers:

```js
function myFunction(p1, p2) {
  return p1 * p2;
}
```

---

## JavaScript is Single-Threaded

JavaScript runs on a **single thread**, which means:

- it can do only **one thing at a time**
- each task must finish before the next starts
- slow operations (file/network requests) can freeze the application

---

## Asynchronous Flow

JavaScript **Asynchronous Flow** explains how JavaScript handles tasks that take time to complete (like reading files, waiting for user input, API calls) **without blocking** the rest of the program.

To prevent blocking, JavaScript uses **asynchronous programming**, where:

✅ certain operations run in the background  
✅ results are handled later when ready

---

## Asynchronous Patterns

Common asynchronous patterns:

- Events
- Callbacks
- Promises
- Async/Await

---

## JavaScript Events

Events are actions or occurrences in the browser, usually triggered by:

- user interactions (click, keypress, submit)
- browser actions (page load, resize)

### Example (Events)

```html
<button onclick="displayDate()">The time is?</button>
```

---

## JavaScript Callbacks

A **callback** is a function passed as an argument to another function,
and is executed later (after an event or after an async task is complete).

✅ In this example `myDisplayer` is a callback function.

### Example (Callbacks)

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

---

## JavaScript Promises

Promises represent a value that may be available:

- now
- later
- or never

### Example (Promises)

```js
fetch("https://api.example.com")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

---

## JavaScript Async/Await

**Async/Await** is a modern and cleaner way to work with asynchronous code.

It makes async code look synchronous and easier to read.

### Example (Async/Await)

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## Asynchronous Summary

| Flow Concept | Description |
|------------|-------------|
| Synchronous | Executes line by line, blocking the next task |
| Asynchronous | Allows other code to run while waiting |
| Events | Stores callback functions to run later |
| Promises | Clean handling of async operations |
| Async/Await | Modern and readable async handling |

---
