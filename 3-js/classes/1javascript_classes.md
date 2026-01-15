# JavaScript Classes (ES6 / ECMAScript 2015)

ECMAScript 2015, also known as **ES6**, introduced **JavaScript Classes**.

✅ **JavaScript Classes are templates for JavaScript Objects.**

---

## JavaScript Class Syntax

Use the keyword `class` to create a class.

Always add a method named `constructor()`.

### Syntax

```js
class ClassName {
  constructor() { ... }
}
```

### Example

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```

The example above creates a class named **Car**.

The class has two initial properties:

- `name`
- `year`

📌 A JavaScript class is **not** an object.  
It is a **template** for JavaScript objects.

---

## Using a Class

When you have a class, you can use it to create objects:

### Example

```js
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
```

The constructor method is called automatically when a new object is created.

---

## The Constructor Method

The constructor method is a special method:

- It must have the exact name **constructor**
- It is executed automatically when a new object is created
- It is used to initialize object properties
- If you do not define a constructor method, JavaScript will add an empty one automatically

---

## Class Methods

Class methods are created using the same syntax as object methods.

### Syntax

```js
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```

---

## Example: Class Method `age()`

Create a class method named `age` that returns the car age.

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";
```

---

## Sending Parameters to Class Methods

You can send parameters to class methods.

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
  "My car is " + myCar.age(year) + " years old.";
```

---

## `"use strict"` in Classes

Class syntax must be written following the **"use strict"** directive.

⚠️ You will get an error if you do not follow strict mode rules.

### Example

In strict mode, you will get an error if you use a variable without declaring it:

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    // date = new Date();       ❌ This will not work (strict mode)
    const date = new Date();    ✅ This will work
    return date.getFullYear() - this.year;
  }
}
```

---
