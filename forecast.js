//Variables
let temp = 15
let humidity = 30
let APIKey = "99f7d052e2e8aecfb002645be3fb922d"
let lattitude = -41.32538061503036
let longditute = 174.78823373485412
let inf = fetch("api.openweathermap.org/data/2.5/weather?lat=-41.32538061503036&lon=174.78823373485412&appid=99f7d052e2e8aecfb002645be3fb922d.json")

var json = fetch('data.json')
console.log(json)

//Toggle functions which sets the output to either be temp or humidity depending on what is already displayed
function toggle(){
    let type = document.getElementById("TempOrHumidity").className
    if (type == "temp"){
        document.getElementById("TempOrHumidity").innerHTML = humidity + "%";
        document.getElementById("TempOrHumidity").className = "humidity";
    }
    else if(type == "humidity"){
        document.getElementById("TempOrHumidity").innerHTML = temp + "&#176C";
        document.getElementById("TempOrHumidity").className = "temp";
    }

}

//Trying to get it to check the temperature stored and replace the HTML with the stored values
function checkTemp(){
    document.getElementById("TempOrHumidity").innerHTML = temp + "°C";
    document.getElementById("TempOrHumidity").className = "temp";
}
window.onload = checkTemp()