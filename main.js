let city = document.querySelector(".city")
let key = "568cdc7ef751becccdc343731c940232"
let img = document.querySelector('.search img')
let imgtype = document.querySelector(".type img")
let degree = document.querySelector('.temp p span')


img.onclick = () => {
    city.innerHTML = document.querySelector("input").value || "london"

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city.innerHTML}&appid=${key}&units=metric `


    async function check() {
  
        const response= await fetch(api);
  if (response.status == 200){
    const weather = await response.json();
  
    if (weather.weather[0].main == "Clouds"){
       
        imgtype.src = "./images/cloudy.png"
        
    }
    else   if (weather.weather[0].main == "Clear"){
        imgtype.src = "./images/sunny.png"
       
    }
    else if (weather.weather[0].main == "Drizzle"){
        imgtype.src = "./images/drizzle.png"
    
        console.log(weather.weather[0].main );

    }
    else if (weather.weather[0].main == "Rain"){
        imgtype.src = "./images/rainy.png"
    }
    else if (weather.weather[0].main == "Snow"){
        imgtype.src = "./images/snowy.png"
    }
 


    else if (weather.weather[0].main == "Thunderstorm"){
        imgtype.src = "./images/stormy.png"
    }
    degree.innerHTML = weather.main.temp

  }
    
    else {
city.innerHTML = "the city not found"
    }


}
check()
}
img.onclick()


