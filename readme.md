# 🚀 Programming Hero — Module 22 | Advanced TypeScript

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Programming Hero](https://img.shields.io/badge/Programming%20Hero-Module%2022-blue?style=for-the-badge)
![Tasks](https://img.shields.io/badge/Tasks-28-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Advanced-red?style=for-the-badge)

**Generics · Utility Types · Discriminated Unions · Type Narrowing · Advanced TypeScript Patterns**

</div>

---

## 📌 About This Repository

This repository contains my **Programming Hero — Module 22: Advanced TypeScript** practice tasks — the direct continuation of Module 21's fundamentals.

Module 21 was about *learning the shape of data*. This module is about *controlling it*.

Here I moved past basic annotations into the parts of TypeScript that make it genuinely powerful: **generics that adapt to any type, utility types that reshape existing types instead of duplicating them, discriminated unions that turn runtime bugs into compile-time errors, and type predicates that make custom type-checks reusable.**

These are the exact patterns used in real production TypeScript codebases — React component props, API response typing, and reusable utility libraries all lean on this module's concepts.

---

## 🗺️ Module 22 in One Diagram

```text
                         ADVANCED TYPESCRIPT
                                 │
        ┌────────────────┬──────┴──────┬────────────────┐
        │                │             │                │
   TYPE ASSERTION    GENERICS     UTILITY TYPES     SAFETY PATTERNS
        │                │             │                │
   ├─ as               ├─ Functions   ├─ Partial       ├─ Type Predicates
   ├─ as const          ├─ Interfaces  ├─ Pick / Omit   ├─ Discriminated Unions
   └─ Double Assert     ├─ Constraints ├─ Required       ├─ Type Narrowing
                        └─ keyof       ├─ Readonly       └─ Optional Chaining
                                       └─ Record             + Nullish Coalescing
```

---

## 🎯 Learning Objectives

Through this module, I focused on:

- Asserting types manually and safely with `as` and `as const`
- Understanding when a **double assertion** is genuinely necessary (and when it's a red flag)
- Writing **generic functions, interfaces, and constrained generics** that adapt to any data shape
- Narrowing `unknown` values before using them, instead of forcing a type
- Applying TypeScript's built-in **utility types** — `Partial`, `Pick`, `Omit`, `Required`, `Readonly`, `Record`
- Modeling fixed value sets with **string enums** and **literal unions**
- Writing **discriminated unions** and custom **type predicates** for safe conditional branching
- Deriving types directly from existing code using `keyof` and `typeof`
- Simplifying deeply nested optional access with `?.` and `??`
- Thinking about types as *live documentation* that the compiler enforces

---

## 📚 Tasks Covered

| # | Task | Main Concept | Category |
|---|------|--------------|----------|
| 01 | Unknown Type Assertion | `as` Assertion | Type Assertion |
| 02 | Union Type Double Assertion | Double Assertion | Type Assertion |
| 03 | Interface Optional Property | Optional Property | Interfaces |
| 04 | Literal Union Type | Literal Union | Unions & Literals |
| 05 | Generic Function | Generics | Generics |
| 06 | Generic Interface | Generics | Generics |
| 07 | Generic Constraint | Generic Constraints | Generics |
| 08 | String Enum | Enum | Unions & Literals |
| 09 | As Const | `as const` | Type Assertion |
| 10 | Partial, Pick, Omit | Utility Types | Utility Types |
| 11 | Readonly Property | `readonly` | Utility Types |
| 12 | Required Utility Type | `Required<T>` | Utility Types |
| 13 | Readonly Utility Type | `Readonly<T>` | Utility Types |
| 14 | Record Utility Type | `Record<K, V>` | Utility Types |
| 15 | Generic Array Function | Generics + Arrays | Generics |
| 16 | Generic Object Function | Generics + Objects | Generics |
| 17 | Generic Keyof Constraint | `keyof` + Generics | Generics |
| 18 | Generic API Response | Generics (Real-World) | Generics |
| 19 | Union Type Function | Union Types | Unions & Literals |
| 20 | Unknown Type Narrowing | Type Narrowing | Safety Patterns |
| 21 | Type Predicate | Type Predicates (`is`) | Safety Patterns |
| 22 | Discriminated Union | Discriminated Unions | Safety Patterns |
| 23 | Function Type Alias | Function Types | Interfaces |
| 24 | Optional Chaining | `?.` | Safety Patterns |
| 25 | Nullish Coalescing | `??` | Safety Patterns |
| 26 | Keyof Type | `keyof` | Derived Types |
| 27 | Typeof Type | `typeof` | Derived Types |
| 28 | Array to Union Type | Mapped/Derived Types | Derived Types |

---

## 🧩 Deep Dive: Key Concepts

### 1. Type Assertions — `as`, `as const`, Double Assertion

Practiced telling TypeScript "trust me, I know the type" — carefully, and only when narrowing isn't possible.

```typescript
const input = document.getElementById("email") as HTMLInputElement;

const config = {
  method: "GET",
} as const; // "GET" becomes a literal type, not just `string`

const value = someValue as unknown as SpecificType; // double assertion — last resort
```

> 💡 **Rule of thumb learned:** if I'm reaching for a double assertion, it usually means the type design needs rethinking — not that I need a bigger hammer.

---

### 2. Generics — Write Once, Work With Any Type

Practiced writing functions and interfaces that stay type-safe no matter what type flows through them.

```typescript
function identity<T>(value: T): T {
  return value;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
}

function getFirstKey<T extends object>(obj: T): keyof T {
  return Object.keys(obj)[0] as keyof T;
}
```

```text
Without Generics                  With Generics
─────────────────                 ──────────────
getStringFirst(arr: string[])     getFirst<T>(arr: T[]): T
getNumberFirst(arr: number[])     ← one function, any type
getUserFirst(arr: User[])
   (3 duplicated functions)          (1 reusable function)
```

---

### 3. Utility Types — Reshape, Don't Rewrite

Practiced transforming existing types instead of manually rewriting them.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser  = Partial<User>;              // all props optional
type UserPreview  = Pick<User, "name" | "email">; // only these two
type UserNoEmail  = Omit<User, "email">;          // everything except email
type StrictUser   = Required<User>;               // all props mandatory
type FrozenUser   = Readonly<User>;                // can't be reassigned
type UserMap      = Record<number, User>;          // { [id: number]: User }
```

---

### 4. Discriminated Unions & Type Predicates — Compile-Time Safety

Practiced modeling "one of several possible shapes" safely, using a shared tag property.

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}

// Custom type predicate
function isCircle(shape: Shape): shape is { kind: "circle"; radius: number } {
  return shape.kind === "circle";
}
```

```text
Runtime Bug (JavaScript)          Compile-Time Error (TypeScript)
─────────────────────────         ────────────────────────────────
shape.radius on a square          ❌ caught before code ever runs
→ undefined at runtime            → fixed during development
→ crashes in production           → never reaches production
```

---

### 5. `keyof` & `typeof` — Deriving Types From Code

Practiced generating types automatically from existing values, so types stay in sync with real code.

```typescript
const roles = ["admin", "editor", "viewer"] as const;
type Role = typeof roles[number]; // "admin" | "editor" | "viewer"

interface Product {
  id: number;
  price: number;
}
type ProductKey = keyof Product; // "id" | "price"
```

---

### 6. Optional Chaining & Nullish Coalescing

Practiced safely accessing deeply nested, possibly-missing data.

```typescript
const city = user?.address?.city ?? "Unknown City";
```

```text
user             exists?  → keep going
  .address       exists?  → keep going
    .city        exists?  → return it
                 missing? → fall back to "Unknown City"
```

---

## 🧠 Problem-Solving Workflow

For each task, I followed a structured approach:

```text
Understand the Data Shape
        ↓
Ask: Is this fixed, generic, or a union of possibilities?
        ↓
Pick the Right Tool
   ├─ Fixed shape        → interface / type
   ├─ Reusable for any T → generic
   ├─ One of several     → discriminated union
   └─ Reshaping existing → utility type
        ↓
Write the Type Definition
        ↓
Apply It to Variables / Functions
        ↓
Compile with tsc and Read the Errors Carefully
        ↓
Fix Type Errors — Don't Just Silence Them with `any`
        ↓
Test the Final Output
```

---

## 📂 Repository Structure

```text
programming-hero-module-22/
│
├── src/
│   ├── 01-unknown-type-assertion.ts
│   ├── 02-union-type-double-assertion.ts
│   ├── 03-interface-optional-property.ts
│   ├── 04-literal-union-type.ts
│   ├── 05-generic-function.ts
│   ├── 06-generic-interface.ts
│   ├── 07-generic-constraint.ts
│   ├── 08-string-enum.ts
│   ├── 09-as-const.ts
│   ├── 10-partial-pick-omit.ts
│   ├── 11-readonly-property.ts
│   ├── 12-required-utility-type.ts
│   ├── 13-readonly-utility-type.ts
│   ├── 14-record-utility-type.ts
│   ├── 15-generic-array-function.ts
│   ├── 16-generic-object-function.ts
│   ├── 17-generic-keyof-constraint.ts
│   ├── 18-generic-api-response.ts
│   ├── 19-union-type-function.ts
│   ├── 20-unknown-type-narrowing.ts
│   ├── 21-type-predicate.ts
│   ├── 22-discriminated-union.ts
│   ├── 23-function-type-alias.ts
│   ├── 24-optional-chaining.ts
│   ├── 25-nullish-coalescing.ts
│   ├── 26-keyof-type.ts
│   ├── 27-typeof-type.ts
│   └── 28-array-to-union-type.ts
│
├── dist/
│   └── (Compiled JavaScript output)
│
├── tsconfig.json
└── readme.md
```

---

## 🛠️ Technologies Used

- **TypeScript**
- **Node.js**
- **VS Code**
- **Git**
- **GitHub**

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/aminulislam424842/programming-hero-module-22.git
```

### 2. Navigate to the repository

```bash
cd programming-hero-module-22
```

### 3. Install TypeScript (if not already installed)

```bash
npm install -g typescript
```

### 4. Compile TypeScript files

```bash
tsc
```

### 5. Run the compiled JavaScript

```bash
node dist/01-unknown-type-assertion.js
```

---

## 📈 Learning Progress

```text
Programming Hero — Module 22
│
├── Type Assertions (as / as const)      ✅
├── Generic Functions                    ✅
├── Generic Interfaces                   ✅
├── Generic Constraints                  ✅
├── String Enums                         ✅
├── Utility Types (Partial/Pick/Omit)    ✅
├── Readonly & Required                  ✅
├── Record Utility Type                  ✅
├── Union & Literal Types                ✅
├── Type Narrowing                       ✅
├── Type Predicates                      ✅
├── Discriminated Unions                 ✅
├── Function Type Aliases                ✅
├── Optional Chaining                    ✅
├── Nullish Coalescing                   ✅
├── keyof / typeof Derived Types         ✅
└── Problem Solving                      ✅
```

---

## 💡 Key Learnings

This module changed how I think about TypeScript — from "adding types so the compiler is happy" to "designing types so bugs can't exist."

### I learned how to:

- Reach for generics instead of duplicating near-identical functions
- Reshape existing types with utility types instead of rewriting them
- Model "one of several possible shapes" safely with discriminated unions
- Write custom type predicates that make narrowing reusable
- Derive types directly from real values using `keyof` and `typeof`
- Treat `as` and double assertions as a last resort, not a first instinct
- Read TypeScript compiler errors as design feedback, not obstacles
- Handle deeply nested optional data cleanly with `?.` and `??`
- Recognize when `unknown` needs narrowing versus when `any` is being used to hide a problem

---

## 🧪 Testing Approach

I practiced testing solutions against different scenarios:

```text
Correct Type Input
     ↓
Missing / Optional Property
     ↓
Wrong Type (caught by the compiler, not at runtime)
     ↓
Union — Every Possible Branch
     ↓
Generic — Multiple Different Type Arguments
     ↓
Final Solution
```

For generics especially, I made sure each function was tested with **at least two different types** to confirm it wasn't secretly tied to one shape.

---

## 🚀 What's Next?

After completing this module, I'll continue applying these patterns in real projects.

### Next Learning Goals

- TypeScript with React (typed props, state, and hooks)
- Advanced Generics (conditional & mapped types)
- Zod / Runtime Validation alongside static types
- TypeScript in Node.js / Express APIs
- Real-World Full-Stack TypeScript Projects

---

## 📌 Repository Goal

The goal of this repository is to move beyond "TypeScript that compiles" toward **TypeScript that actively prevents bugs** — using generics, utility types, and safety patterns the way they're used in real production codebases.

Each task here is a small proof that a type system, used well, is a design tool — not just a formality.

---

## 👨‍💻 Author

### Md. Aminul Islam Mahi

**Future Full Stack Developer**

---

<div align="center">

### ⭐ Thanks for visiting this repository!

**Built with ❤️ while learning with Programming Hero**

</div>