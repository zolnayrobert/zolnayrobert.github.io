import { aUser } from "../interfaces/aUser";

export class User extends aUser
{
    constructor(id: number, name: string, email: string)
    {
       super(id, name, email);
    }
}