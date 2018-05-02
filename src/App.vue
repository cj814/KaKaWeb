<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation>
        <router-view/>
      </navigation>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'fade'
    }
  },
  created () {
    // bind event
    this.$navigation.on('forward', (to, from) => {
      console.log('forward to', to, 'from ', from)
      if(to.route.name == 'DealManagement' || to.route.name == 'ActiveBazaar' || to.route.name == 'Personal') {
        this.transitionName = 'fade'
      }else{
        this.transitionName = 'slide-left'
      }
      
    })
    this.$navigation.on('back', (to, from) => {
      console.log('back to', to, 'from ', from)
      if(to.route.name == 'DealManagement' || to.route.name == 'ActiveBazaar' || to.route.name == 'Personal') {
        // this.transitionName = 'fade'
        if(from.route.name != 'DealManagement' && from.route.name != 'ActiveBazaar' && from.route.name != 'Personal'){
          this.transitionName = 'slide-right'
        }else{
          this.transitionName = 'fade'
        }
      }else{
        this.transitionName = 'slide-right'
      }
      // this.transitionName = 'slide-right'
    })
    this.$navigation.on('replace', (to, from) => {
      console.log('replace to', to, 'from ', from)
    })
    this.$navigation.on('refresh', (to, from) => {
      console.log('refresh to', to, 'from ', from)
    })
    this.$navigation.on('reset', () => {
      console.log('reset')
    })
    // and use [once, off] methods
    this.$navigation.once('forward', () => {
      console.log('appear once')
    })
    const off = () => {
      console.log('will not appear')
    }
    this.$navigation.on('forward', off)
    this.$navigation.off('forward', off)
  }
} 
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/tool.css';

.kaka-box {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-right-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
