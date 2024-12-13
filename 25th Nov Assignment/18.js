//Convert an object { items: [1, 2], details: { a: 3, b: 4 } } into a flattened array of values.
// Output: [1, 2, 3, 4]


const obj = { items: [1, 2], details: { a: 3, b: 4 } };

function flattenValues(obj) {
  let values = [];

  for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
      values = values.concat(flattenValues(obj[key]));
    } else {
     
      values.push(obj[key]);
    }
  }

  return values;
}

const flattenedArray = flattenValues(obj);

console.log(flattenedArray);
