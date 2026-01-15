# JavaScript Callbacks

> "I will call back later!"

A **callback** is a function passed as an argument to another function.

✅ This technique allows one function to call another function.  
✅ A callback function can run **after** another function has finished.

---

## Function Sequence

JavaScript functions are executed in the sequence they are **called**, not in the sequence they are **defined**.

### Example 1

This example displays `"Hello"` first, but ends with `"Goodbye"` because the functions are called in that order:

```js
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
```

### Example 2

This example displays `"Goodbye"` first, but ends with `"Hello"` because the functions are called in that order:

```js
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();
```

---

## Sequence Control

Sometimes you want better control over when to execute a function.

Suppose you want to do a calculation, and then display the result.

### Example 1: Return Result, Display Later

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);
```

✅ **Problem:** You must call two functions to display the result.

---

### Example 2: Calculator Displays Result Itself

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);
```

⚠️ **Problem:** You cannot prevent the calculator from displaying the result.

---

## JavaScript Callbacks

A callback is a function passed as an argument to another function.

Using a callback, you can call the calculator function with a callback function,
and let the calculator run the callback after the calculation is finished.

### Example: Calculator with Callback

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

✅ In the example above:

- `myDisplayer` is a callback function
- it is passed to `myCalculator()` as an argument

---

## Note

When you pass a function as an argument, **do not use parentheses**.

✅ Right:
```js
myCalculator(5, 5, myDisplayer);
```

❌ Wrong:
```js
myCalculator(5, 5, myDisplayer());
```

---

## Example: Callback with Array Filter Logic

```js
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
```

✅ In the example above:

- `(x) => x >= 0` is a callback function
- it is passed to `removeNeg()` as an argument

---

## When to Use a Callback?

The examples above are simplified to teach callback syntax.

Callbacks are most useful in **asynchronous functions**, where one task must wait for another:

- waiting for a file to load
- fetching data from the internet
- timers (setTimeout)
- handling events (click, input)

📌 Asynchronous functions are covered in the next chapter.

---
