//36. Use reduce to count the occurrences of each character in the string "hello world".


const str = "hello world";

const characterCount = str.split('').reduce((acc, char) => {
 
  if (char !== ' ') {
    acc[char] = (acc[char] || 0) + 1;
  }
  return acc;
}, {});

console.log(characterCount); 
