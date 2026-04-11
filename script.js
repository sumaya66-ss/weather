

const apiKey = '188c1e4cbb2436b445b96ecb75d1d03d';
const city ="Dhaka";
async function fetchWeatherData(){
  
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
  
  const data =await response.json();
  console.log(data);
  updateWeatherUI
}




fetchWeatherData();


function updateWeatherUI(){

}
