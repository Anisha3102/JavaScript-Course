//Convert a deeply nested object { a: { b: 2 }, c: 3 } into an array of key-value pair objects.
// Output: [{ "a.b": 2 }, { c: 3 }]


const obj = { a: { b: 2 }, c: 3 };

function flattenObjectToKeyValuePairs(obj, parentKey = '') {
  let result = [];

    for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
      result = result.concat(flattenObjectToKeyValuePairs(obj[key], newKey));
    } else {
          result.push({ [newKey]: obj[key] });
    }
  }

  return result;
}

const keyValuePairs = flattenObjectToKeyValuePairs(obj);

console.log(keyValuePairs);