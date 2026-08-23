function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}
console.log(getFirstElement([100, 200, 300]))
console.log(getFirstElement(["React", "Next.js", "Node.js"]))