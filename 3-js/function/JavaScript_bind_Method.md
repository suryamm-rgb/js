# JavaScript Function `bind()`

## Function Borrowing

With the **`bind()`** method, an object can **borrow a method** from another object.

---

## Basic Example: Method Borrowing

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
fullName(); // "Hege Nilsen"
```

### Explanation

- `bind()` creates a **new function**
- `this` is permanently set to `member`
- The original function is **not executed immediately**

---

## Preserving `this`

Sometimes `bind()` is required to **prevent losing `this`**, especially in callbacks.

---

## Example: Normal Method Call

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

person.display();
```

📌 Here, `this` correctly refers to the `person` object.

---

## Losing `this` in a Callback

When a method is passed as a callback, `this` is lost.

```js
setTimeout(person.display, 3000);
```

❌ Output:

```
undefined undefined
```

Reason:

- `setTimeout` calls the function
- `this` no longer refers to `person`

---

## Solving the Problem with `bind()`

```js
let display = person.display.bind(person);
setTimeout(display, 3000);
```

✅ Output after 3 seconds:

```
John Doe
```

---

## How `bind()` Works

- Returns a **new function**
- Permanently binds `this` to the given object
- Does **not invoke** the function immediately

---

## `this` Recap

The value of `this` depends on how a function is called:

- Alone → global object
- In a function → global object
- In strict mode → `undefined`
- In an object method → the object
- In an event → the element
- With `call()`, `apply()`, `bind()` → explicitly set

### Notes

- `this` is **not a variable**
- `this` is a **keyword**
- You cannot change `this` directly

---

## Summary

- `bind()` is used for **function borrowing**
- Useful for **callbacks and async functions**
- Prevents losing `this`
- Returns a new function with fixed `this`

| Feature             | call()                 | apply()           | bind()                 |
| ------------------- | ---------------------- | ----------------- | ---------------------- |
| Invokes immediately | ✅ Yes                 | ✅ Yes            | ❌ No                  |
| Returns function    | ❌ No                  | ❌ No             | ✅ Yes                 |
| Arguments format    | Comma-separated        | Array             | Comma-separated        |
| Can be reused       | ❌ No                  | ❌ No             | ✅ Yes                 |
| Common use case     | One-time function call | Dynamic arguments | Call later / callbacks |
