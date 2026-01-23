# Python Operators

Operators are used to perform operations on variables and values.

In the example below, we use the `+` operator to add together two values:

```python
print(10 + 5)
```

Although the `+` operator is often used to add two values, it can also be used to add a variable and a value, or two variables:

```python
sum1 = 100 + 50      # 150 (100 + 50)
sum2 = sum1 + 250    # 400 (150 + 250)
sum3 = sum2 + sum2   # 800 (400 + 400)
```

Python divides operators into the following groups:

- Arithmetic operators  
- Assignment operators  
- Comparison operators  
- Logical operators  
- Identity operators  
- Membership operators  
- Bitwise operators  

---

## Python Arithmetic Operators

Arithmetic operators are used with numeric values to perform common mathematical operations:

| Operator | Name | Example |
|---|---|---|
| `+` | Addition | `x + y` |
| `-` | Subtraction | `x - y` |
| `*` | Multiplication | `x * y` |
| `/` | Division | `x / y` |
| `%` | Modulus | `x % y` |
| `**` | Exponentiation | `x ** y` |
| `//` | Floor division | `x // y` |

### Examples

```python
x = 15
y = 4

print(x + y)
print(x - y)
print(x * y)
print(x / y)
print(x % y)
print(x ** y)
print(x // y)
```

### Division in Python

Python has two division operators:

- `/`  - Division (returns a float)  
- `//` - Floor division (returns an integer)  

Division always returns a float:

```python
x = 12
y = 5

print(x / y)
```

Floor division always returns an integer and rounds **DOWN**:

```python
x = 12
y = 5

print(x // y)
```

---

## Python Assignment Operators

Assignment operators are used to assign values to variables:

| Operator | Example | Same As |
|---|---|---|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `//=` | `x //= 3` | `x = x // 3` |
| `**=` | `x **= 3` | `x = x ** 3` |
| `&=` | `x &= 3` | `x = x & 3` |
| `|=` | `x |= 3` | `x = x | 3` |
| `^=` | `x ^= 3` | `x = x ^ 3` |
| `>>=` | `x >>= 3` | `x = x >> 3` |
| `<<=` | `x <<= 3` | `x = x << 3` |
| `:=` | `print(x := 3)` | `x = 3` then `print(x)` |

### The Walrus Operator `:=`

Python 3.8 introduced the `:=` operator (walrus operator). It assigns values to variables as part of a larger expression:

```python
numbers = [1, 2, 3, 4, 5]
count = len(numbers)
if count > 3:
    print(f"List has {count} elements")

if (count := len(numbers)) > 3:
    print(f"List has {count} elements")
```

**Exercise:** What will be the value of `x` after this code?

```python
x = 10
x += 5
```

✅ Answer: **15**

---

## Python Comparison Operators

Comparison operators are used to compare two values:

| Operator | Name | Example |
|---|---|---|
| `==` | Equal | `x == y` |
| `!=` | Not equal | `x != y` |
| `>` | Greater than | `x > y` |
| `<` | Less than | `x < y` |
| `>=` | Greater than or equal to | `x >= y` |
| `<=` | Less than or equal to | `x <= y` |

### Examples

```python
x = 5
y = 3

print(x == y)
print(x != y)
print(x > y)
print(x < y)
print(x >= y)
print(x <= y)
```

### Chaining Comparison Operators

Python allows chaining comparison operators:

```python
x = 5

print(1 < x < 10)
print(1 < x and x < 10)
```

**Exercise:** What is the result of `5 == 5`?  
✅ Answer: **True**

---

## Python Logical Operators

Logical operators are used to combine conditional statements:

| Operator | Description | Example |
|---|---|---|
| `and` | True if both statements are true | `x < 5 and x < 10` |
| `or` | True if at least one statement is true | `x < 5 or x < 4` |
| `not` | Reverse the result | `not(x < 5 and x < 10)` |

### Examples

```python
x = 5

print(x > 0 and x < 10)
print(x < 5 or x > 10)
print(not(x > 3 and x < 10))
```

---

## Python Identity Operators

Identity operators compare whether objects are the same (same memory location):

| Operator | Description | Example |
|---|---|---|
| `is` | True if both variables are the same object | `x is y` |
| `is not` | True if both variables are not the same object | `x is not y` |

### Examples

```python
x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z)
print(x is y)
print(x == y)
```

```python
x = ["apple", "banana"]
y = ["apple", "banana"]

print(x is not y)
```

### Difference Between `is` and `==`

- `is` → Checks if both variables point to the same object in memory  
- `==` → Checks if the values of both variables are equal  

```python
x = [1, 2, 3]
y = [1, 2, 3]

print(x == y)
print(x is y)
```

---

## Python Membership Operators

Membership operators test if a sequence exists in an object:

| Operator | Description | Example |
|---|---|---|
| `in` | True if value exists in object | `x in y` |
| `not in` | True if value does not exist | `x not in y` |

### Examples

```python
fruits = ["apple", "banana", "cherry"]

print("banana" in fruits)
print("pineapple" not in fruits)
```

### Membership in Strings

```python
text = "Hello World"

print("H" in text)
print("hello" in text)
print("z" not in text)
```

---

## Python Bitwise Operators

Bitwise operators work with binary numbers:

| Operator | Name | Description | Example |
|---|---|---|---|
| `&` | AND | Sets each bit to 1 if both bits are 1 | `x & y` |
| `|` | OR | Sets each bit to 1 if one of the bits is 1 | `x | y` |
| `^` | XOR | Sets bit to 1 if only one bit is 1 | `x ^ y` |
| `~` | NOT | Inverts all the bits | `~x` |
| `<<` | Left shift | Shift left, pushing zeros from right | `x << 2` |
| `>>` | Right shift | Shift right, copying leftmost bit | `x >> 2` |

### Examples

```python
print(6 & 3)  # 2
```
- 6 in binary: `0110`
- 3 in binary: `0011`
- result: `0010` → 2

```python
print(6 | 3)  # 7
```
- result: `0111` → 7

```python
print(6 ^ 3)  # 5
```
- result: `0101` → 5

**Exercise:** What is the result of `0110 & 0011`?  
✅ Answer: **0010**

---

## Python Operator Precedence

Operator precedence describes the order in which operations are performed.

Parentheses have the highest precedence:

```python
print((6 + 3) - (6 + 3))
```

Multiplication has higher precedence than addition:

```python
print(100 + 5 * 3)
```

### Precedence Order (Highest to Lowest)

| Operator | Description |
|---|---|
| `()` | Parentheses |
| `**` | Exponentiation |
| `+x -x ~x` | Unary plus, unary minus, bitwise NOT |
| `* / // %` | Multiplication, division, floor division, modulus |
| `+ -` | Addition, subtraction |
| `<< >>` | Bitwise shifts |
| `&` | Bitwise AND |
| `^` | Bitwise XOR |
| `|` | Bitwise OR |
| Comparisons | `== != > >= < <= is is not in not in` |
| `not` | Logical NOT |
| `and` | Logical AND |
| `or` | Logical OR |

### Left-to-Right Evaluation

If two operators have the same precedence, Python evaluates from left to right:

```python
print(5 + 4 - 7 + 3)
```

**Exercise:** What is the result of `2 + 3 * 4`?  
✅ Answer: **14**
