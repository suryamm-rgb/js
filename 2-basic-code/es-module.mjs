/// First method
// const add = (a, b) => {
//   return a + b;
// };

// export default add;

/// Second method
// export default (a, b) => {
//   return a + b;
// };

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};

export default {
  add,
  subtract,
};
//main.mjs

// const {add, subtract} = math
console.log(add(5, 5));
console.log(subtract(5, 5));
