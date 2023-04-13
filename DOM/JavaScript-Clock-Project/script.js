function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    let meridian = "AM";
  
    if (hours > 12) {
      hours = hours - 12;
      meridian = "PM";
    }
  
    if (hours === 0) {
      hours = 12;
    }
  
    if (hours < 10) {
      hours = "0" + hours;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridian;
  }
  
  setInterval(clock, 1000);
  
  