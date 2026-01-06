# JavaScript HOF

- In JavaScript, a Higher-Order Function (HOF) is a function that does at least one of these:

1. Takes another function as an argument, or
2. Returns a function

---

1. HOF that takes a function as an argument

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(5, 3, add)); // 8
console.log(calculate(5, 3, multiply)); // 15
```

2. HOF that returns a function

```js
function greet(message) {
  return function (name) {
    return `${message}, ${name}`;
  };
}

const sayHello = greet("Hello");
console.log(sayHello("Surya")); // Hello, Surya
```

# What are call() and apply()?

- call() and apply() are Function methods used to:
- Manually set the value of this and immediately invoke the function
  They are mainly used for:

### Function borrowing

1. Controlling this

2. Reusing methods across objects

# 1. call() method

```js
functionName.call(thisArg, arg1, arg2, ...)
```

- Executes the function immediately
- Arguments are passed one by one
- First argument decides the value of this

```js
function greet(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const user = { name: "Surya" };

greet.call(user, "Bengaluru", "India");
```

# 2, apply() method

```js
functionName.apply(thisArg, [arg1, arg2, ...])

```

- Executes the function immediately

- Arguments are passed as an array

- First argument decides the value of this

```js
greet.apply(user, ["Bengaluru", "India"]);
```

| Feature        | `call()`    | `apply()` |
| -------------- | ----------- | --------- |
| Execution      | Immediate   | Immediate |
| Arguments      | Individual  | Array     |
| `this` control | Yes         | Yes       |
| Modern usage   | Very common | Rare      |

```js
book.call(eurowings, 23, "Sarah Williams");
book.apply(swiss, [583, "George Cooper"]);
```

- call(): Invokes a function immediately with a specified this and arguments passed individually.

- apply(): Invokes a function immediately with a specified this and arguments passed as an array.

# 3. What is bind()?

- bind() creates a NEW function with a fixed this value.

```js
const newFunction = originalFunction.bind(thisArg, arg1, arg2, ...)
```

#### Key Points

- Returns a new function

- this is permanently bound

- Can preset arguments (partial application)

- Very useful for callbacks & event handlers

```js
const person = {
  name: "Surya",
};

function greet() {
  console.log(`Hello, ${this.name}`);
}

const greetSurya = greet.bind(person);
greetSurya(); // Hello, Surya
```

| Method    | Executes Immediately | Returns Function | Arguments  |
| --------- | -------------------- | ---------------- | ---------- |
| `call()`  | ✅ Yes               | ❌ No            | Individual |
| `apply()` | ✅ Yes               | ❌ No            | Array      |
| `bind()`  | ❌ No                | ✅ Yes           | Individual |

# Closers

- A closure in JavaScript is created when a function remembers and accesses variables from its outer (lexical) scope, even after the outer function has finished executing.

```js
function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3
```

What’s happening?

- outerFunction() runs and returns innerFunction

- Normally, count should be destroyed

- ❗ But innerFunction remembers count

- This memory behavior is called a closure

### Closure with Parameters

```js
function greet(message) {
  return function (name) {
    console.log(`${message}, ${name}`);
  };
}

const sayHello = greet("Hello");
sayHello("Surya"); // Hello, Surya
```

### ✅ Why Closures Are Important

✔ Data hiding (private variables)
✔ Factory functions
✔ Callbacks & async programming
✔ React hooks & event handlers
