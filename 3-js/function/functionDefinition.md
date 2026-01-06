# JavaScript Function Definitions

JavaScript functions are defined with the `function` keyword.

You can use:

- **Function Declarations**
- **Function Expressions**

---

## Function Declarations

Functions are declared using the following syntax:

```js
function functionName(parameters) {
  // code to be executed
}
```

Declared functions are **not executed immediately**.  
They are **saved for later use** and executed when they are invoked (called).

### Example

```js
function myFunction(a, b) {
  return a * b;
}
```

### Note

- Semicolons are used to separate executable JavaScript statements.
- Since a function declaration is **not an executable statement**, it is **not common** to end it with a semicolon.

---

## Function Expressions

A function can also be defined as an expression and stored in a variable.

### Example

```js
const x = function (a, b) {
  return a * b;
};
```

After storing the function in a variable, the variable can be used as a function.

```js
let z = x(4, 3);
```

---

## The `Function()` Constructor

```js
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
```

Equivalent to:

```js
const myFunction = function (a, b) {
  return a * b;
};
```

---

## Function Hoisting

```js
myFunction(5);

function myFunction(y) {
  return y * y;
}
```

> Function expressions are **not hoisted**.

---

## Functions as Values

```js
let x = myFunction(4, 3) * 2;
```

---

## Functions Are Objects

- JavaScript functions have both properties and methods.
- The arguments.length property returns the number of arguments received when the function was invoked:

```js
function myFunction(a, b) {
  return arguments.length;
}
```

- The toString() method returns the function as a string:

```js
let text = myFunction.toString();
```

---

### Summary

- Functions can be **methods**
- Functions can be **object constructors**
- A function defined as the property of an object, is called a method to the object.
- A function designed to create new objects, is called an object constructor.
