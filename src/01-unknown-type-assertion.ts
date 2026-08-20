let val: unknown = "Hello TypeScript";

console.log((val as string).length);
console.log((<string>val).length)