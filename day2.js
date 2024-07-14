// ACTIVITY 1: Arithmetic Operations
var num1 = 56
var num2 = 68

// T1. Addition
var sum = num1 + num2
console.log('Addition is: ', sum)

// T2. Subtraction
var diff = num1 - num2
console.log('Difference is: ', diff)

// T3. Multiplication
var prod = num1 * num2
console.log('Product is: ', prod)

// T4. Division
var quot = num1 / num2
console.log('Quotient is: ', quot)

// T5. Modulo
var rem = num1 % num2
console.log('Remainder is: ', rem)

// ACTIVITY 1: Assignment Operators

// T6. Use +=
var randNum = 50
randNum += 5
console.log(randNum)

// T7. Use -=
var randNum1 = 50
randNum1 -= 5
console.log(randNum1)

// ACTIVITY 3: Comparision Operators

// T8. Use > <
if(num1 < num2 )
    console.log('Smallest', num1)
else
    console.log('Smallest', num2)

if(num2 > num1 )
    console.log('Largest', num2)
else
    console.log('Largest', num21)

// T9. Use >= <=
if(num1 >= 50)
    console.log('TRUE')
else
    console.log('FALSE')

if(num2 <= 50)
    console.log('TRUE')
else
    console.log('FALSE')

// T10. Use == ===
if(randNum == 55)
    console.log('TRUE')
else
    console.log('FALSE')

if(randNum === 55)
    console.log('TRUE')
else
    console.log('FALSE')

// ACTIVITY 4: Logical Operators

// T11. Use &&
if(num1 < num2 && randNum == 55)
    console.log('TRUE')
else
    console.log('FALSE')

// T12. Use ||
if(num1 < num2 || randNum == 50)
    console.log('TRUE')
else
    console.log('FALSE')

// T13. Use !
if(randNum != 55)
    console.log('TRUE')
else
    console.log('FALSE')

// ACTIVITY 5: Ternary Operator

let result = (50 > 40)? 'Yes' : 'No' 
console.log(result)


// Feature request
// 3.
let userInput = -5
let result1 = (userInput < 0 )? 'Negative' : 'Positive' 
console.log(result1)