<template>
	<div>
		<parallax :fixed="true">
			<header-banner></header-banner>
		</parallax>
		<section class="section is-large">
			<div class="content">
				<p class="title is-3  has-text-left">
					Red Aspen Management is a real estate investment company based in Utah. A family company, founded in 2016, we purchase, restore, manage, and sell properties throughout Salt Lake and Davis counties. 
				</p>				
				<br>
				<br>
				<p class="title is-2  has-text-left has-text-primary">
					If you are looking to sell your home, you have come to the right place!
				</p>				
			</div>
		</section>
		<section class="hero is-fullheight is-white">
			<div class="hero-body">
				
			</div>
		</section>
	</div>
</template>

<script>
	import HeaderBanner from '../components/HeaderBanner.vue'
	import Parallax from 'vue-parallaxy'

	export default {

	  name: 'HomePage',
	  components: { HeaderBanner, Parallax},
	  data () {
	    return {
	    }
	  }

	}

</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

	.section
		background: white

</style>