# `this` in JavaScript Objects

## What is `this`?

In JavaScript, the **`this` keyword refers to an object**.

The value of `this` depends on **how and where it is used**.

---

## How `this` Works in Different Contexts

| Context                             | Value of `this`                     |
| ----------------------------------- | ----------------------------------- |
| Alone                               | Global object                       |
| In a function                       | Global object                       |
| In a function (strict mode)         | `undefined`                         |
| In an object method                 | The object itself                   |
| In an event                         | The element that received the event |
| Using `call()`, `apply()`, `bind()` | Explicitly set object               |

---

## Important Notes

- `this` is **not a variable**
- `this` is a **keyword**
- You **cannot change** the value of `this` directly

---

## `this` in an Object Method

When used inside an object method, `this` refers to the **object that owns the method**.

### Example

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

Here, `this` refers to the `person` object.

---

## Object Method Binding

### Example: `this` Refers to the Object

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  myFunction: function () {
    return this; //[object, object]
  },
};
```

---

### Example: Accessing Object Properties

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

`this.firstName` refers to the `firstName` property of the `person` object.

---

## Explicit Function Binding

JavaScript provides built-in methods to control the value of `this`:

- `call()`
- `apply()`
- `bind()`

---

### Using `call()`

```js
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

person1.fullName.call(person2); // "John Doe"
```

Here, `this` refers to `person2`.

---

## Function Borrowing with `bind()`

With `bind()`, one object can **borrow a method from another object**.

### Example

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
```

---

## `this` Precedence Order

| Order | Method        | Reason                 |
| ----- | ------------- | ---------------------- |
| 1     | `bind()`      | Explicit binding       |
| 2     | `call()`      | Explicit invocation    |
| 2     | `apply()`     | Explicit invocation    |
| 3     | Object method | Method of an object    |
| 4     | Global scope  | Default global binding |

---

## JavaScript Global `this` (`globalThis`)

`globalThis` is a standard way to access the global object in **any environment**.

### Environment Mapping

- Browser → `window`
- Node.js → `global`
- Web Workers → `self`

---

### Why `globalThis`?

Before ES2020, different environments used different names for the global object.  
`globalThis` solves this by providing **one unified reference**.

---

### Examples

```js
globalThis === window; // true (browser)
globalThis === global; // true (Node.js)
```

---

## Summary

- `this` refers to an object depending on execution context
- `call()`, `apply()`, and `bind()` explicitly control `this`
- `globalThis` provides a universal global reference
- Understanding `this` is essential for mastering JavaScript

---
