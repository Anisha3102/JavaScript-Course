//Convert an array of objects [{ id: 1 }, { id: 2 }] into an object with id as the key.
// Output: { 1: { id: 1 }, 2: { id: 2 } }


const array = [{ id: 1 }, { id: 2 }];

const obj = array.reduce((acc, current) => {
  acc[current.id] = current;
  return acc;
}, {});

console.log(obj);