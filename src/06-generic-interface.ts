interface container<T> {
  item: T;
}

const numbersContainer: container<number> = {
  item: 100
}

const stringContainer: container<string> = {
  item: "Book"
}

console.log(numbersContainer)
console.log(stringContainer)