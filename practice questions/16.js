// Assign value to the specified key if value is not empty.

// Input will be a plain object with values of type of string or number.
// Assign the value to given key if the given value is not empty.
// Do not update the key if the given value is empty.

const updateData = ({ data, key, value }) => {

  if (value === null || value === undefined || value === "") return data;
  return {
    ...data,
    [key]: value,
  };
};