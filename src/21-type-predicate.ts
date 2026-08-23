function isString(value: unknown): value is string {
  return typeof value === "string";
}

function checkValue(value: unknown) {
  if (isString(value)) {
    console.log("String:", value);
  } else {
    console.log("Not a string");
  }
}

checkValue("Hello");
checkValue(100);
checkValue("aminul")