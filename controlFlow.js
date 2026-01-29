// If else statements
let grade = 79.5;

if (grade >= 90) {
    console.log("You have an A")
} else if(grade >= 80 ){
    console.log("Your grade is B")
} else if(grade >= 70 ){
    console.log("Your grade is c")
} else if(grade >= 60 ){
    console.log("Your grade is d")
} else if(grade >= 50 ){
    console.log("Your grade is f")
}else {
    console.log("Enda mtaa")
}

let number = 0;

if (number > 0) {
    console.log("Its a positive number")
} else if (number < 0){
    console.log("The number is negative")
} else  {
    console.log("The number is zero")
}

// Switch case
let day = "Sunday";
let message; 

switch (day){
    case "Sartuday":
    case "Sunday":
        message = "Its the weekend";
        break;
        case "Monday":
            message = "It is the start of the week";
            break;
            default:
                message = "Its a regular day"
}

console.log(message)

let fruits = ["Apple", "Banana", "Citrus", "Mango", "Pineapple"]; 

for (let i = 3; i < fruits.length; i++) {
    console.log(`Fruit at index ${i} is: ${fruits[i]}`)
}