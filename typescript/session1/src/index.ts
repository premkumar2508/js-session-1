console.log("TypeScript is running");
const age: number = 30; //We use tsc --noEmit to run the type checker and catch errors without actually generating the output .js files. It is purely for validation.
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));