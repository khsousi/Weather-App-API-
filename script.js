
// let age = 21;

// let message = age >= 18 ? "U can Enter The Site" : "U can't" ;

// console.log(message)

// let isStudent = false ;
// let message = isStudent ? "U are a student" : "U are NOT a student"
// console.log(message)

// let day = 3;
// switch(day){
//   case 1 :
//     console.log("Monday")
//     break
//   case 2 : 
//     console.log("tuseday")
//     break
//   case 3 :
//     console.log("wednsday")
//     break
//   case 4 : 
//     console.log("thirsday")
//     break
//   case 5 :
//     console.log("friday")
//     break
//   case 6 : 
//     console.log("saturday")
//     break
//   case 7 : 
//     console.log("sunday")
//   default :
//     console.log(`${day} Is Not A day`)
// }


////////// srting Methods ///////////////////

// let userName = "Khaled"
// console.log(userName.charAt(0)) // return the char of the index
// console.log(userName.indexOf("e"))  // return the index of the char
// console.log(userName.length) // the Length of the string
// userName.trim() // remove the weiht space
// userName.toUpperCase() // make it upper case
// userName.toLowerCase() // make it lower case

// userName.startsWith("K")  // return Boolen True Or False 
// userName.endsWith("K")  // return Boolen True Or False 
// userName.includes("K")  // return Boolen True Or False 
// userName.replaceAll("-" , "*") // replace all the - with * 

// const fullName = "Khaled Sousi"

// let firstName = fullName.slice(0 , 6)  //slice(start , end)
// console.log(firstName)

// let lastname = fullName.slice(7 , )
// console.log(lastname)


// CALLBACK FUNCTION 
// its a function bassed as an argument to another function 


// let nums = [1, 2, 3, 4, 5]

// // array.forEach() ====> ele , index ,array
// nums.forEach(displayFunc)

// function displayFunc(ele){
//   console.log(ele)
// }

// let display = nums.forEach((e)=> console.log(e))
// let double = nums.forEach((ele)=> console.log(ele * 2))

// let tribleFunc = function(ele){
//   console.log(ele * 3)
// }

// let trible = nums.forEach(tribleFunc)

// console.log(nums)


// OBJECTS 

// const person1 = {
//   firstName : "spongebob",
//   lastname : "squarepants",
//   age : 30 ,
//   isEmployed : true ,
//   sayHello : function(){console.log(`Hi I'am ${this.firstName}`)} 
// }


// console.log(person1)
// console.log(person1.firstName)
// console.log(person1.lastname)
// console.log(person1["age"])
// console.log(person1["isEmployed"])
// person1.sayHello()



// CLASS 

// class Product {
//   constructor(name , price , isAvaliable){
//     this.name = name
//     this.price = price
//     this.isAvaliable = isAvaliable
//   }
//   displayProduct(){
//     console.log(`The Product Is ${this.name}`)
//     console.log(`Its $${this.price}`)
//     console.log(`Its ${this.isAvaliable ? "Avaliable" : "Not Avaliable"}`)
//   }
// }


// const product1 = new Product("shirt" , 19.9 , true)
// const product2 = new Product("pants" , 22.5 , false)
// product1.displayProduct()
// product2.displayProduct()


// function outer (){

//   let message = "hello"

//   function inner(){
//     console.log(message)
//   }
//   inner()
// }

// SET TIMEOUT 
// const startButton = document.getElementById("startButton")
// const stopButton = document.getElementById("stopButton")

// let variable;
// function timeOut (){
//   variable = setTimeout(()=> alert("Hello") , 3000)
// }
// function clear (){
//   variable = clearTimeout(variable)
// }

// startButton.addEventListener("click" , timeOut)
// stopButton.addEventListener("click" , clear)


// console.time("label")

// // for loop EX

// console.timeEnd("label")


// const newH1 = document.createElement("h1")
// newH1.textContent = "I like Pizza !"
// newH1.style.color = "tomato"
// newH1.style.textAlign = "center"

// // document.body.appendChild(newH1)
// // document.body.prepend(newH1)
// // document.querySelector("#box1").appendChild(newH1)
// // document.getElementById("box1").prepend(newH1)


// document.body.insertBefore(newH1 , document.querySelector("#box3"))

// document.body.removeChild(newH1)



// CALLBACKS 

// function walkDog(callback){
//   setTimeout(() => {
//     console.log("U Walked The Dog")
//     callback()
//   }, 1500);
// }

// function cleanKitchen(callback){
//   setTimeout(() => {
//     console.log("U Cleaned the Kitchen")
//     callback()

//   }, 2500);
// }

// function takeOutTrash(callback){
//   setTimeout(() => {
//     console.log("U Take Out The Trash")
//     callback()

//   }, 500);
// }

// walkDog()
// cleanKitchen()
// takeOutTrash()


// // THIS IS CALLBACK HELL !!!!!! 
// walkDog(()=>{
//   cleanKitchen(()=> {
//     takeOutTrash(()=> console.log("U Are Done!"))
//   })
// })



// //PROMISE
// // Promises :  we wrap the setTimeOut code in a new Promise


// function walkDog(){

//   return new Promise((resolve , reject)=> {
//     setTimeout(() => {
//       resolve("U Walked The Dog")
//       }, 1500);

//   })
// }

// function cleanKitchen(){
//   return new Promise((resolve , reject)=> {
//     setTimeout(() => {
//       resolve("U Cleaned the Kitchen")
//       }, 2500);
//   })
// }

// function takeOutTrash(){

//   return new Promise((resolve , reject)=>{
//     setTimeout(() => {
//       resolve("U Take Out The Trach")
//     }, 500);
//   })
// }


// // walkDog().then(val => console.log(val))
// // .then(()=> cleanKitchen()
// // .then(val => console.log(val)))
// // .then(()=> takeOutTrash().then(val => console.log(val)))

// walkDog().then(val => {
//   console.log(val);
//   return cleanKitchen()
// }).then(val => {
//   console.log(val);
//   return takeOutTrash()
// }).then(val => {
//   console.log(val)
//   return console.log("U Are Done!")
// })


// fetch("URL" , {method : "GET"})


// // This How To Get API with fetch()
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if (!response.ok){
//       throw new Error("It's Not Ok")
//     }
//     else return response.json()
//   })
//   .then(data => console.log(data.name))
//   .catch(error => console.error(error))


  // This How To Get The Same API with async/await 


// async function fetchData() {
//   try {
//     const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     if (!response.ok){
//       throw new Error("Couldn't Fetch Data")
//     }
//     const data = await response.json()
//     const pokemonImage = data.sprites.front_default;
//     const imgElement = document.getElementById("pokemonImage")
    
//     imgElement.src = pokemonImage
//     imgElement.style.display = "block"
//   } catch (error) {
//     console.error(error)
//   }
// }

// fetchData()


// Weather App 

const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "b0a22dfd938dded1a5fbe5def4591f42"


weatherForm.addEventListener("submit" , async event => {
  event.preventDefault()
  const city = cityInput.value

  if (city) {
    try {
      const weatherData = await getWeatherData(city)
      displayWeatherInfo(weatherData)
    } catch (error) {
      console.log(error)
      displayError(error)
    }
    
  }else {
    displayError("Please Enter A City")
  }
})

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  const response = await fetch(apiUrl)

  if (!response.ok) {
    throw new Error("Could Not Fetch Data");
  }
  return await response.json()
}

function displayWeatherInfo(data) {
  
  const { name: city ,
          main: {temp , humidity},
          weather: [{description , id}]} = data 

  card.textContent = ""
  card.style.display  = "flex"

  const cityDisplay = document.createElement("h1")
  const tempDisplay = document.createElement("p")
  const humidityDisplay = document.createElement("p")
  const descDisplay = document.createElement("p")
  const weatherEmoji = document.createElement("p")


  
  cityDisplay.textContent = city
  tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`
  humidityDisplay.textContent = `Humidity : ${humidity} %`
  descDisplay.textContent = description
  weatherEmoji.textContent = getWeatherEmoji(id)


  cityDisplay.classList.add("cityDisplay")
  tempDisplay.classList.add("tempDisplay")
  humidityDisplay.classList.add("humidityDisplay")
  descDisplay.classList.add("descDisplay")
  weatherEmoji.classList.add("weatherEmoji")

  
  card.appendChild(cityDisplay)
  card.appendChild(tempDisplay)
  card.appendChild(humidityDisplay)
  card.appendChild(descDisplay)
  card.appendChild(weatherEmoji)

  cityInput.value = ""
} 

function getWeatherEmoji(weatherId) {
  
  switch (true) {
    case (weatherId >= 200 && weatherId < 300):
      return "⛈"
      case (weatherId >= 300 && weatherId < 400):
      return "🌧"
      case (weatherId >= 500 && weatherId < 600):
      return "🌧"
      case (weatherId >= 600 && weatherId < 700):
      return "❄"
      case (weatherId >= 700 && weatherId < 800):
      return "🎿"
      case (weatherId === 800):
      return "☀"
      case (weatherId >= 801 && weatherId < 810):
      return "☁"
    default:
      return "❓"
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p")
  errorDisplay.textContent = message
  errorDisplay.classList.add("errorDisplay")

  card.textContent = ""
  card.style.display = "flex"
  card.appendChild(errorDisplay)
}

