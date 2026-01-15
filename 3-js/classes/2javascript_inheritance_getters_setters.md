# JavaScript Class Inheritance

## Class Inheritance

To create a class inheritance, use the **`extends`** keyword.

A class created with a class inheritance inherits all the methods from another class.

### Example

Create a class named **`Model`** which will inherit the methods from the **`Car`** class:

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
```

✅ The **`super()`** method refers to the parent class.

By calling the `super()` method in the constructor, we call the parent's constructor and gain access to the parent's properties and methods.

📌 Inheritance is useful for **code reusability**: reuse properties and methods of an existing class when you create a new class.

---

## Getters and Setters

Classes allow you to use **getters** and **setters**.

It can be smart to use getters and setters for your properties, especially if:

- you want to do something special with the value before returning it
- you want to validate or transform the value before storing it

To add getters and setters in a class, use the **`get`** and **`set`** keywords.

---

### Example: Getter and Setter for `carname`

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = myCar.cnam;
```

✅ **Note:** even though the getter is a method, you **do not use parentheses** when accessing it.

⚠️ The name of the getter/setter method cannot be the same as the property name (`carname`).

---

### Using `_` for Getter/Setter Property

Many programmers use an underscore `_` before the property name to separate the getter/setter from the actual property.

```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = myCar.carname;
```

---

### Example: Using a Setter

To use a setter, use the same syntax as setting a normal property (without parentheses).

```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";

document.getElementById("demo").innerHTML = myCar.carname;
```

---

## Hoisting

Unlike functions and other JavaScript declarations, **class declarations are not hoisted**.

That means you must declare a class **before** you can use it.

### Example

```js
// You cannot use the class yet.
// myCar = new Car("Ford"); ❌ will raise an error

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

// Now you can use the class:
const myCar = new Car("Ford");
```

📌 **Note:** Functions are hoisted, so you can call them before they are declared — but classes do not behave that way.
