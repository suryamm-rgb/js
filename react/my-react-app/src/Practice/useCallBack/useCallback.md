# 🧠 `useCallback` — React Hook Summary

## 📘 Definition

`useCallback` is a React Hook that lets you **cache (memoize) a function** between re-renders.
at the top level of your component to cache a function definition between re-renders:  
It returns the same function reference unless its **dependencies change**.

---

## 🧩 Syntax

```js
const cachedFn = useCallback(fn, dependencies);
```

- **`fn`** → The function you want to cache.
- **`dependencies`** → Array of variables that trigger recreation when they change.

---

## ⚙️ Example

```jsx
import { useCallback, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Add +1</button>
    </div>
  );
}
```

✅ The `increment` function remains the same across renders.

---

## 💡 When to Use

| Situation                                          | Why use `useCallback`                            |
| -------------------------------------------------- | ------------------------------------------------ |
| Passing functions to **memoized child components** | Prevents unnecessary re-renders                  |
| Using a function inside a **useEffect**            | Avoids effect running every render               |
| Building **custom hooks**                          | Provides stable function references to consumers |
| Performance optimization                           | Keeps function identity stable between renders   |

---

## ⚠️ Common Mistakes

| ❌ Mistake                         | ✅ Fix                                                    |
| ---------------------------------- | --------------------------------------------------------- |
| Forgetting dependency array        | Always pass dependencies: `useCallback(fn, [dep1, dep2])` |
| Calling inside loops or conditions | Must be at the **top level** of the component             |
| Using it everywhere                | Only when function identity matters                       |
| Stale variables inside callback    | Include all variables in dependency array                 |

---

## 🧾 Summary Table

| Property          | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------- |
| **Purpose**       | Cache function definitions between renders                                       |
| **Returns**       | Same function reference until dependencies change                                |
| **Helps With**    | Performance & preventing unnecessary re-renders                                  |
| **Depends On**    | Dependency array values                                                          |
| **React 19 Note** | React Compiler can auto-memoize functions — `useCallback` becomes less necessary |
