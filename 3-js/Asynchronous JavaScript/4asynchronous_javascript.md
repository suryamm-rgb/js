# Asynchronous JavaScript

> "I will finish later!"

Functions running in parallel with other functions are called **asynchronous**.

A common example is using JavaScript timers like:

- `setTimeout()`
- `setInterval()`

---

## Asynchronous JavaScript

The examples used in the previous chapter were simplified to demonstrate the syntax of callback functions.

### Example: Callback Function

```js
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

✅ In the example above:

- `myDisplayer` is the name of a function
- it is passed to `myCalculator()` as an argument

In the real world, callbacks are most often used with **asynchronous functions**.

---

## Waiting for a Timeout

When using JavaScript `setTimeout()`, you can specify a callback function that executes after a delay.

### Example

```js
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```

✅ In the example above:

- `myFunction` is used as a callback
- it is passed into `setTimeout()`
- `3000` means 3000 milliseconds (3 seconds)

---

## Note

When you pass a function as an argument, **do not use parentheses**.

✅ Right:
```js
setTimeout(myFunction, 3000);
```

❌ Wrong:
```js
setTimeout(myFunction(), 3000);
```

---

## Passing a Full Function

Instead of passing only the function name, you can pass a full function directly:

```js
setTimeout(function () {
  myFunction("I love You !!!");
}, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
```

✅ Here:
- `function () { myFunction("I love You !!!"); }` is the callback function
- it runs after 3 seconds

---

## Waiting for Intervals

When using JavaScript `setInterval()`, you can specify a callback function to execute repeatedly.

### Example

```js
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}
```

✅ In the example above:

- `myFunction` is used as a callback
- it is passed to `setInterval()`
- `1000` milliseconds = every 1 second

---

## Callback Alternatives

With asynchronous programming, JavaScript programs can start long-running tasks and continue running other code in parallel.

⚠️ But asynchronous programs can be:

- difficult to write
- difficult to debug

✅ Because of this, modern JavaScript asynchronous methods usually avoid callbacks and use:

- **Promises**
- **Async/Await**

---
