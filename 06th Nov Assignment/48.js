//48. Use reduce to reverse a string "javascript".


const str = "javascript";

const reversedStr = str.split('').reduce((acc, char) => char + acc, '');

console.log(reversedStr); 
