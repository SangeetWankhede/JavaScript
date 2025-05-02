
// This will give live updates, in console.log format

let name = "Sangeet Welcome to JavaScript";
console.log(name);
console.log(name.length);
console.log(name[name.length-1]);

const pi = 3.14;
console.log(pi);

let value1  = 485;
console.log(value1); 

var message = "Learning of JS";
console.log(message);
console.log(message.length);

// This will remove extra spaces from the start and end of the string
let str = " Welcome_to_of_basic_JavaScript ";
console.log(str);
console.log(str.length);
console.log(str.trim());
// let cleandeStr = str.replace(/\s+/g, " ");
// console.log(cleandeStr);
// console.log(cleandeStr.length);
// console.log(trimmedStr);
// console.log(trimmedStr.length);

let str1 = "Sangeet";
let str2 = "Wankhede";
let fullName = str1 + " " + str2

console.log(fullName);

// String concatenation

let string1 = "10";
let string2 = "11"; 

let string3 = string1 + string2;
console.log(string3);
 let string4 = +string1 + +string2;
 console.log(string4);
 console.log(typeof string4);

//  Template string

let myName = "Sangeet";
let age = 25;
let aboutMe = `My name is ${myName} and my age is ${age}`;
console.log(aboutMe);

// Undefiend string

let undefString;
console.log(typeof undefString);

undefString = "undefString";
console.log(typeof undefString);

// == VS ===

let a = 10;
let b = "10";

console.log(a == b); // true
console.log(a === b); // false

// != vs !==

console.log(a!= b); // false
console.log(a!== b); // true

// Null and undefined

let nullVar = null;
console.log(nullVar); //null undefined give object as argument

let undefinedVar;
console.log(undefinedVar);

//  if esle condition

let voterAge = 25;
if (voterAge>=18){
    console.log("You are eligible to vote");
}else{ console.log("You are not eligible"); }

let number = 14;
if (number%2===0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

//  Ternary operator

let teen = 5;
let drink = teen >= 8 ? "Coffee" : "Milk"; //True give coffwe and false give milk.
console.log(drink);

// Nested if else operator(------------------------------)

// let winningNumber = 25;
// let userGuesse = +prompt("Guess a number");

// if(userGuesse === winningNumber){
//     console.log("Congratulations! You guessed the correct number");
// }else{
//     if(userGuesse > winningNumber){
//         console.log("Too high, try again!");
//     }else{
//         console.log("Too low, try again!");
//     }
// }

// let grade = 85;
// if(grade>=90){
//     console.log("Grade: A");
// }else if(grade>=80){
//     console.log("Grade: B");
// }else if(grade>=70){
//     console.log("Grade: C");
// }else if(grade>=60){
//     console.log("Grade: D");
// }else{
//     console.log("Grade: F");
// }

// Switch statement

let gymDay = 3;
switch(gymDay){
    case 1:
        console.log("BackDay");
        break;
        case 2:
        console.log("ChestDay");
        break;
        case 3:
        console.log("TricepDay");
        break;
        case 4:
        console.log("ShoulderDay");
        break;
        case 5:
        console.log("BicepsDay");
        break;
        case 6:
        console.log("LegDay");
        break;
        case 7:
        console.log("RestDay");
        break;
        default:
        console.log("Invalid day");
     };


// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }