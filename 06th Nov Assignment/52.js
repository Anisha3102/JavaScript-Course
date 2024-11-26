//52. Use sort to sort an array of dates ["2024-10-01", "2022-03-01"] chronologically.


const dates = ["2024-10-01", "2022-03-01"];

const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));

console.log(sortedDates);


