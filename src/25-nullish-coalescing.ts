interface User {
  name: string,
  nickname?: string
}


function getNickname(user: User): string {
  return user.nickname ?? "Guest"
}

const user1: User = {
  name: "Aminul"
}

const user2: User = {
  name: "Aminul",
  nickname: "Mahi"
}


console.log(getNickname(user1))
console.log(getNickname(user2))