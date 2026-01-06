# JavaScript Array Iteration Methods

Array iteration methods operate on **every array item**.

---

## Array Iteration Methods

- `forEach()`
- `map()`
- `flatMap()`
- `filter()`
- `reduce()`
- `reduceRight()`
- `every()`
- `some()`
- `Array.from()`
- `Array.keys()`
- `Array.entries()`
- `Array.with()` _(ES2023)_
- Spread Operator `...`
- Rest Operator `...`

---

1. **JavaScript Array forEach()**

- The forEach() method calls a function (a callback function) once for each array element.

```js
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>The forEach() Method</h2>

<p>Call a function once for each array element:</p>

<p id="demo"></p>

<script>
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>";
}
</script>

</body>
</html>
```

2. **JavaScript Array map()**

- The map() method creates a new array by performing a function on each array element.

- The map() method does not execute the function for array elements without values.

- The map() method does not change the original array.

```js
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
```

3. **JavaScript Array flatMap()**

- The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

```js
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
```

4. **JavaScript Array filter()**

- The filter() method creates a new array with array elements that pass a test.

```js
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

4. **JavaScript Array reduce()**

- The reduce() method runs a function on each array element to produce a single value.

- The reduce() method works from left-to-right in the array. See also reduceRight().

```js
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
//or
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
```

- The reduce() method can accept an initial value

```js
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
```

5. **JavaScript Array reduceRight()**

- The reduceRight() method runs a function on each array element to produce a single value.

- The reduceRight() works from right-to-left in the array. See also reduce().

```js
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
```

6. **JavaScript Array every()**

- The every() method checks if all array values pass a test.
  ➡️ It always returns a **Boolean value**:
- **`true`** – if **all elements** pass the test
- **`false`** – if **at least one element** fails the test

```js
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

7. **JavaScript Array some()**

- The some() method checks if some array values pass a test.

```js
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

8. **JavaScript Array.from()**

- The Array.from() method returns an Array object from
- Any iterable object
- Any object with a length property

```js
let text = "ABCDEFG";
Array.from(text);
//or
const myNumbers = [1, 2, 3, 4];
const myArr = Array.from(myNumbers, (x) => x * 2);
```

9. **JavaScript Array keys()**

- The Array.keys() method returns an Array Iterator object with the keys of an array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
```

10. **JavaScript Array entries()**

- The entries() method returns an Array Iterator object with key/value pairs

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
```

11. **JavaScript Array with() Method**

- ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

```js
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
```

12. **JavaScript Array Spread (...)**

- The ... operator expands an array into individual elements.

- This can be used join arrays.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
```

13. **JavaScript Array Rest (...)**

- The rest operator (...) allows us to destruct an array and collect the leftovers:

```js
let a, rest;
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

[a, ...rest] = arr1;
```
