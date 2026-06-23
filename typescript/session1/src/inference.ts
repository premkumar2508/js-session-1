let city = "Mumbai"; 
let year = 2024;     
let country: string;
let population: number;
country = "India";
population = 1400000000;
let mystery;
mystery = "hello";
mystery = 42; 
// EXPLANATION: If you don't annotate a variable and don't give it an initial value, ts assigns it the any type. This completely disables type checking for that variable, which is why it allows both strings and numbers.
