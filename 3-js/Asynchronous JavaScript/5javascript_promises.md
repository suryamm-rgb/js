# JavaScript Promises

> "I Promise a Result!"

✅ **Producing code**: code that may take some time (async task)  
✅ **Consuming code**: code that waits for the result  

A **Promise** is an object that links producing code and consuming code.

A Promise represents the **completion or failure** of an asynchronous operation and its result.

---

## Promise States

A Promise can have **3 states**:

| State | Meaning |
|------|---------|
| `pending` | initial state |
| `fulfilled` | operation completed successfully |
| `rejected` | operation failed |

---

## Example: Creating a Promise

```js
// Create a Promise Object
let myPromise = new Promise(function (myResolve, myReject) {
  let result = true;

  // Code that may take some time goes here

  if (result == true) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

// Using then() to display result
myPromise.then(
  (x) => myDisplay(x),
  (x) => myDisplay(x)
);
```

---

## JavaScript Promise Object

A Promise contains both:

✅ producing code (runs now / takes time)  
✅ consuming code (runs later when ready)

### Promise Syntax

```js
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);
```

### Producing Code should call:

| When | Call |
|------|------|
| Success | `myResolve(result value)` |
| Error | `myReject(error object)` |

---

## Promise Object Properties

A Promise can be:

- Pending
- Fulfilled
- Rejected

Promise supports two internal properties:

- `state`
- `result`

| `myPromise.state` | `myPromise.result` |
|------------------|--------------------|
| `"pending"` | `undefined` |
| `"fulfilled"` | a result value |
| `"rejected"` | an error object |

⚠️ You **cannot access** `state` and `result` directly.  
You must use Promise methods like `.then()`, `.catch()`, `.finally()`.

---

## How to Use a Promise

```js
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);
```

✅ `.then()` takes two callbacks:

- first → success callback
- second → failure callback (optional)

---

## Example: Promise with `then()`

```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  // Producing code (may take some time)
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
```

---

# JavaScript Promise Examples

## 1) Waiting for a Timeout

### ✅ Using Callback

```js
setTimeout(function () {
  myFunction("I love You !!!");
}, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
```

### ✅ Using Promise

```js
let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You !!");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demo").innerHTML = value;
});
```

---

## 2) Waiting for a File

### ✅ Using Callback

```js
function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.html");

  req.onload = function () {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };

  req.send();
}

getFile(myDisplayer);
```

### ✅ Using Promise

```js
let myPromise = new Promise(function (myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.html");

  req.onload = function () {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };

  req.send();
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
```

---

# Promise.allSettled()

The `Promise.allSettled()` method returns a single Promise from a list of promises.

✅ It runs all promises and returns results for each (fulfilled or rejected).

### Example

```js
// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise1, myPromise2]).then((results) =>
  results.forEach((x) => myDisplay(x.status))
);
```

📌 **Note:** Promise.allSettled() means:  
> "Run all promises. I don't care about success or failure."

✅ `Promise.allSettled()` is an **ES2020** feature.

---

# Promise.withResolvers()

`Promise.withResolvers()` is a **static method** that simplifies creating and managing promises.

Instead of:

```js
new Promise((resolve, reject) => { ... })
```

It returns an object containing:

- `promise`
- `resolve`
- `reject`

---

## Example: Promise.withResolvers()

```html
<p id="demo">Waiting...</p>

<script>
  const { promise, resolve, reject } = Promise.withResolvers();

  // Simulate async work
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);

  // Update the UI when the promise finishes
  promise
    .then((message) => {
      document.getElementById("demo").innerHTML = message;
    })
    .catch((error) => {
      document.getElementById("demo").innerHTML = error;
    });
</script>
```

---

## Simplified Version (Ternary)

```js
setTimeout(() => {
  Math.random() > 0.5
    ? resolve("Operation successful!")
    : reject("Operation failed!");
}, 1000);
```

---

## Cleaner UI Update using finally()

```js
promise
  .then((message) => (text = message))
  .catch((error) => (text = error))
  .finally(() => {
    document.getElementById("demo").innerHTML = text;
  });
```

✅ `.finally()` always runs last, no matter success or failure.  
✅ UI updates exactly once.

---

## Best Approach: Using async/await

```js
(async () => {
  try {
    text = await promise; // Wait for resolve
  } catch (err) {
    text = err; // Handle reject
  }

  document.getElementById("demo").innerHTML = text;
})();
```

✅ `async/await` makes asynchronous code look synchronous.  
✅ UI updates in one place (clean & reliable).

---
