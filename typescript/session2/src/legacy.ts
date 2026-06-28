interface LegacyItem { price: number; quantity: number; }
interface LegacyUser { title?: string; firstName: string; lastName: string; }
interface LegacyProduct { category: string; [key: string]: unknown; }
function calculateInvoiceTotal(items: LegacyItem[], taxRate: number): number {
  let total = 0;
  for (let i = 0; i < items.length; i++) total += items[i].price * items[i].quantity;
  return total + (total * taxRate);
}
function formatCurrency(amount: number, currencyCode: string): string {
  return currencyCode + amount.toFixed(2);
}
function getUserDisplayName(user: LegacyUser): string {
  return user.title ? `${user.title} ${user.firstName} ${user.lastName}` : `${user.firstName} ${user.lastName}`;
}
function findProductByCategory(products: LegacyProduct[], category: string): LegacyProduct[] {
  return products.filter(p => p.category === category);
}