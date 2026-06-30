function getFirstWord(sentence: string | null): string {
  if (sentence === null) return ""; // FIX: Prevents calling .split() on null
  return sentence.split(" ")[0];
}
function getUserAge(user: { name: string; age?: number }): string {
  if (user.age === undefined) return `${user.name} age unknown`; // FIX: Prevents .toString() on undefined
  return `${user.name} is ${user.age.toString()} years old`;
}
const config = { database: { host: "localhost", port: 5432 } };
function getDbPort(): number {
  return config.database.port; 
}
const users = ["Alice", "Bob", "Charlie"];
function findUser(name: string): string {
  const found = users.find(u => u === name);
  if (found === undefined) return "NOT FOUND"; // FIX: Array.find returns T | undefined
  return found.toUpperCase();
}