# Python Tuples: Beginner to Advanced Guide

## 📌 What is a Tuple?

A **tuple** is a built-in Python data type used to store multiple items
in a single variable.

``` python
mytuple = ("apple", "banana", "cherry")
```

### Key Features

-   **Ordered** -- Items have a fixed order
-   **Immutable** -- Cannot be changed after creation
-   **Allows Duplicates**
-   **Indexed** -- Access using index numbers

------------------------------------------------------------------------

## 🟢 Creating Tuples

### Basic Tuple

``` python
fruits = ("apple", "banana", "cherry")
```

### One-Item Tuple (Comma Required)

``` python
single = ("apple",)
```

### Using tuple() Constructor

``` python
fruits = tuple(("apple", "banana", "cherry"))
```

------------------------------------------------------------------------

## 🔢 Tuple Length

``` python
len(fruits)
```

------------------------------------------------------------------------

## 🎯 Accessing Tuple Items

### Positive Index

``` python
fruits[0]   # apple
```

### Negative Index

``` python
fruits[-1]  # cherry
```

### Range of Indexes

``` python
fruits[1:3]
fruits[:2]
fruits[1:]
```

------------------------------------------------------------------------

## 🔍 Check if Item Exists

``` python
"apple" in fruits
```

------------------------------------------------------------------------

## 🔄 Updating Tuples (Workarounds)

### Convert to List → Modify → Convert Back

``` python
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
```

### Adding Items

``` python
fruits += ("orange",)
```

### Removing Items

``` python
y = list(fruits)
y.remove("apple")
fruits = tuple(y)
```

------------------------------------------------------------------------

## 🎁 Tuple Unpacking

``` python
fruits = ("apple", "banana", "cherry")
(a, b, c) = fruits
```

### Using Asterisk \*

``` python
(a, *b) = ("apple", "banana", "cherry", "mango")
```

------------------------------------------------------------------------

## 🔁 Looping Through Tuples

### For Loop

``` python
for item in fruits:
    print(item)
```

### Using Index

``` python
for i in range(len(fruits)):
    print(fruits[i])
```

------------------------------------------------------------------------

## ➕ Joining Tuples

``` python
tuple1 = ("a", "b")
tuple2 = (1, 2)
tuple3 = tuple1 + tuple2
```

### Multiply Tuple

``` python
("apple",) * 3
```

------------------------------------------------------------------------

## 🛠 Tuple Methods

  Method    Description
  --------- -----------------------------------------
  count()   Returns number of times a value appears
  index()   Returns index of first occurrence

``` python
fruits.count("apple")
fruits.index("banana")
```

------------------------------------------------------------------------

## 🚀 Advanced Tuple Concepts

### Nested Tuples

``` python
nested = (("a", "b"), (1, 2, 3))
```

### Tuple as Dictionary Key

``` python
locations = {(10, 20): "Point A"}
```

### Immutability Advantage

Tuples are faster than lists and safer for fixed data.

------------------------------------------------------------------------

## 🧠 Tuple vs List

  Feature    Tuple        List
  ---------- ------------ --------------
  Syntax     ()           \[\]
  Mutable    ❌ No        ✅ Yes
  Faster     ✅           ❌
  Use Case   Fixed Data   Dynamic Data

------------------------------------------------------------------------

## ✅ Summary

Tuples are: - Immutable - Ordered - Allow duplicates - Faster than
lists - Useful for fixed collections

------------------------------------------------------------------------

Happy Coding 🐍
