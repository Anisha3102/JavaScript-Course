//24 Write a function joinStrings that accepts an unknown number of strings using the rest operator and returns them concatenated into one string.

function joinStrings(...strings) {
    return strings.join('');
}

const result = joinStrings('Hello, ', 'world', '!', ' How are you?');
console.log(result);
