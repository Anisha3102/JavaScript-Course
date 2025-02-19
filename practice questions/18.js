// You are provided with two functions: addSuffix and printSuffixed to manipulate strings with a provided suffix,

// addSuffix: This function should take two parameters: suffix (a string) and string (the original string). It should return a new string with the provided suffix appended to the end of string.

// printSuffixed: This function should take an object as its parameter, which contains two properties: suffix and string. It then calls addSuffix by passing these parameters and returns the returning value.

// printSuffixed is the function, that will be called first. Do not modify the function names.

// For example:

// Input: string = "foot" suffix = "ball"

// Output: "football"



const addSuffix = (string , suffix) => {
return `${string}${suffix}`;
};
const printSuffixed = ({suffix,string}) => 
(addSuffix(string,suffix));