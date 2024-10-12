"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inventory_1 = require("./classes/Inventory");
var Order_1 = require("./classes/Order");
var Product_1 = require("./classes/Product");
var User_1 = require("./classes/User");
console.log('hf-webshop loaded...');
/***** WEBSHOP MŰKÖDÉS *****/
var products4Inventory = [
    {
        "id": 21369,
        "name": "Nature Box Avokádó hajpakolás a regenerált hajért 200 ml (kifutó termék)",
        "price": 1999,
        "description": "Nature Box hajszerkezet helyreállító hajpakolás a mélyregenerálásért."
    },
    {
        "id": 21080,
        "name": "Nature Box Gránátalma sampon festett hajra 385 ml",
        "price": 2299,
        "description": "Nature Box Sampon Festett Hajra a hajszín védelméért."
    },
    {
        "id": 20968,
        "name": "Nature Box pakolás Power Shots Argán olajjal a puha hajért 60ml",
        "price": 1599,
        "description": "Az eddigi legintenzívebb ápoló Nature Box formula."
    }
];
console.log('-----PRODUCT UPLOAD------');
var inventory = new Inventory_1.Inventory();
var products = products4Inventory.map(function (product) { return new Product_1.Product(product.id, product.name, product.price, product.description); });
inventory.uploadProducts(products);
console.log(inventory.listAllProducts());
console.log('-----ADD NEW USER------');
var user = new User_1.User(1, 'Zolnay Róbert', 'zolnayrobert@gmail.com');
console.log('-----FIND PRODUCT------');
var product = inventory.findProduct(21080);
console.log(product);
console.log('-----CREATE NEW ORDER------');
var order = new Order_1.Order(user, inventory);
console.log(order.orderStatus);
console.log('-----ADD 2 CART------');
if (product)
    order.add2cart(product);
console.log(order.orderStatus);
console.log(inventory.listAllProducts());
