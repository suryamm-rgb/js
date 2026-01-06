# JavaScript Function Invocation

The code inside a JavaScript function executes when **something invokes it**.

---

## Invoking a JavaScript Function

- The code inside a function is **not executed when it is defined**
- The code is executed when the function is **invoked**
- Common terms:
  - call a function
  - invoke a function
  - execute a function

In this tutorial, we use **invoke**, because a JavaScript function can be invoked without being explicitly called by an object.

---

## Invoking a Function as a Function

```js
function myFunction(a, b) {
  return a * b;
}

myFunction(10, 2); // Returns 20
```

This function does not belong to any object explicitly.  
In JavaScript, it automatically belongs to the **global object**.

- In browsers, the global object is `window`
- Therefore, the function becomes a window method

```js
window.myFunction(10, 2); // Also returns 20
```

### ⚠️ Note
Invoking functions in the global scope is **not a good practice**:
- Can cause name conflicts
- Can introduce hard-to-find bugs

---

## What is `this`?

The `this` keyword refers to an **object**.

### `this` depends on how a function is invoked

- Alone → global object
- In a function → global object
- In a function (strict mode) → `undefined`
- In an object method → the object
- In an event → the HTML element
- With `call()`, `apply()`, `bind()` → explicitly set

### Important Notes
- `this` is **not a variable**
- `this` is a **keyword**
- You cannot directly change `this`

---

## The Global Object

When a function is invoked **without an owner**, `this` refers to the global object.

```js
let x = myFunction();

function myFunction() {
  return this;
}
```

In browsers, this returns the `window` object.

⚠️ Using the global object as a variable can easily crash your application.

---

## Invoking a Function as a Method

Functions can be defined as **object methods**.

```js
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

myObject.fullName(); // "John Doe"
```

- The function belongs to `myObject`
- `this` refers to the **owner object**

### Test Example

```js
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
};

myObject.fullName(); // [object Object]
```

📌 When invoked as a method, `this` refers to the object itself.

---

## Invoking a Function with a Constructor

When a function is invoked using the `new` keyword, it becomes a **constructor invocation**.

```js
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

const myObj = new myFunction("John", "Doe");

myObj.firstName; // "John"
```

### Constructor Invocation Rules

- A **new object** is created
- `this` refers to the newly created object
- Properties and methods are inherited from the constructor

📌 The `this` keyword has no value until the new object is created.

---

## Summary

- Functions execute only when **invoked**
- Invocation style determines the value of `this`
- Avoid global function invocation
- Use object methods for better structure
- Use constructors with `new` to create objects
