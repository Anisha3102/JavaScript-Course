//53. Use reduce to implement a basic factorial calculation.


const factorial = (n) => {
    return [...Array(n).keys()].reduce((acc, num) => acc * (num + 1), 1);
  };
  
  console.log(factorial(5)); 
  