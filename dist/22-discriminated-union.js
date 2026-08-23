"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleResponse(response) {
    if (response.status === "success") {
        return `Success: ${response.message}`;
    }
    else {
        return `Error: ${response.message}`;
    }
}
console.log(handleResponse({
    status: "success",
    message: "Data loaded"
}));
console.log(handleResponse({
    status: "error",
    message: "Something went wrong"
}));
//# sourceMappingURL=22-discriminated-union.js.map