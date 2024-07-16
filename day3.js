// ACTIVITY 1: If-Else statement

// Task 1 WAP to check if a number is positive, negative or zero
number = 38
if (number > 0)
    console.log("Positive")
else if (number == 0)
    console.log("Zero")
else
    console.log("Negative")

// Task 2 WAP to check if a person is elegible to vote
age = 22
if (age >= 18)
    console.log('Eligible to vote')
else
    console.log('Not eligible to vote')

// ACTIVITY 2: Nested if-else statement
// Task 3
num1 = 99
num2 = 88
num3 = 100

if (num1 > num2)
    if (num1 > num3)
        console.log(num1, 'is greatest')
    else
        console.log(num3, 'is greatest')
else
    console.log(num2, 'is greatest')

// other way

let x = 0;
let y = 97;
let z = 21;
if (x > y && x > z) {
    console.log("x is greater");
} else if (y > z && y > x) {
    console.log("y is greater");
} else {
    console.log("z is greater");
}

// ACTIVITY 3: Switch case
// Task 4
num = 4
switch (num) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        console.log("Score is out of range");
}

console.log('Today is', day)

// Task 5
score = 95
switch (true) {
    case score >= 85:
        grade = 'A';
        break;
    case score < 85 && score >= 75:
        grade = 'B';
        break;
    case score < 75 && score >= 65:
        grade = 'C';
        break;
    case score < 65 && score >= 55:
        grade = 'D';
        break;
    case score < 55 && score >= 45:
        grade = 'E';
        break;
    case score < 45:
        grade = 'F';
        break;
    default:
        console.log("Score is out of range");
}
console.log('Grade is', grade)

// ACTIVITY 4: Ternary Operator
// Task 6 even or odd
number % 2 == 0 ? console.log('Even') : console.log('Odd')


// ACTIVITY 5: Combining conditions
year = 2001
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    console.log('LEAP YEAR!')
else
    console.log('NOT A LEAP YEAR!')