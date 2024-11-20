
//20. Use reduce to concatenate an array of strings ["Hello", " ", "World"].


const strings = ["Hello", " ", "World"];
const concatenatedString = strings.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(concatenatedString);
