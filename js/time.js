/*var info={
    "title": {
        "media": {
        "url": "//www.flickr.com/photos/tm_10001/2310475988/",
        "caption": "Whitney Houston performing on her My Love is Your Love Tour in Hamburg.",
        "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
        },
        "text": {
        "headline": "Whitney Houston<br/> 1963 - 2012",
        "text": "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
        }
    },
    "events": [
    {
        "media": {
        "url": "{{ static_url }}/img/examples/houston/family.jpg",
        "caption": "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
        "credit": "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
        },
        "start_date": {
        "month": "8",
        "day": "9",
        "year": "1963"
        },
        "text": {
        "headline": "A Musical Heritage",
        //"text": "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
        }
    }
    ]
}*/

var vm=new Vue({
    el: '#app',
    mounted: function(){
        this.loadData();
    },
    data:{
        timelineData:''
    },
    methods: {
        loadData: function(){
            let me=this;
            axios.get('https://neusoftware.top/history/info',{
                params:{
                    headline:me.getHeadline(), 
                }
            })
            .then(function (response){
                me.timelineData=response.data;
                window.timeline = new TL.Timeline('timeline-embed', response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getHeadline:function GetRequest() {
            var url = window.location.search; //获取url中"?"符后的字串
            if (url.indexOf("?") != -1) {    //判断是否有参数
               var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
               strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
               return strs[1];          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
            }
        }
    }
})
//var timeline_json = info; // replace make_the_json() with the JSON object you created
// two arguments: the id of the Timeline container (no '#')
// and the JSON object or an instance of TL.TimelineConfig created from
// a suitable JSON object
//window.timeline = new TL.Timeline('timeline-embed', timeline_json);
/*function loadBasic() //获取基本天气信息
{        
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        var str=xmlhttp.responseText;
        var obj=JSON.parse(str);
        window.timeline = new TL.Timeline('timeline-embed', obj);
        }
    }
    xmlhttp.open("GET","http://localhost:8080/info?headline=Windows",true);
    xmlhttp.send();
}*/