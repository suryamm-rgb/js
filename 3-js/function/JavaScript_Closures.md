# JavaScript Closures

JavaScript variables can belong to:

- **Local scope**
- **Global scope**

Closures make it possible for a function to have **private variables**.

---

## Local Variables

A **local variable** is defined inside a function and is private to that function.

```js
function myFunction() {
  let a = 4;
  return a * a;
}
```

- `a` is local
- Accessible only inside `myFunction`

---

## Global Variables

A **global variable** is defined outside a function and is accessible everywhere.

```js
let a = 4;

function myFunction() {
  return a * a;
}
```

### Important Points

- Global variables belong to the web page (`window`)
- Any script can read or modify them
- Global and local variables with the same name are **different**

---

## Undeclared Variables

Variables created **without `var`, `let`, or `const`** are always global.

```js
function myFunction() {
  a = 4; // Global variable (bad practice)
}
```

⚠️ Avoid undeclared variables — they cause bugs.

---

## Variable Lifetime

- **Global variables** live until the page is closed
- **Local variables** exist only while the function runs

---

## The Counter Problem

### Using a Global Variable (❌ Not Safe)

```js
let counter = 0;

function add() {
  counter += 1;
}

add();
add();
add();
// counter = 3
```

⚠️ Any code can change `counter`.

---

### Using a Local Variable (❌ Not Working)

```js
function add() {
  let counter = 0;
  counter += 1;
}

add();
add();
add();
// counter = 0
```

Local counter resets every time.

---

### Returning the Local Variable (❌ Still Wrong)

```js
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

let x = add();
x = add();
x = add();
// x = 1
```

Counter resets on every call.

---

## Nested Functions

JavaScript supports **nested functions**.

```js
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}
```

- Inner functions can access outer variables
- But `counter` still resets every call

---

## Solution: Closures

### Example

```js
function myCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const add = myCounter();

add();
add();
add();
// counter = 3
```

---

## How This Works

- `myCounter()` runs **once**
- It initializes `counter`
- Returns an inner function
- The inner function **remembers** `counter`

📌 This remembered state is called a **closure**.

---

## What is a Closure?

> A **closure** is a function that has access to its parent scope, even after the parent function has finished executing.

---

## Why Closures Are Useful

Closures are used to:

- Create **private variables**
- Preserve state between function calls
- Avoid global variables
- Implement patterns like:
  - Currying
  - Memoization
  - Module pattern

---

## Modern JavaScript & Closures

- Closures were heavily used before ES6
- `let`, `const`, and modules reduce some use cases
- Closures are still **fundamental** to JavaScript

---

## Conclusion

- Closures enable data privacy
- They preserve function state
- They are a core JavaScript concept
- Modern JS uses them less explicitly, but they still power many features
