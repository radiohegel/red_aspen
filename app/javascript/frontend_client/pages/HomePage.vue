<template>
	<div>
		<parallax :fixed="true">
			<header-banner></header-banner>
		</parallax>
		<about-section></about-section>	
		<section class="hero is-fullheight is-white">
			<div class="hero-body">	
			</div>
		</section>
	</div>
</template>

<script>
	import HeaderBanner from '../components/HeaderBanner.vue'
	import AboutSection from '../components/AboutSection.vue'
	import Parallax from 'vue-parallaxy'

	export default {

	  name: 'HomePage',
	  components: { HeaderBanner, Parallax, AboutSection },
	  data () {
	    return {
	    }
	  }

	}

</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

</style>