# JavaScript Object Management

## Property Management Methods

```js
// Add or change a single property
Object.defineProperty(object, property, descriptor);

// Add or change multiple properties
Object.defineProperties(object, descriptors);

// Get a single property descriptor
Object.getOwnPropertyDescriptor(object, property);

// Get all property descriptors
Object.getOwnPropertyDescriptors(object);

// Get all own property names (enumerable + non-enumerable)
Object.getOwnPropertyNames(object);

// Access an object's prototype
Object.getPrototypeOf(object);
```

---

## Object.defineProperty()

Used to:
- Add new properties
- Modify existing properties
- Change property metadata
- Define getters and setters

### Syntax

```js
Object.defineProperty(object, property, descriptor);
```

---

## Adding a New Property

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

Object.defineProperty(person, "year", {
  value: "2008"
});
```

---

## Changing a Property Value

```js
Object.defineProperty(person, "language", {
  value: "NO"
});
```

---

## Property Attributes

Each property has attributes:

- `value` – property value
- `writable` – can the value be changed
- `enumerable` – can it appear in loops
- `configurable` – can it be deleted or redefined

```js
{
  writable: true,
  enumerable: true,
  configurable: true
}
```

---

## Changing Property Metadata

### Make Property Read-Only

```js
Object.defineProperty(person, "language", {
  writable: false
});
```

### Make Property Non-Enumerable

```js
Object.defineProperty(person, "language", {
  enumerable: false
});
```

---

## Getters and Setters

### Adding a Getter

```js
const person = { firstName: "John", lastName: "Doe" };

Object.defineProperty(person, "fullName", {
  get() {
    return this.firstName + " " + this.lastName;
  }
});
```

---

## Counter Example (Getters & Setters)

```js
const obj = { counter: 0 };

Object.defineProperty(obj, "reset", {
  get() { this.counter = 0; }
});

Object.defineProperty(obj, "increment", {
  get() { this.counter++; }
});

Object.defineProperty(obj, "decrement", {
  get() { this.counter--; }
});

Object.defineProperty(obj, "add", {
  set(value) { this.counter += value; }
});

Object.defineProperty(obj, "subtract", {
  set(value) { this.counter -= value; }
});

// Usage
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
```

---

## Object.getOwnPropertyNames()

Returns **all own properties**, including non-enumerable ones.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

Object.getOwnPropertyNames(person);
```

### Including Non-Enumerable Properties

```js
Object.defineProperty(person, "language", { enumerable: false });

Object.getOwnPropertyNames(person);
```

---

## Object.keys()

Returns **only enumerable properties**.

```js
Object.keys(person);
```

### Difference

| Method | Returns |
|------|--------|
| Object.getOwnPropertyNames() | All properties |
| Object.keys() | Enumerable properties only |

---

## Prototype Properties & delete

- Objects inherit properties from their prototype
- `delete` does **not** remove inherited properties
- Deleting a prototype property affects **all instances**

---

## Key Takeaways

- Use `defineProperty` for fine-grained control
- Prefer getters/setters for controlled access
- Understand enumerable vs non-enumerable
- Be careful when modifying prototypes
