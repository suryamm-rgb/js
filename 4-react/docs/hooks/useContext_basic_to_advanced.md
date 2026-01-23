# React `useContext` — Basic to Advanced (with Examples)

> This document explains React **Context API** and the **`useContext` hook** from **basic → advanced**, with practical examples for projects and interviews.

---

## Table of Contents

1. [What problem does Context solve?](#1-what-problem-does-context-solve)
2. [What is `useContext`?](#2-what-is-usecontext)
3. [Core Terms](#3-core-terms)
4. [Basic Example (Theme)](#4-basic-example-theme)
5. [Updating Context (State + Context)](#5-updating-context-state--context)
6. [Using Object Values (Auth Example)](#6-using-object-values-auth-example)
7. [Custom Hook Pattern (`useAuth`, `useTheme`)](#7-custom-hook-pattern-useauth-usetheme)
8. [Multiple Contexts](#8-multiple-contexts)
9. [Overriding Context for Part of Tree](#9-overriding-context-for-part-of-tree)
10. [Performance: Prevent Unnecessary Re-renders](#10-performance-prevent-unnecessary-re-renders)
11. [Scaling Up: `useReducer` + Context](#11-scaling-up-usereducer--context)
12. [Common Mistakes + Fixes](#12-common-mistakes--fixes)
13. [Interview Notes](#13-interview-notes)

---

## 1) What problem does Context solve?

In React, data flows from **Parent → Child → Grandchild → ...**

When deep children need a value (theme, user info, language, permissions), you pass props again and again:

✅ This is called **prop drilling**.

**Context** solves this by making some data available globally for a part of the component tree.

---

### Usage

- Passing data deeply into the tree
- Updating data passed via context
- Specifying a fallback default value
- Overriding context for a part of the tree
- Optimizing re-renders when passing objects and functions

## 2) What is `useContext`?

`useContext()` is a React Hook to **read and subscribe** to a context value.

```js
const value = useContext(SomeContext);
```

- It reads from the **nearest `<SomeContext.Provider>` above** the component.
- If there is no provider above, it returns the **default value** given to `createContext(defaultValue)`.

---

## 3) Core Terms

### ✅ `createContext(defaultValue)`

Creates a context object.

```js
import { createContext } from "react";

export const ThemeContext = createContext("light");
```

### ✅ Provider

Used to **give** a value to all children.

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

### ✅ `useContext(Context)`

Used to **read** the value.

```js
const theme = useContext(ThemeContext);
```

---

## 4) Basic Example (Theme)

### Step 1: Create Context

**`theme-context.js`**

```js
import { createContext } from "react";

export const ThemeContext = createContext("light");
```

### Step 2: Provide Context

**`App.js`**

```js
import { ThemeContext } from "./theme-context";
import Page from "./Page";

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}
```

### Step 3: Read Context

**`Page.js`**

```js
import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export default function Page() {
  const theme = useContext(ThemeContext);

  return <h1>Current theme: {theme}</h1>;
}
```

✅ Output: `Current theme: dark`

---

## 5) Updating Context (State + Context)

Context becomes powerful when used with state.

```js
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Page />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function Page() {
  const theme = useContext(ThemeContext);
  return <h2>Theme: {theme}</h2>;
}
```

✅ When `theme` changes, every component using the theme context will re-render.

---

## 6) Using Object Values (Auth Example)

Real apps pass objects like `{ user, login, logout }`.

```js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export default function App() {
  const [user, setUser] = useState(null);

  const login = () => setUser({ name: "Surya" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Dashboard />
    </AuthContext.Provider>
  );
}

function Dashboard() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome {user.name}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}
```

---

## 7) Custom Hook Pattern (`useAuth`, `useTheme`)

This is the cleanest real-world pattern.

### Create Provider + Hook

```js
import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
```

### Usage

```js
import { useAuth } from "./auth";

function Profile() {
  const { user } = useAuth();
  return <h2>{user ? user.name : "Guest"}</h2>;
}
```

✅ Benefits:

- Less imports
- No repeated `useContext(AuthContext)`
- Gives meaningful errors

---

## 8) Multiple Contexts

You can use multiple contexts in one component.

```js
const ThemeContext = createContext("light");
const LangContext = createContext("en");

function Header() {
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);

  return (
    <p>
      Theme: {theme}, Language: {lang}
    </p>
  );
}
```

---

## 9) Overriding Context for Part of Tree

Providers can be nested.

```jsx
<ThemeContext.Provider value="dark">
  <Main />

  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
</ThemeContext.Provider>
```

✅ `Footer` will receive `light`, others receive `dark`.

---

## 10) Performance: Prevent Unnecessary Re-renders

### Problem

Passing objects/functions creates a **new reference** each render → triggers re-render.

❌ Bad

```jsx
<AuthContext.Provider value={{ user, login }}>
```

### Fix: `useCallback` + `useMemo`

```js
import { useCallback, useMemo, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const login = useCallback((name) => {
    setUser({ name });
  }, []);

  const value = useMemo(() => ({ user, login }), [user, login]);

  return (
    <AuthContext.Provider value={value}>
      <Dashboard />
    </AuthContext.Provider>
  );
}
```

✅ Only updates consumers when `user` changes.

---

## 11) Scaling Up: `useReducer` + Context

Best pattern for large apps.

```js
import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
```

Usage:

```js
function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
}
```

---

## 12) Common Mistakes + Fixes

### ❌ Mistake 1: Provider missing `value`

```jsx
<ThemeContext.Provider>
  <Page />
</ThemeContext.Provider>
```

✅ Fix

```jsx
<ThemeContext.Provider value={theme}>
```

---

### ❌ Mistake 2: Wrong prop name

```jsx
<ThemeContext.Provider theme={theme}>
```

✅ Fix

```jsx
<ThemeContext.Provider value={theme}>
```

---

### ❌ Mistake 3: Calling `useContext` but provider is below

`useContext()` reads only providers **above** it.

✅ Fix: move provider higher.

---

### ❌ Mistake 4: Duplicate context imports

This happens when build creates duplicates (symlinks/monorepo).

✅ Fix: Ensure provider + consumer import the _same_ context instance.

---

## 13) Interview Notes

✅ When to use `useContext`?

- Theme
- Auth user
- Language
- Global UI settings
- Permissions

✅ When **NOT** to use context?

- For huge frequently changing state like typing inputs across many components
- Use Redux/Zustand or local state instead

✅ Key point:

- `useContext` re-renders **all consumers** when provider value reference changes

---

### Quick Summary

- `createContext(defaultValue)` creates a context
- `<Context.Provider value={...}>` provides value
- `useContext(Context)` reads value
- Optimize objects with `useMemo` and functions with `useCallback`
- Large apps: Context + `useReducer`

---

**End of document ✅**
