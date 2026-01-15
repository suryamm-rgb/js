# JavaScript Async / Await

> "async and await make promises easier to write"

✅ `async` makes a function return a **Promise**  
✅ `await` makes a function wait for a **Promise**

---

## Async Syntax

The keyword **`async`** before a function makes the function return a promise.

### Example

```js
async function myFunction() {
  return "Hello";
}
```

✅ This is the same as:

```js
function myFunction() {
  return Promise.resolve("Hello");
}
```

---

## How to Use the Promise Returned by async Function

```js
myFunction().then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);
```

---

## Example: Using then()

```js
async function myFunction() {
  return "Hello";
}

myFunction().then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
```

### Simpler Example (Only Success)

```js
async function myFunction() {
  return "Hello";
}

myFunction().then(function (value) {
  myDisplayer(value);
});
```

---

## Await Syntax

The keyword **`await`** can only be used inside an **async function**.

✅ `await` pauses execution and waits for the promise to resolve.

```js
let value = await promise;
```

---

# Examples

## 1) Basic Syntax

```js
async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });

  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

✅ The two arguments `(resolve, reject)` are predefined by JavaScript.  
We don’t create them, we just call one of them when ready.

---

## 2) Example without reject()

Often, we don’t need the reject callback.

```js
async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve("I love You !!");
  });

  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

---

## 3) Waiting for a Timeout

```js
async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I love You !!");
    }, 3000);
  });

  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

✅ Here the Promise resolves after **3 seconds**.

---

## 4) Waiting for a File

```js
async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");

    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };

    req.send();
  });

  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
```

✅ Here the Promise resolves when the file request completes.

---

## Browser Support

📌 ECMAScript **2017** introduced the JavaScript keywords:

- `async`
- `await`

---
