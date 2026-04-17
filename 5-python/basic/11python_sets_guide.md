# 🧩 Python Sets – Beginner to Advanced Guide

## 📌 What is a Set?

A **set** is a built-in Python data type used to store **multiple unique items** in a single variable.

```python
my_set = {"apple", "banana", "cherry"}
print(my_set)
```

### ✅ Key Characteristics

| Feature       | Description                                              |
| ------------- | -------------------------------------------------------- |
| Unordered     | Items have no fixed position                             |
| Unindexed     | No indexing like lists (`set[0]` ❌)                     |
| No Duplicates | Duplicate values are automatically removed               |
| Mutable       | You can add/remove items (but not change an item itself) |

---

## 🏗 Creating Sets

```python
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4}
mixed = {"apple", 10, True}
```

### Using `set()` constructor

```python
thisset = set(("apple", "banana", "cherry"))
```

> ⚠️ Empty `{}` creates a **dictionary**, not a set

```python
empty_set = set()   # ✅ correct
```

---

## 🔍 Set Properties

### 1️⃣ Unordered

```python
s = {"a", "b", "c"}
print(s)  # Order may change every time
```

### 2️⃣ No Duplicates

```python
s = {"apple", "banana", "apple"}
print(s)  # {'apple', 'banana'}
```

### 3️⃣ Boolean & Numbers Rule

```python
s = {True, 1, 2}
print(s)  # {True, 2} because True == 1
```

---

## 📏 Length of a Set

```python
fruits = {"apple", "banana", "cherry"}
print(len(fruits))  # 3
```

---

## 🔄 Looping Through a Set

```python
for item in {"apple", "banana", "cherry"}:
    print(item)
```

---

## 🔎 Check if Item Exists

```python
fruits = {"apple", "banana", "cherry"}

print("banana" in fruits)      # True
print("grape" not in fruits)   # True
```

---

## ➕ Adding Items

### Add One Item

```python
fruits = {"apple", "banana"}
fruits.add("orange")
```

### Add Multiple Items

```python
fruits.update(["mango", "grape"])
```

You can add from **lists, tuples, or other sets**.

---

## ➖ Removing Items

| Method       | Behavior                 |
| ------------ | ------------------------ |
| `remove(x)`  | Error if item not found  |
| `discard(x)` | No error if item missing |
| `pop()`      | Removes random item      |
| `clear()`    | Removes all items        |

```python
fruits.remove("banana")
fruits.discard("grape")
item = fruits.pop()
fruits.clear()
```

---

## 🔗 Joining Sets

### Union (All items)

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a.union(b))
print(a | b)
```

### Intersection (Common items)

```python
print(a.intersection(b))
print(a & b)
```

### Difference (Items in A not in B)

```python
print(a.difference(b))
print(a - b)
```

### Symmetric Difference (Not common)

```python
print(a.symmetric_difference(b))
print(a ^ b)
```

---

## 🧠 Set Comparison

```python
a = {1, 2}
b = {1, 2, 3}

print(a.issubset(b))     # True
print(b.issuperset(a))   # True
print(a.isdisjoint({5})) # True
```

---

## ⚡ Set Comprehension (Advanced)

Like list comprehension, but for sets.

```python
squares = {x*x for x in range(6)}
print(squares)  # {0, 1, 4, 9, 16, 25}
```

With condition:

```python
evens = {x for x in range(10) if x % 2 == 0}
```

---

## ❄️ Frozenset (Immutable Set)

A **frozenset** is a read-only version of a set.

```python
fs = frozenset([1, 2, 3])
print(type(fs))  # <class 'frozenset'>
```

❌ Cannot add/remove items  
✅ Can use union, intersection, difference

```python
a = frozenset([1, 2, 3])
b = frozenset([3, 4, 5])

print(a | b)
print(a & b)
```

---

## 🛠 Useful Set Methods

| Method                 | Description                    |
| ---------------------- | ------------------------------ |
| add()                  | Add item                       |
| update()               | Add multiple items             |
| remove()               | Remove item (error if missing) |
| discard()              | Remove item (no error)         |
| pop()                  | Remove random item             |
| clear()                | Empty set                      |
| union()                | Combine sets                   |
| intersection()         | Common items                   |
| difference()           | Items not in other set         |
| symmetric_difference() | Non-common items               |
| issubset()             | Check subset                   |
| issuperset()           | Check superset                 |
| copy()                 | Copy set                       |

---

## 🚀 Performance Advantage

Sets use **hash tables**, making them very fast for:

| Operation               | Time Complexity |
| ----------------------- | --------------- |
| Add item                | O(1)            |
| Remove item             | O(1)            |
| Membership check (`in`) | O(1)            |

Better than lists for checking duplicates or membership.

---

## 🎯 When to Use Sets

✅ Remove duplicates  
✅ Fast membership testing  
✅ Mathematical set operations  
✅ Comparing collections

❌ When order matters  
❌ When you need indexing

---

## 🧪 Real-World Examples

### Remove duplicates from list

```python
nums = [1, 2, 2, 3, 4, 4]
unique = list(set(nums))
```

### Find common students in two classes

```python
classA = {"Ram", "Shyam", "Asha"}
classB = {"Asha", "John", "Ram"}

common = classA & classB
```

---

## 🏁 Summary

| Type      | Ordered | Mutable | Duplicates |
| --------- | ------- | ------- | ---------- |
| List      | ✅      | ✅      | ✅         |
| Tuple     | ✅      | ❌      | ✅         |
| Set       | ❌      | ✅      | ❌         |
| Frozenset | ❌      | ❌      | ❌         |

---
