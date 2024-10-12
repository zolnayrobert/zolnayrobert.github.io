"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aUser = void 0;
var aUser = /** @class */ (function () {
    function aUser(id, name, email) {
        this._id = id;
        this._name = name;
        this._email = email;
    }
    Object.defineProperty(aUser.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(aUser.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(aUser.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return aUser;
}());
exports.aUser = aUser;
