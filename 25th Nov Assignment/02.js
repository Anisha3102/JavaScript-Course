//Transform an array of key-value pairs [["name", "John"], ["age", 25]] into an object.
// Output: { name: "John", age: 25 }


const array = [["name", "John"], ["age", 25]];

const obj = Object.fromEntries(array);

console.log(obj);