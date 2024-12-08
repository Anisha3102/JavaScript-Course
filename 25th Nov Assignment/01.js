//Convert an array ["name", "age", "location"] into an object where keys are the elements and the values are null.
// Output: { name: null, age: null, location: null }


const array = ["name", "age", "location"];

const obj = array.reduce((acc, key) => {
  acc[key] = null;
  return acc;
}, {});

console.log(obj);
