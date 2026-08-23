"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "PLACED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
// let status : OrderStatus = OrderStatus.Shipped;
// console.log(status)
function orderStatus(status) {
    return status;
}
console.log(orderStatus(OrderStatus.Placed));
console.log(orderStatus(OrderStatus.Shipped));
console.log(orderStatus(OrderStatus.Delivered));
console.log(orderStatus(OrderStatus.Cancelled));
//# sourceMappingURL=08-string-enum.js.map