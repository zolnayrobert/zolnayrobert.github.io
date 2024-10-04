export class User {
    constructor(userId, name, email) {
        this._userId = userId;
        this._name = name;
        this._email = email;
    }
    get userId() {
        return this._userId;
    }
    get name() {
        return this._name;
    }
    set name(userName) {
        if (userName && userName.length > 0) {
            this._name = userName;
        }
        else {
            console.error("Invalid name");
        }
    }
    get email() {
        return this._email;
    }
    set email(userEmail) {
        if (userEmail && userEmail.length > 0) {
            this._email = userEmail;
        }
        else {
            console.error("Invalid email address");
        }
    }
    borrowBook(lib, bookId) {
        const library = lib;
        const borrowed = library.removeBook(bookId, this._userId);
        return borrowed;
    }
}
