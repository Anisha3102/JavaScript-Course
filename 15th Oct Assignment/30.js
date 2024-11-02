
//30 Write a function buildCar that accepts three arguments: brand, model, and year. If no year is provided, it should default to the current year.

function buildCar(brand,model,year=2024){
    
    return brand+"\n"+model+"\n"+year;
}

let brand="Ford";
let model="Jetta";
let year=1994;
console.log (buildCar(brand,model,year));

