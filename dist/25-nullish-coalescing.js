"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNickname(user) {
    return user.nickname ?? "Guest";
}
const user1 = {
    name: "Aminul"
};
const user2 = {
    name: "Aminul",
    nickname: "Mahi"
};
console.log(getNickname(user1));
console.log(getNickname(user2));
//# sourceMappingURL=25-nullish-coalescing.js.map