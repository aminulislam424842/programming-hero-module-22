let value: string | number = "100";

/**
 * I am telling TypeScript that the value is a number.
 * This is risky because TypeScript does not convert
 * the string into a number at runtime.
 */
const riskyValue = value as unknown as number;

console.log(riskyValue + 10); // 10010

// Safe conversion
const numberValue = Number(value);

console.log(numberValue + 10); // 110