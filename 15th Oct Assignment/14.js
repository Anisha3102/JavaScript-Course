//14 Create a function findMax that accepts an unknown number of numbers using the rest operator and returns the maximum value.

function findMax(...nums){
    const [a,b,c,d]=nums;
     return Math.max(a,b,c,d);
  }
  
  console.log(findMax(10,20,30,40));
  