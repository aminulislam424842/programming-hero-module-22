const technologies = ["React", "Next.js", "Node.js", "MongoDB"] as const;

type Technology = typeof technologies[number]

function showTechnology (technology:Technology):string {
  return technology
}

console.log(showTechnology("React"))
console.log(showTechnology("Next.js"))
console.log(showTechnology("Node.js"))
console.log(showTechnology("MongoDB"))