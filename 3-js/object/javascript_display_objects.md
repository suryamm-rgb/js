
# JavaScript Display Objects

## How to Display JavaScript Objects?
Displaying a JavaScript object directly will output:

```
[object Object]
```

### Example
```js
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;
```

---

## Ways to Display JavaScript Objects

### 1. Displaying Object Properties by Name
```js
let text = person.name + ", " + person.age + ", " + person.city;
```

---

## 2. Using a `for...in` Loop
You can loop through object properties.

```js
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
```

### Important Note
- ✅ Use `person[x]`
- ❌ `person.x` will NOT work because `x` is a variable

---

## 3. Using `Object.values()`
`Object.values()` converts object values into an array.

```js
const myArray = Object.values(person);
let text = myArray.toString();
```

---

## 4. Using `Object.entries()`
Useful for looping through both keys and values.

```js
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + " ";
}
```

---

## 5. Using `JSON.stringify()`
Converts an object into a JSON string.

```js
let text = JSON.stringify(person);
```

### Output Format
```json
{"name":"John","age":30,"city":"New York"}
```

---

## Summary
- Objects cannot be displayed directly as text
- Use loops or built-in methods to extract data
- `JSON.stringify()` is best for debugging or storage

📌 **Understanding object display methods is essential for JavaScript development**
