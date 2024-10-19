"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todoItem_1 = require("../models/todoItem");
const logManagment_1 = require("../decorators/logManagment");
var TodoService;
(function (TodoService) {
    class TodoList {
        constructor() {
            this.todos = new Map();
        }
        addTodoItem(todoItem) {
            if (!(todoItem instanceof todoItem_1.TodoModel.TodoItem)) {
                throw new Error("Hibás típusú teendőt próbálsz hozzáadni a listához!");
            }
            else {
                this.todos.set(todoItem.id, todoItem);
                return true;
            }
        }
        listTodos() {
            this.todos.forEach(todo => console.log(`ID: ${todo.id}, Tartalom: ${JSON.stringify(todo.content)}`));
        }
        removeTodoItem(id) {
            if (this.todos.has(id)) {
                this.todos.delete(id);
                return true;
            }
            else {
                console.error(`Nincs ilyen teendő az ID alapján: ${id}`);
                return false;
            }
        }
    }
    __decorate([
        logManagment_1.logMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [todoItem_1.TodoModel.TodoItem]),
        __metadata("design:returntype", Boolean)
    ], TodoList.prototype, "addTodoItem", null);
    __decorate([
        logManagment_1.logMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Boolean)
    ], TodoList.prototype, "removeTodoItem", null);
    TodoService.TodoList = TodoList;
})(TodoService || (exports.TodoService = TodoService = {}));
