"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findById(items, id) {
    return items.find(item => item.id === id);
}
const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
const result = findById(users, 1);
console.log(result);
// Error: Property 'id' is missing
// const wrong = findById([{ name: "C" }], 3);
//# sourceMappingURL=07-generic-constraint.js.map