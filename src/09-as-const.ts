const appConfig = {
  theme: "dark",
  version: 2
} as const;

// appConfig.theme ="Light";
//cannot assign to 'theme" because it is a read only property.

console.log(appConfig)

const colors = ["red", "green", "blue"] as const;

type Color = typeof colors[number]

const color1: Color = "red";
const color2: Color = "green";
const color3: Color = "blue";

console.log(color1);
console.log(color2);
console.log(color3);