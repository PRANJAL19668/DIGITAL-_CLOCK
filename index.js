//returning all the ids element using document.getElementById()method.
const hourE1= document.getElementById('hour');
const minutesE1= document.getElementById("minutes");
const secondsE1= document.getElementById("seconds");
const ampmE1= document.getElementById("ampm");

function updateClock(){
    //using date constructor
    //.getHours() is the method we are using and all goes as same.
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm = "AM"; // set it initially
    if(h>12){
        h=h-12;
         ampm = "PM"; //set to PM
    }
    //applying 0 infront of hrs,minutes,seconds using ternary operator.
           h = h<10 ? "0" + h : h;
           m = m<10 ? "0" + m : m;
           s = s<10 ? "0" + s : s;

//using innerHTML method for changing text inside it.
    hourE1.innerHTML = h;
    minutesE1.innerHTML = m;
    secondsE1.innerHTML = s;
    ampm,(innerHTML= ampm);
    // using setTimeout() which will be be executed after timer epxires i.e., after 1  second.
}
setTimeout(()=>{
    updateClock();
},1000);
updateClock();// function call