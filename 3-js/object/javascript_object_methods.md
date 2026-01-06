
# JavaScript Object Methods

## What are Object Methods?
**Object methods** are actions that can be performed on objects.

A **method** is simply a **function stored as a property value**.

---

## Example Properties and Method

| Property   | Value |
|-----------|-------|
| firstName | John |
| lastName  | Doe |
| age       | 50 |
| eyeColor  | blue |
| fullName  | function() { return this.firstName + " " + this.lastName; } |

---

## Example Object with Method
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
```

### Explanation of `this`
- `this.firstName` refers to the `firstName` property of the object
- `this.lastName` refers to the `lastName` property of the object
- `this` always points to the **current object**

---

## Accessing Object Methods

### Calling a Method
```js
let name = person.fullName();
```

➡ Executes the function and returns the result.

### Accessing Without Parentheses
```js
let name = person.fullName;
```

➡ Returns the **function definition**, not the result.

---

## Adding a Method to an Object
You can add methods to an existing object.

```js
person.name = function () {
  return this.firstName + " " + this.lastName;
};
```

---

## Using JavaScript Built-in Methods
This example uses the `toUpperCase()` method.

```js
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
```

---

## Key Points
- Methods are functions inside objects
- Use `()` to execute a method
- `this` refers to the object calling the method
- Methods can be added dynamically

📌 **Understanding object methods is essential for mastering JavaScript**
