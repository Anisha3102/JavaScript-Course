//66. Use reduce to build a frequency map of words from ["apple", "banana", "apple"].


const words = ["apple", "banana", "apple"];

const frequencyMap = words.reduce((acc, word) => {
   acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(frequencyMap);
