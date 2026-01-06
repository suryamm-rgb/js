# JavaScript Function `apply()`

## Method Reuse

With the **`apply()`** method, you can write a method that can be reused on **different objects**.

---

## The JavaScript `apply()` Method

The `apply()` method is very similar to the `call()` method.

📌 The key difference is **how arguments are passed**.

---

## Basic Example

```js
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
};

// Returns "Mary Doe"
person.fullName.apply(person1);
```

- `this` refers to `person1`
- The method is borrowed from `person`

---

## Difference Between `call()` and `apply()`

| Method | Arguments |
|------|----------|
| `call()` | Passed individually |
| `apply()` | Passed as an array |

---

## `apply()` Method with Arguments

The `apply()` method accepts arguments as an **array**.

```js
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

person.fullName.apply(person1, ["Oslo", "Norway"]);
```

📌 Output:
```
John Doe, Oslo, Norway
```

---

## Same Example Using `call()`

```js
person.fullName.call(person1, "Oslo", "Norway");
```

---

## Using `apply()` with Arrays (Math.max)

JavaScript arrays do not have a `max()` method.

You can use `Math.max()` with `apply()`:

```js
Math.max.apply(null, [1, 2, 3]); // Returns 3
```

### Why `null`?
- `Math.max()` does not use `this`
- The first argument is ignored

These also work the same:

```js
Math.max.apply(Math, [1, 2, 3]);
Math.max.apply(" ", [1, 2, 3]);
Math.max.apply(0, [1, 2, 3]);
```

---

## JavaScript Strict Mode and `apply()`

- In **strict mode**:
  - If the first argument is not an object, it remains as-is
- In **non-strict mode**:
  - It becomes the **global object**

---

## Summary

- `apply()` invokes a function with a specified `this`
- Arguments are passed as an **array**
- Ideal when working with arrays
- Commonly used for **method borrowing**
- Very similar to `call()`, except argument handling
