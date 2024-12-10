//Transform an object { a: 1, b: 2, c: 3 } into an array of objects where each key-value pair is an object.
// Output: [{ a: 1 }, { b: 2 }, { c: 3 }]


const obj = { a: 1, b: 2, c: 3 };

const arrayOfObjects = Object.entries(obj).map(([key, value]) => ({ [key]: value }));

console.log(arrayOfObjects);


