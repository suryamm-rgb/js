// checking if a number is greater than another number;
/*
let num1 = 5;
let num2 = 8;
let obj = {};
console.log("i am regular top code");
if (num1 > num2) {
  console.log("num 1 is greater than num2");
} else {
  console.log("Nope, num1 is NOT greater");
}
console.log("i am regular bottom code");
*/

// checking if a string is equal to another string

let userName = "chai";
let anotherUserName = "chai";
if (userName != anotherUserName) {
  console.log("pick another username");
} else {
  console.log("you can pick this username");
}

//checking if a variable is a number or not

let score = 44;
if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("NO that is not a number");
}

// checking if a boolean value is true or false

let isTeaReady = false;
if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is Not ready");
}

//checking if an array is empty or not
let items = [];
console.log(items.length);

if (items.length === 0) {
  console.log("array is empty");
} else {
  console.log("Array is not empty");
}
