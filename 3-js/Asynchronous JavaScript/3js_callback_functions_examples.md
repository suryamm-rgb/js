# JavaScript Callback Functions (JS)

A **callback function** is a function passed as an argument to another function, and it runs later (after some work is done).

---

## 1) Basic Callback Example

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function afterGreeting() {
  console.log("Callback executed!");
}

greet("Surya", afterGreeting);
```

✅ Output:
```
Hello Surya
Callback executed!
```

---

## 2) Callback with Calculator

```js
function display(result) {
  console.log("Result:", result);
}

function calculator(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

calculator(10, 20, display);
```

---

## 3) Callback using Arrow Function

```js
function calculator(a, b, callback) {
  callback(a * b);
}

calculator(5, 4, (res) => {
  console.log("Multiplication:", res);
});
```

---

## 4) Callbacks in Array Methods (Most Common)

### ✅ forEach

```js
const nums = [1, 2, 3, 4];

nums.forEach((n) => {
  console.log(n);
});
```

### ✅ map

```js
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);

console.log(doubled); // [2, 4, 6]
```

### ✅ filter

```js
const nums = [4, 1, -20, -7, 5, 9, -6];
const positives = nums.filter((n) => n >= 0);

console.log(positives); // [4, 1, 5, 9]
```

---

## 5) Callback in Asynchronous Code (setTimeout)

```js
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
```

✅ Output:
```
Start
End
This runs after 2 seconds
```

---

## 6) Callback in Event Listener (DOM)

```html
<button id="btn">Click me</button>

<script>
  document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked!");
  });
</script>
```

---
