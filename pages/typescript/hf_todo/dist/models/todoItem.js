"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
const typeGuards_1 = require("../utils/typeGuards");
var TodoModel;
(function (TodoModel) {
    class TodoItem {
        constructor(id, content) {
            this.id = id;
            this.content = content;
            if (!(0, typeGuards_1.isValidContent)(content)) {
                throw new Error("A teendő tartalma nem megfelelő típusú!");
            }
        }
    }
    TodoModel.TodoItem = TodoItem;
})(TodoModel || (exports.TodoModel = TodoModel = {}));
