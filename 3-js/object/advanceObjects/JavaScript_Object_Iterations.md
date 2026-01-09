# JavaScript Object Iterations

## General Object Methods

```js
// Copies properties from source objects to a target object
Object.assign(target, source);

// Creates a new object from an existing object
Object.create(object);

// Returns an array of key/value pairs
Object.entries(object);

// Creates an object from key/value pairs
Object.fromEntries(iterable);

// Returns an array of keys
Object.keys(object);

// Returns an array of values
Object.values(object);

// Groups elements based on a callback (ES2024)
Object.groupBy(object, callback);
```

---

## Object.assign()

Copies properties from one or more source objects into a target object.

```js
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {
  firstName: "Anne",
  lastName: "Smith"
};

Object.assign(person1, person2);
```

---

## Object.entries()

Returns an array of `[key, value]` pairs.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

Object.entries(person);
```

### Using Object.entries() in Loops

```js
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

for (let [fruit, value] of Object.entries(fruits)) {
  console.log(fruit + ": " + value);
}
```

### Convert Object to Map

```js
const myMap = new Map(Object.entries(fruits));
```

---

## Object.fromEntries()

Creates an object from key/value pairs.

```js
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
```

---

## Object.values()

Returns an array of object values.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

Object.values(person);
```

---

## Object.groupBy() (ES2024)

Groups elements based on a callback return value.

```js
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 }
];

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

const result = Object.groupBy(fruits, myCallback);
```

### Object.groupBy() vs Map.groupBy()

- `Object.groupBy()` → returns a plain object
- `Map.groupBy()` → returns a Map

⚠️ ES2024 feature — older browsers may need a polyfill.

---

## Object.keys()

Returns an array of object keys.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

Object.keys(person);
```

---

## for...in Loop

Loops through enumerable properties of an object.

```js
const person = {
  fname: "John",
  lname: "Doe",
  age: 25
};

for (let key in person) {
  console.log(person[key]);
}
```

⚠️ Avoid `for...in` for arrays.
