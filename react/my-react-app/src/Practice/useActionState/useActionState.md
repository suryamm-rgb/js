# 🧩 `useActionState` Hook --- React 19 Reference

## 📘 Overview

`useActionState` is a React 19 hook that helps manage **component state
updates triggered by form actions** (client or server).

It automatically tracks: - The **latest state** returned by the action -
The **pending (loading)** status - And provides a **new action handler**
for your form.

------------------------------------------------------------------------

## 🧠 Reference

### **`useActionState(action, initialState, permalink?)`**

Call `useActionState` at the **top level** of your component to create
component state that updates when a form action is invoked.

It returns: 1. The **current state** (returned from the action) 2. A
**new action function** to use in your form 3. A **boolean flag**
(`isPending`) indicating if the action is still running

------------------------------------------------------------------------

### 🧩 Example

``` jsx
import { useActionState } from "react";

async function increment(previousState, formData) {
  return previousState + 1;
}

function StatefulForm() {
  const [state, formAction, isPending] = useActionState(increment, 0);
  
  return (
    <form>
      {state}
      <button formAction={formAction} disabled={isPending}>
        {isPending ? "Loading..." : "Increment"}
      </button>
    </form>
  );
}
```

------------------------------------------------------------------------

## ⚙️ Parameters

  ---------------------------------------------------------------------------------
  Parameter                   Type          Description
  --------------------------- ------------- ---------------------------------------
  **`action`**                `Function`    The function called when the form is
                                            submitted or button pressed. It
                                            receives
                                            `(previousState, ...formActionArgs)`.

  **`initialState`**          `any`         The value of the state before the first
                                            submission. Must be serializable.

  **`permalink`**             `string`      The unique page URL modified by this
  *(optional)*                              form. Used for **progressive
                                            enhancement** with **Server Actions**.
  ---------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🔄 Returns

`useActionState` returns an **array** with:

1.  **Current state** --- initially the `initialState`, later the return
    value of the `action`.
2.  **New action** --- pass it to `<form action={...}>` or
    `<button formAction={...}>`.
3.  **Pending flag** --- a boolean that's `true` while the action is
    processing.

------------------------------------------------------------------------

## ⚠️ Caveats

-   Works in **React Server Components** for interactive forms before JS
    loads.
-   In client-only mode, behaves like **local state**.
-   The provided action receives an **extra first argument** --- the
    **previous/initial state**.

Example:

``` js
function action(currentState, formData) {
  // ...
}
```

------------------------------------------------------------------------

## 🚀 Usage

### ✅ Using Information Returned by a Form Action

``` jsx
import { useActionState } from 'react';
import { action } from './actions.js';

function MyComponent() {
  const [state, formAction, isPending] = useActionState(action, null);

  return (
    <form action={formAction}>
      {/* form fields */}
    </form>
  );
}
```

------------------------------------------------------------------------

### 🧩 Example: Display Form Errors

``` jsx
import { useActionState } from "react";
import { addToCart } from "./actions.js";

function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction, isPending] = useActionState(addToCart, null);

  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit" disabled={isPending}>
        {isPending ? "Loading..." : "Add to Cart"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

------------------------------------------------------------------------

## 🛠️ Troubleshooting

### ❌ My action can no longer read the submitted form data

When you wrap an action with `useActionState`, it gains an **extra first
argument** --- the **current state**.

That means the **submitted form data** becomes the **second argument**,
not the first.

``` js
function action(currentState, formData) {
  // currentState → previous return value or initialState
  // formData → submitted form data
}
```

------------------------------------------------------------------------

## 🧾 Summary

  Concept             Description
  ------------------- -------------------------------------------------------
  **Purpose**         Manage form-driven state updates
  **Introduced In**   React 19
  **Arguments**       `(action, initialState, permalink?)`
  **Returns**         `[state, formAction, isPending]`
  **Best For**        Form submissions, Server Actions, async state updates
  **Key Benefit**     Simplifies handling of form results + pending UI

------------------------------------------------------------------------

## 📚 See Also

-   [`useFormStatus`](https://react.dev/reference/react-dom/hooks/useFormStatus)
-   [`useOptimistic`](https://react.dev/reference/react/useOptimistic)
-   [`startTransition`](https://react.dev/reference/react/startTransition)
