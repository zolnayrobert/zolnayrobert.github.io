// https://github.com/Pezsi/TS-2/issues/3
export class Book {
    constructor(id, title, author, price) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._price = price;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        if (newTitle && newTitle.length > 0) {
            this._title = newTitle;
        }
        else {
            console.error("Invalid title");
        }
    }
    get author() {
        return this._author;
    }
    set author(newAuthor) {
        if (newAuthor && newAuthor.length > 0) {
            this._author = newAuthor;
        }
        else {
            console.error("Invalid author");
        }
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
        }
        else {
            console.error("Invalid price");
        }
    }
}
