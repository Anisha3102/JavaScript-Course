//28 Write a function introduceEmployee that takes two positional arguments: employeeName and position, with position defaulting to "intern".

function introduceEmployee(employeeName,position="-intern"){
    
    return employeeName+position;
}

let employeeName="Anisha";
let position="-student";
console.log (introduceEmployee(employeeName,position));
