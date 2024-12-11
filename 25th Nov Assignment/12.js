//Flatten a deeply nested object { a: { b: { c: 1 } } } into an array of all values.
// Output: [1]


const obj = { a: { b: { c: 1 } } };

function flattenObject(obj) {
  let values = [];

   for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      values = values.concat(flattenObject(obj[key]));
    } else {
      values.push(obj[key]);
    }
  }

  return values;
}

const valuesArray = flattenObject(obj);

console.log(valuesArray);