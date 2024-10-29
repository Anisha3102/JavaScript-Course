//19 Create an object person with a method greet that prints a greeting message using the name property.

function person(a) {
    return {
        name:a,
        greet: function() {
            return "Hi! This is "+a;
        }
    };
}

const abc = person('Anisha');
console.log(abc.greet()); 

