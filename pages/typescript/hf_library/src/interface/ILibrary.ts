import {Book} from '../classes/Book.js';

export interface ILibrary {
    listAllBooks(): void
    findBookById(id: number): any
    addBook(book: Book, userId: number): void
    removeBook(id: number, userId: number): any
}