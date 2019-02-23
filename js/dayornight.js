
function setDay(){
    document.getElementById("navbar").setAttribute("class","navbar navbar-default navbar-fixed-top");
    document.getElementById("dayornight").setAttribute("href","css/day.css");
};

function setNight(){
    document.getElementById("navbar").setAttribute("class","navbar navbar-inverse navbar-fixed-top");
    document.getElementById("dayornight").setAttribute("href","css/night.css");
};




window.onload=function(){
    var myDate=new Date();
    var hour=myDate.getHours();
    if(hour>21 || hours<7)
    {
        setNight();
    }
    else
    {
        setDay();
    }
}



