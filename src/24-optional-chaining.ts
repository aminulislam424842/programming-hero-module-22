interface User {
  name: string,
  address?: {
    city?: string
  }
}

function getUserCity(user: User): string | undefined {
  return user.address?.city
}


const user: User = {
  name: "Aminul",
  address: {
    city: "Rajshahi"
  }
}

const user1: User = {
  name: "aminul"
}

console.log(getUserCity(user))
console.log(getUserCity(user1))