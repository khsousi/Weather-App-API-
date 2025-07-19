// ***  Task 1 : Default Name ***



let userName = prompt("Enter Your Name : ") || "Guest";

alert("Hello " + userName )


// ***  Task 2 : Even or Odd ***

let userNumber = prompt("Enter A Number : ")

if(userNumber % 2 === 0) alert("Even number")
  else alert("Odd number")


// ***  Task 3 : Number Guessing Game ***

const secretNumber = 10 ;
const attemptsCount = 3;

for (let i = 0 ; i < attemptsCount ; i++){
  let userGuess = prompt("Guess A Number: ")

  if(Number(userGuess) > secretNumber){ 
    alert("Too high")
  }else if (Number(userGuess) < secretNumber){
    alert("Too low")
  }else {
    alert("Correct!")
    break;
  }
}

// ***  Task 4 : Login Check ***


const userName = prompt("Enter User Name : ")
const password = prompt("Enter Password")

if(userName === "admin" && password === "1234"){
  alert("welcome")

}else{
  alert("Access denied")
}



// ***  Task 5 : Quiz Game ***

let score = 0;
let firstQuestion = prompt("What's My First Name ? ")
if (firstQuestion === "khaled"){
  score = score + 1
}
let secondQuestion = prompt("What's My Last Name ? ")
if(secondQuestion === "sousi"){
  score += 1
}
let thirdQuestion = prompt("How Old Am I ? ")
if(thirdQuestion === "24"){
  score += 1
}
alert("Your Score Is " + score )  


// ***  Task 6 : Advanced Calculator ***

const firstNum = Number(prompt("Enter First Number : "))
const operator = prompt("Enter An Operator ")
const SecondNum = Number(prompt("Enter Second Number : "))
  let result ;

if(isNaN(firstNum) || isNaN(SecondNum)){
  alert("Enter A valid Number")
}else{
  switch(operator){
    case "+" :
      result = firstNum + SecondNum
      break;
    case "-" :
      result = firstNum - SecondNum
      break;
    case "*" :
      result = firstNum * SecondNum 
      break;
    case "/" :
      if(SecondNum === 0){
        result = "Can't Divide By Zero "
      }else{
        result = firstNum / SecondNum 
      }
      break;
    default :
      result = "Enter A Valid Operator"
  }
  alert(result)
}



// ***  Task 7 : FizzBuzz with a Twist ***

for (let i = 1; i <= 30 ; i++){
  if ( i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz")
  }else if (i % 3 === 0){
    console.log("Fizz")
  }else if (i % 5 === 0){
    console.log("Bizz")
  }
}


