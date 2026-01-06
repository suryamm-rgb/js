# JavaScript Array Search

## Array Search Methods

- `indexOf()`
- `lastIndexOf()`
- `includes()`
- `find()`
- `findIndex()`
- `findLast()`
- `findLastIndex()`

---

## JavaScript Array `indexOf()`

The `indexOf()` method searches an array for a specific element and returns its **first index**.

> 🔹 Indexing starts at **0**.

### Example

```js
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
```

### Syntax

```js
array.indexOf(item, start);
```

| Parameter | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `item`    | Required. The item to search for                              |
| `start`   | Optional. Starting index (negative values start from the end) |

- Returns `-1` if the item is not found
- Returns the **first occurrence** if duplicates exist

---

## JavaScript Array `lastIndexOf()`

Works like `indexOf()`, but returns the **last occurrence** of the element.

### Example

```js
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
```

### Syntax

```js
array.lastIndexOf(item, start);
```

---

## JavaScript Array `includes()`

Checks if an element exists in an array and returns **true / false**.

> ✅ Can detect `NaN` (unlike `indexOf()`)

### Example

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // true
```

### Syntax

```js
array.includes(searchItem);
```

- Introduced in **ES2016**

---

## JavaScript Array `find()`

Returns the **value** of the first element that satisfies a condition.

### Example

```js
const numbers = [4, 9, 16, 25, 29];

let first = numbers.find((value) => value > 18);
```

### Callback Parameters

- `value`

- `index`

- `array`

- Introduced in **ES6**

---

## JavaScript Array `findIndex()`

Returns the **index** of the first element that satisfies a condition.

### Example

```js
const numbers = [4, 9, 16, 25, 29];

let index = numbers.findIndex((value) => value > 18);
```

- Introduced in **ES6**

---

## JavaScript Array `findLast()` (ES2023)

Starts searching from the **end** of the array and returns the **value**.

### Example

```js
const temp = [27, 28, 30, 40, 42, 35, 30];

let high = temp.findLast((x) => x > 40);
```

- Introduced in **ES2023**

---

## JavaScript Array `findLastIndex()` (ES2023)

Returns the **index** of the last element that satisfies a condition.

### Example

```js
const temp = [27, 28, 30, 40, 42, 35, 30];

let pos = temp.findLastIndex((x) => x > 40);
```

- Introduced in **ES2023**

---

```js
const fr = ["apple", "mango", "pineapple", "watermelon", "mango"];
console.log("indexOF", fr.indexOf("mango")); //return the index number
console.log("lastindexof", fr.lastIndexOf("mango")); // return last index number its take (index,start)
console.log("includes", fr.includes("pineapple")); //includes return true or false
console.log("includes", fr.includes("pine"));
//find
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value) => value > 18);
console.log("find", first);
//findIndex()
let index = numbers.findIndex((value) => value > 18);
console.log("findIndex", index);
//findLast
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log("findLast", high);
//findLastIndex
let pos = temp.findLastIndex((x) => x > 40);
console.log("findLastIndex", pos);
```
