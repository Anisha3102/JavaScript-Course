//Take an array ["apple", "banana", "cherry"] and create an object where the keys are the elements and values are their lengths.
// Output: { apple: 5, banana: 6, cherry: 6 }

const array = ["apple", "banana", "cherry"];

const obj = array.reduce((acc, item) => {
  acc[item] = item.length;
  return acc;
}, {});

console.log(obj);
