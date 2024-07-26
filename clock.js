
let DAYS = document.querySelector("#DAYS");
let weeks = new Date();
DAYS.innerText = weeks.toDateString()

setInterval (()=>{
  const time = document.querySelector("#clock");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM"
  if(hours > 12){
    day_night = "PM"
    hours = hours -12;
  }
  if(minutes < 10){
    minutes ="0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }
  time.innerText = hours + " : " + minutes + " : " + seconds + " " + day_night
})


