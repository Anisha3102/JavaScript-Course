//16 Create an object car with primitive properties: brand, model, and year.


function gaadi(a,b,c) {
    return {
        brand:a,
        model:b,
        year:c,
        type: function() {
            return a+"\n"+b+"\n"+c;
        }
    };
}

const car = gaadi('toyota','supra',1994);
console.log(car.type()); 

