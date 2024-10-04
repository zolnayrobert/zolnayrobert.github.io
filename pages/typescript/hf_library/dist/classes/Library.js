export class Library {
    constructor() {
        this._books = [];
        this._borrows = [];
    }
    // Összes könyv kilistázása
    listAllBooks() {
        if (this._books.length > 0) {
            this._books.forEach(book => {
                // itt listázhatjuk ki a könyveket
                console.log(`${book.id}. - ${book.title} by ${book.author} for ${book.price} is available!`);
            });
        }
        else
            throw console.error('Oops, Something wrong!');
    }
    // Könyv keresése ID alapján
    findBookById(id) {
        if (id > 0) {
            const book = this._books.find(book => book.id === id);
            return (book) ? book : false;
        }
        else
            throw console.error('Oops, Something wrong!');
    }
    // Könyvek hozzáadása, csak a Book osztálynak megfelelő könyv lehetséges
    addBook(book, userId) {
        // Kikölcsönzöttekből eltávolítom
        const borrowIndex = this._borrows.findIndex(borrowed => borrowed.id === book.id);
        const [removedBorrowed] = this._borrows.splice(borrowIndex, 1);
        console.log(removedBorrowed);
        if (removedBorrowed) {
            this._books.push(book);
            console.log(`A ${book.title} című könyv sikeresen bekerült a könyvtárba!`);
        }
    }
    // Könyv törlése ID alapján
    removeBook(id, userId) {
        if (id > 0 && userId > 0) {
            const bookIndex = this._books.findIndex(book => book.id === id); // Kikeresem az id alapján a könyv indexet
            const [removedBook] = this._books.splice(bookIndex, 1); // kiveszem a könyvet a this._booksból
            // Ha talátlam könyvet
            if (removedBook) {
                // Berakom a kölcsönzött könyvekhez
                const borrowedBook = this.getBorrowedBook(removedBook, userId);
                this._borrows.push(borrowedBook);
                // Visszatérek a kölcsönzött könyv adataival
                return borrowedBook;
            }
            else
                console.error('Sajnos nem találtuk meg a keresett könyvet!');
        }
        else
            throw console.error('Oops, Something wrong!');
    }
    getBorrowedBook(removedBook, userId) {
        const borrowedbook = {
            id: removedBook.id,
            title: removedBook.title,
            author: removedBook.author,
            price: removedBook.price,
            userId: userId,
            borrowedDate: new Date()
        };
        return borrowedbook;
    }
}
