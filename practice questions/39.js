// Create a function addThree, which accepts a number and increments it by 3 and returns the result.

// Create another function addThreeToArray which accepts an array of numbers as a parameter and logs a new array where 3 is added to each element to the console.


const addThree = (number) => number + 3;

const addThreeToArray = (inputArray) => {
  const newArray =[] ;
  inputArray.forEach((element,index) => {
    newArray[index] = addThree(element);
  })
  console.log(newArray);
};