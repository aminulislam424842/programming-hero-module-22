"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isString(value) {
    return typeof value === "string";
}
function checkValue(value) {
    if (isString(value)) {
        console.log("String:", value);
    }
    else {
        console.log("Not a string");
    }
}
checkValue("Hello");
checkValue(100);
checkValue("aminul");
//# sourceMappingURL=21-type-predicate.js.map