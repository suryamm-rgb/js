# `useActionState` — Complete Guide (React + Backend Storage Example)

`useActionState` is a React Hook that allows you to update component state based on the result of a **form action**.

It is especially useful with **React Server Components / Server Actions** (Next.js App Router), where forms can submit to server functions without writing manual `fetch()` calls on the client.

---

## ✅ What is `useActionState`?

`useActionState` connects a form action to local state.  
Whenever the form is submitted, the return value of the action becomes the new state.

```js
const [state, formAction, isPending] = useActionState(actionFn, initialState);
```

---

## ✅ Why we use this Hook?

Normally in React forms:

- submit form
- call API manually using `fetch()` / `axios`
- store response using `useState`
- show message/errors manually

But with Server Actions:

- action runs on the server
- form submits directly to server function
- we still need to show server results (success/error/data)

✅ `useActionState` solves that by:

- storing latest action return value into state
- giving `isPending` (loading)
- giving a safe `formAction` function for `<form>`

---

## ✅ When to use `useActionState`?

Use `useActionState` when:

✅ You submit a form & want to show response in UI  
✅ You need loading state  
✅ Server action returns:

- success message
- error message
- updated object / data
- validation result

---

## ✅ Signature

```js
useActionState(actionFn, initialState, permalink?)
```

---

## ✅ Parameters

| Parameter | Meaning |
|----------|---------|
| `actionFn` | Function to run on submit (action) |
| `initialState` | Default state value |
| `permalink?` | Optional URL for progressive enhancement for dynamic pages |

---

## ✅ Return Values

| Return value | Meaning |
|------------|---------|
| `state` | Latest return value from server action |
| `formAction` | Pass into `<form action={...}>` |
| `isPending` | True while request is processing |

---

## ⚠️ Important Caveat

When you wrap an action with `useActionState`, React injects a **first argument** as previous state:

```js
async function action(prevState, formData) {
  // prevState = last returned value
  // formData = submitted data
}
```

So `formData` becomes the **second argument**, not first.

---

# ✅ Examples

---

## ✅ Example 1: Login Form — Show error / success message

```js
import { useActionState } from "react";

async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { status: "error", message: "Email and password required" };
  }

  if (password !== "1234") {
    return { status: "error", message: "Incorrect password" };
  }

  return { status: "success", message: "Login successful ✅" };
}

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <form action={formAction}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" />

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {state?.message && (
        <p style={{ color: state.status === "error" ? "red" : "green" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
```

---

## ✅ Example 2: Add to cart — Disable button while loading

```js
import { useActionState } from "react";

async function addToCart(prevState, formData) {
  const itemID = formData.get("itemID");

  await new Promise((r) => setTimeout(r, 1000));

  return `Item ${itemID} added to cart ✅`;
}

export default function AddToCart() {
  const [message, formAction, isPending] = useActionState(addToCart, "");

  return (
    <form action={formAction}>
      <input type="hidden" name="itemID" value="101" />

      <button type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add to Cart"}
      </button>

      <p>{message}</p>
    </form>
  );
}
```

---

## ✅ Example 3: Profile Update — Return structured object

```js
import { useActionState } from "react";

async function updateProfile(prevState, formData) {
  const name = formData.get("name");
  const city = formData.get("city");

  if (!name) {
    return { error: "Name is required", data: prevState?.data || null };
  }

  return {
    error: null,
    data: { name, city }
  };
}

export default function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfile, {
    data: { name: "Surya", city: "Bangalore" },
    error: null
  });

  return (
    <form action={formAction}>
      <input name="name" defaultValue={state.data.name} />
      <input name="city" defaultValue={state.data.city} />

      <button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Save"}
      </button>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <h4>Updated Preview:</h4>
      <pre>{JSON.stringify(state.data, null, 2)}</pre>
    </form>
  );
}
```

---

# ✅ Example 4: End-to-End Backend Storage (Next.js + MongoDB)

This example shows real backend storage using:

✅ `useActionState` in client component  
✅ Server Action in backend  
✅ MongoDB + Mongoose to store records  
✅ Return success/error response to UI

---

## ✅ Folder Structure (Recommended)

```txt
app/
  register/
    page.tsx
    RegisterForm.tsx
  actions/
    registerAction.ts
lib/
  db.ts
models/
  User.ts
```

---

## ✅ Step 1: MongoDB Connection (`lib/db.ts`)

```ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI);
}
```

✅ `.env.local`

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb
```

---

## ✅ Step 2: User Model (`models/User.ts`)

```ts
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
```

---

## ✅ Step 3: Server Action (`app/actions/registerAction.ts`)

```ts
"use server";

import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

type StateType = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function registerAction(
  prevState: StateType,
  formData: FormData
): Promise<StateType> {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();

  if (!name || !email) {
    return { status: "error", message: "All fields required ❌" };
  }

  try {
    await connectDB();

    const existing = await User.findOne({ email });
    if (existing) {
      return { status: "error", message: "Email already exists ❌" };
    }

    await User.create({ name, email });

    return { status: "success", message: "User stored successfully ✅" };
  } catch (err) {
    return { status: "error", message: "Database error ❌" };
  }
}
```

---

## ✅ Step 4: Client Component using `useActionState` (`app/register/RegisterForm.tsx`)

```tsx
"use client";

import { useActionState } from "react";
import { registerAction } from "../actions/registerAction";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, {
    status: "idle",
    message: "",
  });

  return (
    <form action={formAction} className="flex flex-col gap-3 max-w-sm">
      <input name="name" placeholder="Enter name" className="border p-2" />
      <input name="email" placeholder="Enter email" className="border p-2" />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white p-2"
      >
        {isPending ? "Saving..." : "Register"}
      </button>

      {state.message && (
        <p style={{ color: state.status === "error" ? "red" : "green" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
```

---

## ✅ Step 5: Page File (`app/register/page.tsx`)

```tsx
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-3">Register User</h1>
      <RegisterForm />
    </div>
  );
}
```

---

# ✅ End-to-End Flow (How storage works)

✅ User submits form →  
✅ React calls server action using `formAction` →  
✅ Server action reads `formData` →  
✅ Saves into MongoDB →  
✅ Returns `{status, message}` →  
✅ UI updates automatically (`state`)

---

# ✅ Summary

✅ `useActionState` is best when you need:

- form response in UI
- backend action return value stored in state
- loading state control (`isPending`)
- no manual API calls
- best integration with Server Actions
