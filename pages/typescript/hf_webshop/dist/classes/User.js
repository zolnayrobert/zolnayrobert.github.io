"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const aUser_1 = require("../interfaces/aUser");
class User extends aUser_1.aUser {
    constructor(id, name, email) {
        super(id, name, email);
    }
}
exports.User = User;
