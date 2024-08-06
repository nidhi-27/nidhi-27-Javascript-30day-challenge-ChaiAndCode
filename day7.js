// ACTIVITY 1: OBJECT CREATION AND ACCESS

// Task1. Create an object 'book' with properties - 'title', 'author' and 'year' and log it to the console
const book = {title:"Alchemist", author:"Paulo Coelo", year:"1988"}
console.log(book)

// Task2. Access and log title and author
console.log(book.title)
console.log(book.author)

// ACTIVITY 2: OBJECT METHODS

// Task3. Add a method to the book object that returns a string with book details and log the result of calling this method
// Define a Book object constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // Method to return book details as a string
    this.bookDetails = function() {
        return `${this.title} by ${this.author}, ${this.year} year`;
    };
}

// Create an instance of the Book object
let myBook = new Book("Harry Potter", "J.K. Rowling", 1997);

// Log the result of calling the bookDetails method
console.log(myBook.bookDetails());

// Task4. Add a method to the book object that takes a parameter(year) and updates the books year property, then log the updated object
book.updateYear = function (year) {
    book.year = year;
  };
  
  book.updateYear(2024);
  
  console.log(book);

// ACTIVITY 3: NESTED OBJECTS

// Task5: Created a nested object representing a librarywith properties like name and books , and log the library obj to the console.
// Define a Library object
let library = {
    name: "My Awesome Library",
    books: [
        { title: "Harry Potter", author: "J.K. Rowling", pages: 400, year: 1997 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, year: 1960 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 218, year: 1925 }
    ]
};

// Log the library object to the console
console.log(library);

// Task6. Access and log the name of the library and the titles of all the books in the library
// Log the name of the library
console.log(`Library Name: ${library.name}`);

// Log the titles of all the books in the library
console.log("Books in the Library:");
library.books.forEach(book => {
    console.log(book.title);
});

// ACTIVITY 4: this KEYWORD

// Task7. Add a method to the book obj that uses 'this' keywordto return a string with the book's title and year, & log the result of calling this method.
let book1 = {
    title: "JavaScript Basics",
    year: 2023,
    getDescription: function() {
        return `${this.title} (${this.year})`;
    }
};

// Logging the result of calling getDescription method
console.log(book1.getDescription()); // Output: JavaScript Basics (2023)

// ACTIVITY 5: OBJECT ITERATION

// Task8. Use for..in loop to iterate over the properties of the book and log each property and its value.
for (let prop in book) {
    console.log(`properites -> ${prop} and value -> ${book[prop]}`);
  }

// Task9. Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
