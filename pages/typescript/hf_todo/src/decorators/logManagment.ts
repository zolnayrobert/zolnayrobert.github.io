import { TodoModel } from "../models/todoItem";

export function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor)
{
    const originalMethod = descriptor.value;       

    descriptor.value = function(...params: [TodoModel.TodoItem])
    {              
        const result = originalMethod.apply(this, params);
        (result)
            ? console.log(`A művelet sikeresen végrehajtva: ${propertyKey}`)
            : console.log(`A művelet sikertelen: ${propertyKey}`);

        return result;
    };

    return descriptor;
}