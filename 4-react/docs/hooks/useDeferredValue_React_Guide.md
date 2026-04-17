# ⚡ useDeferredValue — React Hook Guide

`useDeferredValue` is a React Hook that lets you **defer updating a part of your UI** so your app stays responsive even when some components are slow to render.

```
const deferredValue = useDeferredValue(value, initialValue?)
```

- **value** → The value you want to defer  
- **initialValue (optional)** → Used only on the first render  
- React first shows the **old value**, then updates in the **background**

---

## 🟢 Example 1 — Basic Search Input (Beginner)

Keep input fast while results update later.

```js
import { useState, useDeferredValue } from "react";

function SearchPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <SearchResults query={deferredQuery} />
    </>
  );
}
```

🧠 Typing stays smooth, results update slightly later.

---

## 🟡 Example 2 — Showing Stale Results with Suspense

Keep old results visible while new data loads.

```js
import { Suspense, useState, useDeferredValue } from "react";

function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}
```

✨ Instead of a loading spinner, users see the previous results until new ones are ready.

---

## 🟠 Example 3 — Indicating Stale Content Visually

Dim UI while new content loads.

```js
import { useState, useDeferredValue } from "react";

function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div style={{ opacity: isStale ? 0.5 : 1 }}>
      <SearchResults query={deferredQuery} />
    </div>
  );
}
```

👀 Users can tell the list is updating in the background.

---

## 🔵 Example 4 — Optimizing a Slow Component

Prevent a heavy component from blocking typing.

```js
import { useState, useDeferredValue, memo } from "react";

const SlowList = memo(function SlowList({ text }) {
  console.log("Rendering slow list...");
  return <div>Results for: {text}</div>;
});

function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
```

⌨️ Input stays responsive even if `SlowList` is heavy.

---

## 🔴 Example 5 — Deferring Expensive Filtering

Delay heavy filtering logic until typing pauses.

```js
import { useState, useDeferredValue } from "react";

function FilteredList({ items }) {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {filteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}
```

🚀 Large lists won’t slow down typing — filtering happens in the background.

---

## ⚠️ Best Practices

✔ Great for **search, filtering, charts, long lists**  
✔ Combine with **React.memo** for best performance  
✔ Works well with **Suspense**  
❌ Doesn’t replace debouncing for API calls  
❌ Don’t pass newly created objects each render

---

## 🧠 Summary

| Feature | Benefit |
|--------|---------| Keeps UI responsive | Prevents lag during heavy renders |
| Works with Suspense | Shows old UI until new is ready |
| No fixed delay | React schedules smartly |
| Background rendering | Lower priority updates |

---

Happy Performance Tuning ⚡
