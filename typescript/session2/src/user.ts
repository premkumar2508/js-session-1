interface User {
  readonly id: string;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "editor" | "viewer";
}
const u1: User = { id: "1", name: "Alice", email: "a@a.com", role: "admin" };
const u2: User = { id: "2", name: "Bob", email: "b@b.com", role: "editor" };
const u3: User = { id: "3", name: "Charlie", email: "c@c.com", role: "viewer" };
// u1.role = "superuser"; // ERROR: Type '"superuser"' is not assignable to type '"admin" | "editor" | "viewer"'.
// u1.id = "99"; // ERROR: Cannot assign to 'id' because it is a read-only property.
// EXPLANATION: `readonly` mathematically locks the property at compile time. Trusting developers not to change an ID is a catastrophic security vulnerability in a large codebase. The compiler makes the mistake physically impossible.