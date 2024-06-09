// EXPLORING JAVASCRIPT OBJECTS
class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    };

    // Task 2
    displaymethod = () => {
        return `Book title: ${this.title}, Book Author: ${this.author}, Book Pages: ${this.pages}`;
    }

}

// Task 3 -------------------------
let bookArray = [];

const addBook = (title, author, pages) => {
    const newBook = new Book(title, author, pages);
    bookArray.push(newBook);
}

const searchBookByTitle = (title)  => {
    return bookArray.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

const searchBookByAuthor = (author)  => {
    return bookArray.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// -------------------------

// Task 4 -------------------------
const filterBooksByPages = ()  => {
    return bookArray.filter(book => book.pages > 100);
}

const addTitleAndAuthorPrefix = ()  => {
    return bookArray.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
}
// -------------------------

addBook('To Kill a Mockingbird', 'Harper Lee', 281);
addBook('Slapped By Legal', 'Danny Gonzalez', 198);
addBook('The Little Prince', 'Curious George', 96);

console.log(searchBookByTitle('The'));

// Search by author
console.log(searchBookByAuthor('George'));

// Find books with more than 100 pgs
console.log(filterBooksByPages());

// Add Title and Author prefixes
console.log(addTitleAndAuthorPrefix());

// -------------------------