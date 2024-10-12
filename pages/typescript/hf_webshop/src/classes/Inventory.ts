import { Order } from "./Order";
import { Product } from "./Product";

export class Inventory
{
    private products: Product[] = [];
    private orders: Order[] = [];

    addProduct(product: Product):void
    {
        this.products.push(product);
    }

    deleteProduct(id: number):void
    {
        if(id>0)
            this.products = this.products.filter(product => product.id !== id);
        else
            throw console.error('Termék nem található!');
    }

    findProduct(id: number):Product | undefined
    {
        if(id>0)
            return this.products.find(product => product.id === id);
        else
            throw console.error('Termék nem található!');
    }

    listAllProducts(): Product[] | undefined
    {
        if(this.products.length > 0)
        {
            return this.products;
        } else
            throw console.error('Jelenleg nem található termék a raktárban');
    }

    placeOrder(order: Order): void
    {
console.log(order);        
        this.orders.push(order);
    }

    getLastOrderId():number
    {
        if (this.orders.length > 0) {
            return this.orders.length;
        } else {
            return 0;
        }
    }

    uploadProducts(products: Product[]):void
    {
        if(products.length>0){
            products.forEach(product => {
                this.products.push(product);
                console.log(`${product.id} - ${product.name} sikeresen feltöltve!`);
            });
        } else {
            throw console.error('Nincsenek rögzíthető tételek');
        }
    }
}