// Error 1: Property does not exist.
// Cause: Trying to read `obj.username` when the interface only defined `obj.name`.
// Fix: Use the correct property name or add it to the interface.

// Error 2: Argument type mismatch.
// Cause: Passing a string like "5" into a function that requires a number.
// Fix: Convert the string using `Number()` or `parseInt()`.

// Error 3: Implicit any.
// Cause: Writing `function process(data) {}` without declaring what type `data` is.
// Fix: Annotate the parameter: `function process(data: string) {}`

// Error 4: Object is possibly undefined.
// Cause: Attempting to access a property on an object that the compiler knows might not exist.
// Fix: Wrap it in an if statement: `if (obj !== undefined) { ... }`

// Error 5: Type mismatch with undefined.
// Cause: Trying to assign a variable that might be undefined to a strict string variable.
// Fix: Provide a fallback value using `?? "default string"`.