# Python Strings — Basic to Advanced Documentation

This guide covers **Python strings** from beginner to advanced level, including slicing, formatting, escape sequences, and commonly used string methods.

---

## 1. What is a String?

A **string** is a sequence of Unicode characters used to represent text in Python.

You can create strings using:

- Single quotes: `'hello'`
- Double quotes: `"hello"`

Both are the same in Python.

```python
a = 'Hello'
b = "Hello"
print(a, b)
```

---

## 2. Creating Strings

### 2.1 String literals

```python
print("Hello")
print('Hello')
```

### 2.2 Quotes inside quotes

You can use quotes inside a string as long as they don’t match the outer quotes:

```python
print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')
```

### 2.3 Multiline strings

Use triple quotes for multi-line strings:

```python
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)
```

Or with single quotes:

```python
a = '''Line 1
Line 2
Line 3'''
print(a)
```

---

## 3. Strings as Arrays

Strings behave like arrays (sequences) of characters.

> Python has no separate `char` type — a single character is a string of length 1.

```python
a = "Hello, World!"
print(a[1])  # e
```

---

## 4. Looping Through a String

```python
for ch in "banana":
    print(ch)
```

---

## 5. String Length

Use `len()`:

```python
a = "Hello, World!"
print(len(a))  # 13
```

---

## 6. Check if Text Exists in a String

### 6.1 Using `in`

```python
txt = "The best things in life are free!"
print("free" in txt)  # True
```

### 6.2 Using `not in`

```python
txt = "The best things in life are free!"
print("expensive" not in txt)  # True
```

### 6.3 In an if statement

```python
txt = "The best things in life are free!"
if "free" in txt:
    print("Yes, 'free' is present.")
```

---

## 7. String Slicing

### 7.1 Slicing syntax

```python
b = "Hello, World!"
print(b[2:5])  # llo
```

- Start index is included
- End index is excluded
- Index starts from 0

### 7.2 Slice from start

```python
b = "Hello, World!"
print(b[:5])  # Hello
```

### 7.3 Slice to end

```python
b = "Hello, World!"
print(b[2:])  # llo, World!
```

### 7.4 Negative indexing

Negative indexes start from the end.

```python
b = "Hello, World!"
print(b[-5:-2])  # orl
```

---

## 8. Modifying Strings

Python strings are **immutable** — methods return new strings.

### 8.1 Upper case

```python
a = "Hello, World!"
print(a.upper())
```

### 8.2 Lower case

```python
a = "Hello, World!"
print(a.lower())
```

### 8.3 Remove whitespace

```python
a = " Hello, World! "
print(a.strip())
```

### 8.4 Replace

```python
a = "Hello, World!"
print(a.replace("H", "J"))
```

### 8.5 Split

```python
a = "Hello, World!"
print(a.split(","))  # ['Hello', ' World!']
```

---

## 9. String Concatenation

Use `+` to combine strings:

```python
a = "Hello"
b = "World"
c = a + b
print(c)  # HelloWorld
```

Add a space:

```python
c = a + " " + b
print(c)  # Hello World
```

---

## 10. String Formatting

### 10.1 Why formatting is needed

You cannot directly add string + number:

```python
age = 36
# txt = "My name is John, I am " + age  # ❌ error
```

### 10.2 f-Strings (Recommended)

Introduced in Python 3.6.

```python
age = 36
txt = f"My name is John, I am {age}"
print(txt)
```

#### Placeholders can contain expressions

```python
price = 59
txt = f"The price is {price} dollars"
print(txt)
```

#### Modifiers

```python
price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)
```

#### Math inside placeholder

```python
txt = f"The price is {20 * 59} dollars"
print(txt)
```

### 10.3 `format()` method

```python
age = 36
txt = "My name is John, I am {}".format(age)
print(txt)
```

Multiple values:

```python
txt = "I have {0} apples and {1} bananas".format(5, 3)
print(txt)
```

Named placeholders:

```python
txt = "My name is {name}, age {age}".format(name="Surya", age=22)
print(txt)
```

---

## 11. Escape Characters

Use backslash `\` to insert illegal characters.

Example (quotes inside string):

```python
txt = "We are the so-called \"Vikings\" from the north."
print(txt)
```

### Common escape sequences

| Code | Result |
|------|--------|
| `\'` | Single quote |
| `\"` | Double quote |
| `\\` | Backslash |
| `\n` | New line |
| `\r` | Carriage return |
| `\t` | Tab |
| `\b` | Backspace |
| `\f` | Form feed |
| `\ooo` | Octal value |
| `\xhh` | Hex value |

---

## 12. String Methods (Beginner to Advanced)

> All string methods return new values — they do not modify the original string.

### 12.1 Case methods

```python
s = "hello world"
print(s.upper())
print(s.lower())
print(s.title())
print(s.capitalize())
print(s.swapcase())
print(s.casefold())
```

### 12.2 Remove spaces

```python
s = "  hello  "
print(s.strip())
print(s.lstrip())
print(s.rstrip())
```

### 12.3 Search methods

```python
s = "hello world"
print(s.find("world"))     # index or -1
print(s.index("world"))    # index or error
print(s.count("l"))        # frequency
print(s.startswith("he"))
print(s.endswith("ld"))
```

### 12.4 Replace and translate

```python
s = "banana"
print(s.replace("a", "o"))
```

Translate using mapping:

```python
s = "abc"
table = str.maketrans({"a": "1", "b": "2"})
print(s.translate(table))  # 12c
```

### 12.5 Split and join

```python
s = "a,b,c"
parts = s.split(",")
print(parts)

joined = "-".join(parts)
print(joined)
```

### 12.6 Checking string content

```python
s = "Hello123"
print(s.isalnum())
print(s.isalpha())
print(s.isdigit())
print(s.islower())
print(s.isupper())
print(s.isspace())
print(s.isidentifier())
```

### 12.7 Alignment and padding

```python
s = "hi"
print(s.center(10, "-"))
print(s.ljust(10, "."))
print(s.rjust(10, "."))
print(s.zfill(5))
```

### 12.8 Partitioning

```python
s = "name=surya"
print(s.partition("="))   # ('name', '=', 'surya')
print(s.rpartition("="))  # from right
```

### 12.9 Advanced splitting

```python
s = "a b  c   d"
print(s.split())       # handles multiple spaces
print(s.rsplit(" ", 1))
print(s.splitlines())
```

---

## 13. Advanced Concepts

### 13.1 Immutability

Strings cannot be changed directly:

```python
s = "hello"
# s[0] = "H"  # ❌ error
s = "H" + s[1:]
print(s)
```

### 13.2 Raw strings

Useful for regex and paths:

```python
path = r"C:\new\test"
print(path)
```

### 13.3 Encoding

```python
s = "hello"
encoded = s.encode("utf-8")
print(encoded)
```

---

## 14. Quick Reference Table (Most Used Methods)

| Method | Purpose |
|--------|---------|
| `upper()` | Uppercase |
| `lower()` | Lowercase |
| `strip()` | Remove spaces |
| `replace(a,b)` | Replace substring |
| `split(sep)` | Split into list |
| `join(list)` | Join iterable |
| `find(x)` | index or -1 |
| `index(x)` | index or error |
| `startswith(x)` | start check |
| `endswith(x)` | end check |
| `count(x)` | occurrences |
| `isalpha()` | only letters |
| `isdigit()` | only digits |
| `isalnum()` | letters + digits |

---

## ✅ Summary

Python strings are powerful and easy to use.

You learned:

- String creation & indexing
- Slicing (positive & negative)
- Modifying strings using methods
- Formatting (f-strings + format())
- Escape characters
- Beginner → advanced string methods

---

Happy coding 🚀
