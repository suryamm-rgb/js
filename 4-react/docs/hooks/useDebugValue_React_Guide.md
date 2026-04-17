# 🧩 useDebugValue — React Hook Guide

`useDebugValue` is a React Hook that helps you **label custom Hooks** in **React DevTools**, so debugging becomes much easier.

It is **only for development** and **does nothing in production UI**.

```
useDebugValue(value, format?)
```

- **value** → What you want DevTools to show  
- **format (optional)** → Function to format the value *only when inspected*

---

## 🟢 Example 1 — Basic String Label (Beginner)

Show a simple readable label instead of raw boolean.

```js
import { useState, useEffect, useDebugValue } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  useDebugValue(isOnline ? "🟢 Online" : "🔴 Offline");

  return isOnline;
}
```

👀 In DevTools you’ll see:
```
OnlineStatus: "🟢 Online"
```

---

## 🟡 Example 2 — Showing Numbers Clearly

Useful when your hook returns a number but you want context.

```js
import { useState, useDebugValue } from "react";

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  useDebugValue(`Count: ${count}`);

  return { count, increment: () => setCount(c => c + 1) };
}
```

Instead of just `5`, DevTools shows:
```
Count: 5
```

---

## 🟠 Example 3 — Working with Objects

If your hook returns an object, show only the important part.

```js
import { useState, useDebugValue } from "react";

function useUser() {
  const [user, setUser] = useState({ name: "Surya", role: "Admin" });

  useDebugValue(user.name);

  return user;
}
```

DevTools shows:
```
User: "Surya"
```

Cleaner than inspecting the full object.

---

## 🔵 Example 4 — Using a Formatting Function (Performance Friendly)

Formatting runs **only when DevTools inspects**, not on every render.

```js
import { useState, useDebugValue } from "react";

function useFormattedDate() {
  const [date] = useState(new Date());

  useDebugValue(date, d => d.toDateString());

  return date;
}
```

Without formatting, DevTools shows a full Date object.  
With formatting, it shows:
```
"Wed Jan 29 2026"
```

---

## 🔴 Example 5 — Advanced: Custom Hook with Multiple States

Useful for shared library hooks where internal logic is complex.

```js
import { useState, useEffect, useDebugValue } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  useDebugValue({ loading, hasData: !!data, error });

  return { data, loading, error };
}
```

DevTools might show:
```
{ loading: false, hasData: true, error: null }
```

Much easier than digging through multiple states manually.

---

## ⚠️ Best Practices

✔ Use `useDebugValue` for **shared or complex hooks**  
✔ Keep values **simple and meaningful**  
✔ Use formatting function for **expensive calculations**  
❌ Don’t use in every small hook

---

## 🧠 Summary

| Feature | Purpose |
|--------|---------| Label custom hooks | Makes DevTools easier to read |
| Dev-only | No impact on production |
| Optional formatter | Improves performance |
| Best for libraries | Especially complex hooks |

---

Happy Debugging! 🚀
