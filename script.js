const timer = document.getElementById('stopwatch');

var h = 0;
var s = 0;
var m = 0;
var stoptime = true;

function startTimer(){
    if(stoptime == true){
        stoptime = false;
        timerCycle();
    }
}

function stopTimer(){
    if(stoptime == false){
        stoptime = true;
    }
}

function timerCycle(){
    if(stoptime == false){
        s = parseInt(s);
        m = parseInt(m);
        h = parseInt(h);

        s = s + 1;

        if(s == 60){
            m = m + 1;
            s = 0;
        }
        if(m == 60){
            h = h + 1;
            m = 0;
            s = 0;
        }
        if(s < 10){
            s = "0"+ s; 
        }
        if(m < 10){
        m = "0" + m;
        }
        if(h < 10){
        h = "0" + h;
        }
       timer.innerHTML = h + ":" + m + ":" + s;
       setTimeout("timerCycle()",1000);
    }
}
function resetTimer(){
    timer.innerHTML = "00:00:00"
    stoptime = true;
     h = 0;
     m = 0;
     s = 0;
}
