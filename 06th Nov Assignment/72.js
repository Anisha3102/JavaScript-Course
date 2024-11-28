//72. Use every to validate an array of emails ["test@domain.com", "admin@site.org"].



const words = ["apple", "orange"];

const countVowels = (word) => {
  const vowels = "aeiouAEIOU"; // Vowels (both lowercase and uppercase)
  return word.split('').filter(char => vowels.includes(char)).length;
};

const sortedWords = words.sort((a, b) => countVowels(a) - countVowels(b));

console.log(sortedWords);
