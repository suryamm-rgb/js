# JavaScript Promise Reference

The **Promise Object** represents the completion or failure of an asynchronous operation and its result.

---

## Promise States

A Promise can have **3 states**:

| State | Meaning |
|------|---------|
| `pending` | initial state |
| `rejected` | operation failed |
| `fulfilled` | operation completed |

---

## Promise Object Methods & Properties  
**Revised: December 2025**

### Instance Methods

| Name | Description |
|------|-------------|
| `catch()` | Provides a function to be called when a promise is rejected |
| `finally()` | Provides a function to be called when a promise is fulfilled or rejected |
| `then()` | Provides two functions to be called when a promise is fulfilled or rejected |

---

## Static Methods

| Name | Description |
|------|-------------|
| `Promise.all()` | Returns a single Promise from a list of promises (when all promises fulfill) |
| `Promise.allSettled()` | Returns a single Promise from a list of promises (when all promises settle) |
| `Promise.any()` | Returns a single Promise from a list of promises (when any promise fulfills) |
| `Promise.race()` | Returns a single Promise from a list of promises (when the fastest promise settles) |
| `Promise.reject()` | Returns a Promise object rejected with a value |
| `Promise.resolve()` | Returns a Promise object resolved with a value |
| `Promise.then()` | Provides two callbacks: one runs when fulfilled, one runs when rejected |
| `Promise.try()` | Executes a function and wraps its result in a promise |
| `Promise.withResolvers()` | Returns `{ promise, resolve, reject }` for easier promise creation and control |

---
