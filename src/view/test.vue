<template>
    <div class="test">
        this is id :{{$route.params.testId}}
        <!-- $route.params.testId 获取当前路由的参数 -->
        <br />
        this is name : {{$route.params.testName}}
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>


