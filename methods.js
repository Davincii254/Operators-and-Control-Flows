/**
 * STRING METHODS
 * ------------------------------------
 */

// 1. .toLowerCase() - Converts the entire string to lowercase letters.
const greeting = "HELLO WORLD";
const quietGreeting = greeting.toLowerCase();
console.log("toLowerCase():", quietGreeting); // "hello world"


// 2. .includes() - Checks if a string contains a specific sequence of characters.
// Returns true or false.
const sentence = "The quick brown fox jumps over the lazy dog.";
const hasFox = sentence.includes("fox");
const hasCat = sentence.includes("cat");
console.log("includes('fox'):", hasFox); // true
console.log("includes('cat'):", hasCat); // false


// 3. .slice(start, end) - Extracts a part of a string and returns it as a new string.
// The 'end' index is not included in the result.
const phrase = "JavaScript is fun!";
const justFun = phrase.slice(14, 17); 
console.log("slice(14, 17):", justFun); // "fun"


/**
 * NUMBER METHODS
 * ------------------------------------
 */

// 1. .toFixed(digits) - Formats a number using fixed-point notation (decimal places).
// Note: This returns a STRING representation of the number.
const price = 19.99512;
const formattedPrice = price.toFixed(2);
console.log("toFixed(2):", formattedPrice); // "20.00" (It rounds the value)


// 2. .toString() - Converts a number into a string.
const count = 150;
const countAsString = count.toString();
console.log("toString() type:", typeof countAsString); // "string"
console.log("toString() value:", countAsString);      // "150"