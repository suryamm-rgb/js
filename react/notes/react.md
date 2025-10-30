# React

## What is React?

React is a front-end JavaScript library.

React was developed by the Facebook Software Engineer **Jordan Walke**.

React is also known as **React.js** or **ReactJS**.

React is a tool for building **UI components**.

---

## How does React Work?

React creates a **Virtual DOM** in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

React only changes what needs to be changed!

React finds out what changes have been made, and changes only what needs to be changed.

You will learn the various aspects of how React does this in the rest of this tutorial.

---

## What You Should Already Know

Before you continue you should have a basic understanding of the following:

- HTML
- CSS
- JavaScript

If you want to study these subjects first, find the tutorials on our Home page.

---

## React.JS History

- **Latest version:** React 19.0.0 (December 2024)
- **Initial release:** July 2013 (version 0.3.0)
- **First used:** 2011 for Facebook's Newsfeed feature
- **Created by:** Facebook Software Engineer _Jordan Walke_

## The `createRoot` Function

The `createRoot` function is located in the **main.jsx** file in the `src` folder.  
It is a **built-in function** used to create a root node for a React application.

---

### Example

The default content of the `src/main.jsx` file:

```jsx
// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## Understanding the `createRoot()` Function

The `createRoot()` function takes **one argument** — an **HTML element**.

The purpose of this function is to define **where** in the HTML document a React component (or element) should be displayed.

---

### Example: A Simple "Hello React!" App

To better understand how `createRoot()` works, let's simplify the code and create our own example.

The `src/main.jsx` file should look like this:

```jsx
// main.jsx
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<h1>Hello React!</h1>);
```

## The Root Node

The **root node** is the HTML element where you want React to display the result.

It acts as a **container** for your content — a place that React controls and updates as needed.

It **does not** have to be a `<div>` element, and it **does not** have to have the `id="root"`.

---

### Example: Using a Custom Root Node

The root node can be named anything you like.

Below, we display the React content inside a `<header>` element with the ID **"sandy"**.

## Example: Custom Root Node (`sandy`)

Below is a complete working example showing how React can render content inside a `<header>` element instead of the usual `<div>`.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <body>
    <header id="sandy"></header>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```html
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('sandy')).render(
<h1>Hello from Sandy!</h1>
)
```
