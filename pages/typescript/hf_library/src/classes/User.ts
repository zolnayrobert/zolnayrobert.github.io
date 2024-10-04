import {Library} from './Library.js';

export class User
{
    private _userId: number;// felhasználó azonosító
    private _name: string;  // felhasználó neve
    private _email: string; // felhasználó email

    constructor(userId: number, name: string, email: string)
    {
        this._userId = userId;
        this._name = name;
        this._email = email;
    }

    get userId(): number {
        return this._userId;
    }

    get name(): string {
        return this._name;
    }

    set name(userName: string) {
        if (userName && userName.length > 0) {
            this._name = userName;
        } else {
            console.error("Invalid name");
        }
    }

    get email(): string {
        return this._email;
    }

    set email(userEmail: string) {
        if (userEmail && userEmail.length > 0) {
            this._email = userEmail;
        } else {
            console.error("Invalid email address");
        }
    }

    borrowBook(lib: Library, bookId: number)
    {
        const library = lib;
        const borrowed = library.removeBook(bookId, this._userId);
        return borrowed;
    }
}