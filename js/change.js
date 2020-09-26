var nam = prompt("দয়াকরে আপনার নাম লিখুন");
var colour = prompt("আপনার পছন্দের রং এর নাম লিখুন");
document.querySelector(".name").innerHTML = nam;
document.querySelector(".info-nam").innerHTML = nam;
document.querySelector(".color").innerHTML = colour;
function times(){
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	var ms = time.getMilliseconds();
	var ss = "PM";
	if(h < 12){
		ss = " AM";
	}
	if(h == 0){
		h = 12;
	}
	if(h > 12){
		h = h - 12;
	}
	if(h < 10){
		h = "0"+h;
	}
	if(m < 10){
		m = "0"+m;
	}
	if(s < 10){
		s = "0"+s;
	}
	if(ms < 100){
		ms = "0"+ms;
	}

	document.querySelector(".hour").innerHTML = h;
	document.querySelector(".minute").innerHTML = m;
	document.querySelector(".second").innerHTML = s;
	document.querySelector(".mili-second").innerHTML = ms;
}
setInterval(times,90);

// var time = new Date();
// 	var hrs = time.getHours();
// 	var m = time.getMinutes();
// 	var sss = "PM";
// if(hrs >= "10" && sss == "PM"){
// 	document.querySelector(".status").innerHTML = "শুভ রাত্রি";
// }
// else if(hrs >= "4" && sss == "AM"){
// 	document.querySelector(".status").innerHTML = "সুভ সকাল";
// }
// else{
// 	document.querySelector(".status").innerHTML = "সময়ের ত্রুটি হয়েছে, দয়াকরে Author  এর সাথে যোগাযোগ করুন।";
// }