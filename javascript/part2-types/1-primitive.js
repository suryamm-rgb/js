//Number

let balance = 120;
let anotherBalance = new Number(120);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());
// // console.log(balance);
// console.log(typeof balance);
// console.log(typeof anotherBalance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not

//null and undefined
let firstName = null;
let lastName = undefined;
// console.log(firstName);
// console.log(lastName);

//string

let myString = "hello";
let myStringOne = "Hello";
let userName = "surya";
let oldGreet = myString + " " + "surya";
console.log(oldGreet);

let greetMessage = `Hello ${userName} !`;
let demoOne = `Value is ${8 * 2}`;
// console.log(demoOne);

let sm1 = Symbol("surya");
let sm2 = Symbol("surya");
console.log(sm1 == sm2);
//Symbol is a build in object whose constructor return a symbol primitive also called a symbol value
