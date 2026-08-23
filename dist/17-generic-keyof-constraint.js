"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    name: "Rafi",
    age: 22,
    city: "Rajshahi"
};
console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
console.log(getProperty(user, "city"));
//# sourceMappingURL=17-generic-keyof-constraint.js.map