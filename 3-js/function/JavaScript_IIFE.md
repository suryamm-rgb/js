# Immediately Invoked Function Expression (IIFE)

## JavaScript IIFE

An **IIFE (Immediately Invoked Function Expression)** is a function that runs **immediately after it is defined**.

IIFEs were commonly used for **encapsulation**, especially before **ES6 modules** existed.

---

## Self-Invoking Functions

Function expressions can be made **self-invoking**.

A self-invoking function:
- Executes automatically
- Does **not need to be called explicitly**

👉 This happens when a function expression is followed by `()`.

---

## Syntax

```js
(function () {
  // Code to run immediately
})();
```

### Explanation
- The function is wrapped in **parentheses** to make it an expression
- The final `()` executes the function immediately

---

## Important Notes

- ✅ Only **function expressions** can be self-invoked
- ❌ **Function declarations** cannot be self-invoked

---

## When to Use an IIFE?

Even though `let`, `const`, and ES6 modules reduced the need for IIFEs, they are still useful when:

- You want a **private scope** in browser scripts
- You need **initialization code** that runs immediately
- You are working with **older JavaScript code**
- You want to **avoid polluting the global scope**

---

## Avoid Polluting the Global Scope

Variables inside an IIFE are **not accessible outside**.

```js
(function () {
  let hidden = 42;
})();

let result = hidden; // ❌ Error: hidden is not defined
```

---

## Simple IIFE

```js
(function () {
  let text = "Hello! I called myself.";
})();
```

This is also called an **anonymous self-invoking function**.

---

## IIFE with Parameters

```js
(function (name) {
  let text = "Hello " + name;
})("John Doe");
```

---

## Arrow Function IIFE

```js
(() => {
  let text = "Hello! I called myself.";
})();
```

---

## Arrow Function IIFE with Parameter

```js
((name) => {
  let text = "Hello " + name;
})("John Doe");
```

---

## IIFE as a Module (Private Variables)

```js
const counter = (function () {
  let value = 0;

  return {
    increment() {
      value++;
    },
    get() {
      return value;
    }
  };
})();

counter.increment();
let x = counter.get();
```

📌 This pattern simulates **private variables** and is known as the **module pattern**.

---

## Named Function Expression IIFE

You can give an IIFE a name:

```js
(function greet() {
  let text = "Hello! I called myself.";
})();
```

```js
greet(); // ❌ ReferenceError
```

The function name exists **only inside the IIFE**, not in the global scope.

---

## Why Use a Named IIFE?

Useful for **self-recursion**:

```js
(function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
})(5);
```

---

## Notes

- IIFEs were heavily used before ES6
- Still useful for:
  - Running setup code
  - Creating private variables
  - Avoiding global scope pollution
