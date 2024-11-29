//76. Use reduce to find the most common character in a string "programming".


const str = "programming";

const mostCommonChar = str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
  
    if (acc[char] > acc.maxCount) {
    acc.maxCount = acc[char];
    acc.mostCommon = char;
  }

  return acc;
}, { mostCommon: '', maxCount: 0 }).mostCommon;

console.log(mostCommonChar); 


