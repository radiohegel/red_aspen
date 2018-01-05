<template>
	<div>
		<parallax :fixed="true">
			<header-banner></header-banner>
		</parallax>
		<section class="hero is-fullheight is-white">
			<div class="hero-body"></div>
		</section>
	</div>
</template>

<script>
	import HeaderBanner from '../components/HeaderBanner.vue'
	import Parallax from 'vue-parallaxy'

	export default {

	  name: 'HomePage',
	  components: { HeaderBanner, Parallax },
	  data () {
	    return {
	    }
	  }

	}

</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

</style>