// The function getFullName should return a string. The returned string must join the firstName and the lastName separated by a space.

// If the firstName is not present, return the lastName as the full name.

// If the lastName is not present, return the firstName as the full name.

// If both firstName and lastName are not present, return an empty string, "", as the full name.

const getFullName = (person) => {
  // write your code here
  if (!person.firstName && !person.lastName) {
    return "";
  }
  if (!person.firstName) {
    return `${person.lastName}`;
  }
  if (!person.lastName) {
    return `${person.firstName}`;
  }
  if (person.firstName && person.lastName) {
    return `${person.firstName} ${person.lastName}`;
  }
};