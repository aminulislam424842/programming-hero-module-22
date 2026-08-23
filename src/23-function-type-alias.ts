type calculator = (a:number,b:number) => number;

const add:calculator=( a,b)=> {
  return a+b
}
const subtract:calculator=( a,b)=> {
  return a-b
}
const multiply:calculator=( a,b)=> {
  return a*b
}


console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));