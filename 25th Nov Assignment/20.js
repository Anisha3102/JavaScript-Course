//Extract all leaf values from a deeply nested object { x: [1, { y: 2 }], z: { a: 3 } } into a single array.
// Output: [1, 2, 3]


const obj = { x: [1, { y: 2 }], z: { a: 3 } };

function extractLeafValues(obj) {
  let values = [];

  if (Array.isArray(obj)) {
    
    for (let item of obj) {
      values = values.concat(extractLeafValues(item));
    }
  } 
  
  else if (typeof obj === 'object' && obj !== null) {
    
    for (let key in obj) {
      values = values.concat(extractLeafValues(obj[key]));
    }
  } else {
      values.push(obj);
  }

  return values;
}

const leafValues = extractLeafValues(obj);

console.log(leafValues);
