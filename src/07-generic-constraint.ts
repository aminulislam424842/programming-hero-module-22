interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const result = findById(users, 1);

console.log(result);

// Error: Property 'id' is missing
// const wrong = findById([{ name: "C" }], 3);