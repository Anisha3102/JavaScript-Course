// The function getProperty should extract the given property from a given object. If the given property is not present, return the string Not found.

const getProperty = ({ object, property }) => object[property] || "Not found";