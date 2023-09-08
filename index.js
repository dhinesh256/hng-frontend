const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();

document.getElementById("currentDay").innerHTML = weekday[date.getDay()]
document.getElementById("currentUTC").innerHTML = date.getUTCMilliseconds()