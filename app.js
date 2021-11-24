 var hrpara=document.getElementById("hr")
 var minpara=document.getElementById("min")
 var secpara=document.getElementById("sec")
 var msecpara=document.getElementById("msec")

 var interval;

 var hr=0
 var min=0
 var sec=0
 var msec=0

 function timer(){
     msec++
     msecpara.innerHTML=msec
     if(msec==100){
         sec++
         secpara.innerHTML=sec
         msec=0
     }
    else if(sec==60){
        min++
        minpara.innerHTML=min
        sec=0
    }
    else if(min==60){
        hr++
        hrpara.innerHTML=hr
        min=0
        
    }
 }

function start(){
    var strtbtn=document.getElementById("strtbtn")
    interval=setInterval(timer, 10)
    strtbtn.disabled=true
} 

function pause(){
    var strtbtn=document.getElementById("strtbtn")
    clearInterval(interval)
    strtbtn.disabled=false
}

function reset(){
    clearInterval(interval)
    msecpara.innerHTML=0
    secpara.innerHTML=0
    minpara.innerHTML=0
    hrpara.innerHTML=0
    
    msec=0
    sec=0
    min=0
    hr=0


}
