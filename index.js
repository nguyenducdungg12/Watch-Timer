var btnStart = document.querySelector('.container__menu__start');
var btnStop = document.querySelector('.container__menu__stop');
var btnReset = document.querySelector('.container__menu__reset');
var timeHour = document.querySelector('.container__time__hour');
var timeMinute = document.querySelector('.container__time__minute');
var timeSecond = document.querySelector('.container__time__second');
var timeMilisecond = document.querySelector('.container__time__milisecond');


var currentTimer = 0;
var hour=0,minute=0,second=0;
var setTimer;

function onStart(){
    //var hour=0,minute=0,second=0;
   setTimer = setInterval(() => {
        currentTimer++;
        if (currentTimer<=9){

            timeMilisecond.innerText=`0${currentTimer}`;
        }
        else{
            timeMilisecond.innerText=currentTimer;
            if(currentTimer>98){
                currentTimer=0;
                second++;
            }
        }
        if (second<=9){
            timeSecond.innerText='0'+second;
        }
        else{
            timeSecond.innerText=second;
            if(second>59){
                second=0;
                minute++;
            }
        }
        if (minute<=9){
            timeMinute.innerText='0'+minute;
        }
        else{
            timeMinute.innerText=minute;
            if(minute>59){
                minute=0;
                hour++;
            }
        }
        if (hour<=9){
            timeHour.innerText='0'+hour;
        }
        else{
            timeHour.innerText=hour;
        }
    }, 0);
}
function onStop(){
    clearInterval(setTimer);
}
function onReset(){
    clearInterval(setTimer);
    timeMilisecond.innerText=`00`;
    timeSecond.innerText='00';
    timeMinute.innerText='00';
    timeHour.innerText='00';

   hour=0,
   minute=0,
   second=0;
}
btnStart.addEventListener('click',onStart);
btnStop.addEventListener('click',onStop);
btnReset.addEventListener('click',onReset);