function getLastElement<T> (value : T[]):T | undefined {
  return value[value.length-1];
}

const numbers = [10, 20, 30];
const letters = ["a", "b", "c"];
 
console.log(getLastElement(numbers))
console.log(getLastElement(letters))