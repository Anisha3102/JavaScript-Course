// 02.
// A person is writing love letters to their crush and keeps track of words used in each letter in an array.  

// Task:  
// 1. Use `reduce` to count the total number of words across all letters.  
// 2. Use `some` to check if any letter contains the word `"forever"`.  
// 3. Use `every` to verify that all letters contain the word `"love"`.  

// Example Input:  

// const letters = [
//   ["I", "will", "love", "you", "forever"],
//   ["You", "are", "the", "love", "of", "my", "life"],
//   ["Love", "is", "what", "binds", "us"],
// ];


const letters = [
  ["I", "will", "love", "you", "forever"],
  ["You", "are", "the", "love", "of", "my", "life"],
  ["Love", "is", "what", "binds", "us"],
];


const totalWords = letters.reduce((count, letter) => count + letter.length, 0);

const containsForever = letters.some(letter => letter.includes("forever"));

const allContainLove = letters.every(letter => letter.includes("love"));

console.log("Total number of words:", totalWords);
console.log("Contains 'forever':", containsForever);
console.log("All contain 'love':", allContainLove);
