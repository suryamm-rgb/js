const obj1 = {
  name: "Bruce Wayne",
};

let obj2 = obj1; //reference is broken
obj2 = {
  name: "Clark Kent",
};

console.log(obj1);
