//51. Use map to remove vowels from an array of strings ["apple", "banana"].


const words = ["apple", "banana"];

const withoutVowels = words.map(word => word.replace(/[aeiouAEIOU]/g, ''));

console.log(withoutVowels);

