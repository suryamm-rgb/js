# JavaScript Object Accessors (Getters and Setters)

## JavaScript Getters and Setters

Getters and setters allow you to define **object accessors** (computed properties).

---

## JavaScript Getter (`get` keyword)

A getter gets the value of a property.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Access using getter
person.lang;
```

---

## JavaScript Setter (`set` keyword)

A setter sets the value of a property.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set using setter
person.lang = "en";
```

---

## Function vs Getter

### Using a Method

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

person.fullName();
```

### Using a Getter

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

person.fullName;
```

### Key Difference

| Method | Access |
|------|-------|
| Function | `person.fullName()` |
| Getter | `person.fullName` |

✔ Getter provides cleaner and simpler syntax.

---

## Data Quality with Getters

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

person.lang; // "EN"
```

---

## Data Quality with Setters

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

person.lang = "en";
person.language; // "EN"
```

---

## Why Use Getters and Setters?

- Simpler syntax
- Same syntax for properties and methods
- Better data control and validation
- Useful for behind-the-scenes logic

---

## Using Object.defineProperty()

Getters and setters can also be defined using `Object.defineProperty()`.

### Counter Example

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

## Key Takeaways

- Getters access values like properties
- Setters control how values are set
- Improve readability and data safety
- Widely used in modern JavaScript
