//Take a deeply nested object { data: { items: [1, 2, 3] } } and extract the array.
// Output: [1, 2, 3]

const obj = { data: { items: [1, 2, 3] } };

const itemsArray = obj.data.items;

console.log(itemsArray);