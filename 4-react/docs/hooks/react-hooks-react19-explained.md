# React Hooks (React 19) — Ordered List + Explanation

This document includes **all React Hooks up to React 19**, in a clean order, with a short explanation and common use case for each hook.

---

## 1) State & Reducer

### 1. `useState`
**Purpose:** Adds local component state.  
**Use when:** You need to store & update simple values like `count`, `name`, `isOpen`.  
**Example:** Counter, toggles, input fields.

---

### 2. `useReducer`
**Purpose:** Manages complex state using a reducer function (`state + action → newState`).  
**Use when:** State logic is complex (multiple values / actions), like forms, carts, dashboards.  
**Example:** `dispatch({ type: "ADD_ITEM" })`

---

## 2) Context

### 3. `useContext`
**Purpose:** Reads and subscribes to a React context value.  
**Use when:** You want to share data globally without prop drilling (theme, auth user, language).  
**Example:** `const user = useContext(AuthContext)`

---

## 3) Refs

### 4. `useRef`
**Purpose:** Stores a mutable value that persists between renders **without causing re-render**.  
**Use when:** DOM access (`inputRef.current.focus()`), timers, previous values.  
**Example:** Store interval ID.

---

### 5. `useImperativeHandle`
**Purpose:** Customizes what is exposed when using `ref` on a child component.  
**Use when:** Parent needs controlled access to child methods (focus, scroll, reset).  
**Usually used with:** `forwardRef`.

---

## 4) Effects

### 6. `useEffect`
**Purpose:** Runs side effects after rendering.  
**Use when:** Fetch data, subscribe/unsubscribe, update document title, sync with APIs.  
**Runs:** After paint (non-blocking).

---

### 7. `useLayoutEffect`
**Purpose:** Like `useEffect` but runs **before the browser paints**.  
**Use when:** You must measure DOM & update layout immediately to avoid flicker.  
**Example:** Measuring element width/height before rendering UI changes.

---

### 8. `useInsertionEffect`
**Purpose:** Runs **before layout effects**, mainly for injecting styles.  
**Use when:** Library authors injecting CSS-in-JS styles.  
**Note:** Not needed for normal app development.

---

## 5) Performance / Memoization

### 9. `useMemo`
**Purpose:** Memoizes expensive computed values.  
**Use when:** A calculation is heavy and shouldn’t re-run every render.  
**Example:** Filtering/sorting large lists.

---

### 10. `useCallback`
**Purpose:** Memoizes a function reference.  
**Use when:** Passing callbacks to memoized child components to prevent re-renders.  
**Example:** `onClick`, handlers.

---

## 6) Concurrent / Transition

### 11. `useTransition`
**Purpose:** Marks updates as non-urgent, keeping UI responsive.  
**Use when:** Big re-renders like search filtering, navigating UI sections.  
**Returns:** `[isPending, startTransition]`

---

### 12. `useDeferredValue`
**Purpose:** Defers updating a value until more urgent updates complete.  
**Use when:** Input typing should stay fast while results update slowly.  
**Example:** Search box with deferred results.

---

## 7) External Store

### 13. `useSyncExternalStore`
**Purpose:** Subscribes to external state sources safely with concurrent rendering.  
**Use when:** Building libraries (Redux-like store subscriptions).  
**Note:** Most apps use Redux hooks already.

---

## 8) Unique ID

### 14. `useId`
**Purpose:** Generates stable unique IDs for accessibility & SSR hydration.  
**Use when:** `id` for input + label (forms), ARIA attributes.  
**Example:** `<label htmlFor={id}>`

---

## 9) Debug

### 15. `useDebugValue`
**Purpose:** Shows custom debug labels in React DevTools.  
**Use when:** Creating custom hooks.  
**Example:** `useDebugValue(isOnline ? "Online" : "Offline")`

---

## 10) React 19 Hooks

### 16. `useActionState`
**Purpose:** Manages state tied to async actions (especially forms).  
**Use when:** Form submission with pending/success/error handling.  
**Benefit:** Cleaner async form state updates.

---

### 17. `useOptimistic`
**Purpose:** Update UI immediately before server confirms (optimistic UI).  
**Use when:** Likes, comments, chat message sending.  
**Benefit:** Faster UX.

---

### 18. `useFormStatus`
**Purpose:** Reads the status of a form submission (pending state).  
**Use when:** Disable submit button, show loading state.  
**Mostly used with:** React Server Actions / forms.

---

## 11) React 19 Hook-like API

### 19. `use`
**Purpose:** Reads resources like Promises directly (suspense-friendly).  
**Use when:** React Server Components, async data reading.  
**Example:** `const data = use(fetchPromise)`

---

✅ **Total Hooks:** 19
