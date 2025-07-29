document.getElementById('city').addEventListener("change", async function () {
    const city = this.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4b457f8259dbf79ab7be46d805a3669&units=metric&lang=ru`);
    const weather = await response.json();
    const iconCode = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    console.log(weather)
    document.querySelector('.weather').innerHTML = `
            <div class="title">${city}</div>
            <div class="temp">${Math.round(weather.main.temp)}°</div>
            <hr>
            <img src="${iconUrl}" alt="" class="icon">
            <div class="block">
            <div class="desc">${weather.weather[0].description}</div>
            <div class="wind">${Math.round(weather.wind.speed)} м/с </div>
            </div>
        `;
})