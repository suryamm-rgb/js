# JavaScript `this` in Functions

## What is `this`?

In JavaScript, the `this` keyword refers to an **object**.

The value of `this` depends on **how the function is called**.

### Different meanings of `this`

- **Alone** → refers to the global object
- **In a function (non-strict mode)** → refers to the global object
- **In a function (strict mode)** → `this` is `undefined`
- **In an object method** → refers to the object
- **In an event** → refers to the element that received the event
- **Using `call()`, `apply()`, `bind()`** → `this` can be explicitly set

### Note
- `this` is **not a variable**
- `this` is a **keyword**
- You **cannot change** the value of `this` directly

---

## `this` Alone

When used alone, `this` refers to the global object.

In a browser, the global object is `window`.

```js
let x = this;
```

### Strict Mode

Even in strict mode, when used alone, `this` still refers to the global object.

```js
"use strict";
let x = this;
```

---

## `this` in a Function (Default)

By default, inside a function, `this` refers to the global object.

```js
function myFunction() {
  return this;
}
```

---

## `this` in a Function (Strict Mode)

Strict mode does **not allow default binding**.

In strict mode, `this` inside a function is `undefined`.

```js
"use strict";
function myFunction() {
  return this;
}
```

---

## `this` in Event Handlers

In HTML event handlers, `this` refers to the HTML element that received the event.

```html
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
```

---

## `this` in Arrow Functions

### Regular Functions
In regular functions, `this` refers to the object that **calls** the function.

### Arrow Functions
In arrow functions, `this` refers to the object that **defined** the function.

👉 Arrow functions **do not have their own `this`**.

### Important Notes
- Arrow functions do **not bind** `this`
- They are **not suitable for object methods**

---

## Regular Function Example

```js
// Regular Function:
hello = function () {
  document.getElementById("demo").innerHTML += this;
};

// Called by window
window.addEventListener("load", hello);

// Called by button
document.getElementById("btn").addEventListener("click", hello);
```

📌 Output:
- First call → `window`
- Second call → `button`

---

## Arrow Function Example

```js
// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
};

// Called by window
window.addEventListener("load", hello);

// Called by button
document.getElementById("btn").addEventListener("click", hello);
```

📌 Output:
- Both calls → `window`

---

## `this` Precedence

Use the following order to determine what `this` refers to:

| Order | Object        | Reason |
|------|---------------|--------|
| 1 | `bind()` | Function explicitly bound using `bind()` |
| 2 | `apply()` | Function called using `apply()` |
| 2 | `call()` | Function called using `call()` |
| 3 | Object Method | Function called as an object method |
| 4 | Global Scope | Function called in global scope |

---

## Summary

- `this` depends on **how a function is called**
- Arrow functions inherit `this` from their surrounding scope
- Use regular functions when dynamic `this` is needed
- Use arrow functions when lexical `this` is preferred
