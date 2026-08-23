function processValue(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value + 10);
  } else if (typeof value === "boolean") {
    console.log("Boolean value");
  } else {
    console.log("Unknown type");
  }
}

processValue("hello");
processValue(50);
processValue(true);