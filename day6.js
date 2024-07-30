// ACTIVITY 1: ARRAY CREATION AND ACCESS

// Task1. Create an array of numbers from 1-5 and console.
let arr = [1, 2, 3, 4, 5]
console.log(arr)

// Task2. Access first and last element of the array
let firstEle = arr[0]
let lastEle = arr[arr.length - 1]
console.log('First Element: ' + firstEle)
console.log('Last Element: ' + lastEle)

// ACTIVITY 2: ARRAY METHODS(BASICS)

// Task3. Use push to add new number to the end
arr.push(6)
console.log(arr)

// Task4. Use pop to remove number ti the end
arr.pop()
console.log(arr)

// Task5. Use shift to remove first element
arr.shift()
console.log(arr)

// Task6. Use unshift to remove first element
arr.unshift(8)
console.log(arr)


// ACTIVITY 3: ARRAY METHODS(INTERMEDIATE)

// Task7. map method to create new array where each number is doubled and log the new array.
const arr1 = [1, 2, 3, 4, 5]
const newArr = []
arr1.map((element) => {
    newArr.push(element * 2)
});
console.log(newArr)

// Task8. use filter method to get only even elements
function evenElement(element) {
    return element % 2 == 0
}
const evenArray = arr1.filter(evenElement)
console.log(evenArray)

// Task9. use reduce method to calculate sum of all numbers in the array
const add = arr1.reduce((prevValue, current) => {
    prevValue += current;
    return prevValue;
});

console.log(add);


// ACTIVITY 4: ARRAY ITERATION

// Task10. use for loop and log each value to console
const arr2 = [2, 6, 8, 9, 7, 3, 0, 56]
for (let i = 0; i <= arr2.length-1; i++) {
    console.log(arr2[i])
}

// Task11. use forEach loop and log each value to console
arr2.forEach(element => {
    console.log(element)
});

// ACTIVITY 5: MULTIDIMENTIONAL ARRAY

// Task12. Create 2d array and log it to the console
let arr3 = [[1,2,3,6],[7,4,5,8]]
console.log(arr3)

// Task13. Access and log a speific element => 3rd element of 2nd array i.e 5
console.log(arr3[1][2])

