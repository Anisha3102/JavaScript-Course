//35. Use some to check if the array ["apple", "banana", "grape"] contains the word "banana".


const fruits = ["apple", "banana", "grape"];

const containsBanana = fruits.some(fruit => fruit === "banana");

console.log(containsBanana); 
