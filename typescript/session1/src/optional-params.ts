function greetUser(name: string, title?: string): string {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}
function createAccount(email: string, role: string = "user"): object {
  return { email, role };
}
// EXPLANATION: An optional parameter (?: string) means the value can be omitted, resulting in undefined. A default parameter (`= "Guest"`) ensures that if the value is omitted, it falls back to a specific value instead of `undefined`. Use defaults when the function requires a valid value to operate correctly.