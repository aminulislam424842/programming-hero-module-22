"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValues(value) {
    if (typeof value === "string") {
        return value.length;
    }
    return value + 100;
}
console.log(getValues("TypeScript"));
console.log(getValues(50));
//# sourceMappingURL=19-union-type-function.js.map