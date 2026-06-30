interface Product { id: string; name: string; price: number; tags: string[]; discount?: number; }
function applyDiscount(product: Product): number {
  return product.price - (product.discount ?? 0); 
  // FIX: Mathematical operations with undefined result in NaN.
}
function getTagSummary(product: Product): string {
  return product.tags.join(", ").toUpperCase(); 
  // FIX: Typo in 'toUpperCase'. Calling a non-existent function crashes the thread.
}
function createProduct(name: string, price: number): Product {
  return { id: Math.random().toString(), name, price, tags: [] };
  // FIX: Missing types on parameters, and missing the required 'tags' array in the return object.
}
function findCheapest(products: Product[]): Product | undefined {
  if (products.length === 0) return undefined;
  const sorted = [...products].sort((a, b) => a.price - b.price);
  return sorted[0];
  // FIX: Added return type `| undefined` and spread operator to prevent mutating the original array.
}
function printProduct(product: Product): void {
  console.log(`${product.name} costs ${product.price}`);
  // FIX: Removed `return product.name;` because the signature dictates a `void` return.
}