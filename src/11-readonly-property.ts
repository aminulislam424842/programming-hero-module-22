interface User {
  readonly id: number
  name: string
  email: string
}

const user: User = {
  id: 1, name: "Aminul", email: "aminullislam424842@gmail.com"
}
console.log(user);

user.name = "Mahi";
console.log(user);

// user.id = 2;
// connot assign to id because it is a readOnly Property
// console.log(user)