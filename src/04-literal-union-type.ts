type PaymentMethod = "cash" | "card" | "mobile"
/**
 * Interface is used to define the structure of an object.
 * A union of literal values like "cash" | "card" | "mobile"
 * should be created using a type alias.
 */

interface Order {
  id: number
  method: PaymentMethod
}

let nextId: number = 1;

function createOrder(method: PaymentMethod): Order {
  const order = {
    id: nextId,
    method: method
  }
  nextId++

  return order
}

console.log(createOrder("card"))
console.log(createOrder("cash"))
console.log(createOrder("mobile"))