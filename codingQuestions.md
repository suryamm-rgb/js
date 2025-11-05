# JavaScript Basics (20 Questions)

1. Swap two numbers without using a temporary variable

```javascript
let a = 2;
let b = 3;

// Swapping
a = a + b; // 5
b = a - b; // 2
a = a - b; // 3

console.log(a, b); // Output: 3 2
```

2. Check if a number is even or odd.

```javascript
let a = -1;

if (a % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
```

3. Find the largest of three numbers.

```javascript
let a = 9;
let b = 5;
let c = 20;

if (a > b && a > c) {
  console.log("a");
} else if (b > a && b > c) {
  console.log("b");
} else {
  console.log("c");
}
```

4. Calculate the factorial of a number.

```javascript
let a = 9;
let sum = 1;
for (let i = 1; i <= a; i++) {
  sum *= i;
}
console.log(sum);
```

5. Print all numbers from 1 to N.

```javascript
let a = 5;
for (let i = 0; i <= a; i++) {
  console.log(i);
}
```

6. Sum of all numbers from 1 to N.

```javascript
let a = 5;
let sum = 0;
for (let i = 0; i <= a; i++) {
  sum += i;
}
console.log(sum);
```

7. Reverse a string.

```javascript
let str = "bangalore";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
  console.log(str[i]);
}
console.log(result);
```

8. Check if a string is a palindrome.

```javascript
let str = "aba";

// let pali = str === str.split('').reverse().join('')
// console.log(pali)
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(str === result);
```

9. Count vowels in a string.

```javascript
const vowel = "Try programiz.pro";
let count = 0;
const v = "AEIOUaeiou";
for (let i = 0; i < vowel.length; i++) {
  if (v.includes(vowel[i])) {
    count++;
  }
}
console.log(count);
```

10. Convert Celsius to Fahrenheit.

```javascript
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);
```

11. Convert Fahrenheit to Celsius.

```javascript
let fahrenheit = 77;
let celsius = ((fahrenheit - 32) * 5) / 9;

console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
```

12. Find the sum of digits of a number.

13. Check if a number is prime.

14. Find the GCD of two numbers.

15. Find the LCM of two numbers.

Find the first N Fibonacci numbers.

Print multiplication table of a number.

Count occurrences of a character in a string.

Check if a number is Armstrong.

Reverse a number.

2. Functions (15 Questions)

Write a function to calculate sum of an array.

Write a function to find the maximum in an array.

Write a function to find the minimum in an array.

Write a function to check if a string is palindrome.

Write a function to remove duplicates from an array.

Write a function to merge two arrays.

Write a function to flatten a nested array.

Write a function to calculate factorial using recursion.

Write a function to calculate power of a number using recursion.

Write a function to find the sum of digits of a number recursively.

Write a function that returns the first N prime numbers.

Write a function to check if an array is sorted.

Write a function to rotate an array by K positions.

Write a function to find the longest word in a string.

Write a function to capitalize the first letter of each word in a string.

3. Arrays (20 Questions)

Reverse an array.

Find the sum of all elements in an array.

Find the product of all elements in an array.

Find the second largest number in an array.

Find the second smallest number in an array.

Remove duplicates from an array.

Find common elements between two arrays.

Merge two arrays in sorted order.

Move all zeros to the end of an array.

Count frequency of each element in an array.

Find missing numbers in an array of 1 to N.

Find pairs in an array with a given sum.

Find the largest subarray sum (Kadane’s algorithm).

Sort an array without using built-in sort.

Rotate an array to the left by one.

Rotate an array to the right by one.

Separate even and odd numbers in an array.

Find duplicate elements in an array.

Find the intersection of two arrays.

Find the union of two arrays.

4. Strings (20 Questions)

Reverse a string without using reverse().

Check if a string is palindrome.

Count vowels in a string.

Count consonants in a string.

Count words in a string.

Remove all spaces from a string.

Replace all occurrences of a character in a string.

Find the first non-repeated character in a string.

Find the first repeated character in a string.

Check if two strings are anagrams.

Convert a string to title case.

Convert a string to uppercase without using toUpperCase().

Convert a string to lowercase without using toLowerCase().

Reverse words in a sentence.

Count the number of digits in a string.

Check if a string contains only digits.

Remove duplicate characters from a string.

Find the longest word in a string.

Find the shortest word in a string.

Print all substrings of a string.

5. Objects (15 Questions)

Count the number of properties in an object.

Merge two objects.

Find the keys of an object.

Find the values of an object.

Check if a property exists in an object.

Remove a property from an object.

Find the property with the maximum value in an object.

Find the property with the minimum value in an object.

Convert an object to an array of key-value pairs.

Convert an array of key-value pairs to an object.

Deep clone an object.

Shallow clone an object.

Count occurrences of values in an object.

Invert keys and values of an object.

Sort an object by values.

6. Loops & Conditions (15 Questions)

Print all prime numbers from 1 to N.

Print all Armstrong numbers from 1 to N.

Print all perfect numbers from 1 to N.

Print a triangle pattern using \*.

Print a pyramid pattern using numbers.

Print the multiplication table for numbers 1 to 10.

Sum all odd numbers from 1 to N.

Sum all even numbers from 1 to N.

Count the number of digits in a number.

Reverse a number using loops.

Check if a number is palindrome using loops.

Print Fibonacci series up to N using loops.

Check if a string is palindrome using loops.

Find factorial using loops.

Print a diamond pattern using \*.

7. Advanced Arrays (20 Questions)

Find subarrays with a given sum.

Find the maximum length subarray with sum 0.

Find leaders in an array.

Count triplets with sum zero.

Find longest increasing subarray.

Rearrange positive and negative numbers alternatively.

Find the maximum product subarray.

Rotate an array by K positions.

Find the majority element in an array.

Find missing elements in an unsorted array.

Sort an array of 0s, 1s, 2s.

Move all negative numbers to the beginning.

Find minimum swaps to sort an array.

Find maximum circular subarray sum.

Find equilibrium index in an array.

Count inversions in an array.

Find the longest consecutive sequence.

Find the number that appears once in an array of duplicates.

Merge intervals in an array of intervals.

Find common elements in three arrays.

8. Recursion (15 Questions)

Factorial using recursion.

Fibonacci using recursion.

Sum of digits using recursion.

Reverse a string using recursion.

Check palindrome using recursion.

Power of a number using recursion.

Print numbers from 1 to N using recursion.

Print numbers from N to 1 using recursion.

Find GCD using recursion.

Find LCM using recursion.

Count digits using recursion.

Sum of an array using recursion.

Find maximum in an array using recursion.

Flatten a nested array using recursion.

Print all subsets of an array using recursion.

9. Strings (Advanced) (10 Questions)

Find all permutations of a string.

Count the number of substrings in a string.

Find the longest palindromic substring.

Check if two strings are anagrams (advanced).

Compress a string using counts of repeated characters (e.g., "aaabb" → "a3b2").

Remove all vowels from a string.

Count all occurrences of each word in a string.

Check if a string is a rotation of another string.

Find the first non-repeating character in a string (efficient).

Implement your own trim() function.

10. Objects & Maps/Sets (10 Questions)

Count the frequency of each character in a string using an object.

Find duplicate characters in a string using a Map.

Merge multiple objects into one.

Find intersection of two objects based on keys.

Convert an array of objects into an object with a key as property.

Find unique elements in an array using Set.

Remove duplicates from an array of objects.

Count unique numbers in an array using Set.

Implement your own Map() functionality using objects.

Implement your own Set() functionality using objects.

11. ES6+ and Advanced Functions (15 Questions)

Use rest parameters to sum any number of arguments.

Use spread operator to clone and merge arrays.

Swap variables using destructuring.

Implement a debounce function.

Implement a throttle function.

Create a curry function to add numbers.

Implement compose() function for functions.

Implement pipe() function for functions.

Write an arrow function to return factorial.

Use default parameters to handle missing arguments.

Use optional chaining to safely access nested object properties.

Use nullish coalescing to provide default values.

Implement a function that returns a closure.

Write a function that returns a counter (closure).

Implement a memoized version of Fibonacci using closure.

12. Higher-Order Functions & Arrays (15 Questions)

Implement your own map() function.

Implement your own filter() function.

Implement your own reduce() function.

Find squares of all numbers in an array using map().

Filter out even numbers from an array.

Find sum of all numbers using reduce().

Find maximum number in array using reduce().

Flatten a nested array using reduce().

Count occurrences of elements in array using reduce().

Implement a forEach() using for loop.

Chain map() and filter() to get even squares.

Remove falsy values from an array using filter().

Convert an array of strings to uppercase using map().

Group objects by property using reduce().

Implement flatMap() using map() and reduce().

13. Promises & Async/Await (10 Questions)

Create a promise that resolves after 2 seconds.

Create a promise that rejects with an error message.

Chain multiple promises to fetch data sequentially.

Use Promise.all() to fetch multiple async results.

Use Promise.race() to get the fastest response.

Convert a callback function into a promise (promisify).

Fetch data using async/await.

Handle errors in async/await with try/catch.

Implement a delay function using promises.

Create a function that fetches data from an API multiple times in sequence using async/await.
