// -------------------------------------------------
// Task 1: 🧱 Array Setup & Access
// -------------------------------------------------
// 1. Create an array called fruits with these items:
//    - "apple", "banana", "orange"

const fruits = ["apple" , "banana" , "orange"]

// 2. Print the first and last elements.

console.log(fruits[0])
console.log(fruits[fruits.length -1])

// 3. Change the second element to "mango".

fruits[1] = "mango"

// 4. Add "kiwi" to the end of the array.

fruits.push("kiwi")

// 5. Remove the first item from the array.

fruits.shift()

// 6. Print the final array and its length.

console.log(fruits)
console.log(fruits.length)



// Task 2: 🔁 Loop Through Arrays
// -------------------------------------------------
// 1. Create an array called numbers with the values: [10, 20, 30, 40, 50]

const numbers = [10, 20, 30, 40, 50]

// 2. Use a loop to print only numbers greater than 25.

for (let i = 0 ; i < numbers.length ; i++){
  if(numbers[i] > 25) console.log(numbers[i])
}


// Task 3: 🧼 Clearing & Checking
// -------------------------------------------------
// 1. Create an array of colors: ["red", "green", "blue", "yellow"]

const colors = ["red", "green", "blue", "yellow"]

// 2. Check if "green" exists in the array

let isExist;
if(colors.includes("green")) isExist = true;
else {isExist = false}
console.log(isExist)

// Another Solution "Short" 
console.log(colors.includes("green"))


// 3. Get the index of "blue" in the array

colors.indexOf("blue")
// console.log(colors.indexOf("blue"))


// 4. Remove the last two elements from the array using a method

colors.splice(colors.length -2)

// 5. Reset the array (without reassigning it i.e. arr = [] is not acceptable)

colors.length = 0

// 6. Log the final array and its length

console.log(colors)
console.log(colors.length)


// Task 4: ✂️
// -------------------------------------------------
// 1. Create an array of 6 city names

const cities = ["gaza" , "cairo" , "london" , "barcelona" , "madrid" , "tokyo"]

// 2. Use a method to get a new array of the 3 middle cities WITHOUT changing the original array

choosenCities = cities.slice((cities.length /2) -1 , (cities.length / 2) + 2 )// It's Complex But dynamic to hadle any number of array items 

// 3. Use a method to remove the middle 2 cities from the original array

cities.splice((cities.length /2 )-1 , 2 ) // It's Complex But dynamic to handle any number of array items 


// 4. Print both arrays to compare

console.log(cities)
console.log(choosenCities)



// Task 5: ✨ String Cleaning & Formatting
// -------------------------------------------------
// You are given a string:
const messyName = "  mOhAmEd  ";

// 1. Remove the extra spaces

const trimmedName =  messyName.trim()

// 2. Make all letters lowercase

const lowerCaseName = trimmedName.toLocaleLowerCase()

// 3. Capitalize the first letter only (Result: "Mohamed")

const capitalizedName = lowerCaseName[0].toUpperCase() + lowerCaseName.substring(1)

// 4. Print the final cleaned name

console.log(capitalizedName)



// Task 6: 💰 Price Formatter
// -------------------------------------------------
// You are given 3 product prices as numbers:
let price1 = 9.5;
let price2 = 25;
let price3 = 13.987;

// 1. Convert each price to a string with exactly 2 decimal places
price1 = price1.toFixed(2)
price2 = price2.toFixed(2)
price3 = price3.toFixed(2)

// 2. Add a "$" sign before each formatted price

price1 = "$" + price1
price2 = "$" + price2
price3 = "$" + price3
// 3. Print each formatted price

console.log(price1)
console.log(price2)
console.log(price3)


// Short Solution 

let price4 = 9.5;
let price5 = 25;
let price6 = 13.987;

// I renamed the variables because i already convert them to String above

let prices = [price4 , price5 , price6]
for(let price of prices) console.log(`$${price.toFixed(2)}`)

// Short Solution 



// Task 7: 🧠 Mixed Logic with Strings
// -------------------------------------------------
// 1. Create an array of strings: ["JS", " html ", "CSS ", "  React"]

const webTechs = ["JS", " html ", "CSS ", "  React"]

// 2. Loop through the array and:
//    - Trim each string (remove extra spaces)
//    - Convert all letters to uppercase
//    - Print the final cleaned version of each string

for (let webTech of webTechs){
  console.log(webTech.trim().toUpperCase())
}


// Task 8: 🔄 Sorting and Reversing
// -------------------------------------------------
// 1. Create an array of numbers: [42, 17, 8, 99, 23]
const nums = [42, 17, 8, 99, 23]
// 2. Sort the array in descending order (big to small)

const sortedArray = []

nums.sort()

  for (let num of nums ){
    for (let i of nums){
      if (i >= num && !(sortedArray.includes(i))){
        sortedArray.unshift(i)
      }else if (i < num && !(sortedArray.includes(i))){
        sortedArray.push(i)
      }
    }
    }


// 3. Print the sorted array
console.log(sortedArray)

// 4. Reverse the array
sortedArray.reverse()

// 5. Print the reversed array
console.log(sortedArray)


// Task 9: Min & Max Logic
// // -------------------------------------------------
// // Create a new array of 5 numbers. Without using built-in sort or Math.min/Math.max, write logic to find:
// // - The smallest number
// // - The largest number

// const numbers = [ 300, -4 , 60 , 1 ,  10 ]

// let minNumber = numbers[0] ;
// let maxNumber = numbers[0];

// for (let number of numbers){

//   for(let maxNum of numbers){
//     if (maxNum > maxNumber) maxNumber = maxNum
//   }

//   for(let minNum of numbers){
//     if (minNum < minNumber) minNumber = minNum
//   }
//   }

// // ----- OR -----

// // for (let i = 1 ; i < numbers.length ; i++){
// //   if(numbers[i] < minNumber) minNumber = numbers[i]
// //   if(numbers[i] > maxNumber) maxNumber = numbers[i]
// // }


// console.log(numbers)
// console.log(maxNumber)
// console.log(minNumber)

