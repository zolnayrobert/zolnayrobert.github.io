"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
        this.orders = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Inventory.prototype.deleteProduct = function (id) {
        if (id > 0)
            this.products = this.products.filter(function (product) { return product.id !== id; });
        else
            throw console.error('Termék nem található!');
    };
    Inventory.prototype.findProduct = function (id) {
        if (id > 0)
            return this.products.find(function (product) { return product.id === id; });
        else
            throw console.error('Termék nem található!');
    };
    Inventory.prototype.listAllProducts = function () {
        if (this.products.length > 0) {
            return this.products;
        }
        else
            throw console.error('Jelenleg nem található termék a raktárban');
    };
    Inventory.prototype.placeOrder = function (order) {
        console.log(order);
        this.orders.push(order);
    };
    Inventory.prototype.getLastOrderId = function () {
        if (this.orders.length > 0) {
            return this.orders.length;
        }
        else {
            return 0;
        }
    };
    Inventory.prototype.uploadProducts = function (products) {
        var _this = this;
        if (products.length > 0) {
            products.forEach(function (product) {
                _this.products.push(product);
                console.log("".concat(product.id, " - ").concat(product.name, " sikeresen felt\u00F6ltve!"));
            });
        }
        else {
            throw console.error('Nincsenek rögzíthető tételek');
        }
    };
    return Inventory;
}());
exports.Inventory = Inventory;
