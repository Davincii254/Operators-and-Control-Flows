// Assignment operators
let x = 10;

x += 5;
x -= 3;
x *= 5;

console.log(x)

// Arithmetic operators
let sum = 10  + 5;

let diff = 10 - 4;

// Comparison operatos
let isEqual = (5 === 8);
console.log(isEqual)

let isNotEqual = (5 !== 87);
console.log(isNotEqual)

let isGreater = (10 >= 9);
console.log(isGreater)


// Logical Operators
// AND - It will return true if only both conditions are true
// OR - it will return true if o ne of he condition is true
let isSunny = false;
let isWarm = false; 

if (isSunny || isWarm) {
    console.log("We can go swimming")
} else {
    console.log("No swimming today!")
}

// NOT
if (!isWarm) {
    console.log("You should probably carry your jacket")
}
console.log(!isWarm)


let canDrive = false;
let hasLicence = true;

if (canDrive || hasLicence){
    console.log("You can drive the vehicle")
} else {
    console.log("You are not allowed to drive")
}

if (!hasLicence) {
    console.log("Can drive")
}

console.log(!hasLicence)