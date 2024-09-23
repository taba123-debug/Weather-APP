const API_Key= "104ed6846fcfaeb8edf121bcf6bb463e";
const API_url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");


async function check_weather(city) {
    const response =await fetch(API_url+city+`&appid=${API_Key}`);
    var data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
     document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
     console.log(data);
     if (data.weather[0].main=='Clouds') {
        weatherIcon.src="images/clouds.png"
     } 
     else if (data.weather[0].main=='rain')
    {
        weatherIcon.src="images/rain.png"

     }
     else if(data.weather[0].main=='mist')
     {
    weatherIcon.src="images/mist.png"
     }
     else if(data.weather[0].main=='humidity')
     {
    weatherIcon.src="images/humidity.png"
     }
     else if(data.weather[0].main=='Clear')
     {
    weatherIcon.src="images/clear.png"
     }
     else if(data.weather[0].main=='wind')
     {
    weatherIcon.src="images/wind.png"
     }
     else if(data.weather[0].main=='snow')
     {
    weatherIcon.src="images/snow.png"
     }
     else if(data.weather[0].main=='drizzle')
     {
    weatherIcon.src="images/drizzle.png"
     }
     document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click", ()=>{
    check_weather(searchBox.value);
})
