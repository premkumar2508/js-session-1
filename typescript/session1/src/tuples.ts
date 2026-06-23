const userRecord: [string, number, boolean] = ["Alice", 30, true];
console.log(userRecord[0].toUpperCase()); 
console.log(userRecord[1].toFixed(2));    
console.log(userRecord[2].valueOf());
const wrongOrder: [string, number, boolean] = [30, "Alice", true]; // ERROR: Type 'number' is not assignable to type 'string'.
const coordinates: [number, number] = [19.076, 72.877];
console.log(coordinates[1]);
// EXPLANATION: If you try to assign a 4th element to a tuple defined with 3 positions, TypeScript throws an error: "Type '[string, number, boolean, string]' is not assignable to type '[string, number, boolean]'. Source has 4 element(s) but target allows only 3.
