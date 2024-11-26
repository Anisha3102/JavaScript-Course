
//54. Use filter to extract words containing only vowels from ["eye", "sky", "tooth"].


const words = ["eye", "sky", "tooth"];

const vowelsOnlyWords = words.filter(word => /^[aeiouAEIOU]+$/.test(word));

console.log(vowelsOnlyWords); 

