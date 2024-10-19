import { TodoModel } from '../models/todoItem';
import { logMethod } from '../decorators/logManagment';

export namespace TodoService
{
    export class TodoList
    {
        private todos: Map<number, TodoModel.TodoItem> = new Map();

        @logMethod
        addTodoItem(todoItem: TodoModel.TodoItem): boolean
        {
            if(!(todoItem instanceof TodoModel.TodoItem))
            {
                throw new Error("Hibás típusú teendőt próbálsz hozzáadni a listához!");
            } else {
                this.todos.set(todoItem.id, todoItem);
                return true;
            }
        }

        listTodos(): void
        {
            this.todos.forEach(todo => 
                console.log(`ID: ${todo.id}, Tartalom: ${JSON.stringify(todo.content)}`)
            );
        }

        @logMethod
        removeTodoItem(id: number): boolean
        {
            if(this.todos.has(id))
            {
                this.todos.delete(id);
                return true;
            } else {
                console.error(`Nincs ilyen teendő az ID alapján: ${id}`);
                return false;
            }
        }
    }
}