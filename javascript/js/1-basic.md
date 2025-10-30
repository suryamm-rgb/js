# 🟨 What is JavaScript?

**JavaScript (JS)** is a **high-level**, **interpreted**, and **dynamic programming language** used to make web pages **interactive** and **dynamic**.

- **JavaScript** to program the behavior of web pages

It runs directly in the **browser**, allowing developers to create features like:

- Interactive forms
- Animations
- Real-time updates
- Dynamic content changes without reloading the page

---

## 🧠 Key Features

- **Lightweight & Interpreted:** Runs directly in the browser without compilation.
- **Dynamic Typing:** Variable types are determined at runtime.
- **Object-Oriented:** Uses objects for structure and behavior.
- **Event-Driven:** Responds to user actions (clicks, hovers, key presses, etc.).
- **Cross-Platform:** Works across all major browsers and platforms.

---

## 🧩 Example

```javascript
// A simple JavaScript example
function greet(name) {
  console.log(`Hello, ${name}! 👋`);
}

greet("Surya");
```

## 🟨 JavaScript Can Change HTML Content

One of many JavaScript HTML methods is **`getElementById()`**.

The example below _"finds"_ an HTML element (with `id="demo"`) and changes the element content (`innerHTML`) to **"Hello JavaScript"**:

---

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>What Can JavaScript Do?</h2>

    <p id="demo">JavaScript can change HTML content.</p>

    <button
      type="button"
      onclick='document.getElementById("demo").innerHTML 
     = "Hello JavaScript!"'
    >
      Click Me!
    </button>
  </body>
</html>
```

## 💡 JavaScript Can Change HTML Attribute Values

In this example, JavaScript changes the value of the **`src` (source)** attribute of an `<img>` tag.

---

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>What Can JavaScript Do?</h2>

    <p>JavaScript can change HTML attribute values.</p>

    <p>
      In this case, JavaScript changes the value of the
      <code>src</code> (source) attribute of an image.
    </p>

    <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">
      Turn on the light
    </button>

    <img id="myImage" src="pic_bulboff.gif" style="width:100px" />

    <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">
      Turn off the light
    </button>
  </body>
</html>
```

### - JavaScript Can Change HTML Styles (CSS)

### - JavaScript Can Hide HTML Elements

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>What Can JavaScript Do?</h2>

    <p id="demo">JavaScript can hide HTML elements.</p>

    <button
      type="button"
      onclick="document.getElementById('demo').style.display='none'"
    >
      Click Me!
    </button>
  </body>
</html>
```

# JavaScript Display Possibilities

JavaScript can **"display"** data in different ways:

1. **Writing into an HTML element** — using `innerHTML` or `innerText`.

2. **Writing into the HTML output** — using `document.write()`.

3. **Writing into an alert box** — using `window.alert()`.

4. **Writing into the browser console** — using `console.log()`.

```html
<p id="demo"></p>
<script>
  document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>
<script>
  document.getElementById("demo").innerText = "Hello World";
</script>
<script>
  document.write(5 + 6);
</script>
<script>
  window.alert(5 + 6);
</script>
<script>
  alert(5 + 6);
</script>
<script>
  console.log(5 + 6);
</script>
<button onclick="window.print()">Print this page</button>
```

## JavaScript Values

The JavaScript syntax defines two types of values:

1. **Literals (Fixed values)**
2. **Variables (Variable values)**

## JavaScript Literals

The most important syntax rules for literals (fixed values) are:

- **Numbers** are written with or without decimals:
- **Strings** are text, written within double or single quotes:

```html
10.50 1001
<p id="demo"></p>

<script>
  document.getElementById("demo").innerHTML = 10.5;
</script>
```

## JavaScript Keywords

JavaScript keywords are used to define actions to be performed.

The **`let`** and **`const`** keywords create variables:

## Example

```javascript
let x = 5;
const fname = "John";
```

> **Note:**  
> JavaScript keywords are **case-sensitive**.  
> JavaScript does **not** interpret `LET` or `Let` as the keyword `let`.

## JavaScript Variables

- Variables are **containers for storing data values**.

- Variables must be identified with **unique names**.

## JavaScript Identifiers

An **identifier** is the name you give to a variable.

## Rules for Identifiers

- Must start with a **letter**, **\_**, or **$**
- Can contain **digits** after the first character
- Cannot be a **reserved keyword** (`let`, `const`, `if`, etc.)
- Are **case-sensitive**

## JavaScript Programs

- **computer program** is a list of "instructions" to be "executed" by a computer.

- These programming instructions are called **statements**.

- Most JavaScript programs contain **many statements**.

- The statements are executed **one by one**, in the same order as they are written.

> **Note:**  
> In HTML, JavaScript programs are executed by the **web browser**.

# JavaScript Keywords

JavaScript statements often start with a **keyword** to identify the JavaScript action to be performed.

Our **Reserved Words Reference** lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:

| **Keyword** | **Description**                                               |
| ----------- | ------------------------------------------------------------- |
| `var`       | Declares a variable                                           |
| `let`       | Declares a block variable                                     |
| `const`     | Declares a block constant                                     |
| `if`        | Marks a block of statements to be executed on a condition     |
| `switch`    | Marks a block of statements to be executed in different cases |
| `for`       | Marks a block of statements to be executed in a loop          |
| `function`  | Declares a function                                           |
| `return`    | Exits a function                                              |
| `try`       | Implements error handling to a block of statements            |

---

> **Note:**  
> JavaScript keywords are **reserved words**. Reserved words **cannot be used as names for variables**.
