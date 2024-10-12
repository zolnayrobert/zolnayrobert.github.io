import { aProduct } from "../interfaces/aProduct";

export class Product extends aProduct
{
    constructor(id: number, name: string, price: number, description?: string)
    {
       super(id, name, price, description);
    }
}

