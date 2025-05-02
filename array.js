
// // Intro to Arrays
// // :- Order collection of items is called as Array


// let fruit = ["apple", "orange","banana"];
// console.log(fruit[0]);
// fruit.push("Muskmelon","Mango");
// console.log(fruit);
// let mixed = ["number","string",1,3,3.5,]
// console.log(mixed);
// let poppedFruit = fruit.pop();
// console.log("Popped fruit is",poppedFruit);


// // Premetive and Reference


// let arr1 = [1,2,];
// let arr2 = arr1;
// arr1.push(3);
// console.log("Array 1",arr1);
// console.log("Array 2",arr2);

// // let arr3 = [1,2,3]; 
// //     let arr4 = [...arr3];
// //     arr3.push(4);
// //     console.log("Array 3",arr3);
// //     console.log("Array 4",arr4);

// // clone  of array

// let arr5 = arr1.slice().concat(4,5);
// console.log(arr5);
// let arr6 = [...arr1,"Spread"];
// console.log(arr6);


// // For loop in Array


// let fruit2 = []
// for(let i=0; i < fruit.length; i++) {
//     fruit2.push(fruit[i].toUpperCase());
// }
// console.log(fruit2);

// Use of Const to Create a New Array

const fruits = [ "Apple","Banana","Chiku","Orange"]
let fruits2 = []
let i = 0;
while(i < fruits.length){
    // console.log(fruits[i].toUpperCase());
   fruits2.push(fruits[i].toUpperCase());
    i++;
}
fruits2.push("Mango")
console.log(fruits2);

// // For OF loop

const week = []
const day = ["Sun","Mon","Tue","Wed"]

for( let Days of day ){
   week.push(Days.toUpperCase()); 
}
console.log(week);

// For IN loops
const key = "IN";
const obj = {
    name: "John",
    age: 25,
    city: "New York",
    "company name": "sedemac ltd"
}
console.log(obj.name);
console.log(["company name"]);
for(let key in obj){
    console.log(key, obj[key]);
}

// Array Destruction

// Object inside Array
// Key value data structure

const person = { name: "sarthak", age: 25, city: "Umarsara"}
// const {name, age} = person;
console.log(person);
console.log(`${key} : ${person[key]}`);



