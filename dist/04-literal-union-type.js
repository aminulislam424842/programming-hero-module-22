"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextId = 1;
function createOrder(method) {
    const order = {
        id: nextId,
        method: method
    };
    nextId++;
    return order;
}
console.log(createOrder("card"));
console.log(createOrder("cash"));
console.log(createOrder("mobile"));
//# sourceMappingURL=04-literal-union-type.js.map