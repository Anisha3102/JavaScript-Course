//Extract all keys from a deeply nested object { x: { y: { z: 10 } } } into a single array.
// Output: ["x", "y", "z"]

const obj = { x: { y: { z: 10 } } };

function extractKeys(obj) {
  let keys = [];

  for (let key in obj) {
        keys.push(key);
    
       if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(extractKeys(obj[key]));
    }
  }

  return keys;
}

const allKeys = extractKeys(obj);

console.log(allKeys);