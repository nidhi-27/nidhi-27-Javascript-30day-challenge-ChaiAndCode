// ACTIVITY 1: FUNCTION DECLARATION

// Task1. function to check even or odd number
function EvenOdd(num) {
    num % 2 == 0 ? console.log('Even') : console.log('Odd')
}

EvenOdd(49)

// Task2. fuction to calculate square of a number
function SquareNum(num) {
    console.log(num * num)
}
SquareNum(2)

// ACTIVITY 2: FUNCTION EXPRESSION

// Task3. maximum of two numbers
const MaxNum = function (a, b) {
    a > b ? console.log(a, 'is largest') : console.log(b, 'is largest')
}
MaxNum(8, 6)

// Task4. concatinate two strings
const ConcatStr = function (str1, str2) {
    console.log(str1 + ' ' + str2)
}
ConcatStr("Nidhi", "Sawant")

// ACTIVITY 3: ARROW FUNCTION

// Task5. calculate sum 
const SumOfTwo = (a, b) => console.log('Sum is ' + a + b)
SumOfTwo(6, 8)
SumOfTwo(2, 2)

// Task6. check if string contains specific character and return true or false
const CheckString = (c, str) => str.includes(c) ? console.log(true) : console.log(false)
CheckString('a', 'Amskd')
CheckString('A', 'Amskd')


// ACTIVITY 4: FUNCTION PARAMETERS AND DEFAULT VALUES

// Task7. function takes two parameters and returns product, provide default value for the second parameter
const product = (a, b = 1) => console.log('Product is '+ a * b)
product(5,2)
product(8,5)
product(100)

// Task8. input name and age and output greeting, provide default age 
const greeting = (name, age=18) => console.log("Good Day "+ name + " you are "+age+" years old.") 
greeting('Nidhi', 26)
greeting('Trisha')

// ACTIVITY 5: HIGHER-ORDER FUNCTION

// Task9. write a higher order function that takes a function and a number, that call the function that many times.

function callFunctionNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func(); // Call the function 'func' n times
    }
}

// Example usage:
function sayHello() {
    console.log("Hello!");
}

callFunctionNTimes(sayHello, 5);

const composeFunctions = (fn1, fn2, value) => fn2(fn1(value));


const addFive = (num) => num + 5;
const square = (num) => num * num;

let result = composeFunctions(addFive, square, 3);
console.log(result); // Output: 64 (since (3 + 5)^2 = 64)

result = composeFunctions(square, addFive, 3);
console.log(result); // Output: 14 (since 3^2 + 5 = 14)
