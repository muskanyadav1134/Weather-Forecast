async function checkWeather(city) {
    const apiKey = `e5563641df121055c818607d34bb3a36`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        alert("City not found or API error");
        return;
    }
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
