function logEvent(event: string): void {
  console.log(`[LOG] ${event}`);
}
const result = logEvent("user_login");
// console.log(result); // The value of result is 'undefined' in JavaScript.
function fail(message: string): never {
  throw new Error(message);
}
// function doSomething(): void {
//   return "hello"; // ERROR: Type 'string' is not assignable to type 'void'.
// }
// EXPLANATION: Another scenario for 'never' is a function containing an infinite loop (e.g., `while(true) {}`), because the function will never reach an endpoint or return a value.