type User = { fullName: string };
function getSafeUserLabel(user: User): string {
  return user.fullNme.toUpperCase();
}
// EXPLANATION: In .js, the bug was only discovered when the program was executed and it crashed. In .ts, the compiler caught the typo immediately while typing, preventing the broken code from ever being shipped.