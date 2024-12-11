//Convert a nested object { user: { name: "Alice", age: 30 } } into an array of its values.
// Output: ["Alice", 30]


const obj = { user: { name: "Alice", age: 30 } };

const valuesArray = Object.values(obj.user);

console.log(valuesArray);
