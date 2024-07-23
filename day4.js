// ACTIVITY 1: FOR LOOP

// Task1. WAP to print numbers from 1-10 using for loop

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Task2. WAP tp print the multiplication table of 5 using for loop
let n = 5
function table(num) {
    for (let i = 1; i <= 10; i++) {
        prod = num * i
        console.log(num, 'x', i, '=', prod)
    }
}

table(n)

// ACTIVITY 2: WHILE LOOP

// Task3. WAP to calculate sum of numbers from 1-10 
let sum = 0
let num = 1
while (num <= 10) {
    sum += num
    num++
}

console.log("Sum for 1-10 is: ", sum)

// Task4. WAP to print numbers from 10-1
let x = 10
while (x >= 1) {
    console.log(x)
    x--
}

// ACTIVITY 3: DO....WHILE LOOP

// Task5. WAP to print numbers from 1-5
let z = 1
do {
    console.log(z)
    z++
} while (z <= 5)

// Task6. WAP to calculate factorial of a number
let factNum = 5
let fact = 1
let i = 1
do {
    fact = fact * i
    i++
}
while (i <= factNum)
console.log(fact)

// ACTIVITY 4: NESTED  FOR LOOP

// Task7. Pattern printing
// for(let i = 1; i <= 5; i++)
// {
//     let str = "* ";
//     console.log(str.repeat(i));   
// }
let a = ""
let star = 5
for (let i = 1; i <= star; i++) {
    console.log(a += '*')
}

// ACTIVITY 5: Loop Control statements

// Task8. Print numbers from 1-10 but skip 5 using continue statement
for (let i = 1; i <= 10; i++) {

    if (i == 5) {
        continue;
    }
    console.log(i)
}

// Task9. Print numbers from 1-10 but stop on 7 using break statement
for (let i = 1; i <= 10; i++) {

    if (i == 7) {
        break;
    }
    console.log(i)
}