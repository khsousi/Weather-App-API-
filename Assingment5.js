// ✅ Task 1: Welcome Multiple Users (30 pts)
// Write a function `welcomeUser(name)` that returns:
// "Welcome back, [name]!", e.g. "Welcome back, Fady!"
// Then use .forEach() to greet all users in the array below.

var users = ["Lana", "Ziad", "Amr"];

function welcomeUser(name) {
  console.log(`Welcome back, ${name}`) 
}
// ( welcomeUser("Khaled"))

users.forEach(function(user) {
  welcomeUser(user)
})



// ----------------------------------------------

// ✅ Task 2: Get Prices Over 100 (20 pts)
// Return prices greater than 100.

var prices = [120, 85, 300, 45, 220];

let newPrices = prices.filter(function(price) {
  if (price > 100) return price
})
console.log(newPrices)



// ----------------------------------------------


// ✅ Task 3: Capitalize City Names (20 pts)
// Expected output: ["Cairo", "Alexandria", "Giza"]

var cities = ["cairo", "alexandria", "giza"];

let CapitalizedCities = cities.map(function (city) {
  return city[0].toUpperCase() + city.substring(1)
})

console.log(CapitalizedCities)


// ----------------------------------------------


// ✅ Task 4: Custom Greeting with Callback (30 pts)
// Create a function `customGreet(name, formatter)` that calls formatter(name).
// Test it with the `excitedFormat` function below.

function excitedFormat(name) {
  return "HEY " + name.toUpperCase() + "!!!";
}

function customGreet(name , formatter) {
  return formatter(name)
}

let greeting = customGreet("khaled" , excitedFormat)
console.log(greeting)



// ----------------------------------------------


// ✅ Task 5: Find the First Long Word (20 pts)
// Return the first word longer than 6 characters.

var words = ["cat", "elephant", "bee", "crocodile"];

let longestWord = words.find(function (word) {
  if (word.length > 6) return word 
})

console.log(longestWord)


// ----------------------------------------------


// ✅ Task 6: Count How Many Are Odd (20 pts)
// Write a function `countOdd(numbers)` that returns how many values are odd.

function countOdd(numbers) {
  let oddNums = []
  numbers.filter(function (number) {
    if (number % 2 !== 0) {
      oddNums.push(number)
    }  
  })
  return oddNums.length
}

console.log(countOdd([1, 2, 3, 4, 5])); // should return 3


// ----------------------------------------------


// ✅ Task 7: Currying Sandwich Maker (40 pts)
// Create a function `makeSandwich(breadType)` that returns another function
// that takes a `filling` and returns:
// "Here's your [filling] sandwich on [breadType] bread!"


function makeSandwich(breadType) {
  return function filling(filling) {
    return `Here's your ${filling} sandwich on ${breadType} bread!`
  }  
}

console.log(makeSandwich("tortilla")("shawerma"))


// ----------------------------------------------


// ✅ Task 8: Filter and Format Products (40 pts)
// Use .filter() and .map() to return products under $1000 formatted as:
// "Phone: $900"

var products = [
  { name: "TV", price: 1200 },
  { name: "Phone", price: 900 },
  { name: "Mouse", price: 40 },
  { name: "Keyboard", price: 80 }
];

let filterdProducts = products.filter(function(product) {
  if (product.price < 1000) return product
}).map(function(product) {
  return `${product.name}: $${product.price}`  
})

console.log(filterdProducts)

// ----------------------------------------------


// ✅ Task 9: Manual Implementation of map() (40 pts)
// Write a function `myMap(array, callback)` that behaves like .map()

function myMap(array, callback) {
  const mapResult = []
  for (item of array){
    mapResult.push(callback(item))
  }
  return mapResult
}

console.log(myMap([1, 2, 3], function(x) {
  return x * 10;
})); // [10, 20, 30]



// ----------------------------------------------


// ✅ Task 10: Callback Counter (40 pts)
// Write a function `applyAndCount(array, callback)`
// It should run the callback for each item and count how many returned true.

function isUpper(str) {
  return str === str.toUpperCase();
}

function applyAndCount(array, callback) {
  // Your code here...
  let count = 0
  for (item of array){
    if (callback(item)) {
      count++
    }
  }
  return count
}

console.log(applyAndCount(["YES", "no", "OK", "maybe"], isUpper)); // should return 2



// ----------------------------------------------


// ✅ Task 11: Implement the `calc` function that supports currying: (50 pts)
// calc(3)(4)("+") => 7
// calc(3)(4)("*") => 12

function calc(firstNum) {
  return function(secondNum) {
    return function(operator) {
      if (operator === "+") return firstNum + secondNum
      if (operator === "-") return firstNum - secondNum
      if (operator === "*") return firstNum * secondNum
      if (operator === "/") return firstNum / secondNum 
    }
  }
}
console.log(calc(2)(3)("*")) //6 

console.log(calc(3)(4)("+")); // 7
console.log(calc(3)(4)("*")); // 12


// ----------------------------------------------


// ✅ Task 12: Using .toSorted() (30 pts)
// You are given an array of product prices.
// Use `.toSorted()` (not .sort()) to return a new array sorted in ascending order,
// WITHOUT modifying the original array.

var prices = [300, 120, 50, 700, 250];

const sortedArray = prices.toSorted(function(a , b) {
  return b - a
})
console.log(sortedArray)


// ----------------------------------------------


// ✅ Task 13: Closure Counter (Bonus 50 pts)
// Write a function `createCounter` that returns a function.
// Each time the inner function is called, it should increase and return a private count.

function createCounter() {
  let counter = 0
  return function () {
    counter++ ;
    return counter
  }
}

var counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

var counter2 = createCounter();
console.log(counter2()); // 1 (independent from counter1)



// ----------------------------------------------


// ✅ Task 14: Write Your Own `myFilter` (Bonus 40 pts)
// Create a function `myFilter(array, callback)` that behaves like `.filter()`
// It should return a new array with items for which `callback(item)` returns true.

function myFilter(array, callback) {
  let filterdArray = []
  for (const item of array) {
    if (callback(item)) {
      filterdArray.push(item)
    }
  }
  return filterdArray
}

// Example usage:
function isEven(n) {
  return n % 2 === 0;
}

console.log(myFilter([1, 2, 3, 4, 5], isEven)); // [2, 4]
console.log(myFilter([2,4,6,8,10,11], isEven)); // [2, 4, 6, 8, 10]



// ----------------------------------------------

// ✅ Task 15: Use `.reduce()` to Calculate Total (Bonus 30 pts)
// Given an array of purchase objects, use `.reduce()` to calculate the total amount spent.

var purchases = [
  { item: "Book", price: 120 },
  { item: "Pen", price: 10 },
  { item: "Laptop", price: 3500 },
  { item: "Mouse", price: 200 }
];

// Your code here...

// Expected result:
// 3830
