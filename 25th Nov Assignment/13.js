//Take a deeply nested object { name: { first: "John", last: "Doe" }, age: 25 } and convert it into an array of all leaf values.
// Output: ["John", "Doe", 25]


const obj = { name: { first: "John", last: "Doe" }, age: 25 };

function extractLeafValues(obj) {
  let values = [];

  for (let key in obj) {
       if (typeof obj[key] === 'object' && obj[key] !== null) {
      values = values.concat(extractLeafValues(obj[key]));
    } else {
      values.push(obj[key]);
    }
  }

  return values;
}

const leafValuesArray = extractLeafValues(obj);

console.log(leafValuesArray);
