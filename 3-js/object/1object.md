# JavaScript Objects

## What is an Object?

An **object** is a variable that can hold many values.  
Objects store data as **key–value pairs**, called **properties**.

Objects can represent real-world entities like:

- Cars
- People
- Animals
- Houses

---

## Example: Car Object

### Properties

- name
- model
- weight
- color

### Methods

- start()
- drive()
- brake()
- stop()

Different objects can share the same properties and methods, but with different values.

---

## Creating JavaScript Objects

### Object Literal (Recommended)

```js
const car = { type: "Fiat", model: "500", color: "white" };
```

### Multi-line Object

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

### Empty Object and Add Properties Later

```js
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

### Using `new Object()` (Not Recommended)

```js
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
});
```

---

## Accessing Object Properties

```js
person.lastName;
person["lastName"];
```

---

## Object Methods

Methods are functions stored as object properties.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

`this` refers to the current object.

---

## Displaying Objects

Directly displaying an object results in:

```
[object Object]
```

Correct way:

```js
person.name + ", " + person.age + ", " + person.city;
```

---

## Constructor Functions

Used to create multiple objects of the same type.

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```

### Creating Objects

```js
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
```

---

## JavaScript Primitives vs Objects

### Primitive Data Types

- string
- number
- boolean
- bigint
- null
- undefined
- symbol

All non-primitive values in JavaScript are **objects**.

---
