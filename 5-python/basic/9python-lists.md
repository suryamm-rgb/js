# Python Lists

```python
mylist = ["apple", "banana", "cherry"]
```

## List

Lists are used to store multiple items in a single variable.

Lists are one of four built-in data types in Python used to store collections of data. The other three are:
- Tuple
- Set
- Dictionary

Lists are created using square brackets.

Example: Create a list

```python
thislist = ["apple", "banana", "cherry"]
print(thislist)
```

---

## List Items

List items are:
- **Ordered**
- **Changeable**
- **Allow duplicate values**

List items are indexed:
- First item → index `[0]`
- Second item → index `[1]`
- etc.

### Ordered
When we say lists are ordered, it means items have a defined order, and that order will not change.

If you add new items, they are placed at the end of the list.

> Note: Some list methods can change the order, but in general, list order remains the same.

### Changeable
Lists are changeable, meaning we can change, add, or remove items after the list has been created.

### Allow Duplicates
Lists allow duplicate values:

```python
thislist = ["apple", "banana", "cherry", "apple", "cherry"]
print(thislist)
```

---

## List Length

To determine how many items are in the list, use `len()`:

```python
thislist = ["apple", "banana", "cherry"]
print(len(thislist))
```

---

## List Items - Data Types

List items can be of any data type.

Examples:

```python
list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]
```

A list can also contain different data types:

```python
list1 = ["abc", 34, True, 40, "male"]
```

---

## type()

From Python’s perspective, lists are defined as objects with data type `'list'`:

```python
<class 'list'>
```

Example:

```python
mylist = ["apple", "banana", "cherry"]
print(type(mylist))
```

---

## The list() Constructor

You can also use the `list()` constructor to create a new list:

```python
thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets
print(thislist)
```

---

## Python Collections (Arrays)

Python has four collection data types:

- **List**: ordered and changeable, allows duplicate members
- **Tuple**: ordered and unchangeable, allows duplicate members
- **Set**: unordered, unchangeable*, and unindexed, no duplicate members
- **Dictionary**: ordered** and changeable, no duplicate members

\* Set items are unchangeable, but you can remove or add items.  
\** As of Python 3.7, dictionaries are ordered.

---

## Exercise

What will be the result of the following syntax?

```python
mylist = ['apple', 'banana', 'cherry']
print(mylist[1])
```

✅ Answer: **banana**

---

# Python - Access List Items

## Access Items

List items are indexed, and you can access them by referring to index numbers.

Example: Print the second item

```python
thislist = ["apple", "banana", "cherry"]
print(thislist[1])
```

> Note: First item has index `0`.

---

## Negative Indexing

Negative indexing means starting from the end.

- `-1` refers to the last item
- `-2` refers to the second last item

Example: Print the last item

```python
thislist = ["apple", "banana", "cherry"]
print(thislist[-1])
```

---

## Range of Indexes

You can specify a range by defining start and end indexes.

Example: Return the 3rd, 4th, and 5th item

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])
```

- Start index `2` included
- End index `5` excluded

### Without start value
Returns from beginning:

```python
print(thislist[:4])
```

### Without end value
Returns until end:

```python
print(thislist[2:])
```

---

## Range of Negative Indexes

Example: Return items from `"orange"` (-4) to `"melon"` (-2)

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])
```

---

## Check if Item Exists

Use `in` keyword:

```python
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
    print("Yes, 'apple' is in the fruits list")
```

### Exercise

```python
mylist = ['apple', 'banana', 'cherry']
print(mylist[-1])
```

✅ Answer: **cherry**

---

# Python - Change List Items

## Change Item Value

Change a specific item by index:

```python
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)
```

---

## Change a Range of Item Values

Replace `"banana"` and `"cherry"`:

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)
```

### Insert more items than replaced
```python
thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist)
```

### Insert fewer items than replaced
```python
thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist)
```

---

## Insert Items

Use `insert()`:

```python
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)
```

### Exercise

```python
mylist = ['apple', 'banana', 'cherry']
mylist[0] = 'kiwi'
print(mylist[1])
```

✅ Answer: **banana**

---

# Python - Add List Items

## Append Items

Use `append()` to add at the end:

```python
thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)
```

---

## Insert Items

Use `insert()` for a specific index:

```python
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist)
```

---

## Extend List

Use `extend()` to append another list:

```python
thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist)
```

### Add Any Iterable
You can extend with tuples, sets, etc.

```python
thislist = ["apple", "banana", "cherry"]
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
print(thislist)
```

### Exercise

```python
mylist = ['apple', 'banana', 'cherry']
mylist.insert(0, 'orange')
print(mylist[1])
```

✅ Answer: **apple**

---

# Python - Remove List Items

## Remove Specified Item

Use `remove()`:

```python
thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)
```

If duplicates exist, it removes the first occurrence:

```python
thislist = ["apple", "banana", "cherry", "banana", "kiwi"]
thislist.remove("banana")
print(thislist)
```

---

## Remove Specified Index

Use `pop()`:

```python
thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist)
```

If index not given, removes last item:

```python
thislist.pop()
```

Use `del`:

```python
del thislist[0]
```

Delete entire list:

```python
del thislist
```

---

## Clear the List

Use `clear()`:

```python
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist)
```

### Exercise

What is a List method for removing list items?

✅ Answer: **pop()**

---

# Python - Loop Lists

## Loop Through a List

Using `for`:

```python
thislist = ["apple", "banana", "cherry"]
for x in thislist:
    print(x)
```

---

## Loop Through Index Numbers

```python
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
    print(thislist[i])
```

---

## Using a While Loop

```python
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
    print(thislist[i])
    i += 1
```

---

## List Comprehension Looping

```python
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]
```

### Exercise

What is correct syntax?

✅ Answer:
```python
for x in ['apple', 'banana', 'cherry']:
    print(x)
```

---

# Python - List Comprehension

List comprehension provides a short syntax for creating new lists.

Example:

```python
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]
print(newlist)
```

### Syntax
```python
newlist = [expression for item in iterable if condition == True]
```

Examples:

Only accept items that are not `"apple"`:

```python
newlist = [x for x in fruits if x != "apple"]
```

Without condition:

```python
newlist = [x for x in fruits]
```

Using range:

```python
newlist = [x for x in range(10)]
newlist = [x for x in range(10) if x < 5]
```

Uppercase items:

```python
newlist = [x.upper() for x in fruits]
```

Return `"orange"` instead of `"banana"`:

```python
newlist = [x if x != "banana" else "orange" for x in fruits]
```

### Exercise

```python
fruits = ['apple', 'banana', 'cherry']
newlist = [x for x in fruits if x == 'banana']
```

✅ Answer: **['banana']**

---

# Python - Sort Lists

## Sort Alphanumerically

```python
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)
```

Sort numbers:

```python
thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)
```

---

## Sort Descending

```python
thislist.sort(reverse=True)
```

---

## Customize Sort Function

```python
def myfunc(n):
    return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key=myfunc)
print(thislist)
```

---

## Case Insensitive Sort

```python
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort(key=str.lower)
print(thislist)
```

---

## Reverse Order

```python
thislist.reverse()
```

### Exercise

Correct syntax for sorting list?

✅ Answer: **mylist.sort()**

---

# Python - Copy Lists

You cannot copy a list by writing `list2 = list1`, because it creates a reference.

### Use copy()

```python
thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)
```

### Use list()

```python
mylist = list(thislist)
```

### Use slice `:`

```python
mylist = thislist[:]
```

### Exercise

✅ Answer: **list2 = list1.copy()**

---

# Python - Join Lists

## Join Two Lists

Using `+`:

```python
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3)
```

Append items one by one:

```python
for x in list2:
    list1.append(x)
```

Use extend():

```python
list1.extend(list2)
```

### Exercise

✅ Answer: **list3 = list1 + list2**

---

# Python - List Methods

Python list built-in methods:

| Method | Description |
|---|---|
| `append()` | Adds element at end |
| `clear()` | Removes all elements |
| `copy()` | Returns a copy |
| `count()` | Returns count of value |
| `extend()` | Adds elements from iterable |
| `index()` | Returns index of first match |
| `insert()` | Adds at specified position |
| `pop()` | Removes element at index |
| `remove()` | Removes specified value |
| `reverse()` | Reverses order |
| `sort()` | Sorts list |
