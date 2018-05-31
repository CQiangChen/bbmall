
<template>
  <div class="myHeader">
     <img class="logo" src="@/assets/logo.png" />
     <h3 class="title">Hxx-Luxury Store</h3>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  data(){
    return{
      msg:"Welcome to Your Vue.js App"
    };
  }
}
</script>

<style lang="less" scoped>
   .myHeader{
     display: flex;
     flex-direction: row; 
     align-items: center; //  上下居中
     background: rgba(0, 0, 0, 0.15);  //rgba(red, green, blue, alpha) alpha 透明度
      // 下面注释内容这些是半透明写法
      // filter:alpha(opacity=15);   这个你需要用于IE。
      // -moz-opacity: 0.15;   你需要这个支持老式的Mozilla浏览器版本，比如Netscape Navigator。
      // -khtml-opacity: 0.15;   这对于旧版本的Safari（1.x），当它使用的渲染引擎仍被称为KTHML时，与当前的WebKit相反
      //  opacity: 0.5;  这是“最重要的”，因为它是CSS中的当前标准，这将适用于大多数版本的Firefox，Safari和Opera   
      .logo {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        margin-left: 5px;
      }      
      .title {
        padding: 0;
        margin: 0;
        //若使用了reaset可以不用。 就是：样式初始化
        font-size: 16px;
        color: #fff;
      }
   }
    
</style>

