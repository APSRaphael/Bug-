/*
 * @Author: Raphael 
 * @Date: 2017-06-12 12:18:29 
 * @Last Modified by: Raphael
 * @Last Modified time: 2017-06-13 23:57:47
 */

import Vue from 'vue' //相当于es5 var Vue = require('vue')
import VueRouter from 'vue-router'
// 导入基于Vue的第三方包
import MintUI from 'mint-ui'

// 使用基于Vue的第三方包
Vue.use(MintUI)
Vue.use(VueRouter)
// 统一导入css的地方
// 导入mint-ui
import 'mint-ui/lib/style.min.css'
// 导入mui
import '../statics/mui/css/mui.min.css'
import '../statics/mui/css/icons-extra.css'
import '../statics/css/site.css'


//导入Vue项目中要渲染的第一个页面的文件
//vue-loader会帮我们自动把那个当文件组件导出
import App from './App.vue'

//路由的设置
//导入组件
import home from './components/home/home.vue'
import message from './components/message/message.vue'
import shopcart from './components/shopcart/shopcart.vue'
import settings from './components/settings/settings.vue'

const router = new VueRouter({
    routes:[
        {path:'/home',components:home},
        {path:'/message',components:message},
        {path:'/shopcart',components:shopcart},
        {path:'/settings',components:settings}//这里应该是component，components是自己文件的路径
        // {path:'/home',component:home},这些才是对的
        // {path:'/message',component:message},
        // {path:'/shopcart',component:shopcart},
        // {path:'/settings',component:settings},
    ]
})

new Vue({
    el:'#app',
    router,
    render: function (createElement) {
        //这里的写法有很多，如果我们是直接导入单文件组件，就像下面这样写
        return createElement(App)
    }
})