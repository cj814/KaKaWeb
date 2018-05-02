<template>
  <div class="active-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
        <img :src="slide.src" class="wid-100 hei-100">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul>
      <li>我要购买</li>
      <li>我要出售</li>
      <li>卡卡管家</li>
      <li>任务中心预约领取（包含电影票、加油、充话费流量）</li>
      <li>流量交易（后改理财）</li>
      <li>中石化油卡充值</li>
      <li>招商</li>
      <li>线报前线</li>
      <li class="clear"></li>
    </ul>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [
        {src: require('../../assets/images/1.jpg')},
        {src: require('../../assets/images/1.jpg')},
        {src: require('../../assets/images/1.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
.swiper-container{
  height: 160px;
}
.active-container{
  padding-bottom: 70px;
}
ul li:not(:last-child){
  width: 50%;
  height: 80px;
  float: left;
  border: solid 1px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul li:active{
  background-color: #eee;
}
</style>