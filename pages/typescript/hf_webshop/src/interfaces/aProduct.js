"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aProduct = void 0;
var aProduct = /** @class */ (function () {
    function aProduct(id, name, price, description) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }
    Object.defineProperty(aProduct.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(aProduct.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(aProduct.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(aProduct.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    return aProduct;
}());
exports.aProduct = aProduct;
