<template>
  <div>
    <ul>
      <router-link 
        v-for="(item,index) in navData" 
        tag="li" 
        :key="index" 
        :to="{ name: item.linkName }" 
        :class="item.isActive ? 'active' : ''"
      >{{item.navName}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      navData: [
        {
          navName: '活动集市',
          linkName: 'ActiveBazaar',
          isActive: true
        },
        {
          navName: '交易管理',
          linkName: 'DealManagement',
          isActive: false
        },
        {
          navName: '会员中心',
          linkName: 'Personal',
          isActive: false
        }
      ]
    }
  },
  methods: {
    getActiveIndex () {
      this.navData.forEach((item, index) => {
        if(this.$route.name == item.linkName) this.activeIndex = index
      })
    }
  },
  mounted () {
      this.navData[this.activeIndex].isActive = false
      this.getActiveIndex()
      this.navData[this.activeIndex].isActive = true
  }
}
</script>

<style scoped>
  ul{
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-top: solid 1px #ccc;
  }
  ul li{
    height: 60px;
    line-height: 60px;
    float: left;
    flex: 1;
    text-align: center;
  }
  .active{
    color: red;
  }
</style>
