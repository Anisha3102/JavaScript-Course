//Convert an array of objects [ { id: 1, name: "John" }, { id: 2, name: "Doe" } ] into a single object with id as keys.
// Output: { 1: { name: "John" }, 2: { name: "Doe" } }


const array = [ { id: 1, name: "John" }, { id: 2, name: "Doe" } ];

const result = array.reduce((acc, obj) => {
  const { id, ...rest } = obj;  
  acc[id] = rest;  
  return acc;
}, {});

console.log(result);
