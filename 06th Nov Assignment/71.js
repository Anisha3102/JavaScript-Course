
//71. Use sort to organize words by the number of vowels in each word ["apple", "orange"].


const words = ["apple", "orange"];

const countVowels = (word) => {
  const vowels = "aeiouAEIOU"; 
  return word.split('').filter(char => vowels.includes(char)).length;
};

const sortedWords = words.sort((a, b) => countVowels(a) - countVowels(b));

console.log(sortedWords);
