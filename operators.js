/**
 * 1. ASSIGNMENT OPERATORS
 * -----------------------
 */
let x = 10;
console.log("Initial x:", x);

x += 5; // x is now 15 (Addition)
console.log("After x += 5:", x);

x -= 3; // x is now 12 (Subtraction)
console.log("After x -= 3:", x);

x *= 2; // x is now 24 (Multiplication)
console.log("After x *= 2:", x);


/**
 * 2. ARITHMETIC OPERATORS
 * -----------------------
 */
let sum = 10 + 5;        
console.log("Sum (10 + 5):", sum);

let difference = 20 - 8; 
console.log("Difference (20 - 8):", difference);

let product = 4 * 3;     
console.log("Product (4 * 3):", product);

let quotient = 100 / 4;  
console.log("Quotient (100 / 4):", quotient);

let remainder = 10 % 3;  
console.log("Remainder (10 % 3):", remainder);


/**
 * 3. COMPARISON (RELATIONAL) OPERATORS
 * ------------------------------------
 */
let isSame = (5 === 5);      
console.log("isSame (5 === 5):", isSame);

let isNotSame = (10 !== 5);   
console.log("isNotSame (10 !== 5):", isNotSame);

let isGreaterOrEqual = (20 >= 18); 
console.log("isGreaterOrEqual (20 >= 18):", isGreaterOrEqual);

let isLess = (5 < 3);        
console.log("isLess (5 < 3):", isLess);


/**
 * 4. LOGICAL OPERATORS
 * --------------------
 */
let bothTrue = (true && true);   
console.log("bothTrue (true && true):", bothTrue);

let eitherTrue = (true || false); 
console.log("eitherTrue (true || false):", eitherTrue);

let inverted = !true;             
console.log("inverted (!true):", inverted);

// Practical logic mock variables
let age = 20;
let hasTicket = true;
let canEnter = (age >= 18 && hasTicket === true);
console.log("canEnter (age 20, hasTicket true):", canEnter);

// Logical Operators Control Flow
let isSunny = false;
let isWarm = false;

console.log("--- Weather Logic ---");
// AND
if (isSunny && isWarm) {
    console.log("It is a perfect day for a swim!");
} else {
    console.log("No swimming ");
}

// OR
if (isSunny || isWarm) {
    console.log("It a good day to for a walk");
} else {
    console.log("Stay inside, weather is poor.");
}

// NOT
if (!isWarm) {
    console.log("You should probably carry a jacket");
}

console.log("Value of !isWarm:", !isWarm);


/**
 * 5. TERNARY OPERATOR
 * -------------------
 * Syntax: condition ? valueIfTrue : valueIfFalse
 */
console.log("--- Ternary Results ---");

// Example 1: Basic check
let score = 75;
let status = (score >= 50) ? "Pass" : "Fail";
console.log("Score 75 Status:", status);

// Example 2: Toggle
let isDark = true;
let mode = (isDark) ? "dark-mode" : "light-mode";
console.log("UI Mode:", mode);

// Example 3: Calculation
let isMember = false;
let discount = (isMember) ? 0.20 : 0.05;
console.log("Discount percentage:", discount);