function getValues (value:string|number):number{
  if(typeof value ==="string"){
    return value.length;
  }
  return value+100;
}

console.log(getValues("TypeScript"));
console.log(getValues(50));
