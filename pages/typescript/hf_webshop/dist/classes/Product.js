"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const aProduct_1 = require("../interfaces/aProduct");
class Product extends aProduct_1.aProduct {
    constructor(id, name, price, description) {
        super(id, name, price, description);
    }
}
exports.Product = Product;
