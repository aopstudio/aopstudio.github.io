
document.getElementById("day").onclick=function(){
    document.getElementById("particles-js").style.backgroundColor = 'rgb(88, 228, 221)';
    document.getElementById("navbar").setAttribute("class","navbar navbar-default navbar-fixed-top");
}
document.getElementById("night").onclick=function(){
    document.getElementById("particles-js").style.backgroundColor = 'rgb(0, 0, 0)';
    document.getElementById("navbar").setAttribute("class","navbar navbar-inverse navbar-fixed-top");
}

