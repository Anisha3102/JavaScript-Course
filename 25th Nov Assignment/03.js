//Convert an array [1, 2, 3, 4] into an object where keys are the array indices and values are the elements.
// Output: { 0: 1, 1: 2, 2: 3, 3: 4 }


const array = [1, 2, 3, 4];

const obj = array.reduce((acc, value, index) => {
  acc[index] = value;
  return acc;
}, {});

console.log(obj);