# JavaScript Static Methods

## Static Methods in JavaScript Classes

✅ **Static class methods are defined on the class itself.**

- You **cannot call** a static method on an object (instance).
- You can call a static method **only on the class**.

---

## Example: Static Method

```js
class Car {
  constructor(name) {
    this.name = name;
  }

  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// ❌ this will raise an error.
```

---

## Using an Object inside a Static Method

If you want to use the `myCar` object inside the static method, you can pass it as a parameter.

### Example

```js
class Car {
  constructor(name) {
    this.name = name;
  }

  static hello(x) {
    return "Hello " + x.name;
  }
}

const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);
```
