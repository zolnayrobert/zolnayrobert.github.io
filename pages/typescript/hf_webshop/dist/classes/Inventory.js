"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(id) {
        if (id > 0)
            this.products = this.products.filter(product => product.id !== id);
        else
            throw console.error('Termék nem található!');
    }
    findProduct(id) {
        if (id > 0)
            return this.products.find(product => product.id === id);
        else
            throw console.error('Termék nem található!');
    }
    listAllProducts() {
        if (this.products.length > 0) {
            return this.products;
        }
        else
            throw console.error('Jelenleg nem található termék a raktárban');
    }
    placeOrder(order) {
        console.log(order);
        this.orders.push(order);
    }
    getLastOrderId() {
        if (this.orders.length > 0) {
            return this.orders.length;
        }
        else {
            return 0;
        }
    }
    uploadProducts(products) {
        if (products.length > 0) {
            products.forEach(product => {
                this.products.push(product);
                console.log(`${product.id} - ${product.name} sikeresen feltöltve!`);
            });
        }
        else {
            throw console.error('Nincsenek rögzíthető tételek');
        }
    }
}
exports.Inventory = Inventory;
