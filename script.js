var breakTime=0, sesionTime=0, dom=document.querySelector(':root');

function sesionPlus(){
	var sesionValue=document.getElementById("sesionValue");
	sesionTime++;
	sesionValue.innerHTML=sesionTime
}
function sesionMinus(){
	var sesionValue=document.getElementById("sesionValue");
	if (sesionTime===0) {
		sesionValue.innerHTML=sesionTime
	}else if (sesionTime>0) {
		sesionTime--;
		sesionValue.innerHTML=sesionTime;
	}
}
function breakPlus(){
	var breakValue=document.getElementById("breakValue");
	breakTime++;
	breakValue.innerHTML=breakTime;
}
function breakMinus(){
	var breakValue=document.getElementById("breakValue");
	if (breakTime===0) {
		breakValue.innerHTML=breakTime;
	}else if (breakTime>0) {
		breakTime--;
		breakValue.innerHTML=breakTime;
	}
	
}

function sesionTimer(duration, display){
	var  timer=duration,minutes, seconds;
	var rolling=setInterval(function (){
		minutes=parseInt(timer/60, 10);
		seconds=parseInt(timer%60, 10);
		
		minutes=minutes<10 ? "0" + minutes : minutes;
		seconds=seconds<10 ? "0" + seconds : seconds;

		display.innerHTML = minutes + ":" + seconds;
		console.log("in sesion");
		if (--timer<0) {
			clearInterval(rolling);
		}
	},1000);
}

function breakTimer(duration, display){
	var  timer=duration,minutes, seconds, display2=document.getElementById("timerTitle");
	display2.innerHTML="Break Time";
	dom.style.setProperty('--animTime', duration);
	var rolling=setInterval(function (){
		minutes=parseInt(timer/60, 10);
		seconds=parseInt(timer%60, 10);
		
		minutes=minutes<10 ? "0" + minutes : minutes;
		seconds=seconds<10 ? "0" + seconds : seconds;

		display.innerHTML = minutes + ":" + seconds;

		if (--timer<0) {
			clearInterval(rolling);
		}

	},1000);
	console.log("in break");
}

function setCounter(){
	var sesion=sesionTime*60, recess=breakTime*60,delay=sesion*1000;
	display=document.querySelector("#timer2");
	sesionTimer(sesion,display)
	setTimeout(breakTimer,delay,recess,display);
}

function reset(){
	breakTime=0;
	sesionTime=0;
	var breakValue=document.getElementById("breakValue"), sesionValue=document.getElementById("sesionValue"), display=document.querySelector("#timer2");;
	breakValue.innerHTML  = 0;
	sesionValue.innerHTML = 0;
	var killId=setTimeout(function(){
		for (var i = killId ; i > 0; i--) {clearInterval(i);
		}
		display.innerHTML =  "00:00";
		if (display.innerHTML== "00:00") {
			clearInterval(killId);
		}
	},1000);
	
}
