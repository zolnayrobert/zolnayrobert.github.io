"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidContent = isValidContent;
// Típusőr a tartalom ellenőrzésére
function isValidContent(content) {
    return (typeof content === "string" || (typeof content === "object" && content !== null)) ? true : false;
}
