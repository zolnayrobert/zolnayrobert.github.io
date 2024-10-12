"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatuses = exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(user, inventory) {
        this.inventory = inventory;
        this.id = this.inventory.getLastOrderId() + 1;
        this.products = [];
        this.status = OrderStatuses.new;
        this.user = user;
    }
    Object.defineProperty(Order.prototype, "orderStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.add2cart = function (product) {
        if (!this.products.find(function (p) { return p.id === product.id; })) {
            this.products.push(product);
            this.inventory.deleteProduct(product.id);
            this.updateOrderStatus(OrderStatuses.processing);
            console.log("".concat(product.id, " - ").concat(product.name, " sikeresen hozz\u00E1adva a rendel\u00E9shez!"));
        }
        else {
            console.log("A ".concat(product.id, " - ").concat(product.name, " m\u00E1r hozz\u00E1 van adva a rendel\u00E9shez."));
        }
    };
    Order.prototype.removeFromCart = function (id) {
        if (id > 0) {
            var deletableProduct = this.products.find(function (p) { return p.id === id; });
            if (deletableProduct) {
                this.inventory.addProduct(deletableProduct);
                this.products = this.products.filter(function (product) { return product.id !== id; });
                console.log("".concat(id, " term\u00E9k sikeresen t\u00F6r\u00F6lve a rendel\u00E9sb\u0151l!"));
            }
        }
        else
            throw console.error('Termék nem található!');
    };
    Order.prototype.sumOrderPrice = function () {
        return this.products.reduce(function (sumPrice, product) { return sumPrice + product.price; }, 0);
    };
    Order.prototype.updateOrderStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Order;
}());
exports.Order = Order;
var OrderStatuses;
(function (OrderStatuses) {
    OrderStatuses["new"] = "\u00DAj";
    OrderStatuses["processing"] = "Feldolgoz\u00E1s alatt";
    OrderStatuses["delivered"] = "Kisz\u00E1ll\u00EDtva";
})(OrderStatuses || (exports.OrderStatuses = OrderStatuses = {}));
