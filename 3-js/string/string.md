### JavaScript Strings

- String are for storing text
- String are written with quotes
- A JavaScript string is zero or more characters written inside quotes.
- Templates are strings enclosed in backticks (`This is a template string`).

```js
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes
```

#### String Length

- To find the length of a string, use the built-in length property:

```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
```

#### Escape Characters

# Escape Characters in JavaScript / Programming

| Code | Result | Description  |
| ---- | ------ | ------------ |
| `\'` | `'`    | Single quote |
| `\"` | `"`    | Double quote |
| `\\` | `\`    | Backslash    |

```js
let text = "We are the so-called \"Vikings\" from the north.";
let textOne = 'It/'s alright';
let text = "The character \\ is called backslash.";
```

1. Six other escape sequences are valid in JavaScript:

# Whitespace & Control Escape Characters

| Code | Result               |
| ---- | -------------------- |
| `\b` | Backspace            |
| `\f` | Form Feed            |
| `\n` | New Line             |
| `\r` | Carriage Return      |
| `\t` | Horizontal Tabulator |
| `\v` | Vertical Tabulator   |

2. JavaScript Strings as Objects

- Normally, JavaScript strings are primitive values, created from literals:
- But strings can also be defined as objects with the keyword new:

```js
let x = "John";
let y = new String("John");
console.log(typeof x, typeof y); // string object
console.log(x == y); // true
console.log(x === y); // false
let y1 = new String("John");
console.log(y == y1); //false
console.log(y === y1); //false
```

- Comparing two JavaScript objects always returns false.

#### JavaScript String Templates

1. Back-Tics Syntax

- Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

```js
let text = `Hello World!`;
```

2. Quotes Inside Strings

```js
let text = `He's often called "Johnny"`;
```

3. Multiline Strings

- Template Strings allow multiline strings:

```js
let text = `The quick
brown fox
jumps over
the lazy dog`;
// Variable Substitutions:
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
```

### JavaScript String Methods

- Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

# JavaScript String Properties & Methods List

- `length`
- `charAt()`
- `charCodeAt()`
- `codePointAt()`
- `concat()`
- `at()`
- `[ ]`
- `slice()`
- `substring()`
- `substr()` ⚠️ (Deprecated)
- `toUpperCase()`
- `toLowerCase()`
- `isWellFormed()`
- `toWellFormed()`
- `trim()`
- `trimStart()`
- `trimEnd()`
- `padStart()`
- `padEnd()`
- `repeat()`
- `replace()`
- `replaceAll()`
- `split()`

1. JavaScript String Length

- The length property returns the length of a string:

```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

2. ### Extracting String Characters

- There are 4 methods for extracting string characters:

1. The at(position) Method
2. The charAt(position) Method
3. The charCodeAt(position) Method
4. Using property access [] like in arrays

#### JavaScript String charAt()

- The charAt() method returns the character at a specified index (position) in a string:

```js
let text = "HELLO WORLD";
let char = text.charAt(0); //H
```

3. JavaScript String charCodeAt()

- The charCodeAt() method returns the code of the character at a specified index in a string:

- The method returns a UTF-16 code (an integer between 0 and 65535).

```js
let text = "HELLO WORLD";
let char = text.charCodeAt(0); //72
```

4. JavaScript codePointAt()

- Get code point value at the first position in a string:

```js
let text = "HELLO WORLD";
let code = text.codePointAt(0);
```

5. JavaScript String at()

```js
const name = "W3Schools";
let letter = name.at(2); //S
```

- The at() method returns the character at a specified index (position) in a string.

- The at() method is supported in all modern browsers since March 2022:

6. Property Access [ ]

```js
let text = "HELLO WORLD";
let char = text[0];
```

7. JavaScript String concat()

- concat() joins two or more strings:

```js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
```

- All string methods return a new string. They don't modify the original string.
- Strings are immutable: Strings cannot be changed, only replaced.

8. ### Extracting String Parts

- There are 3 methods for extracting a part of a string:

1. slice(start, end)
2. substring(start, end)
3. substr(start, length)

- #### JavaScript String slice()
- slice() extracts a part of a string and returns the extracted part in a new string.

- The method takes 2 parameters: start position, and end position (end not included).
- Slice out a portion of a string from position 7 to position 13:

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); //Banana
let part = text.slice(7); //Banana, Kiwi
let part = text.slice(-12); //Banana, Kiwi
let part = text.slice(-12, -6); //Banana
```

9. JavaScript String substring()

- substring() is similar to slice().
- The difference is that start and end values less than 0 are treated as 0 in substring().

```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
```

10. JavaScript String substr()

- substr() is similar to slice().

```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
```

# Converting to Upper and Lower Case

11. toUpperCase();

- A string is converted to upper case with toUpperCase()

```js
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
```

12. toLowerCase()

- A string is converted to lower case with toLowerCase()

```js
let text1 = "Hello World!"; // String
let text2 = text1.toLowerCase();
```

13. JavaScript String isWellFormed()

- The isWellFormed() method returns true if a string is well formed.
- Otherwise it returns false.
- A string is not well formed if it contains lone surrogates.

```js
let text = "Hello world!";
let result = text.isWellFormed();

let text = "Hello World \uD800";
let result = text.isWellFormed();
```

14. JavaScript String toWellFormed()

- The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).

```js
let text = "Hello World \uD800";
let result = text.toWellFormed();
```

15. JavaScript String trim()

- The trim() method removes whitespace from both sides of a string

```js
let text1 = "      Hello World!      ";
let text2 = text1.trim();
```

16. JavaScript String trimStart()

- ECMAScript 2019 added the String method trimStart() to JavaScript.
- The trimStart() method works like trim(), but removes whitespace only from the start of a string.

```js
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
```

17. JavaScript String trimEnd()

- ECMAScript 2019 added the string method trimEnd() to JavaScript.
- The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

```js
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
```

18. JavaScript String Padding

# JavaScript String padStart()

- ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.
- The padStart() method pads a string from the start.
- It pads a string with another string (multiple times) until it reaches a given length.
- Pad a string with "0" until it reaches the length 4:

```js
let text = "5";
let padded = text.padStart(4, "0"); //0004

let text = "5";
let padded = text.padStart(4, "x"); //xxx5
```

- The padStart() method is a string method.
- To pad a number, convert the number to a string first.

19. JavaScript String padEnd()

- The padEnd() method pads a string from the end.

- It pads a string with another string (multiple times) until it reaches a given length.
- The padEnd() method is a string method.

- To pad a number, convert the number to a string first.

```js
let text = "5";
let padded = text.padEnd(4, "0"); //5000
let text = "5";
let padded = text.padEnd(4, "x"); //5xxx
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4, "0");
```

20. JavaScript String repeat()

- The repeat() method returns a string with a number of copies of a string.

- The repeat() method returns a new string.

- The repeat() method does not change the original string.

#### string.repeat(count)

```js
let text = "Hello world!";
let result = text.repeat(2); //Hello world!Hello world!
let text = "Hello world!";
let result = text.repeat(4); //Hello world!Hello world!Hello world!Hello world!
```

21. Replacing String Content

- The replace() method replaces a specified value with another value in a string

```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```

- The replace() method does not change the string it is called on.
- The replace() method returns a new string.
- The replace() method replaces only the first match
- If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

```js
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
```

22. JavaScript String ReplaceAll()

- JavaScript introduced the string method replaceAll()
- The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

```js
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");
```

23. JavaScript String split()

- A string can be converted to an array with the split() method:

```js
text.split(","); // Split on commas
text.split(" "); // Split on spaces
text.split("|"); // Split on pipe
```

# JavaScript String Search

### JavaScript String Methods – Search & Match

## List of String Methods

1. **String.indexOf()**

   - Returns the first index of a specified value
   - Returns `-1` if not found

2. **String.lastIndexOf()**

   - Returns the last index of a specified value
   - Returns `-1` if not found

3. **String.search()**

   - Searches a string using a regular expression
   - Returns the index of the match

4. **String.match()**

   - Returns an array of matched values
   - Returns `null` if no match is found

5. **String.matchAll()**

   - Returns an iterator of all matches
   - Works only with global (`g`) regular expressions

6. **String.includes()**

   - Checks whether a string contains a specified value
   - Returns `true` or `false`

7. **String.startsWith()**

   - Checks if a string starts with a specified value
   - Returns `true` or `false`

8. **String.endsWith()**

   - Checks if a string ends with a specified value
   - Returns `true` or `false`

---

1. **JavaScript String indexOf()**

- The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
- JavaScript counts positions from zero.
- 0 is the first position in a string, 1 is the second, 2 is the third, ...

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); //7
```

2. **JavaScript String lastIndexOf()**

- The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.

```js
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate"); //21
```

- Both indexOf(), and lastIndexOf() return -1 if the text is not found.
- Both methods accept a second parameter as the starting position for the search.

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15); //21
```

3. **JavaScript String search()**

- The search() method searches a string for a string (or a regular expression) and returns the position of the match.

```js
let text = "Please locate where 'locate' occurs!";
text.search("locate"); //7
let text = "Please locate where 'locate' occurs!";
text.search(/locate/); //7
```

4. **JavaScript String match()**

- The match() method returns an array containing the results of matching a string against a string (or a regular expression)

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
```

5. **JavaScript String includes()**

- The includes() method returns true if a string contains a specified value.
- Otherwise it returns false
- includes() is case sensitive.
- includes() is an ES6 feature.

```js
let text = "Hello world, welcome to the universe.";
text.includes("world"); //true
```

6. **JavaScript String startsWith()**

- The startsWith() method returns true if a string begins with a specified value.
- Otherwise it returns false
- startsWith() is case sensitive.
- startsWith() is an ES6 feature.

```js
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello"); //true
let text = "Hello world, welcome to the universe.";
text.startsWith("world"); //false
```

7. **JavaScript String endsWith()**

- The endsWith() method returns true if a string ends with a specified value.
- Otherwise it returns false

```js
let text = "John Doe";
text.endsWith("Doe"); //true
```

# JavaScript String Methods List

| Name                | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| at()                | Returns an indexed character from a string                                    |
| charAt()            | Returns the character at a specified index (position)                         |
| charCodeAt()        | Returns the Unicode of the character at a specified index                     |
| codePointAt()       | Returns the Unicode value at an index (position) in a string                  |
| concat()            | Returns two or more joined strings                                            |
| constructor         | Returns the string's constructor function                                     |
| endsWith()          | Returns if a string ends with a specified value                               |
| fromCharCode()      | Returns Unicode values as characters                                          |
| includes()          | Returns if a string contains a specified value                                |
| indexOf()           | Returns the index (position) of the first occurrence of a value in a string   |
| isWellFormed()      | Returns true if a string is well formed                                       |
| lastIndexOf()       | Returns the index (position) of the last occurrence of a value in a string    |
| length              | Returns the length of a string                                                |
| localeCompare()     | Compares two strings in the current locale                                    |
| match()             | Searches a string for a value or a regular expression and returns the matches |
| matchAll()          | Searches a string for a value or a regular expression and returns all matches |
| padEnd()            | Pads a string at the end                                                      |
| padStart()          | Pads a string from the start                                                  |
| prototype           | Allows you to add properties and methods to an object                         |
| repeat()            | Returns a new string with a number of copies of a string                      |
| replace()           | Searches a string for a pattern and replaces the first match                  |
| replaceAll()        | Searches a string for a pattern and replaces all matches                      |
| search()            | Searches a string for a value or regular expression and returns the index     |
| slice()             | Extracts a part of a string and returns a new string                          |
| split()             | Splits a string into an array of substrings                                   |
| startsWith()        | Checks whether a string begins with specified characters                      |
| substr()            | Deprecated. Use `substring()` or `slice()` instead                            |
| substring()         | Extracts characters between two specified indices                             |
| toLocaleLowerCase() | Converts a string to lowercase using the host's locale                        |
| toLocaleUpperCase() | Converts a string to uppercase using the host's locale                        |
| toLowerCase()       | Converts a string to lowercase letters                                        |
| toString()          | Returns a string or a string object as a string                               |
| toUpperCase()       | Converts a string to uppercase letters                                        |
| toWellFormed()      | Replaces lone surrogates with the Unicode replacement character               |
| trim()              | Removes whitespace from both ends of a string                                 |
| trimEnd()           | Removes whitespace from the end of a string                                   |
| trimStart()         | Removes whitespace from the start of a string                                 |
| valueOf()           | Returns the primitive value of a string or string object                      |
