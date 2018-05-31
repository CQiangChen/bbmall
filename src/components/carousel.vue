<template>
    <div class="carousel">
        <swiper class="swiper_container" :options="swiperOption" ref="mySwiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>


            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                 <div class="swiper-button-next" slot="button-next"></div>
                 <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    name: "carousel",
    components: {
        swiper,
        swiperSlide
    },
    data(){
        return {
            //some swiper options/callbacks
            // 所有参数同swiper官方api参数
            swiperOption: {
                pagination: {  //分页器
                    el: ".swiper-pagination",
                    dynamicBullets: true
                },
                // autoplay: {    //自动切换
                //     delay: 2500,
                //     disableOnInteraction: false
                // }
            }
        };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper);
      this.swiper.slideTo(3, 1000, false);
    }
};
</script>

<style lang="less" scoped>
.carousel {
  .swiper_container {
    width: 100%;
    height: 180px;
    .swiper_item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
