// https://github.com/Pezsi/TS-2/issues/3

export class Book
{
    private _id: number;     // egyedi azonosító
    private _title: string;  // könyv címe
    private _author: string; // szerző
    private _price: number;  // ár

    constructor(id: number, title: string, author: string, price: number)
    {
        this._id = id;
        this._title = title;
        this._author = author;
        this._price = price;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        if (newTitle && newTitle.length > 0) {
            this._title = newTitle;
        } else {
            console.error("Invalid title");
        }
    }

    get author(): string {
        return this._author;
    }

    set author(newAuthor: string) {
        if (newAuthor && newAuthor.length > 0) {
            this._author = newAuthor;
        } else {
            console.error("Invalid author");
        }
    }

    get price(): number {
        return this._price;
    }

    set price(newPrice: number) {
        if (newPrice > 0) {
            this._price = newPrice;
        } else {
            console.error("Invalid price");
        }
    }
}