const user1 = {
  name: "Aminul",
  age: 21
};

type User = typeof user1;
console.log(user1)

function getUserTypeOf(user: User): User {
  return user
}

console.log(getUserTypeOf({
  name: "Rafi",
  age: 22
}))
