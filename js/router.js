var routes=[
    {
        path:'/',
        component:{
            template:`
                <div>
                    <h1>首页</h1>
                </div>
            `,
        },
    },
    {
        path:'/info',
        component:{
            template:`
                <div>
                    <h1>info</h1>
                </div>
            `,
        },
    },
];

var router=new VueRouter({
    routes:routes,
});

new Vue({
    el:'#ap',
    router:router,
});