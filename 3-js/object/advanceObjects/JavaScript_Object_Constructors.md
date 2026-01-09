# JavaScript Object Constructors

## Object Constructor Functions

Sometimes we need to create many objects of the same type.

To create an object type, we use an **object constructor function**.

> **Best Practice:** Name constructor functions with an **upper-case first letter**.

---

## Object Type: `Person`

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```

### Important Note about `this`

- Inside a constructor function, `this` has no value initially.
- When the function is called with `new`, `this` refers to the **newly created object**.

---

## Creating Objects Using the Constructor

```js
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");
```

---

## Property Default Values

```js
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.nationality = "English";
}
```

---

## Adding Properties

### To an Object

```js
myFather.nationality = "English";
```

### To a Constructor (Wrong)

```js
Person.nationality = "English";
```

### Correct Way (Prototype)

```js
Person.prototype.nationality = "English";
```

---

## Constructor Methods

```js
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
```

---

## Adding Methods

### To an Object

```js
myMother.changeName = function (name) {
  this.lastName = name;
};
```

### Using Prototype (Correct)

```js
Person.prototype.changeName = function (name) {
  this.lastName = name;
};
```

---

## Built-in JavaScript Constructors

```js
new Object();
new Array();
new Map();
new Set();
new Date();
new RegExp();
new Function();
```

### Best Practice

```js
Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function()
```

---

## Summary

- Use constructor functions to create object templates
- Use `prototype` for shared properties and methods
- Prefer literals over built-in constructors
