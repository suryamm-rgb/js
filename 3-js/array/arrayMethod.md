# JavaScript Array Methods

1. **Basic Array Methods**

- Array length
- Array toString()
- Array at()
- Array join()
- Array pop()
- Array push()
- Array shift()
- Array unshift()
- Array isArray()
- Array delete()
- Array concat()
- Array copyWithin()
- Array flat()
- Array slice()
- Array splice()
- Array toSpliced()

1. **JavaScript Array length**

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
//The length property can also be used to set the length of an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2; //"Banana", "Orange"
```

2. **JavaScript Array toString()**

- The toString() method returns the elements of an array as a comma separated string.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString(); //Banana,Orange,Apple,Mango
```

3. **JavaScript Array at()**

```js
//Get the third element of fruits using at():
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

//Get the third element of fruits using []:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];
```

- The at() method returns an indexed element from an array.

- The at() method returns the same as [].

4. **JavaScript Array join()**

- The join() method also joins all array elements into a string.

- It behaves just like toString(), but in addition you can specify the separator

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); //Banana * Orange * Apple * Mango
```

5. **Popping and Pushing**
   **Push**

- Popping items out of an array, or pushing items into an array.
- The push() method adds a new element to an array (at the end)

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
//or
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
```

6. **JavaScript Array pop()**

- The pop() method removes the last element from an array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
//or
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
```

### Shifting Elements

- Shifting is equivalent to popping, but working on the first element instead of the last.

7. **JavaScript Array shift()**

- The shift() method removes the first array element and "shifts" all other elements to a lower index.
- The shift() method returns the value that was "shifted out":

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
//or
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
```

8. JavaScript Array unshift()

- The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
- The unshift() method returns the new array length:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
//or
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
```

Here is the refined documentation for the remaining JavaScript Array methods, formatted in clean Markdown for your reference.

9. **JavaScript Array isArray()**

- In JavaScript, arrays are technically objects. If you use typeof, it returns "object". To accurately check if a variable is an array, use the Array.isArray() method.

```js
const fruits = ["Banana", "Orange", "Apple"];
Array.isArray(fruits); // returns true
```

11. **JavaScript Array concat()**

- The concat() method creates a new array by merging existing arrays. It does not mutate the original arrays.

```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
// Result: ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
```

12. **JavaScript Array copyWithin()**

- This method copies array elements to another position in the same array, overwriting existing values without changing the array's length.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// Copy to index 2, all elements from index 0 to 2:
fruits.copyWithin(2, 0, 2);
// Result: ["Banana", "Orange", "Banana", "Orange", "Kiwi"]
```

13. **JavaScript Array flat()**

- Flattening reduces the dimensionality of an array. It creates a new array with all sub-array elements concatenated into it.

```js
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
// Result: [1, 2, 3, 4, 5, 6]
```

14. JavaScript Array slice()

- The slice() method selects a part of an array and returns it as a new array. The original array remains unchanged.

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// Slice from index 1 to index 3 (not including 3)
const citrus = fruits.slice(1, 3);
// Result: ["Orange", "Lemon"]
```

15. JavaScript Array splice()

- The splice() method adds or removes elements at a specific index. Note: This method changes the original array.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// At index 2, remove 0 elements, add "Lemon" and "Kiwi"
fruits.splice(2, 0, "Lemon", "Kiwi");
// Result: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"] 16. JavaScript Array toSpliced()
```

- This is the modern, ES2023 version of splice(). It behaves the same way but creates a new array instead of modifying the original.

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
// spliced: ["Feb", "Mar", "Apr"]
// months: ["Jan", "Feb", "Mar", "Apr"] (unchanged)
```
