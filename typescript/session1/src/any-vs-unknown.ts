//let dangerousValue: any = "hello";
//dangerousValue = 42;
//dangerousValue = { name: "Alice" };
//console.log(dangerousValue.foo.bar); // no TS error — but will crash at runtime
let safeValue: unknown = "hello";
//console.log(safeValue.toUpperCase()); // ERROR: 'safeValue' is of type 'unknown'.
if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase()); 
} //EXPLANATION: "Type narrowing" is the process of using standard JavaScript logic (like 'if (typeof x === "string")') to definitively prove to the TypeScript compiler what type a variable currently holds inside a specific block of code.