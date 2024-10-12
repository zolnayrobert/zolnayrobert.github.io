"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatuses = exports.Order = void 0;
class Order {
    constructor(user, inventory) {
        this.inventory = inventory;
        this.id = this.inventory.getLastOrderId() + 1;
        this.products = [];
        this.status = OrderStatuses.new;
        this.user = user;
    }
    get orderStatus() {
        return this.status;
    }
    add2cart(product) {
        if (!this.products.find(p => p.id === product.id)) {
            this.products.push(product);
            this.inventory.deleteProduct(product.id);
            this.updateOrderStatus(OrderStatuses.processing);
            console.log(`${product.id} - ${product.name} sikeresen hozzáadva a rendeléshez!`);
        }
        else {
            console.log(`A ${product.id} - ${product.name} már hozzá van adva a rendeléshez.`);
        }
    }
    removeFromCart(id) {
        if (id > 0) {
            let deletableProduct = this.products.find(p => p.id === id);
            if (deletableProduct) {
                this.inventory.addProduct(deletableProduct);
                this.products = this.products.filter(product => product.id !== id);
                console.log(`${id} termék sikeresen törölve a rendelésből!`);
            }
        }
        else
            throw console.error('Termék nem található!');
    }
    sumOrderPrice() {
        return this.products.reduce((sumPrice, product) => sumPrice + product.price, 0);
    }
    updateOrderStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.Order = Order;
var OrderStatuses;
(function (OrderStatuses) {
    OrderStatuses["new"] = "\u00DAj";
    OrderStatuses["processing"] = "Feldolgoz\u00E1s alatt";
    OrderStatuses["delivered"] = "Kisz\u00E1ll\u00EDtva";
})(OrderStatuses || (exports.OrderStatuses = OrderStatuses = {}));
