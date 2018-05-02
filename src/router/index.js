import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout'
import Footer from '../components/footer'
import ActiveBazaar from '../views/active-bazaar/index'
import AllActivities from '../views/active-bazaar/all-activities'
import DealManagement from '../views/deal-management/index'
import Personal from '../views/personal/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/active-bazaar/index',
      children: [
        {
          path: '/active-bazaar/index', // 活动集市
          name: 'ActiveBazaar',
          component: ActiveBazaar
        },
        {
          path: '/deal-management/index', // 交易管理
          name: 'DealManagement',
          component: DealManagement
        },
        {
          path: '/personal/index', // 个人中心
          name: 'Personal',
          component: Personal
        }
      ]
    },
    {
      path: '/active-bazaar/all-activities', // 全部活动
      name: 'AllActivities',
      component: AllActivities
    }
  ]
})
