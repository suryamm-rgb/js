# JavaScript Object Protection

## Object Protection Methods

```js
// Prevents re-assignment
const car = { type: "Fiat", model: "500", color: "white" };

// Prevents adding properties
Object.preventExtensions(object);

// Checks if extensible
Object.isExtensible(object);

// Prevents adding & deleting properties
Object.seal(object);

// Checks if sealed
Object.isSealed(object);

// Prevents any changes
Object.freeze(object);

// Checks if frozen
Object.isFrozen(object);
```

---

## Using `const`

Using `const` prevents **re-assigning** an object, but still allows:
- Modifying properties
- Adding properties
- Deleting properties

```js
const person = { name: "John" };
person.name = "Doe"; // ✅ allowed
```

---

## Object.preventExtensions()

Prevents adding new properties.

```js
const person = { firstName: "John", lastName: "Doe" };
Object.preventExtensions(person);

person.age = 30; // ❌ Error
```

### Arrays

```js
const fruits = ["Banana", "Orange"];
Object.preventExtensions(fruits);

fruits.push("Apple"); // ❌ Error
```

---

## Object.isExtensible()

Checks if new properties can be added.

```js
Object.isExtensible(person); // false
```

---

## Object.seal()

- Prevents adding or deleting properties
- Existing properties can still be modified
- Makes properties non-configurable

```js
"use strict";

const person = { name: "John", age: 50 };
Object.seal(person);

delete person.age; // ❌ Error
person.age = 51;   // ✅ Allowed
```

### Arrays

```js
const fruits = ["Banana", "Orange"];
Object.seal(fruits);

fruits.push("Apple"); // ❌ Error
```

---

## Object.isSealed()

Checks if an object is sealed.

```js
Object.isSealed(person); // true
```

---

## Object.freeze()

- Prevents adding, deleting, or modifying properties
- Object becomes fully read-only

```js
"use strict";

const person = { name: "John", age: 50 };
Object.freeze(person);

person.age = 51; // ❌ Error
```

### Arrays

```js
const fruits = ["Banana", "Orange"];
Object.freeze(fruits);

fruits.push("Apple"); // ❌ Error
```

---

## Object.isFrozen()

Checks if an object is frozen.

```js
Object.isFrozen(person); // true
```

---

## Comparison Table

| Method | Add | Delete | Modify |
|------|-----|--------|--------|
| const | ❌ reassign | ✅ | ✅ |
| preventExtensions | ❌ | ✅ | ✅ |
| seal | ❌ | ❌ | ✅ |
| freeze | ❌ | ❌ | ❌ |

---

## Key Takeaways

- `preventExtensions()` → stop adding
- `seal()` → stop add & delete
- `freeze()` → full protection
- Arrays are objects → same rules apply
