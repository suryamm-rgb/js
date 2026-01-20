# `useCallback` — Solid Understanding (Concepts + When/Why to Use)

`useCallback` is a React Hook that **caches a function definition** between re-renders so React can reuse the **same function reference** until dependencies change.

```js
const cachedFn = useCallback(fn, dependencies);
```

---

## 1) What exactly is `useCallback`?

### ✅ Definition

`useCallback` returns a **memoized version of your function**.

- React **does not call** your function.
- React only **stores and returns** the same function reference again.

> It memoizes the **function reference**, not the returned value.

---

### example

```js
import React, { useCallback, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

## 2) Why do we need it?

### ✅ JavaScript core behavior

In JavaScript, **functions are objects**. Every render creates a new function:

```js
const handleClick = () => console.log("Hi");
```

Even if code looks same, a new function object is created each render:

- Render 1 → Function A
- Render 2 → Function B
- Render 3 → Function C

Same like:

```js
{} !== {}
```

---

## 3) What problem happens without `useCallback`?

The issue appears mostly when you pass functions as props to **memoized children**:

```js
<Child onClick={handleClick} />
```

Even if logic doesn't change, **the function reference changes**, so child props change.

If the child is wrapped in `memo`, it will still re-render because:

- `onClick` prop (function reference) is different every render.

---

## ✅ Key Rule (Super Important)

> Use `useCallback` when you need a stable function reference  
> especially when passing it into `React.memo` components or using it in dependency arrays.

---

## 4) How does `useCallback` work?

```js
const handleSubmit = useCallback(() => {
  console.log(productId);
}, [productId]);
```

React logic:

- if dependencies are **same** → return **same old function**
- if dependencies **changed** → create and store **new function**

So it caches the function until dependencies change.

---

## 5) `useCallback` vs Normal function

### ❌ Normal function

```js
const fn = () => {};
```

✅ simple  
❌ new function each render

### ✅ useCallback

```js
const fn = useCallback(() => {}, []);
```

✅ stable function reference  
❌ slight overhead (memory + complexity)

---

## 6) When to use `useCallback`?

### ✅ Case 1: Passing function to a memoized child (MOST COMMON)

```js
import React, { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child Render");
  return <button onClick={onClick}>Child Button</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Inc {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}
```

✅ Why `useCallback`?

- Parent re-renders on `count`
- Without `useCallback`, `handleClick` changes every render
- With `useCallback`, it stays same → Child skips re-render (`memo` works)

---

### ✅ Case 2: Function as dependency in `useEffect`

```js
import { useCallback, useEffect, useState } from "react";

export default function ChatRoom({ roomId }) {
  const [msg, setMsg] = useState("");

  const createOptions = useCallback(() => {
    return { serverUrl: "https://localhost:1234", roomId };
  }, [roomId]);

  useEffect(() => {
    const options = createOptions();
    console.log("connect", options);
    return () => console.log("disconnect");
  }, [createOptions]);

  return <input value={msg} onChange={(e) => setMsg(e.target.value)} />;
}
```

✅ Why `useCallback`?

- Without it, `createOptions` changes every render
- Effect triggers every render
- With `useCallback`, it only changes when `roomId` changes

> Even better: move function inside effect if possible.

---

### ✅ Case 3: Custom Hook returns functions

```js
import { useCallback } from "react";

export function useRouter() {
  const navigate = useCallback((url) => {
    console.log("navigate", url);
  }, []);

  const goBack = useCallback(() => {
    console.log("back");
  }, []);

  return { navigate, goBack };
}
```

✅ Why?

- Consumers may use `memo` and dependency arrays
- Stable references help avoid unnecessary re-renders

---

## 7) When NOT to use `useCallback`?

❌ Don’t wrap every function by default:

```js
const handleClick = useCallback(() => {}, []);
const handleChange = useCallback(() => {}, []);
```

Unless:

- passed to memo child
- used in dependency arrays
- returned from custom hook

Otherwise, it’s unnecessary.

---

## 8) The Closure Trap (Very Important)

This is a common bug:

```js
const fn = useCallback(() => {
  console.log(count);
}, []);
```

❌ This prints **old count** forever (closure captured initial value)

✅ Fix:

```js
const fn = useCallback(() => {
  console.log(count);
}, [count]);
```

---

## 9) Updating state inside `useCallback` (Best Practice)

### ❌ Avoid putting state in deps when not needed

```js
const addTodo = useCallback(() => {
  setTodos([...todos, newTodo]);
}, [todos]);
```

✅ Better:

```js
const addTodo = useCallback(() => {
  setTodos((prev) => [...prev, newTodo]);
}, []);
```

Why?

- Uses React updater function
- No dependency required

---

## 10) `useCallback` vs `useMemo`

### ✅ useMemo caches **a value**

```js
const value = useMemo(() => expensiveCalc(a), [a]);
```

### ✅ useCallback caches **a function**

```js
const fn = useCallback(() => doSomething(a), [a]);
```

⭐ Tip:

> `useCallback(fn, deps)` is basically `useMemo(() => fn, deps)`

---

# ✅ Final Summary

✅ `useCallback` caches function reference  
✅ Use it when:

1. Passing callback to `React.memo` child
2. Function used in dependency array (`useEffect`, `useMemo`, etc.)
3. Returning functions from custom hooks

❌ Don’t use it everywhere — only when needed.

---

# ✅ Best Interview Answer

> `useCallback` memoizes function references to keep them stable between renders.  
> It helps avoid unnecessary re-renders of memoized children and prevents Effects from re-running when a callback is a dependency.
