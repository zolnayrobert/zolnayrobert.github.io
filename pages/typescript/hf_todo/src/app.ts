console.log('ToDo app.ts betöltve');

import { TodoService } from './services/todoList';
import { TodoModel } from './models/todoItem';

const todoList = new TodoService.TodoList();

const todo1 = new TodoModel.TodoItem(1, 'Bevásárlás');
const todo2 = new TodoModel.TodoItem(2, { message: 'Futás a parkban', dueDate: new Date() });

console.log('---------- Teendők hozzáadása ----------');
todoList.addTodoItem(todo1);
todoList.addTodoItem(todo2);

console.log('---------- Teendők listázása ----------');
todoList.listTodos();

console.log('---------- Teendő eltávolítása ----------');
todoList.removeTodoItem(1);

console.log('---------- Teendők listázása ----------');
todoList.listTodos();