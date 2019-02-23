
document.getElementById("day").onclick=function(){
    document.getElementById("navbar").setAttribute("class","navbar navbar-default navbar-fixed-top");
    document.getElementById("dayornight").setAttribute("href","css/day.css");
}
document.getElementById("night").onclick=function(){
    document.getElementById("navbar").setAttribute("class","navbar navbar-inverse navbar-fixed-top");
    document.getElementById("dayornight").setAttribute("href","css/night.css");
}

