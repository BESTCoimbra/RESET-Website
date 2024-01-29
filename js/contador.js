var deadline = new Date("Feb 20, 2024 23:59:59").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;

    var totalHours = Math.floor(t / (1000 * 60 * 60));

    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    var minutesFormatted = String(minutes).padStart(2, '0');
    var secondsFormatted = String(seconds).padStart(2, '0');

    if(totalHours < 0){
        document.querySelector(".demo-hours-p").innerHTML = "00";
        document.querySelector(".demo-minutes-p").innerHTML = "00";
        document.querySelector(".demo-seconds-p").innerHTML = "00";
    }
    else {
        document.querySelector(".demo-hours-p").innerHTML = totalHours;
        document.querySelector(".demo-minutes-p").innerHTML = minutesFormatted;
        document.querySelector(".demo-seconds-p").innerHTML = secondsFormatted;
    }

    if (t < 0) {
        clearInterval(x);
        document.querySelector(".contador").innerHTML = "EXPIRED";
    }
}, 1000);
