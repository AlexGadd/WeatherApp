//Variables
let temp = 15
let humidity = 30
var jsonData = fetch('data.json')
var jsonAPI = fetch("API.json")
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