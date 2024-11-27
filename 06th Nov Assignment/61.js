//61. Use reduce to implement a deep object merging for [{a: 1}, {b: 2}, {a: 3}].


const objects = [{a: 1}, {b: 2}, {a: 3}];

const mergedObject = objects.reduce((acc, current) => {
  return { ...acc, ...current };
}, {});

console.log(mergedObject);

