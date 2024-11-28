//67. Use map to create an array of URLs from ["google", "github"].


const platforms = ["google", "github"];

const urls = platforms.map(platform => `https://${platform}.com`);

console.log(urls);


