function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = {
  name: "Rafi",
  age: 22,
  city: "Rajshahi"
}

console.log(getProperty(user, "name"))
console.log(getProperty(user, "age"))
console.log(getProperty(user, "city"))