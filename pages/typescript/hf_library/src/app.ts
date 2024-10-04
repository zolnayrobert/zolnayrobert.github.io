console.log('app.ts betöltve');

import {Book} from './classes/Book.js';
import {Library} from './classes/Library.js';
import {User} from './classes/User.js';

const book = new Book(1, 'Könyv címe1', 'Robi', 31);
const book2 = new Book(2, 'Könyv címe2', 'Robi2', 32);
const book3 = new Book(3, 'Könyv címe3', 'Robi', 33);

const library = new Library();
library.addBook(book, 0);
library.addBook(book2, 0);
library.addBook(book3, 0);

const user = new User(1, 'Robi', 'zolnayrobert@gmail.com');
let borrowed = user.borrowBook(library, 2);
console.log('----------borrowBook-------------');
if (borrowed) {
    console.log(borrowed);
}

console.log('----------addBook-------------');
if (borrowed) {
    const borrowedBook = new Book(borrowed.id, borrowed.title, borrowed.author, borrowed.price);
    library.addBook(borrowedBook, 1);
}

console.log('----------Library-------------');
library.listAllBooks();
console.log('----------Borrowed-------------');
library.listAllBorrows();