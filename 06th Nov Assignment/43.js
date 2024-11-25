
//43. Use sort to arrange strings by length ["short", "longer", "longest"].


const words = ["short", "longer", "longest"];

const sortedByLength = words.sort((a, b) => a.length - b.length);

console.log(sortedByLength);

