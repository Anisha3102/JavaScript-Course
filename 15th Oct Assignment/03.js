
//3 Create a function sumNumbers that takes an unknown number of arguments using the rest operator and returns their sum.

function sumNumbers(...nums){
    const [a,b,c,d,e]=nums;
     return a+b+c+d+e; 
  }
  
  console.log(sumNumbers(1,2,3,4,5));
  