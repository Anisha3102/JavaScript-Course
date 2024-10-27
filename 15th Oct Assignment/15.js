//15 Write a function buildPerson that takes two arguments: firstName and lastName, and returns an object representing the person in js


function buildPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function() {
            return firstName+ lastName;
        }
    };
}

const person = buildPerson('Anisha', ' Das');
console.log(person.fullName()); 
