const fruits = ["apple", "banana", "cherry"];
const temperatures = [22.5, 19.0, 30.1];
const flags = [true, false, true];
fruits.push(2); //Explanation: "Argument of type 'number' is not assignable to parameter of type 'string'."
temperatures.push("hot"); //Explanation: "Argument of type 'string' is not assignable to parameter of type 'number'."
const mixed: (string | number)[] = ["Alice", 1, "Bob", 2];
mixed.push(true); // No it won't work. Explanation: "Argument of type 'boolean' is not assignable to parameter of type 'string | number'."
// EXPLANATION: `string[]` and `Array<string>` are identical in functionality. They are just two different syntaxes for the exact same thing. `string[]` is generally preferred for readability.
