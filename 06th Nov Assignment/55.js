//55. Use find to get the first palindrome in ["car", "madam", "racecar"].


const words = ["car", "madam", "racecar"];

const firstPalindrome = words.find(word => word === word.split('').reverse().join(''));

console.log(firstPalindrome); 

