type UserId = string;
type ProductId = string;
type Timestamp = number;
type Status = "active" | "inactive" | "pending";
type Direction = "north" | "south" | "east" | "west";
function getUserById(id: UserId): void {}
function updateStatus(id: UserId, status: Status): void {}
function move(direction: Direction, steps: number): void {}
// EXPLORE: Passing a plain string to `getUserById("123")` works perfectly.
// TypeScript is structurally typed. `UserId` is just a cosmetic label for `string`. It provides human readability, but the compiler just sees a string.