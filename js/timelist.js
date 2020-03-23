var vm=new Vue({
    el: '#app',
    mounted: function(){
        this.loadData();
    },
    data:{
        list:[]
    },
    methods: {
        loadData: function(){
            let me=this;
            axios.get('https://neusoftware.top/history/title')
            .then(function (response){
                me.list=response.data;
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