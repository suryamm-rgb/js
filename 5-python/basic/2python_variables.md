# Python Variables

## Variables

Variables are **containers for storing data values**.

---

## Creating Variables

Python has **no command for declaring** a variable.

A variable is created the moment you **first assign a value** to it.

### Example

```python
x = 5
y = "John"
print(x)
print(y)
```

Variables do not need to be declared with any particular type, and can even **change type** after they have been set.

### Example

```python
x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)
```

---

## Casting

If you want to specify the data type of a variable, this can be done with **casting**.

### Example

```python
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

---

## Get the Type

You can get the data type of a variable with the `type()` function.

### Example

```python
x = 5
y = "John"
print(type(x))
print(type(y))
```

You will learn more about data types and casting later in this tutorial.

---

## Single or Double Quotes?

String variables can be declared either by using **single** or **double quotes**:

### Example

```python
x = "John"
# is the same as
x = 'John'
```

---

## Case-Sensitive

Variable names are **case-sensitive**.

### Example

This will create two variables:

```python
a = 4
A = "Sally"
# A will not overwrite a
```

---

## Exercise

### ❓ What is a correct way to declare a Python variable?

- var x = 5
- #x = 5
- $x = 5
- ✅ x = 5

---

# Python - Variable Names

## Variable Names

A variable can have a short name (like `x` and `y`) or a more descriptive name (`age`, `carname`, `total_volume`).

### Rules for Python variables

- A variable name must start with a **letter** or the **underscore** character `_`
- A variable name cannot start with a **number**
- A variable name can only contain **alpha-numeric characters** and underscores  
  (`A-z`, `0-9`, and `_`)
- Variable names are **case-sensitive** (`age`, `Age`, and `AGE` are different)
- A variable name cannot be any of the **Python keywords**

### Legal variable names

```python
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"
```

### Illegal variable names

```python
2myvar = "John"
my-var = "John"
my var = "John"
```

✅ Remember: variable names are case-sensitive.

---

## Multi Words Variable Names

Variable names with more than one word can be difficult to read.

Here are common ways to write multi-word variables:

### Camel Case

Each word, except the first, starts with a capital letter:

```python
myVariableName = "John"
```

### Pascal Case

Each word starts with a capital letter:

```python
MyVariableName = "John"
```

### Snake Case

Each word is separated by an underscore:

```python
my_variable_name = "John"
```

---

# Python Variables - Assign Multiple Values

## Many Values to Multiple Variables

Python allows you to assign values to multiple variables in one line:

### Example

```python
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

> ⚠️ Note: Make sure the number of variables matches the number of values, otherwise you will get an error.

---

## One Value to Multiple Variables

You can also assign the same value to multiple variables in one line:

### Example

```python
x = y = z = "Orange"
print(x)
print(y)
print(z)
```

---

## Unpack a Collection

If you have a collection of values in a **list**, **tuple**, etc., Python allows you to extract the values into variables.  
This is called **unpacking**.

### Example (Unpack a list)

```python
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
```

---

# Python - Output Variables

## Output Variables

The `print()` function is often used to output variables.

### Example

```python
x = "Python is awesome"
print(x)
```

You can output multiple variables separated by a comma:

### Example

```python
x = "Python"
y = "is"
z = "awesome"
print(x, y, z)
```

You can also use the `+` operator to join strings:

### Example

```python
x = "Python "
y = "is "
z = "awesome"
print(x + y + z)
```

> Notice the space character after `"Python "` and `"is "`. Without spaces, the result becomes `Pythonisawesome`.

For numbers, the `+` operator works as a mathematical operator:

### Example

```python
x = 5
y = 10
print(x + y)
```

If you try to combine a string and a number using `+`, Python gives an error:

### Example

```python
x = 5
y = "John"
print(x + y)  # Error
```

✅ Best way: use commas in `print()` to support different data types:

### Example

```python
x = 5
y = "John"
print(x, y)
```

---

# Python - Global Variables

## Global Variables

Variables created outside of a function are known as **global variables**.

Global variables can be used both **inside** and **outside** functions.

### Example

```python
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()
```

If you create a variable with the same name inside a function, that variable becomes **local**, and can only be used inside the function.

### Example

```python
x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()
print("Python is " + x)
```

---

## The `global` Keyword

Normally, when you create a variable inside a function, it is **local**.

To create a global variable inside a function, use the `global` keyword.

### Example

```python
def myfunc():
  global x
  x = "fantastic"

myfunc()
print("Python is " + x)
```

Also, use `global` if you want to change a global variable inside a function.

### Example

```python
x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()
print("Python is " + x)
```

---

## Exercise

### ❓ Consider the following code:

```python
x = "awesome"

def myfunc():
  x = "fantastic"

myfunc()
print("Python is " + x)
```

✅ Printed result will be:

**Python is awesome**

Because the `x` inside the function is local and does not change the global variable.

---
