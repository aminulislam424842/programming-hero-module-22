"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUserCity(user) {
    return user.address?.city;
}
const user = {
    name: "Aminul",
    address: {
        city: "Rajshahi"
    }
};
const user1 = {
    name: "aminul"
};
console.log(getUserCity(user));
console.log(getUserCity(user1));
//# sourceMappingURL=24-optional-chaining.js.map