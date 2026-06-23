function calculateDiscount(price: number, discountPercent?: number): number {
  if (discountPercent === undefined) return price;
  if (discountPercent >= 100) invalidDiscount();
  return price - (price * (discountPercent / 100));
}
function invalidDiscount(): never {
  throw new Error("Discount cannot be 100% or more.");
}
function formatUserList(users: [string, number][]): string[] {
  return users.map(user => `${user[0]} (${user[1]} years)`);
}
function findFirst(arr: string[], searchTerm: string): string | undefined {
  return arr.find(item => item === searchTerm);
}