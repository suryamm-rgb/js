# JavaScript Arrays

- An Array is an object type designed for storing data collections.

**Key characteristics of JavaScript arrays are**

- **Elements**: An array is a list of values, known as elements.

- **Ordered**: Array elements are ordered based on their index.

- **Zero indexed**: The first element is at index 0, the second at index 1, and so on.

- **Dynamic size**: Arrays can grow or shrink as elements are added or removed.

- **Heterogeneous**: Arrays can store elements of different data types (numbers, strings, objects and other arrays)

- It is a common practice to declare arrays with the const keyword.

```js
const cars = ["Saab", "Volvo", "BMW"]; //or
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
```

1. Using the JavaScript Keyword new

```js
const cars = new Array("Saab", "Volvo", "BMW");
```

### Accessing Array Elements

- You access an array element by referring to the index number

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0]; //Saab
```

### Changing an Array Element

- This statement changes the value of the first element in cars

```js
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
```

### Arrays are Objects

- Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

- But, JavaScript arrays are best described as arrays.

- Arrays use numbers to access its "elements". In this example, person[0] returns John

```js
const person = ["John", "Doe", 46];
```

### Array Properties and Methods

- The real strength of JavaScript arrays are the built-in array properties and methods:

```js
cars.length; // Returns the number of elements
cars.sort(); // Sorts the array
```

#### The length Property

- The length property of an array returns the length of an array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length; //4
//Accessing the First Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
//Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
//Looping Array Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
//Adding Array Elements
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits
const js = ["john", "das", 45];
js.push("surya");
console.log("push", js);
js.pop();
console.log("pop", js);
js.shift();
console.log("shift", js);
js.unshift("unshift");
console.log(js);
```

### The Difference Between Arrays and Objects

- In JavaScript, arrays use numbered indexes.
- In JavaScript, objects use named indexes.
- You should use objects when you want the element names to be strings (text).
- You should use arrays when you want the element names to be numbers.

### JavaScript new Array()

- JavaScript has a built-in array constructor new Array().
- But you can safely use [] instead.
- These two different statements both create a new empty array named points:

```js
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];

//How to Recognize an Array

console.log(typeof js); //object
console.log(Array.isArray(js)); //true
```

# JavaScript Array Methods

# JavaScript Basic Array Methods

This document lists commonly used **JavaScript Array methods** with short explanations and examples.

---

## 1. `length`

Returns the number of elements in an array.

- The length property returns the length (size) of an array:

```js
const arr = [1, 2, 3];
console.log(arr.length); // 3
```

---

## 2. `toString()`

Converts an array to a comma-separated string.

- The toString() method returns the elements of an array as a comma separated string.

```js
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

---

## 3. `at()`

Returns the element at a given index (supports negative indexes).

- The at() method returns an indexed element from an array.
- The at() method returns the same as [].

```js
const arr = [10, 20, 30];
console.log(arr.at(1)); // 20
console.log(arr.at(-1)); // 30
```

---

## 4. `join()`

- The join() method also joins all array elements into a string
  Joins array elements into a string using a separator.

```js
const arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"
```

---

## 5. `pop()`

Removes the **last** element from an array.

- The pop() method removes the last element from an array:

```js
const arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
```

---

## 6. `push()`

Adds elements to the **end** of an array.

- The push() method adds a new element to an array (at the end):

```js
const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
```

---

## 7. `shift()`

Removes the **first** element from an array.

- The shift() method removes the first array element and "shifts" all other elements to a lower index.

```js
const arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]
```

---

## 8. `unshift()`

Adds elements to the **beginning** of an array.

- The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

```js
const arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
```

---

## 9. `Array.isArray()`

Checks if a value is an array.

- ECMAScript 5 (JavaScript 2009) added the new method Array.isArray() to JavaScript:

```js
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("text")); // false
```

---

## 10. `delete`

Deletes an element but **does not change array length**.

```js
const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, empty, 3]
```

---

## 11. `concat()`

Merges two or more arrays.

- The concat() method creates a new array by merging (concatenating) existing arrays:
- The concat() method can also take strings as arguments:

```js
const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]
```

---

## 12. `copyWithin()`

Copies part of an array to another position in the same array.

- The copyWithin() method copies array elements to another position in an array:

- array.copyWithin(target, start, end)

```js
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);
console.log(arr); // [1, 3, 4, 4]
```

---

## 13. `flat()`

Flattens nested arrays.

- The flat() method creates a new array with sub-array elements concatenated to a specified depth.

```js
const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]
```

---

## 14. `slice()`

Returns a **new array** without modifying the original.

- The slice() method slices out a piece of an array.

```js
const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
```

---

## 15. `splice()`

Adds or removes elements **by modifying** the array.

- array.splice(startIndex, deleteCount, item1, item2, ...)

```js
const arr = [1, 2, 3];
arr.splice(1, 1, 9);
console.log(arr); // [1, 9, 3]
```

---

## 16. `toSpliced()`

Returns a **new array** with elements added or removed (does not mutate original).

```js
const arr = [1, 2, 3];
const newArr = arr.toSpliced(1, 1, 9);
console.log(newArr); // [1, 9, 3]
console.log(arr); // [1, 2, 3]
```

---

✅ **Tip:** Prefer `slice()` and `toSpliced()` when you want immutability (important in Reac

```js
const arr = [10, 20, 30];
console.log("length - ", arr.length);
console.log("string - ", arr.toString());
console.log("at - ", arr.at(1));
console.log("at - ", arr.at(-1));
console.log("join - ", arr.join("-"));
console.log("pop - ", arr.pop()); //removed last element
console.log(arr);
console.log("push - ", arr.push(3)); //added element to the end of an array
console.log(arr);
console.log("shift - ", arr.shift()); //remove first element
console.log(arr);
console.log("unshift - ", arr.unshift(3)); //added the first element on array
console.log(arr);
console.log("Array.isArray() - ", Array.isArray([1, 2])); //true
console.log("Array.isArray() - ", Array.isArray("text")); //false
const arr1 = [1, 2, 3];
delete arr1[1];
console.log("delete", arr1);

const a = [1, 2];
const b = [3, 4];
console.log("concat - ", a.concat(b));

a.copyWithin(1, 2);
console.log("copyWithin - ", a);

const flat = [1, 2, 3, [[4], 3]];
console.log("flat", flat.flat(2)); //[1,2,3]

const s = [1, 2, 3, 4];
console.log("slice - ", s.slice(1, 3)); //[2,3]

const sp = [1, 2, 3];
sp.splice(1, 1, 9); //1,9,3
console.log("splice - ", sp);

const sp1 = [1, 2, 3];
sp1.splice(2, 1, 9); //1,9,3
console.log("splice - ", sp1);

const arr3 = [1, 2, 3];
const newArr1 = arr.toSpliced(1, 1, 9);
console.log("toSpliced - ", newArr1); // [1, 9, 3]
console.log("toSpliced - ", arr3); // [1, 2, 3]

const myArr5 = [1, 2, 3, 4, 5, 6];
const newArr5 = myArr.flatMap((x) => [x, x * 10]); //flatMap
```
