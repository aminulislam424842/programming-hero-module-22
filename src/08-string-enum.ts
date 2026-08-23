enum OrderStatus {
  Placed = "PLACED",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

// let status : OrderStatus = OrderStatus.Shipped;

// console.log(status)

function orderStatus(status: OrderStatus): string {
  return status
}

console.log(orderStatus(OrderStatus.Placed))
console.log(orderStatus(OrderStatus.Shipped))
console.log(orderStatus(OrderStatus.Delivered))
console.log(orderStatus(OrderStatus.Cancelled))