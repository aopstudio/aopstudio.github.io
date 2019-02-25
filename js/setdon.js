window.onload=function(){
    var myDate=new Date();
    var hour=myDate.getHours();
    if(hour>=21 || hour<=7)
    {
        setNight();
    }
    else
    {
        setDay();
    }
}
