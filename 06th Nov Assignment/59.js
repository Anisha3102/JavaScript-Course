//59. Use some to check if any string in ["123", "abc", "45"] contains only numbers.


const strings = ["123", "abc", "45"];

const containsOnlyNumbers = strings.some(str => /^[0-9]+$/.test(str));

console.log(containsOnlyNumbers); 

