# JavaScript Has 8 Data Types

A JavaScript variable can hold **8 types of data**:

---

| **Type**    | **Description**                               |
| ----------- | --------------------------------------------- |
| `String`    | A text of characters enclosed in quotes       |
| `Number`    | A number representing a mathematical value    |
| `BigInt`    | A number representing a large integer         |
| `Boolean`   | A data type representing `true` or `false`    |
| `Object`    | A collection of key-value pairs of data       |
| `Undefined` | A primitive variable with no assigned value   |
| `Null`      | A primitive value representing object absence |
| `Symbol`    | A unique and primitive identifier             |

# 🧠 JavaScript Variables — var, let, and const

---

## 🔹 var

- Function-scoped (available within the function it’s declared in)
- Can be **redeclared**
- Can be **reassigned**
- Is **hoisted** to the top of its scope (initialized as `undefined`)
- Does **not** have block scope
- Avoid using in modern JavaScript (use `let` or `const` instead)

### Example:

```js
var x = 10;
var x = 20; // ✅ allowed
console.log(x); // 20
```

---

## 🔹 let

- Block-scoped (only available inside `{}` where it’s defined)
- Cannot be **redeclared** in the same scope
- Can be **reassigned**
- Is **hoisted**, but not initialized (exists in the Temporal Dead Zone)
- Preferred for variables that need to change values

### Example:

```js
let count = 5;
// let count = 10; // ❌ Error: Identifier already declared
count = 10; // ✅ allowed
console.log(count); // 10
```

---

## 🔹 const

- Block-scoped (like `let`)
- Cannot be **redeclared**
- Cannot be **reassigned**
- Must be **initialized** when declared
- The value can be **mutable** if it’s an object or array (only the binding is constant)

### Example:

```js
const name = "Surya";
// name = "MM"; // ❌ Error: Assignment to constant variable

const user = { age: 25 };
user.age = 26; // ✅ allowed (object property can change)
console.log(user); // { age: 26 }
```

---

## ⚙️ Summary

| Keyword | Scope    | Re-declaration | Re-assignment | Hoisted | TDZ    | Use Case                         |
| ------- | -------- | -------------- | ------------- | ------- | ------ | -------------------------------- |
| `var`   | Function | ✅ Yes         | ✅ Yes        | ✅ Yes  | ❌ No  | Legacy code                      |
| `let`   | Block    | ❌ No          | ✅ Yes        | ✅ Yes  | ✅ Yes | Mutable values                   |
| `const` | Block    | ❌ No          | ❌ No         | ✅ Yes  | ✅ Yes | Constants & immutable references |

---

## 💡 Best Practice

- Use **`const`** by default
- Use **`let`** when the variable needs to change
- Avoid **`var`** unless required for legacy support
