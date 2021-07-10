setInterval(()=>{
    var d= new Date();
    var h = d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();

    var hourRotation= 30*h+min/2;
    var minuteRotation= 6*min;
    var secondRotation=6*sec;

    //---------------------------changing css from JS in two ways---------------------
    //1st
        // hour.style.transform=`rotate(${hourRotation}deg)`;
        // minute.style.transform=`rotate(${minuteRotation}deg)`;
        // second.style.transform=`rotate(${secondRotation}deg)`;

    //2nd    
    document.getElementById("hour").style.transform= "rotate("+hourRotation+"deg)";
    document.getElementById("minute").style.transform= "rotate("+minuteRotation+"deg)";
    document.getElementById("second").style.transform= "rotate("+secondRotation+"deg)";

},1000);