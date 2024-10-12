import { Inventory } from "./Inventory";
import { Product } from "./Product";
import { User } from "./User";

export class Order
{    
    private id: number;
    private products: Product[];
    private status: OrderStatuses;
    private user: User;
    private inventory: Inventory;

    constructor(user: User, inventory: Inventory)
    {
        this.inventory = inventory;
        this.id = this.inventory.getLastOrderId()+1;
        this.products = [];
        this.status = OrderStatuses.new;
        this.user = user;
    }

    get orderStatus(){
        return this.status;
    }

    add2cart(product: Product):void
    {
        if(!this.products.find(p => p.id === product.id)) {
            this.products.push(product);
            this.inventory.deleteProduct(product.id);
            this.updateOrderStatus(OrderStatuses.processing);
            console.log(`${product.id} - ${product.name} sikeresen hozzáadva a rendeléshez!`);
        } else {
            console.log(`A ${product.id} - ${product.name} már hozzá van adva a rendeléshez.`);
        }
    }

    removeFromCart(id: number):void
    {
        if(id>0) {
            let deletableProduct = this.products.find(p => p.id === id);
            if(deletableProduct) {
                this.inventory.addProduct(deletableProduct);
                this.products = this.products.filter(product => product.id !== id);
                console.log(`${id} termék sikeresen törölve a rendelésből!`);
            }
        } else throw console.error('Termék nem található!');
    }

    sumOrderPrice(): number
    {
        return this.products.reduce((sumPrice, product) => sumPrice + product.price, 0);
    }

    updateOrderStatus(newStatus: OrderStatuses): void
    {
        this.status = newStatus;
    }
}

export enum OrderStatuses
{
    new = "Új",
    processing = "Feldolgozás alatt",
    delivered = "Kiszállítva"
}