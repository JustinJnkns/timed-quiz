var startBtn = document.getElementById('start');
var timerEl = document.getElementById('countdown');

//var questions = ;

//coutdown timer
function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function() {
        if (timeLeft >=1) {
            timerEl.textContent = timeLeft +' Seconds remaining ';
            timeLeft--;
        }
        else if ( timeLeft ===0){
            timerEl.textContent =' Test Finished ';
        }
        else{
            timerEl.textContent +'';
            clearInterval(timeInterval);
        }
    },1000);
}

var score = timeLeft;
var timeLeft = 5;

//start button
startBtn.onclick = countdown;