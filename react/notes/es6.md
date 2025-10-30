## What is ES6?

**ES6** stands for **ECMAScript 6**.

**ECMAScript** was created to **standardize JavaScript**, and **ES6** is the **6th version** of ECMAScript.  
It was **published in 2015** and is also known as **ECMAScript 2015**.

---

## Why Should I Learn ES6?

React is built using ES6 features, so understanding ES6 is **essential** for working with modern React code.

You should be familiar with the following key ES6 features:

- **Classes** — for defining components and reusable objects
- **Arrow Functions** — for shorter, cleaner function syntax
- **Variables (`let`, `const`, `var`)** — for better variable scoping and immutability
- **Array Methods (`.map()`, `.filter()`, etc.)** — for transforming and iterating through data
- **Destructuring** — for extracting values from arrays or objects easily
- **Modules** — for importing and exporting code across files
- **Ternary Operator** — for inline conditional logic
- **Spread Operator (`...`)** — for copying and merging arrays or objects efficiently

## Classes

**ES6** introduced **classes**.

A **class** is a type of function, but instead of using the `function` keyword to define it, we use the `class` keyword.  
The properties are assigned inside a special method called the **constructor()**.

---

### Example: A Simple Class Constructor

```js
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const myCar = new Car("Ford");
```

## Example: Adding a Method to a Class

You can add methods to a class to perform actions using the class properties.

---

### Example

```js
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return `I have a ${this.brand}`;
  }
}

const mycar = new Car("Swift");
document.write(mycar.present());
```

## Class Inheritance

To create a **class inheritance**, use the `extends` keyword.

A class created with inheritance can **access all methods and properties** from another class (its parent).

---

### Example: Class Inheritance

```js
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name); // Calls the parent constructor
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const mycar = new Model("Ford", "Mustang");
console.log(mycar.show());
```

- extends — Used to create a subclass that inherits from another class.

- super() — Calls the constructor of the parent class, giving access to its properties and methods.

- The Model class inherits the present() method from the Car class.

## Arrow Functions

**Arrow functions** were introduced in **ES6** to provide a **shorter and cleaner syntax** for writing functions.

They make your code more concise and often more readable.

---

### Basic Syntax

Traditional Function:

```js
function hello() {
  return "Hello World!";
}
<!DOCTYPE html>
<html>

<body>

<h1>Arrow Function</h1>

<p>As you can see in this example, you can skip the parentheses when you have only one parameter.</p>

<p id="demo"></p>
<script>
hello = function() {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();
</script>
  <script>
hello = () => {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();
</script>
<script>
hello = val => "Hello " + val;

document.getElementById("demo").innerHTML = hello("World");
</script>
<script>
hello = (val) => "Hello " + val;

document.getElementById("demo").innerHTML = hello("World");
</script>
<script>
hello = () => "Hello World!";

document.getElementById("demo").innerHTML = hello();
</script>
<script>
hello = () => "Hello World!";

document.getElementById("demo").innerHTML = hello();
</script>

</body>
</html>
```

# JavaScript Array `map()`

## The `map()` Method

The **`map()`** method creates a **new array** with the results of calling a function for **every array element**.  
It does **not modify** the original array.

---

### Example

Multiply each number by 2:

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((x) => x * 2);

console.log(doubled); // [2, 4, 6, 8]
```

## `map()` in React

The **`map()`** method is commonly used in **React** to render lists of elements dynamically.

---

### Example

```jsx
const fruitList = ["apple", "banana", "cherry"];

function MyList() {
  return (
    <ul>
      {fruitList.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

## `map()` with Objects

You can also use the **`map()`** method with **arrays of objects** to render dynamic data in React.

---

### Example

```jsx
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      ))}
    </ul>
  );
}
```

## `map()` Parameters

The **`map()`** method takes **three parameters**:

| Parameter            | Description                            |
| -------------------- | -------------------------------------- |
| `currentValue`       | The current element being processed    |
| `index` _(optional)_ | The index of the current element       |
| `array` _(optional)_ | The array that `map()` was called upon |

---

### Example

```jsx
const fruitList = ["apple", "banana", "cherry"];

function App() {
  return (
    <ul>
      {fruitList.map((fruit, index, array) => (
        <li key={fruit}>
          Fruit: {fruit}, Index: {index}, Array: {array.join(", ")}
        </li>
      ))}
    </ul>
  );
}
```

## Destructuring in React

**Destructuring** is a JavaScript feature that allows you to **extract values from objects or arrays** into distinct variables.

In **React**, it’s commonly used with **props**, **hooks**, and **state management** to make code cleaner and more readable.

---

### Example: Array Destructuring

```js
const vehicles = ["mustang", "f-150", "expedition"];

const [car, truck, suv] = vehicles;

console.log(truck); // Output: f-150
```

- If we only want the car and suv we can simply leave out the truck but keep the comma:

```jsx
const vehicles = ["mustang", "f-150", "expedition"];

const [car, , suv] = vehicles;
```

## Destructuring Objects

You can use **object destructuring** to extract values from an **object** into individual variables.

---

### Example

Unpack the values from an object:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

// Destructuring
let { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 50
```

## Destructuring in React Components

**Destructuring** is particularly useful in **React** when working with **props**, **hooks**, and **API responses**.  
It helps make your code more **concise**, **readable**, and **maintainable**.

---

### Props Destructuring

When a component receives props, you can use destructuring to extract the values you need.

---

### Without Destructuring

```jsx
function Greeting(props) {
  return (
    <h2>
      Hello, {props.name}! You are {props.age} years old.
    </h2>
  );
}

// Usage
<Greeting name="Alice" age={25} />;
```

```jsx
import { createRoot } from "react-dom/client";

function Greeting({ name, age }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}

createRoot(document.getElementById("root")).render(
  <Greeting name="John" age={25} />
);
```

## useState Hook Destructuring

When a component uses the **`useState`** hook, we use **destructuring** to extract the values returned by it.  
The `useState()` hook returns an **array** containing two elements:

1. The **current state value**
2. A **function** to update that state

---

### Example

```jsx
import { useState } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
  // Destructuring the array returned by useState
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

createRoot(document.getElementById("root")).render(<Counter />);
```

## React ES6 Spread Operator

### Spread Operator (`...`)

The **JavaScript spread operator (`...`)** allows you to **quickly copy** all or part of an **existing array** or **object** into another array or object.  
It’s commonly used in **React** for **state updates**, **props spreading**, and **array/object merging**.

---

### Example — Merging Arrays

```js
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined); // [1, 2, 3, 4, 5, 6]
```

## Spread Operator with Objects

We can also use the **spread operator (`...`)** with **objects** to combine or update their properties.

---

### Example — Combining Two Objects

```js
const car = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const car_more = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const mycar = { ...car, ...car_more };

console.log(mycar);
```
