# JavaScript Arrays

## 📘 What is an Array?

An **array** is a special variable that can hold more than one value at a time.  
In JavaScript, arrays are dynamic — you can add or remove elements freely.

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // ["apple", "banana", "cherry"]
```

---

## 🧱 Array Creation

### 1. Using Array Literal

```js
let numbers = [1, 2, 3, 4];
```

### 2. Using Array Constructor

```js
let cars = new Array("BMW", "Audi", "Tesla");
```

---

## 🧩 Accessing Elements

You can access elements using **index numbers** (starting from `0`).

```js
let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"
```

---

## 🔁 Common Array Methods

| Method | Description | Example |
|--------|--------------|----------|
| `push()` | Adds an element to the end | `arr.push(5)` |
| `pop()` | Removes the last element | `arr.pop()` |
| `shift()` | Removes the first element | `arr.shift()` |
| `unshift()` | Adds an element to the beginning | `arr.unshift(0)` |
| `concat()` | Joins arrays | `arr1.concat(arr2)` |
| `slice()` | Returns a shallow copy of a portion | `arr.slice(1,3)` |
| `splice()` | Adds/Removes items | `arr.splice(2,1,"new")` |
| `indexOf()` | Finds index of an element | `arr.indexOf("apple")` |
| `includes()` | Checks if element exists | `arr.includes("apple")` |
| `join()` | Joins array elements into a string | `arr.join(", ")` |
| `reverse()` | Reverses the array order | `arr.reverse()` |
| `sort()` | Sorts array elements | `arr.sort()` |
| `map()` | Returns new array after applying function | `arr.map(x => x * 2)` |
| `filter()` | Returns elements matching condition | `arr.filter(x => x > 10)` |
| `reduce()` | Reduces array to single value | `arr.reduce((a,b) => a+b)` |
| `forEach()` | Executes function for each element | `arr.forEach(x => console.log(x))` |

---

## ⚙️ Array Properties

| Property | Description | Example |
|-----------|--------------|----------|
| `length` | Number of elements in array | `arr.length` |

```js
let nums = [10, 20, 30];
console.log(nums.length); // 3
```

---

## 🧮 Array Iteration

### Using `for` Loop

```js
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Using `for...of`

```js
for (let item of arr) {
  console.log(item);
}
```

### Using `forEach()`

```js
arr.forEach(num => console.log(num));
```

---

## 💡 Useful Tips

- Arrays in JavaScript are **zero-indexed**.  
- Arrays can store **different types** of data.  
- `typeof` array returns `"object"`, so use `Array.isArray()` to check if it’s an array.

```js
Array.isArray([1, 2, 3]); // true
```

---

## 🧠 Example: Combining Methods

```js
let numbers = [1, 2, 3, 4, 5];

// Double all numbers and filter even ones
let result = numbers
  .map(num => num * 2)
  .filter(num => num % 4 === 0);

console.log(result); // [4, 8]
```

---

## ✅ Summary

- Arrays store multiple values in one variable.  
- Use **methods** to manipulate array data easily.  
- Common operations include adding, removing, searching, and transforming items.

---
