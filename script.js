

const apiKey = '188c1e4cbb2436b445b96ecb75d1d03d';
//const city = "Dhaka";
async function fetchWeatherData(city){
  try {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

  if (!response.ok){
    throw new Error ("Unable to fetch weather data")
  }  
  
  const data =await response.json();
  console.log(data);
  updateWeatherUI(data)
}
catch (error){
  console.error(error);
  alert("City not found!");

}
}

const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const windElement = document.querySelector(".wind-speed");
const humidityElement = document.querySelector(".humidity");
const visibilityElement = document.querySelector(".visibility_distance");
const descriptionText = document.querySelector(".description");
const date = document.querySelector(".date");







fetchWeatherData("Dhaka");


function updateWeatherUI(data){
  cityElement.textContent = data.name;
  temperature.textContent = `${Math.round( data.main.temp)}`;
  windElement.textContent = `${data.wind.speed} km/h`;
  humidityElement.textContent =` ${data.main.humidity}%`;
  visibilityElement.textContent =`${data.visibility/1000}km`;
 descriptionText.textContent = data.weather[0].description;
 
 const currentDate = new Date();

 date.textContent = currentDate.toDateString();




}

 const formElement =document.querySelector(".scarch-form");
const inputElement = document.querySelector(".city-input");
formElement.addEventListener("submit",function(e){
  e.preventDefault();
  const city = inputElement.value;
  if(city!==""){
    fetchWeatherData(city);
    inputElement.value ="";
  }
}) 