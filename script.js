// Weather App

const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "b0a22dfd938dded1a5fbe5def4591f42"
// Geolocation elements
const geoBtn = document.querySelector(".geoBtn")
const statusMessage = document.querySelector(".statusMessage")
const loadingSpinner = document.querySelector(".loadingSpinner")

// Event listener for geolocation button
geoBtn.addEventListener("click", getLocationWeather)

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

// ===== GEOLOCATION FUNCTIONS =====

function getLocationWeather() {
  const statusMessage = document.querySelector(".statusMessage")
  const loadingSpinner = document.querySelector(".loadingSpinner")
  
  statusMessage.textContent = "Getting your location..."
  loadingSpinner.style.display = "block"
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        fetchWeatherByCoords(latitude, longitude)
      },
      (error) => {
        handleGeoError(error)
      }
    )
  } else {
    statusMessage.textContent = "Geolocation not supported"
    statusMessage.classList.add("error")
    loadingSpinner.style.display = "none"
  }
}

async function fetchWeatherByCoords(lat, lon) {
  const statusMessage = document.querySelector(".statusMessage")
  const loadingSpinner = document.querySelector(".loadingSpinner")
  
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error("Could Not Fetch Data")
    }
    
    const data = await response.json()
    displayWeatherInfo(data)
    statusMessage.textContent = "Location found!"
    statusMessage.classList.add("success")
  } catch (error) {
    displayError(error.message)
  } finally {
    loadingSpinner.style.display = "none"
  }
}

function handleGeoError(error) {
  const statusMessage = document.querySelector(".statusMessage")
  const loadingSpinner = document.querySelector(".loadingSpinner")
  
  loadingSpinner.style.display = "none"
  
  switch(error.code) {
    case error.PERMISSION_DENIED:
      statusMessage.textContent = "Permission denied. Please enable location."
      break
    case error.POSITION_UNAVAILABLE:
      statusMessage.textContent = "Location unavailable"
      break
    case error.TIMEOUT:
      statusMessage.textContent = "Location request timed out"
      break
    default:
      statusMessage.textContent = "Error getting location"
  }
  
  statusMessage.classList.add("error")
}

