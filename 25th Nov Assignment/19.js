//Transform an array of objects [ { a: 1 }, { b: 2 } ] into an object where each key is an index.
// Output: { 0: { a: 1 }, 1: { b: 2 } }


const array = [ { a: 1 }, { b: 2 } ];

const result = array.reduce((acc, curr, index) => {
  acc[index] = curr;  
  return acc;
}, {});

console.log(result);
