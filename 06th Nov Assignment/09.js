//9. Use filter to extract words longer than 3 characters from ["cat", "dog", "fish", "elephant"].


const words = ["cat", "dog", "fish", "elephant"];
const longWords = words.filter(word => word.length > 3);

console.log(longWords);  

