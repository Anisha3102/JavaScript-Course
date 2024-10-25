//7 Write a function getTotalPrice that takes an unknown number of prices as arguments using the rest operator and returns the total price.

function getTotalPrice(...nums){
    const [a,b,c,d,e]=nums;
     return a+b+c+d+e; 
  }
  
  console.log(getTotalPrice(1,2,3,4,5));
  
  