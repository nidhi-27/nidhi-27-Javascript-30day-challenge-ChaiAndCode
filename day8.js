// ACTIVITY 1: TEMPLATE LITERALS

// Task1. Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = 'Nidhi'
let age = 26
let tempLiteral = `Hi my name is ${name} and age is ${age}.`
console.log(tempLiteral)

// Task2. Create a multi-line string using template literals and log it to the console.
let multiSentence = `Hi am Nidhi, and  am trying to use template lieral.
This is a multiline statement.
Third line.`
console.log(multiSentence)

// ACTIVITY 2: DESTRUCTURING

// Task3. Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
// Example array of numbers
const numbers = [10, 20, 30, 40, 50];

// Destructuring the first and second elements
const [first, second] = numbers;

// Logging the values to the console
console.log('First element:', first);   // Output: First element: 10
console.log('Second element:', second); // Output: Second element: 20


// Task4. Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {title:'BAWSE', author:'Lily Singh', year:'2019'}
const {title, author} = book

console.log(book)
console.log('Title: ', title )
console.log('Author: ', author )

// ACTIVITY 3: SPREAD AND REST OPERATORS

// Task5. Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const addNumbers = [...numbers,1,2,3,4]
console.log(addNumbers)

// Task6. Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumRest(...args) // this is a rest op, as it will take elements and gather them to an array
{
    console.log(args)
    let sum = 0
    args.forEach(element => {
        
        sum += element
    });

    return sum
}
var arr = [1,2,3,4,5,6,7,8,9] 
console.log(sumRest(...arr)) // this we are using spread
console.log(...arr)
console.log(sumRest(1,1,2,4,2))

// ACTIVITY 4: DEFAULT PARAMETER

// Task7. Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function defParam(a, b = 1){
    let prod = a * b
    return prod
}

console.log(defParam(2,3))
console.log(defParam(5))


// ACTIVITY 5: ENHANCED OBJECT LITERALS

// Task8. Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const createPerson = (name, age) => {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
};
const person = createPerson("Nidhi", 26);
console.log(person);
person.greet();

// Task9. Create an object with computed property names based on variables and log the object to the console.
const propName = "favoriteColor";
const color = "blue";
const obj = {
    [propName]: color
};
console.log(obj);