interface Students {
  name: string,
  roll: number,
  department: string
}

type StudentKey = keyof Students

const key1: StudentKey = "name"
const key2: StudentKey = "roll"
const key3: StudentKey = "department"

console.log(key1, key2, key3)