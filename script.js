setInterval(function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = 'AM';
    if (hours >= 12) {
        period = 'PM';
        //console.log(period);
    }
    if (hours > 12) {
        hours = hours - 12;
        //console.log(hours);
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
        //console.log(seconds);
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
        //console.log(minutes);
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
    var clock = document.getElementById('clock');
    clock.innerHTML = clockTime;
}, 1000);