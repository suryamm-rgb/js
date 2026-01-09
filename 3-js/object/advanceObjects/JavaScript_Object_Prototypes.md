# JavaScript Object Prototypes

## Overview
In JavaScript, every object inherits properties and methods from a prototype. This is known as prototype-based inheritance.

---

## Object Constructors

```js
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
```

---

## Adding Properties Incorrectly

```js
Person.nationality = "English"; // ❌ Does not work for instances
```

---

## Adding Properties in Constructor

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

## Prototype Inheritance Chain

- Date → Date.prototype
- Array → Array.prototype
- Person → Person.prototype
- All inherit from Object.prototype

---

## Using Prototype Property

### Adding Property

```js
Person.prototype.nationality = "English";
```

### Adding Method

```js
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
```

---

## Why Use Prototypes?

- Memory efficient
- Shared methods
- Faster object creation
- Enables inheritance

---

## Warning

Never modify built-in JavaScript prototypes like:
- Object.prototype
- Array.prototype
- String.prototype
