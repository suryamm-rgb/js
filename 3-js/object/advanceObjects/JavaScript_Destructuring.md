# JavaScript Destructuring

## Destructuring Assignment Syntax
The **destructuring assignment** syntax unpacks object properties into variables.

```js
let { firstName, lastName } = person;
```

It can also unpack arrays and other iterables:

```js
let [firstName, lastName] = person;
```

---

## Object Destructuring

### Basic Example
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let { firstName, lastName } = person;
```

### Order Does Not Matter
```js
let { lastName, firstName } = person;
```

### Important Note
- Destructuring is **not destructive**
- The original object is **not modified**

---

## Object Default Values
Default values can be assigned for missing properties.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let { firstName, lastName, country = "US" } = person;
```

---

## Object Property Alias
You can rename variables while destructuring.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let { lastName: name } = person;
```

---

## String Destructuring
Strings can be destructured because they are iterable.

```js
let name = "W3Schools";
let [a1, a2, a3, a4, a5] = name;
```

---

## Array Destructuring

### Basic Example
```js
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let [fruit1, fruit2] = fruits;
```

---

### Skipping Array Values
Use commas to skip elements.

```js
let [fruit1, , , fruit2] = fruits;
```

---

### Array Position Values
Pick values using index positions.

```js
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let { [0]: fruit1, [1]: fruit2 } = fruits;
```

---

## The Rest Property
Collect remaining values into a new array.

```js
const numbers = [10, 20, 30, 40, 50, 60, 70];

const [a, b, ...rest] = numbers;
```

---

## Destructuring Maps
Maps can be destructured using `for...of`.

```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
for (const [key, value] of fruits) {
  text += key + " is " + value;
}
```

---

## Swapping Variables Using Destructuring
You can swap values without a temporary variable.

```js
let firstName = "John";
let lastName = "Doe";

[firstName, lastName] = [lastName, firstName];
```

---

## Browser Support
Destructuring is an **ES6 (ECMAScript 2015)** feature and is supported in all modern browsers.

---

## Summary
- Destructuring extracts values from objects and arrays
- Order matters in arrays, not in objects
- Default values and aliases improve flexibility
- Rest operator collects remaining elements

---

📌 *End of Notes*
