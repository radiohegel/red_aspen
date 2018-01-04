<template>
	<div>
		<header-banner></header-banner>
	</div>
</template>

<script>
	import HeaderBanner from '../components/HeaderBanner.vue'

	export default {

	  name: 'HomePage',
	  components: { HeaderBanner },
	  data () {
	    return {
	    }
	  }

	}

</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

</style>