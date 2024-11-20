
//16. Use filter to get names starting with "A" from ["Alice", "Bob", "Amanda", "Carl"].


const names = ["Alice", "Bob", "Amanda", "Carl"];
const namesStartingWithA = names.filter(name => name.startsWith("A"));
console.log(namesStartingWithA);
