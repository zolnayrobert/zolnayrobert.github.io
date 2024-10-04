import {Book} from './Book.js';
import {ILibrary} from '../interface/ILibrary.js';
import {BorrowedBooks} from '../interface/BorrowedBooks.js';

export class Library implements ILibrary
{
    private _books: Book[];                 // Ez lesz a "könyvtáram"
    private _borrows: BorrowedBooks[];      // Ide kerülnek, hogy ki mit kölcsönzött
    
    constructor(){
        this._books = [];   
        this._borrows = [];
    }

    // Összes könyv kilistázása
    listAllBooks(): void
    {
        if(this._books.length > 0)
        {
            this._books.forEach(book => {
                // itt listázhatjuk ki a könyveket
                console.log(`${book.id}. ${book.title} könyv ${book.author} szerzőtől ${book.price}$-ért elérhető!`);
            });
        } else
            throw console.error('Oops, Something wrong!');
    }

    // Könyv keresése ID alapján
    findBookById(id: number)
    {
        if(id>0) {
            const book = this._books.find(book => book.id === id);
            return (book) ? book : false;
        } else
            throw console.error('Oops, Something wrong!');
    }
    
    // Könyvek hozzáadása, csak a Book osztálynak megfelelő könyv lehetséges
    addBook(book: Book, userId: number): void
    {          
        if(userId>0){
            // Kikölcsönzöttekből eltávolítom
            const borrowIndex = this._borrows.findIndex(borrowed => borrowed.id === book.id);
            const [removedBorrowed] = this._borrows.splice(borrowIndex, 1);
console.log(removedBorrowed);
        }
        // Berakom a könyvtárba
        this._books.push(book);
        console.log(`A ${book.title} című könyv sikeresen bekerült a könyvtárba!`);
    }

    // Könyv törlése ID alapján
    removeBook(id: number, userId: number)
    {       
        if(id>0 && userId>0)
        {
            const bookIndex = this._books.findIndex(book => book.id === id); // Kikeresem az id alapján a könyv indexet
            const [removedBook] = this._books.splice(bookIndex, 1);          // kiveszem a könyvet a this._booksból

            // Ha talátlam könyvet
            if(removedBook) {            
                // Berakom a kölcsönzött könyvekhez
                const borrowedBook = this.getBorrowedBook(removedBook, userId);           
                this._borrows.push(borrowedBook);

                // Visszatérek a kölcsönzött könyv adataival
                return borrowedBook;
            } else 
                console.error('Sajnos nem találtuk meg a keresett könyvet!');
        } else
            throw console.error('Oops, Something wrong!');
    }

    getBorrowedBook(removedBook: Book, userId: number)
    {
        const borrowedbook: BorrowedBooks = {
            id: removedBook.id,            
            title: removedBook.title,      
            author: removedBook.author,    
            price: removedBook.price,      
            userId: userId,                 
            borrowedDate: new Date()
        };

        return borrowedbook;
    }

    listAllBorrows(): void
    {
        if(this._borrows.length > 0)
        {
            this._borrows.forEach(borrow => {
                console.log(`${borrow.borrowedDate}. - ${borrow.title} by ${borrow.userId} kikölcsönözve!`);
            });
        } else
            throw console.log('Jelenleg nincs könyv kikölcsönözve!');
    }
}