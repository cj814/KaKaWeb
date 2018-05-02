<template>
  <div class="kaka-box">
      <router-view></router-view>
      <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '../components/footer'
export default {
    components: {
      FooterNav
	},
	data () {
		return {

        }
	},
	methods: {
		
	}
}
</script>
