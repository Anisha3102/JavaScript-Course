//Convert an object { name: "John", age: 25 } into an array of key-value pairs.
// Output: [["name", "John"], ["age", 25]]


const obj = { name: "John", age: 25 };

const entriesArray = Object.entries(obj);

console.log(entriesArray);