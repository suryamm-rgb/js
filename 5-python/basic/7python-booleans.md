# Python Booleans

Booleans represent one of two values: **True** or **False**.

---

## Boolean Values

In programming, you often need to know if an expression is **True** or **False**.

You can evaluate any expression in Python, and get one of two answers: **True** or **False**.

When you compare two values, the expression is evaluated and Python returns the Boolean answer:

```python
print(10 > 9)
print(10 == 9)
print(10 < 9)
```

When you run a condition in an `if` statement, Python returns `True` or `False`.

Example: Print a message based on whether the condition is `True` or `False`:

```python
a = 200
b = 33

if b > a:
    print("b is greater than a")
else:
    print("b is not greater than a")
```

---

## Evaluate Values and Variables

The `bool()` function allows you to evaluate any value and returns `True` or `False`.

Example: Evaluate a string and a number:

```python
print(bool("Hello"))
print(bool(15))
```

Example: Evaluate two variables:

```python
x = "Hello"
y = 15

print(bool(x))
print(bool(y))
```

---

## Most Values are True

Almost any value is evaluated to `True` if it has some sort of content.

- Any string is `True`, except empty strings.
- Any number is `True`, except `0`.
- Any list, tuple, set, and dictionary is `True`, except empty ones.

Example: The following will return `True`:

```python
bool("abc")
bool(123)
bool(["apple", "cherry", "banana"])
```

---

## Some Values are False

There are not many values that evaluate to `False` except empty values, such as:

- `()`
- `[]`
- `{}`
- `""`
- the number `0`
- the value `None`
- and of course `False` itself.

Example: The following will return `False`:

```python
bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})
```

One more value (an object) evaluates to `False` if it is made from a class with a `__len__` function that returns `0` or `False`.

Example:

```python
class myclass():
    def __len__(self):
        return 0

myobj = myclass()
print(bool(myobj))
```

---

## Functions can Return a Boolean

You can create functions that return a Boolean value.

Example: Print the answer of a function:

```python
def myFunction():
    return True

print(myFunction())
```

Example: Execute code based on the Boolean answer of a function:

```python
def myFunction():
    return True

if myFunction():
    print("YES!")
else:
    print("NO!")
```

Python also has many built-in functions that return a boolean value, like the `isinstance()` function.

Example: Check if an object is an integer:

```python
x = 200
print(isinstance(x, int))
```
