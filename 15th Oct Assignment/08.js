//8 Create a function buildSentence that accepts three arguments: subject, verb, and object. If no object is passed, it should default to "something".

function buildSentence(sub,verb,obj=" something"){
    
    return sub+verb+obj; 
}

let sub="She";
let verb=" is";
let obj=" girl";
console.log (buildSentence(sub,verb,obj));

