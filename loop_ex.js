// While loop
let i = 0;
let total = 0;

while (i <= 10) {
    total = total + i;  // Add `i` instead of `1`
    i++;

    if (i == 5) {
        break;
    }
}
console.log(total);
console.log(`Current total is ${i}`);

// While loop with N of N
// formula (n*(n+1))/2;

let sum = 10;
let mean = (sum * (sum + 1)) / 2;
console.log(`Current sum of all numbers is ${mean}`);

// For loop with N of N
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For loop sum calculation
let c = 10;
let a = 0;

for (let i = 1; i <= c; i++) { // Start from 1 to include 10 in the sum
    a = a + i;
}
console.log(a);
// 