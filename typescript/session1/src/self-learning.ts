// 1. Union Types
let id: string | number;
id = 101;
id = "EMP-101";
function printId(id: string | number) {
    console.log(`Your ID is: ${id}`);
}
function makeRequest(url: string, method: "GET" | "POST") {
    console.log(`Making a ${method} request to ${url}`);
}
makeRequest("/api/data", "GET");
const immutableList: readonly number[] = [1, 2, 3];
// immutableList.push(4); // ERROR: Property 'push' does not exist on type 'readonly number[]'.

// 4. strictNullChecks
let maybeString: string | null = "Hello";
// console.log(maybeString.toUpperCase()); // ERROR: 'maybeString' is possibly 'null'.
if (maybeString !== null) {
    console.log(maybeString.toUpperCase());
}