const API_KEY="56893d8f167163b0c753d8893218d24c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const weather = document.getElementById("weatherImg");
            const city = document.getElementById("weatherNum");
            const iiii = document.getElementById("iii");

            city.innerText = data.name;

            if(data.weather[0].main == "Clear"){
                weather.innerText =`${data.main.temp}`;
                iiii.src = "img/clear.png";
                iiii.width = "30";
                iiii.height = "30";
            }

            if(data.weather[0].main == "Clear"){
                weather.innerText =`${data.main.temp}`;
                iiii.src = "img/clear.png";
                iiii.width = "30";
                iiii.height = "30";
            }

            if(data.weather[0].main == "Rain"){
                weather.innerText =`${data.main.temp}`;
                iiii.src = "img/rain.png";
                iiii.width = "30";
                iiii.height = "30";
            }

            if(data.weather[0].main == "Snow"){
                weather.innerText =`${data.main.temp}`;
                iiii.src = "img/snow.png";
                iiii.width = "30";
                iiii.height = "30";
            }
             if(data.weather[0].main == "Extreme"){
                weather.innerText =`${data.main.temp}`;
                iiii.src = "img/extreme.png";
                iiii.width = "30";
                iiii.height = "30";
            }


            else {
                weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
            }
    });
}
function onGeoError(){
    alert("Can't find you. No wather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);