//12 Create a function makeCoffee that takes one required argument type and an unknown number of optional ingredients using the rest operator.

function makeCoffee(...nums){
    const [a,b,c,d,e]=nums;
     return a+"\n"+b+"\n"+c+"\n"+d; 
  }
  let a="sugar";
  console.log(makeCoffee(a,"milk","water","coffee"));