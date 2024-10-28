//17 Create an object book with non-primitive properties: title, author, and reviews (where reviews is an array of review objects).


const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    reviews: [
        {
            reviewer: "Alice",
            rating: 5,
            comment: "A masterpiece of modern literature."
        },
        {
            reviewer: "Bob",
            rating: 4,
            comment: "A thought-provoking story with deep themes."
        },
        {
            reviewer: "Charlie",
            rating: 3,
            comment: "Good read, but a bit slow in parts."
        }
    ]
};
console.log(book.title); 
console.log(book.author); 
console.log(book.reviews);