
//9 Write a function addNumbers that takes an unknown number of numbers using the rest operator and returns the sum.

function addNumbers(...nums){
    const [a,b,c,d,e]=nums;
     return a+b+c+d+e;
  }
  
  console.log(addNumbers(10,20,30,40,50));
  