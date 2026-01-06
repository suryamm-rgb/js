# JavaScript Object Properties

## Overview

An **object** is an **unordered collection of properties**.

Properties are the most important part of JavaScript objects.

- Properties can be **changed**
- Properties can be **added**
- Properties can be **deleted**
- Some properties are **read-only**

---

## Accessing JavaScript Properties

### Dot Notation

```js
let age = person.age;
```

### Bracket Notation

```js
let age = person["age"];
```

### Using Expressions

```js
let x = "age";
let age = person[x];
```

### Examples

```js
person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";

let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old.";
```

---

## Adding New Properties

You can add new properties to an existing object by assigning a value.

```js
person.nationality = "English";
```

---

## Property Default Values

A value assigned inside a constructor becomes the **default value** for all created objects.

```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```

---

## Deleting Properties

The `delete` keyword removes a property completely.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person.age;
```

### Bracket Notation Delete

```js
delete person["age"];
```

### Note

- `delete` removes **both the property and its value**
- Once deleted, the property must be added again to be used

---

## Nested Objects

Object properties can contain other objects.

```js
const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
```

### Accessing Nested Objects

```js
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];

let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
```

---

## Exercise

### Question

```js
const car = {
  brand: "Volvo",
  model: "EX90",
};
```

**What is NOT a correct syntax to alert `'Volvo'`?**

- ❌ `alert(car[brand])`
- ✅ `alert(car.brand)`
- ✅ `alert(car['brand'])`

---

## Summary

- Objects store data as properties
- Properties can be accessed in multiple ways
- Nested objects allow structured data
- `delete` removes properties completely

📌 **Understanding object properties is essential for mastering JavaScript**

```js
const obj = {
  firstName: "John",
  secondName: "lio",
  age: 25,
};

console.log(obj.firstName);
console.log(obj["secondName"]);

let x = "age";
const age = obj[x];
console.log(age);

//add new properties
obj.class = "mca";
console.log(obj);

delete obj.age;
console.log(obj);
delete obj["secondName"];
console.log(obj);
```
