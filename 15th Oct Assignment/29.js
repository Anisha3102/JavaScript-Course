//29Create a function findAverage that takes an unknown number of scores using the rest operator and returns the average score.

function findAverage(...nums){
    const [a,b,c,d,e]=nums;
     return (a+b+c+d+e)/5; 
  }
  
  console.log(findAverage(1,2,3,4,5));
  
  