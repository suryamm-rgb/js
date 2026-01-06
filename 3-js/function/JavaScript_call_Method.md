# JavaScript Function `call()`

## Method Reuse

With the **`call()`** method, you can write a method that can be used on **different objects**.

---

## All Functions are Methods

In JavaScript, **all functions are methods**.

- If a function belongs to an object → it is a method of that object
- If a function does not belong to an object → it becomes a method of the **global object**

---

## Example: Object Method

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

// Returns "John Doe"
person.fullName();
```

### Explanation
- `this` refers to the **person object**
- `this.firstName` means `person.firstName`

---

## What is `this`?

The `this` keyword refers to an **object**.

### `this` depends on how it is used

- Alone → global object
- In a function → global object
- In strict mode → `undefined`
- In an object method → the object
- In an event → the HTML element
- With `call()`, `apply()`, `bind()` → explicitly set

### Notes
- `this` is **not a variable**
- `this` is a **keyword**
- You cannot change `this` directly

---

## The JavaScript `call()` Method

The `call()` method is a **predefined JavaScript method**.

It allows you to:
- Invoke a function
- Explicitly set the value of `this`

📌 With `call()`, an object can use a method that belongs to another object.

---

## Using `call()` for Method Reuse

### Example 1

```js
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe"
};

// Returns "John Doe"
person.fullName.call(person1);
```

---

### Example 2

```js
// Returns "Mary Doe"
person.fullName.call(person2);
```

In both cases:
- The same method is reused
- `this` refers to the object passed to `call()`

---

## `call()` Method with Arguments

The `call()` method can also accept arguments **after the `this` value**.

```js
const person = {
  fullName: function (city, country) {
    return (
      this.firstName +
      " " +
      this.lastName +
      ", " +
      city +
      ", " +
      country
    );
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

person.fullName.call(person1, "Oslo", "Norway");
```

📌 Output:
```
John Doe, Oslo, Norway
```

---

## Summary

- `call()` invokes a function with a specified `this`
- Enables **method reuse**
- Arguments are passed **comma-separated**
- Useful for borrowing methods from other objects
