var mainBg                  =   "";
let population              =   "";
let update                  =   "";
let timezone                =   "";
var icon                    =   "";
var stats                   =   "";
let humidity                =   "";
let wind                    =   "";
let temperature             =   "";
let celsius                 =   "";
let aryHumid;
const dirImg                =   `./images/`;
const windIconDir           =   `<img src='${dirImg}wind.svg'>`;
const humidityIconDir       =   `<img src='${dirImg}humidity.svg'>`;
const mainEl                =   document.querySelector("main");
const top_pplEl             =   document.querySelector(".top .population span:last-child");
const top_updateEl          =   document.querySelector(".top .update span:last-child");
const top_timezoneEl        =   document.querySelector(".top .timezone span:last-child");
const today_icon            =   document.querySelector(".content .today .status span.icon");
const today_celc            =   document.querySelector(".content .today .integer span");
const today_status          =   document.querySelector(".content .today .status span.status");
const today_wind            =   document.querySelector(".content .today .status span.wind");
const today_humidty         =   document.querySelector(".content .today .status span.humidity");
const predictClass          =   document.querySelector(".predict");
const moreEl             =   document.querySelector(".more");
const morePlus              =   document.querySelector(".more .plus");
const inptEL    =   document.querySelector("input");
const rstEL     =   document.querySelector(".result");
inptEL.addEventListener("keyup", () => {
    if(inptEL.value.length >= 3){
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inptEL.value}&count=3`)
        .then((response) => response.json())
        .then((data, index) => {
            if(data.hasOwnProperty('results')){
                if(document.querySelectorAll(".divClass")){
                    delDivs(".result")
                }
                data.results.forEach(results => {
                    createDivs(results["admin1"], results["country"], results["latitude"], results["longitude"], results["population"], results["timezone"]);
                })
            }
        })
    }else{
        delDivs(".result")
    }
})
let tabIndex    =   3;
function createDivs(city, country,lat, long, ppl, timeZ){
    const crtEl   =   document.createElement("div");
    //crtEl.classList.add("divClass");
    crtEl.innerHTML =   city + ", " + country.toUpperCase();
    if(tabIndex > 5){
        tabIndex    =   3;
    }
    crtEl.tabIndex  =   tabIndex;
    tabIndex        +=  1;
    rstEL.appendChild(crtEl);
    crtEl.addEventListener("click", function (){
        inptEL.value    =   this.innerHTML;
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=relativehumidity_2m,temperature_2m,windspeed_10m,weathercode&current_weather=true`)
        .then((response) => response.json())
        .then((data, index) => {
            //fetching datas
            let weather =   data;
            console.log(weather);
            let currentWeather  =   data.current_weather;// current values
            let hourly          =   weather.hourly; // everyday in week hourly values
            let indxHumdy       =   hourly.time.indexOf(currentWeather.time);
            let currntHumidity  =   hourly.relativehumidity_2m[indxHumdy];
            population  =   ppl;
            timezone    =   timeZ;
            currentTime =   currentWeather.time;
            let dateObj =   new Date(currentTime);
            update      =   currentTime + " UTC";
            let crtDate     =   new Date(currentWeather.time);
            switchCase(currentWeather.weathercode, "daily", crtDate);
            temperature =   Math.round(currentWeather.temperature);
            humidity    =   humidityIconDir + " " + currntHumidity + " %";
            wind        =   windIconDir + " " + currentWeather.windspeed + " KM/h";
            aryTemp             =   hourly.temperature_2m; // 7/24 temperature
            aryHumid            =   hourly.relativehumidity_2m; // 7/24 humidity
            aryWind             =   hourly.windspeed_10m; // 7/24 wind
            aryWeatherCode      =   hourly.weathercode;
            delDivs(".predict");
            function switchCase(weatherCode, period, crrntDate){
                switch (Number(weatherCode)) {
                    case 0:
                        console.log(crrntDate)
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}sun.svg'>`;
                        }else{
                            stats   =   "Clear sky";
                            mainBg  =   `url(${dirImg}sunnyday.jpg)`;
                            if((crrntDate.getHours() >= 6) && (crrntDate.getHours() < 17)){
                                icon    =   `<img src='${dirImg}sun.svg'>`;
                            }else{
                                icon    =   `<img src='${dirImg}night-clear-sky.svg'>`;
                            }
                        }
                        break;
                    case 1:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}sun.svg'>`;
                        }else{
                            stats   =   "Mainly clear";
                            mainBg  =   `url(${dirImg}sunnyday.jpg)`;
                            if((crrntDate.getHours() >= 6) && (crrntDate.getHours() < 17)){
                                icon    =   `<img src='${dirImg}sun.svg'>`;
                            }else{
                                icon    =   `<img src='${dirImg}night-clear-sky.svg'>`;
                            }
                        }
                        break;
                    case 2:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}partly-cloudy.svg'>`;
                        }else{
                            stats   =   "partly cloudy";
                            icon    =   `<img src='${dirImg}partly-cloudy.svg'>`;
                            mainBg  =   `url(${dirImg}sunnyday.jpg)`;
                        }
                        break;
                    case 3:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}overcast.svg'>`;
                        }else{
                            stats   =   "Overcast";
                            icon    =   `<img src='${dirImg}overcast.svg'>`;
                            mainBg  =   `url(${dirImg}cloudyday.jpg)`;
                        }
                        break;
                    case 45:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}fog-foggy.svg'>`;
                        }else{
                            stats   =   "Fog";
                            icon    =   `<img src='${dirImg}fog-foggy.svg'>`;
                            mainBg  =   `url(${dirImg}A-foggy-Day-46337-pixahive.jpg)`;
                        }
                        break;
                    case 48:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}fog.svg'>`;
                        }else{
                            stats   =   "depositing rime fog";
                            icon    =   `<img src='${dirImg}fog.svg'>`;
                            mainBg  =   `url(${dirImg}cloudyday.jpg)`;
                        }
                        break;
                    case 51:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}drizzle.svg'>`;
                        }else{
                            stats   =   "Drizzle light";
                            icon    =   `<img src='${dirImg}drizzle.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 53:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}drizzle.svg'>`;
                        }else{
                            stats   =   "Drizzle moderate";
                            icon    =   `<img src='${dirImg}drizzle.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 55:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}drizzle.svg'>`;
                        }else{
                            stats   =   "Drizzle dense intensity";
                            icon    =   `<img src='${dirImg}drizzle.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 56:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}drizzle.svg'>`;
                        }else{
                            stats   =   "Freezing Drizzle Light";
                            icon    =   `<img src='${dirImg}drizzle.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 57:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}drizzle.svg'>`;
                        }else{
                            stats   =   "Freezing Drizzle dense intensity";
                            icon    =   `<img src='${dirImg}drizzle.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 61:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain.svg'>`;
                        }else{
                            stats   =   "Rain slight";
                            icon    =   `<img src='${dirImg}rain.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 63:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain.svg'>`;
                        }else{
                            stats   =   "Rain moderate";
                            icon    =   `<img src='${dirImg}rain.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 65:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain.svg'>`;
                        }else{
                            stats   =   "Rain heavy intensity";
                            icon    =   `<img src='${dirImg}rain.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 66:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}freezing-rain.svg'>`;
                        }else{
                            stats   =   "Freezing rain light";
                            icon    =   `<img src='${dirImg}freezing-rain.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 67:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}freezing-rain.svg'>`;
                        }else{
                            stats   =   "Freezing heavy intensity";
                            icon    =   `<img src='${dirImg}freezing-rain.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 71:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}snowFall-2.svg'>`;
                        }else{
                            stats   =   "Snow fall slight";
                            icon    =   `<img src='${dirImg}snowFall-2.svg'>`;
                            mainBg  =   `url(${dirImg}snowyday.jpg)`;
                        }
                        break;
                    case 73:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}snowFall-2.svg'>`;
                        }else{
                            stats   =   "Snow fall moderate";
                            icon    =   `<img src='${dirImg}snowFall-2.svg'>`;
                            mainBg  =   `url(${dirImg}snowyday.jpg)`;
                        }
                        break;
                    case 75:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}snowFall-2.svg'>`;
                        }else{
                            stats   =   "Snow fall heavy intensity";
                            icon    =   `<img src='${dirImg}snowFall-2.svg'>`;
                            mainBg  =   `url(${dirImg}snowyday.jpg)`;
                        }
                        break;
                    case 77:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}snowFall-2.svg'>`;
                        }else{
                            stats   =   "Snow grains";
                            icon    =   `<img src='${dirImg}snowFall-2.svg'>`;
                            mainBg  =   `url(${dirImg}snowyday.jpg)`;
                        }
                        break;
                    case 80:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain-shower.svg'>`;
                        }else{
                            stats   =   "Rain showers slight";
                            icon    =   `<img src='${dirImg}rain-shower.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 81:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain-shower.svg'>`;
                        }else{
                            stats   =   "Rain showers moderate";
                            icon    =   `<img src='${dirImg}rain-shower.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 82:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain-shower.svg'>`;
                        }else{
                            stats   =   "Rain showers violent";
                            icon    =   `<img src='${dirImg}rain-shower.svg'>`;
                            mainBg  =   `url(${dirImg}rainyday.jpg)`;
                        }
                        break;
                    case 85:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain-shower.svg'>`;
                        }else{
                            stats   =   "Snow showers slight";
                            icon    =   `<img src='${dirImg}rain-shower.svg'>`;
                            mainBg  =   `url(${dirImg}snowyday.jpg)`;
                        }
                        break;
                    case 86:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}rain-shower.svg'>`;
                        }else{
                            stats   =   "Snow showers heavy";
                            icon    =   `<img src='${dirImg}rain-shower.svg'>`;
                            mainBg  =   `url(${dirImg}snowyday.jpg)`;
                        }
                        break;
                    case 95:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}thunderStorm.svg'>`;
                        }else{
                            stats   =   "Thunderstorm Slight or moderate";
                            icon    =   `<img src='${dirImg}thunderStorm.svg'>`;
                            mainBg  =   `url(${dirImg}thunderDay.jpg)`;
                        }
                        break;
                    case 96:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}thunderStorm.svg'>`;
                        }else{
                            stats   =   "Thunderstorm with slight";
                            icon    =   `<img src='${dirImg}thunderStorm.svg'>`;
                            mainBg  =   `url(${dirImg}thunderDay.jpg)`;
                        }
                        break;
                    case 99:
                        if(period == "hourly"){
                            
                            return `<img src='${dirImg}thunderStorm.svg'>`;
                        }else{
                            stats   =   "Thunderstorm with heavy hail";
                            icon    =   `<img src='${dirImg}thunderStorm.svg'>`;
                            mainBg  =   `url(${dirImg}thunderDay.jpg)`;
                        }
                        break;
                    default:
                        stats   =   "Clear sky";
                        mainBg  =   `url(${dirImg}sunnyday.jpg)`;
                        icon    =   `<img src='${dirImg}sun.svg'>`;
                        break;
                }
            }
            let total_temp_daily    =   0;
            let total_humi_daily    =   0;
            let total_wind_daily    =   0;
            let total_weatherCode   =   [];
            const range         =   24;
            let order           =   1;
            for (let index = 0; index < 120; index++) {
                total_temp_daily    +=   aryTemp[index];
                total_humi_daily    +=   aryHumid[index];
                total_wind_daily    +=   aryWind[index];
                total_weatherCode.push(aryWeatherCode[index]);
                if(index === (range * order) - 1){
                    let day = dateObj.getDay();
                    day= day==0 ? "Sun" : day == 1 ? "Mon" : day==2 ? "Tue" : day==3 ? "Wed" : day==4 ? "Thu" : day==5 ? "Fri" : day==6 ? "Sat" : "";
                    function getMostFrequent(prm) {
                        const hashmap = prm.reduce( (acc, val) => {
                            acc[val] = (acc[val] || 0 ) + 1
                            return acc
                        },{})
                        return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
                    }
                    let dailyWeatherCode    =   getMostFrequent(total_weatherCode);
                    let weatherIcon         =   switchCase(dailyWeatherCode, "hourly");
                    let daily_values        =   [day, weatherIcon, Math.round(total_temp_daily/range), Math.round(total_humi_daily/range), Math.round(total_wind_daily/range)];
                    for (let i = 0; i < 5; i++) {
                        const divEl         =   document.createElement("div");
                        const spanEl        =   document.createElement("span");
                        if(i == 2){
                            spanEl.innerHTML    =   daily_values[i] + " °C";
                        }else if(i == 3){
                            spanEl.innerHTML    =   humidityIconDir + " " + daily_values[i];
                        }else if(i == 4){
                            spanEl.innerHTML    =   windIconDir + " " + daily_values[i];
                        }else{
                            spanEl.innerHTML    =   daily_values[i];
                        }
                        divEl.appendChild(spanEl);
                        predictClass.appendChild(divEl);
                        
                        
                    }
                    total_temp_daily    =   0;
                    total_humi_daily    =   0;
                    total_wind_daily    =   0;
                    total_weatherCode   =   [];
                    order    +=  1;
                    dateObj.setDate(dateObj.getDate()+1, dateObj.getMonth(), dateObj.getFullYear());
                }
            }
            updatePage();
        })
        delDivs(".result");
    })
}

function updatePage(){
    top_pplEl.innerHTML         =   population;
    top_updateEl.innerHTML      =   update;
    top_timezoneEl.innerHTML    =   timezone;
    today_celc.innerHTML        =   temperature;
    today_icon.innerHTML        =   icon;
    today_status.innerHTML      =   stats;
    today_wind.innerHTML        =   wind;
    today_humidty.innerHTML     =   humidity;
    mainEl.style.backgroundImage    =   mainBg;
}

function delDivs(prm){
    if(document.querySelectorAll(`${prm} div`)){
        document.querySelectorAll(`${prm} div`).forEach(element => {
            element.remove();
        });
    }
}

window.addEventListener('click', ({ target }) => {
  const popup = target.closest('.search .result');
  if(!popup){
    delDivs(".result"); 
  }  
});


window.addEventListener("resize", () => {
    if(screen.width <= 750){
        predictClass.classList.add("dspNone");
     }else{
         predictClass.classList.remove("dspNone");
     }
})

if(screen.width <= 750){
    predictClass.classList.add("dspNone");
}

morePlus.addEventListener("click", () => {
    predictClass.classList.toggle("dspNone");
    predictClass.classList.toggle("dspFlex");
    
})