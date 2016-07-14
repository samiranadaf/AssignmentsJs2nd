function currentDay() {
  let date = new Date();
  let hours, days = ["Sunday", "Moandy", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let numDay = days[date.getDay()];
  console.log("Today is :" + ' ' + numDay);
  if (date.getHours() > 12) {
    hours = date.getHours() - 12;
  }
  else if (date.getHours() == 12) {
    hours = 12;
  }
  //console.log(date.getTime());
  console.log("Time is :" + ' ' + hours + ":" + date.getMinutes() + ":" + date.getSeconds());

}
currentDay();