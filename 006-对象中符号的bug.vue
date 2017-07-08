<template>
  <div class="tmpl">
      我是新闻列表
  </div>
</template>

<script>
    import common from '../common/common.js'

    export default {
        created(){
            this.getNewsListData()
        },//,不要忘记，有时候软件不会报错，但是打包运行就出问题。
        methods: {
            //es6中关于函数还有另外一种写法
            getNewsListData(){
                const url = common.apihost + "api/getnewslist"
            console.log('1111111111')
                //es6中的箭头函数，如果只有一个参数`()`可以省略

                this.$http.get(url).then(res => {
                    console.log(res.body)
                }, err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style>

</style>
