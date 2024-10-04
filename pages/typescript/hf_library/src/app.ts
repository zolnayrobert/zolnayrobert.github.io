console.log('app.ts betöltve');

import {Book} from './classes/Book.js';
import {Library} from './classes/Library.js';
import {User} from './classes/User.js';

const book = new Book(1, 'Könyv címe', 'Robi', 31);
const book2 = new Book(2, 'Könyv címe2', 'Robi2', 32);
const book3 = new Book(3, 'Könyv címe3', 'Robi', 33);
//console.log('ID: '+book.id);

const library = new Library();
library.addBook(book, 0);
library.addBook(book2, 0);
library.addBook(book3, 0);
/*
const user = new User(1, 'Robi', 'zolnayrobert@gmail.com');
let borrowed = user.borrowBook(library, 2);
console.log('----------borrowBook-------------');
console.log(borrowed);

console.log('----------addBook-------------');
//library.addBook(borrowed, 1);


/*
const library = new Library();
library.addBook(book);
library.addBook(book2);
library.addBook(book3);
console.log('----------listAllBooks-------------');
console.log(library.listAllBooks());

console.log('----------findBookById-------------');
const foundBook = library.findBookById(2);
console.log(foundBook);


console.log('----------removeBook-------------');
const removedBook = library.removeBook(3);
console.log(removedBook);
*/