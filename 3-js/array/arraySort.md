# JavaScript Array Sort

## Array Sort Topics

- Alphabetic Sort
- `sort()`
- `reverse()`
- `toSorted()` (ES2023)
- `toReversed()` (ES2023)
- Numeric Sort
- Random Sort
- `Math.min()`
- `Math.max()`
- Custom Min & Max
- Sorting Objects
- Stable Sort

---

## Alphabetic Sort

### `array.sort()`

Sorts array elements **alphabetically** (as strings).

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
```

---

## Reversing an Array

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
```

---

## Non‑Mutating Methods (ES2023)

### `toSorted()`

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const sortedMonths = months.toSorted();
```

### `toReversed()`

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversedMonths = months.toReversed();
```

---

## Numeric Sort

```js
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // Ascending
points.sort((a, b) => b - a); // Descending
```

---

## Fisher–Yates Shuffle

```js
for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [points[i], points[j]] = [points[j], points[i]];
}
//or
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  document.getElementById("demo").innerHTML = points;
}
</script>
```

---

## Min & Max

```js
Math.min(...points);
Math.max(...points);
```

---

## Sorting Objects

```js
cars.sort((a, b) => a.year - b.year);
```

---

#### JavaScript Array Maximum Method

- There is no built-in function for finding the highest value in a JavaScript array.

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
     <h2>Javascript Array Sort</h2>
     <p>The highest number is <span id="demo"></span></p>
     <script>
       const points = [20, 100, 1,5,25]
       document.getElementById('demo').innerHTML = myArrayMax(points);
       function myArrayMax(arr){
         let len = arr.length;
         let max = -Infinity;
         while(len--){
           if(arr[len]>max){
             max = arr[len]
           }
         }
         return max;
       }
     </script>
  </body>
</html>
```

#### JavaScript Array Minimum Method

- There is no built-in function for finding the lowest value in a JavaScript array.

```js
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>
<p>The highest number is <span id="demo"></span>.</p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
</script>

</body>
</html>

```
