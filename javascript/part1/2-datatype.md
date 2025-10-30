# 🧠 JavaScript Data Types and Definitions

## 🖥 Example Code

```js
console.log("hello");
// console.log('chia');

// Variables
let score = 102;
let name = "surya"; // String
let isLoggedIn = false; // Boolean

// Object examples
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]; // Array
let user = { firstName: "surya", lastName: "m m" }; // Object

// Simple variable usage
let getScore = score;
console.log(getScore);
```

---

## 📚 JavaScript Data Types and Definitions

JavaScript has **8 main data types**, divided into **Primitive** and **Non-Primitive** categories.

### 🟢 Primitive Data Types

| Data Type     | Definition                                                 | Example                 |
| ------------- | ---------------------------------------------------------- | ----------------------- |
| **String**    | Represents textual data, enclosed in quotes                | `"surya"`               |
| **Number**    | Represents numeric values, including integers and decimals | `102`, `3.14`           |
| **Boolean**   | Represents logical values: `true` or `false`               | `true`, `false`         |
| **Undefined** | A variable that has been declared but not assigned a value | `let x;`                |
| **Null**      | Represents an intentional absence of any value             | `let y = null;`         |
| **BigInt**    | Represents integers larger than `Number.MAX_SAFE_INTEGER`  | `12345678901234567890n` |
| **Symbol**    | Represents a unique and immutable identifier               | `Symbol('id')`          |

### 🟣 Non-Primitive Data Type

| Data Type  | Definition                                                                   | Example                      |
| ---------- | ---------------------------------------------------------------------------- | ---------------------------- |
| **Object** | Collection of key-value pairs; includes arrays, functions, and other objects | `{ name: "surya", age: 22 }` |

### 📌 Notes

- **`let`** is used to declare block-scoped variables.
- **`const`** is used for variables that should not change.
- **Arrays** are a type of object for storing multiple values.
- **Objects** group related data together.
- **Symbols** are unique identifiers often used as object property keys.

---

## 🧪 Output

```
hello
102
```
