<template>
    <div class="test">
        <!-- 嵌套路由 -->
        <!-- 在to后面写路由路径的时候，一定到带上绝对路径，也就是要把test这个父路由路径写进去"/test/title1" -->
        <router-link to="/test/title1">标题1</router-link>
        <router-link to="/test/title2">标题2</router-link>
        <router-view></router-view>

        <!-- 编程式路由 -->
        <div @click="gotoGoods">跳转到商品界面</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'hello'
        }
    },
    methods: {
        gotoGoods(){
            // this.$router.push('/goods');

            // this.$router.push({
            //     path:'/goods?goodsId=666'
            // });

            this.$router.push({
                path: '/goods',
                query:{
                    goodsId:666,
                    goodsName:"abc"
                }
            });
        }
    }
}
</script>

<style scoped></style>


