import { isValidContent } from '../utils/typeGuards';

export namespace TodoModel
{
    export type TodoContent = (string | { message: string, dueDate: Date });
    
    export class TodoItem
    {
        constructor(public id: number, public content: TodoContent)
        {
            if(!isValidContent(content))
            {
                throw new Error("A teendő tartalma nem megfelelő típusú!");
            }
        }
    }
}