<template>
  <swiper :options="swiperOptions" ref="indexSwiper">
    <swiper-slide 
      v-for="(item, index) of sliderData"
      :key="index"
    >
      <swiper-item
        :item="item"
      ></swiper-item>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import SwiperItem from './swiperItem.vue';


export default {
  name: 'MSwiper',
  components: {
    Swiper,
    SwiperSlide,
    SwiperItem
  },
  props: {
    sliderData: Array
  },
  data () {
    return {
      // swiper 配置
      swiperOptions: {
        // 小圆点配置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        loopedSildes: 1,
        autoplay: true
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
  }
</style>