export abstract class aProduct
{
    protected _id: number;
    protected _name: string;
    protected _price: number;
    protected _description?: string;
  
    constructor(id: number, name: string, price: number, description?: string)
    {
      this._id = id;
      this._name = name;
      this._price = price;
      this._description = description;
    }
  
    get id(): number {
      return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get description(): string | undefined {
      return this._description;
    }
  }