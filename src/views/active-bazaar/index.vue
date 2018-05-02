<template>
  <div class="active-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
        <img :src="slide.src" class="wid-100 hei-100">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div>
      <ul class="active-nav">
        <li>日级活动</li>
        <li>周级活动</li>
        <li>月级活动</li>
        <li>攻略</li>
        <li class="clear"></li>
      </ul>
      <ul class="active-box">
        <router-link tag="li" :to="{name: 'AllActivities'}">全部活动</router-link>
        <li>咖啡美食资讯</li>
        <li>影视流量资讯</li>
        <li>理财资讯</li>
        <li>购物类资讯</li>
        <li>信用卡办理</li>
        <li>出行旅游资讯</li>
        <li>闹钟提醒</li>
        <li>最新爆料</li>
        <li class="clear"></li>
      </ul>
    </div>
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
.active-nav{
  border-top: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
}
.active-nav li:not(:last-child){
  width: 25%;
  height: 40px;
  line-height: 40px;
  float: left;
  text-align: center;
  border-right: solid 1px #ccc;
}
.active-nav li:active{
  background-color: #eee;
}
.active-box li:not(:last-child){
  width: 50%;
  height: 80px;
  border: solid 1px #ccc;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active-box li:first-child{
  height: 160px;
}
.active-box li:active{
  background-color: #eee;
}
</style>